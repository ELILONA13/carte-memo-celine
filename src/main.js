// src/main.js
import "./style.css";
import { vrpCards } from "./data/vrpCards.js";
import { btpCards } from "./data/btpCards.js";
import { referentielCards } from "./data/referentiel.js";
import { btpChecklist } from "./data/btpChecklist.js";
import { obligationsCards } from "./data/obligationsCards.js";
import { apprentiCard } from "./data/apprentiCard.js";
import { activitePartielleCard } from "./data/activitePartielleCard.js";
import { stagiaireGratificationCard } from "./data/stagiaireGratificationCard.js";
import { variablesPaieCard } from "./data/variablesPaieCard.js";

const app = document.querySelector("#app");

// =========================================================
// ✅ CHECKLIST — stockage “actifs” (selectedIds)
// =========================================================
function selectedKey(sectionId) {
  return `checklist:${sectionId}:selectedIds`;
}

function loadSelectedIds(sectionId) {
  try {
    const raw = localStorage.getItem(selectedKey(sectionId));
    if (!raw) return null;
    const arr = JSON.parse(raw);
    if (!Array.isArray(arr)) return null;
    return new Set(arr);
  } catch {
    return null;
  }
}

function saveSelectedIds(sectionId, selectedIdsSet) {
  localStorage.setItem(
    selectedKey(sectionId),
    JSON.stringify(Array.from(selectedIdsSet))
  );
}

// =========================================================
// RENDER helper : 1 seule manière d’afficher du HTML
// =========================================================
function setView(html) {
  app.innerHTML = html;
}

// =========================================================
// CHECKLIST — helpers (showIf + selectedIds)
// =========================================================
function shouldShow(node, selectedIds) {
  if (!node || !node.showIf) return true;
  const { any, all, not } = node.showIf;

  if (any && !any.some((id) => selectedIds.has(id))) return false;
  if (all && !all.every((id) => selectedIds.has(id))) return false;
  if (not && not.some((id) => selectedIds.has(id))) return false;

  return true;
}

function buildSelectedIds(saved, savedFollowups) {
  const selected = new Set();

  // niveau 1 (checkbox)
  Object.entries(saved || {}).forEach(([k, v]) => {
    if (v) selected.add(k);
  });

  // niveau 2/3 (followups radio/checkbox)
  Object.values(savedFollowups || {}).forEach((byFollowup) => {
    Object.values(byFollowup || {}).forEach((fuState) => {
      const val = fuState?.value;
      if (Array.isArray(val)) val.forEach((id) => selected.add(id));
      else if (typeof val === "string" && val) selected.add(val);
    });
  });

  return selected;
}

// =========================================================
// ✅ RÉCAP — libellés lisibles pour les champs saisis
// =========================================================
const FIELD_LABELS = {
  vm_taux: "Versement mobilité — Taux (%)",
  dfs_taux: "DFS — Taux (%)",
  apas_taux: "APAS — Taux (%)",
  cibtp_taux: "CIBTP (Congés) — Taux (%)",
  cic_taux: "Intempéries (CIC-BTP) — Taux (%)",
  oppbtp_taux: "OPPBTP — Taux (%)",
};

const FIELD_ORDER = [
  "vm_taux",
  "dfs_taux",
  "apas_taux",
  "cibtp_taux",
  "cic_taux",
  "oppbtp_taux",
];

// =========================================================
// ✅ CHECKLIST — RÉCAP (BODY) : contenu seul (PAS de wrapper .page)
// =========================================================
function renderChecklistRecapBody(section) {
  const saved = JSON.parse(
    localStorage.getItem(`checklist:${section.id}`) || "{}"
  );

  const followKey = `checklist:${section.id}:followups`;
  const savedFollowups = JSON.parse(localStorage.getItem(followKey) || "{}");

  const fieldsKey = `checklist:${section.id}:fields`;
  const savedFields = JSON.parse(localStorage.getItem(fieldsKey) || "{}");

  function has(id) {
    return !!saved[id];
  }

  function isSelected(id) {
    return Object.values(savedFollowups || {}).some((fu) =>
      Object.values(fu || {}).some((v) => v?.value === id)
    );
  }

  const effectif =
    isSelected("eff_lt_11")
      ? "Moins de 11 salariés"
      : isSelected("eff_11_19")
        ? "De 11 à 19 salariés"
        : isSelected("eff_20_49")
          ? "De 20 à 49 salariés"
          : isSelected("eff_ge_50")
            ? "50 salariés et plus"
            : "Non renseigné";

  const categorie =
    isSelected("cat_ouvrier")
      ? "Ouvrier"
      : isSelected("cat_etam")
        ? "ETAM"
        : isSelected("cat_cadre")
          ? "Cadre"
          : "Non renseignée";

  const convention =
    categorie === "Ouvrier"
      ? effectif === "Moins de 11 salariés"
        ? "Ouvriers bâtiment ≤ 10 salariés — IDCC 1596"
        : "Ouvriers bâtiment > 10 salariés — IDCC 1597"
      : categorie === "ETAM"
        ? "ETAM bâtiment — IDCC 2609"
        : categorie === "Cadre"
          ? "Cadres du bâtiment— IDCC 2420"
          : "Non renseignée";

  const cseAuto =
    effectif === "Moins de 11 salariés"
      ? "Non (seuil non atteint)"
      : effectif === "Non renseigné"
        ? "Non renseigné"
        : "Oui (si ≥ 11 salariés sur 12 mois consécutifs : organiser les élections)";

  function yesNoUnknown(parentId, yesId, noId) {
    if (!has(parentId)) return "Non renseigné";
    if (isSelected(yesId)) return "Oui";
    if (isSelected(noId)) return "Non";
    return "Non renseigné";
  }

  function tauxOrNR(fieldId) {
    const v = (savedFields[fieldId] || "").toString().trim();
    return v ? `${v} %` : "Non renseigné";
  }

  const rows = [
    {
      label: "Versement mobilité",
      applicable: yesNoUnknown("versement-mobilite", "vm-oui", "vm-non"),
      taux: tauxOrNR("vm_taux"),
    },
    {
      label: "DFS",
      applicable: yesNoUnknown("dfs", "dfs_oui", "dfs_non"),
      taux: tauxOrNR("dfs_taux"),
    },
    {
      label: "APAS",
      applicable: yesNoUnknown("apas-btp", "apas-oui", "apas-non"),
      taux: tauxOrNR("apas_taux"),
    },
    {
      label: "CIBTP — Congés payés",
      applicable: yesNoUnknown("cibtp", "cibtp-oui", "cibtp-non"),
      taux: tauxOrNR("cibtp_taux"),
    },
    {
      label: "Intempéries (CIC-BTP)",
      applicable: yesNoUnknown("cic-btp", "cic-oui", "cic-non"),
      taux: tauxOrNR("cic_taux"),
    },
    {
      label: "OPPBTP",
      applicable: yesNoUnknown("oppbtp", "oppbtp-oui", "oppbtp-non"),
      taux: tauxOrNR("oppbtp_taux"),
    },
  ];

  return `
    <section style="max-width:980px; margin:24px auto;">

      <h3 style="margin-bottom:12px;">Contexte</h3>
      <ul class="centered-list bullets">
        <li><b>Effectif</b> : ${effectif}</li>
        <li><b>Catégorie du salarié</b> : ${categorie}</li>
        <li><b>Convention collective</b> : ${convention}</li>
        <li><b>CSE</b> : ${cseAuto}</li>
      </ul>

      <h3 style="margin:24px 0 12px;">FS / Cotisations</h3>

      <table style="
        width:100%;
        border-collapse:collapse;
        font-size:0.95rem;
      ">
        <thead>
          <tr style="border-bottom:2px solid rgba(0,0,0,0.2);">
            <th style="text-align:left; padding:8px;">FS / Cotisation</th>
            <th style="text-align:left; padding:8px;">Applicable</th>
            <th style="text-align:left; padding:8px;">Taux</th>
          </tr>
        </thead>
        <tbody>
          ${rows
      .map(
        (r) => `
            <tr style="border-bottom:1px solid rgba(0,0,0,0.15);">
              <td style="padding:8px;">${r.label}</td>
              <td style="padding:8px;">${r.applicable}</td>
              <td style="padding:8px;">${r.taux}</td>
            </tr>
          `
      )
      .join("")}
        </tbody>
      </table>

    </section>
  `;
}

// =========================================================
// ✅ CHECKLIST — RÉCAP (PAGE) : wrapper .page + nav
// =========================================================
function renderChecklistRecapPage(section) {
  return `
    <div class="page">
      <h2>Récapitulatif — ${section.title}</h2>

      <p style="text-align:center;">
        <a href="#/btp/checklist">← Retour checklist</a>
        <span style="margin:0 10px;">•</span>
        <a href="#/btp">← Retour module</a>
        <span style="margin:0 10px;">•</span>
        <a href="#/">← Retour cartes</a>
      </p>

      ${renderChecklistRecapBody(section)}
    </div>
  `;
}

// =========================================================
// ✅ CHECKLIST — RÉCAPITULATIF FINAL multi-blocs
// =========================================================
function renderChecklistRecapFinal() {
  const blocksHtml = (btpChecklist || [])
    .map((section, idx) => {
      return `
        <div class="card" style="max-width:980px; margin:18px auto;">
          <div class="formula formula-reminder">
            <p class="formula-title">📦 Bloc ${idx + 1}</p>
            <p class="formula-content"><b>${section.title}</b></p>
          </div>

          ${renderChecklistRecapBody(section)}
        </div>
      `;
    })
    .join("");

  return `
    <div class="page">
      <h2>📄 Récapitulatif FINAL — Checklist BTP</h2>

      <p style="text-align:center;">
        <a href="#/btp/checklist">← Retour checklist</a>
        <span style="margin:0 10px;">•</span>
        <a href="#/btp">← Retour module</a>
        <span style="margin:0 10px;">•</span>
        <a href="#/">← Retour cartes</a>
      </p>

      ${blocksHtml ||
    `
          <div class="formula formula-warn" style="max-width:980px; margin:18px auto;">
            <p class="formula-title">Aucun bloc</p>
            <p class="formula-content">btpChecklist est vide.</p>
          </div>
        `
    }
    </div>
  `;
}

// =========================================================
// CHECKLIST (page + interactions)
// =========================================================
function renderChecklistPage(section) {
  const saved = JSON.parse(
    localStorage.getItem(`checklist:${section.id}`) || "{}"
  );
  const followKey = `checklist:${section.id}:followups`;
  const savedFollowups = JSON.parse(localStorage.getItem(followKey) || "{}");

  let selectedIds = buildSelectedIds(saved, savedFollowups);

  const storedSelected = loadSelectedIds(section.id);
  if (storedSelected && storedSelected.size) {
    selectedIds = storedSelected;
  } else {
    saveSelectedIds(section.id, selectedIds);
  }

  const itemsHtml = (section.items || [])
    .map((it) => {
      const checked = !!saved[it.id];

      const hasClassicDetails =
        it.explain || it.reminder || it.linkHash || it.linkUrl;

      const classicDetailsHtml = hasClassicDetails
        ? `
          <div class="check-details" data-details="${it.id}" style="display:${checked ? "block" : "none"
        };">
            ${it.explain ? `<div class="formula">${it.explain}</div>` : ""}

            ${it.reminder
          ? `<div class="formula formula-reminder">${it.reminder}</div>`
          : ""
        }

            ${it.linkUrl
          ? `<div class="check-link">
                    <a href="${it.linkUrl}" target="_blank" rel="noopener noreferrer">
                      👉 ${it.linkLabel || "Ouvrir"}
                    </a>
                  </div>`
          : it.linkHash
            ? `<div class="check-link">
                    <a href="${it.linkHash}">
                      👉 ${it.linkLabel || "Ouvrir"}
                    </a>
                  </div>`
            : ""
        }
          </div>
        `
        : `<div class="check-details" data-details="${it.id}" style="display:${checked ? "block" : "none"
        };"></div>`;

      let followupsHtml = "";
      if (it.followups && it.followups.length) {
        followupsHtml = it.followups
          .map((fu) => {
            const fuType = fu.type || "checkbox";
            const fuSaved =
              (savedFollowups[it.id] && savedFollowups[it.id][fu.id]) || {};

            const fuValue =
              fuType === "radio"
                ? fuSaved.value || ""
                : Array.isArray(fuSaved.value)
                  ? fuSaved.value
                  : [];

            if (fuType === "info") {
              const infoItems = (fu.items || [])
                .filter((opt) => shouldShow(opt, selectedIds))
                .map((opt) => {
                  return `
                    <div class="check-item" style="margin-left:18px;">
                      <div class="check-details" style="display:block; margin-left:0;">
                        <div class="formula formula-reminder">${opt.label}</div>

                        ${opt.reminder
                      ? `<div class="formula formula-reminder">${opt.reminder}</div>`
                      : ""
                    }

                        ${opt.linkUrl
                      ? `<div class="check-link">
                                <a href="${opt.linkUrl}" target="_blank" rel="noopener noreferrer">
                                  👉 ${opt.linkLabel || "Ouvrir"}
                                </a>
                              </div>`
                      : opt.linkHash
                        ? `<div class="check-link">
                                <a href="${opt.linkHash}">
                                  👉 ${opt.linkLabel || "Ouvrir"}
                                </a>
                              </div>`
                        : ""
                    }
                      </div>
                    </div>
                  `;
                })
                .join("");

              if (!infoItems) return "";

              return `
                <div class="check-item" data-followup-box="${it.id
                }" style="display:${checked ? "block" : "none"}; margin-left:12px;">
                  <div class="formula formula-example">
                    <p class="formula-title">${fu.title || "Information"}</p>
                    ${fu.intro ? `<p class="formula-content">${fu.intro}</p>` : ""}
                  </div>
                  ${infoItems}
                </div>
              `;
            }

            const inputType = fuType === "radio" ? "radio" : "checkbox";
            const nameAttr =
              fuType === "radio"
                ? `name="fu:${section.id}:${it.id}:${fu.id}"`
                : "";

            const fuItemsHtml = (fu.items || [])
              .filter((opt) => shouldShow(opt, selectedIds))
              .map((opt) => {
                const optChecked =
                  fuType === "radio"
                    ? fuValue === opt.id
                    : Array.isArray(fuValue) && fuValue.includes(opt.id);

                const resultHtml = optChecked
                  ? `
                    <div class="check-details" style="display:block; margin-left:18px;">
                      ${opt.explain ? `<div class="formula">${opt.explain}</div>` : ""}
                      ${opt.reminder
                    ? `<div class="formula formula-reminder">${opt.reminder}</div>`
                    : ""
                  }
                      ${opt.linkUrl
                    ? `<div class="check-link">
                               <a href="${opt.linkUrl}" target="_blank" rel="noopener noreferrer">
                                 👉 ${opt.linkLabel || "Ouvrir"}
                               </a>
                             </div>`
                    : opt.linkHash
                      ? `<div class="check-link">
                               <a href="${opt.linkHash}">
                                 👉 ${opt.linkLabel || "Ouvrir"}
                               </a>
                             </div>`
                      : ""
                  }
                    </div>
                  `
                  : "";

                return `
                  <div class="check-item" style="margin-left:18px;">
                    <label class="check-label">
                      <input
                        type="${inputType}"
                        ${nameAttr}
                        data-followup="1"
                        data-followup-type="${fuType}"
                        data-parent="${it.id}"
                        data-followup-id="${fu.id}"
                        data-item="${opt.id}"
                        ${optChecked ? "checked" : ""}
                      />
                      <span>${opt.label}</span>
                    </label>
                    ${resultHtml}
                  </div>
                `;
              })
              .join("");

            if (!fuItemsHtml) return "";

            return `
              <div class="check-item" data-followup-box="${it.id
              }" style="display:${checked ? "block" : "none"}; margin-left:12px;">
                <div class="formula formula-example">
                  <p class="formula-title">${fu.title || "Sous-question"}</p>
                  ${fu.intro ? `<p class="formula-content">${fu.intro}</p>` : ""}
                </div>
                ${fuItemsHtml}
              </div>
            `;
          })
          .join("");
      }

      return `
        <div class="check-item">
          <label class="check-label">
            <input type="checkbox" data-item="${it.id}" ${checked ? "checked" : ""} />
            <span>${it.label}</span>
          </label>

          ${classicDetailsHtml}

          ${followupsHtml
          ? `<div class="check-followups">${followupsHtml}</div>`
          : ""
        }
        </div>
      `;
    })
    .join("");

  return `
    <div class="page">
      <h2>${section.title}</h2>

      <!-- 🔼 NAV HAUT -->
      <div class="nav-actions">
        <a class="btn" href="#/btp">← Retour au module</a>
        <a class="btn" href="#/">← Retour aux cartes</a>
        <a class="btn" href="#/btp/checklist-recap-final">📄 Récapitulatif</a>

        <button class="btn btn--danger" id="reset-checklist-bottom">
          🗑️ Réinitialiser
        </button>
      </div>

      <div class="checklist">
        ${itemsHtml}
      </div>

      <!-- 🔽 NAV BAS -->
      <div class="nav-actions" style="margin-top:18px;">
        <a class="btn" href="#/btp">← Retour au module</a>
        <a class="btn" href="#/">← Retour aux cartes</a>
        <a class="btn" href="#/btp/checklist-recap-final">📄 Récapitulatif</a>

        <button class="btn btn--danger" id="reset-checklist">
          🗑️ Réinitialiser
        </button>
      </div>

    </div>
  `;
}

function bindChecklistInteractions(section) {
  const key = `checklist:${section.id}`;
  const followKey = `checklist:${section.id}:followups`;

  const saved = JSON.parse(localStorage.getItem(key) || "{}");
  const savedFollowups = JSON.parse(localStorage.getItem(followKey) || "{}");

  const fieldsKey = `checklist:${section.id}:fields`;
  const savedFields = JSON.parse(localStorage.getItem(fieldsKey) || "{}");

  document.querySelectorAll("[data-field]").forEach((input) => {
    const fieldId = input.getAttribute("data-field");
    if (!fieldId) return;

    if (savedFields[fieldId] !== undefined && savedFields[fieldId] !== null) {
      input.value = savedFields[fieldId];
    }
  });

  document.querySelectorAll("[data-field]").forEach((input) => {
    input.addEventListener("input", (e) => {
      const fieldId = e.target.getAttribute("data-field");
      if (!fieldId) return;

      savedFields[fieldId] = e.target.value;
      localStorage.setItem(fieldsKey, JSON.stringify(savedFields));
    });
  });

  function syncSelectedIds() {
    const selectedIds = buildSelectedIds(saved, savedFollowups);
    saveSelectedIds(section.id, selectedIds);
  }

  document
    .querySelectorAll('input[type="checkbox"][data-item]')
    .forEach((cb) => {
      cb.addEventListener("change", (e) => {
        const id = e.target.getAttribute("data-item");
        saved[id] = e.target.checked;

        localStorage.setItem(key, JSON.stringify(saved));

        if (!e.target.checked && savedFollowups[id]) {
          delete savedFollowups[id];
          localStorage.setItem(followKey, JSON.stringify(savedFollowups));
        }

        syncSelectedIds();

        setView(renderChecklistPage(section));
        bindChecklistInteractions(section);
      });
    });

  document.querySelectorAll('input[data-followup="1"]').forEach((input) => {
    input.addEventListener("change", (e) => {
      const parentId = e.target.getAttribute("data-parent");
      const followupId = e.target.getAttribute("data-followup-id");
      const itemId = e.target.getAttribute("data-item");
      const fuType = e.target.getAttribute("data-followup-type") || "checkbox";

      savedFollowups[parentId] = savedFollowups[parentId] || {};
      savedFollowups[parentId][followupId] =
        savedFollowups[parentId][followupId] || {};

      if (fuType === "radio") {
        if (!e.target.checked) return;
        savedFollowups[parentId][followupId].value = itemId;
      } else {
        const current = savedFollowups[parentId][followupId].value;
        const arr = new Set(Array.isArray(current) ? current : []);

        if (e.target.checked) arr.add(itemId);
        else arr.delete(itemId);

        savedFollowups[parentId][followupId].value = Array.from(arr);
      }

      localStorage.setItem(followKey, JSON.stringify(savedFollowups));

      syncSelectedIds();

      setView(renderChecklistPage(section));
      bindChecklistInteractions(section);
    });
  });

  function bindReset(btnId) {
    const btn = document.getElementById(btnId);
    if (!btn) return;

    btn.addEventListener("click", () => {
      const ok = confirm(
        "Réinitialiser toute la checklist ?\n\nToutes les sélections et saisies seront effacées."
      );
      if (!ok) return;

      localStorage.removeItem(`checklist:${section.id}`);
      localStorage.removeItem(`checklist:${section.id}:followups`);
      localStorage.removeItem(`checklist:${section.id}:fields`);
      localStorage.removeItem(`checklist:${section.id}:selectedIds`);

      setView(renderChecklistPage(section));
      bindChecklistInteractions(section);
    });
  }

  bindReset("reset-checklist");
  bindReset("reset-checklist-bottom");
}

// ===============================
// 🔎 RECHERCHE – helpers
// ===============================

// ✅ PAGES SPÉCIALES (routes en dur) — index pour la recherche
const SEARCH_PAGES = [
  {
    module: "Retenue",
    title: "Retenue pour absence — horaire réel",
    go: "#/retenue-horaire-reel",
    content: `
      Méthode du taux horaire (horaire réel).
      Détermination du taux horaire : (Salaire de base + éléments liés au temps) / heures normalement travaillées.
      Retenue : taux horaire × heures d’absence.
    `,
  },
  {
    module: "BTP",
    title: "Checklist BTP (interactive)",
    go: "#/btp/checklist",
    content: `
      Outil checklist BTP : questions + sous-questions, mémorisation des choix et récapitulatif.
      Permet de déterminer obligations (CSE, VM, caisses, etc.) et d’afficher un récap.
    `,
  },
  {
    module: "BTP",
    title: "Récapitulatif FINAL — Checklist BTP",
    go: "#/btp/checklist-recap-final",
    content: `
      Récapitulatif multi-blocs de la checklist BTP : effectif, catégorie, convention collective, CSE, tableaux FS/cotisations.
    `,
  },
];

const ALL_CARDS = [
  { module: "Apprenti", cards: [apprentiCard], go: () => `#/apprenti` },
  { module: "Activité partielle", cards: [activitePartielleCard], go: () => `#/activite-partielle` },
  { module: "Stagiaire", cards: [stagiaireGratificationCard], go: () => `#/gratification-stagiaire` },
  { module: "Variables de paie", cards: [variablesPaieCard], go: () => `#/variables-paie` },

  { module: "VRP", cards: vrpCards, go: (id) => `#/vrp/${id}` },
  { module: "BTP", cards: btpCards, go: (id) => `#/btp/${id}` },
  {
    module: "Référentiel",
    cards: referentielCards,
    go: (id) =>
      id === "referentiel-cotisations"
        ? "#/referentiel-cotisations"
        : `#/referentiel/${id}`,
  },
  { module: "Obligations", cards: obligationsCards, go: (id) => `#/obligations/${id}` },
];

function stripHtml(html) {
  const tmp = document.createElement("div");
  tmp.innerHTML = html;
  return (tmp.textContent || tmp.innerText || "").replace(/\s+/g, " ").trim();
}

function normalize(s) {
  return (s || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function normWord(w) {
  w = normalize(w);
  if (w.length > 3 && w.endsWith("s")) w = w.slice(0, -1);
  return w;
}

function searchCards(query) {
  const q = normalize(query);
  if (!q) return [];

  const wordsRaw = q.split(" ").filter(Boolean);
  const words = wordsRaw.map(normWord);
  const qPhrase = words.join(" ");

  function hasAdjacentWords(hay, wordsArr) {
    for (let i = 0; i < wordsArr.length - 1; i++) {
      const pair = `${wordsArr[i]} ${wordsArr[i + 1]}`;
      if (hay.includes(pair)) return true;
    }
    return false;
  }

  function hasAllWords(hay, wordsArr) {
    return wordsArr.every((w) => hay.includes(w));
  }

  function makeSnippet(rawText, phrase) {
    const raw = stripHtml(rawText);
    const rawNorm = normalize(raw);

    let idx = rawNorm.indexOf(phrase);
    if (idx < 0 && words.length) idx = rawNorm.indexOf(words[0]);

    let snippet = raw.slice(0, 160);

    if (idx >= 0) {
      const start = Math.max(0, idx - 60);
      snippet = raw.slice(start, start + 180);
      if (start > 0) snippet = "… " + snippet;
      snippet = snippet + " …";
    }
    return snippet;
  }

  const results = [];

  for (const pack of ALL_CARDS) {
    for (const c of pack.cards) {
      const hayTitle = normalize(c.title);
      const hayText = normalize(stripHtml(c.content));

      const hasExact = hayTitle.includes(qPhrase) || hayText.includes(qPhrase);
      const hasAdj =
        hasAdjacentWords(hayTitle, words) || hasAdjacentWords(hayText, words);
      const hasAll =
        hasAllWords(hayTitle, words) || hasAllWords(hayText, words);

      if (words.length >= 3) {
        if (!hasExact && !hasAdj) continue;
      } else if (words.length === 2) {
        if (!hasExact && !hasAdj && !hasAll) continue;
      }

      let score = 0;
      if (hayTitle.includes(qPhrase)) score += 12;
      if (hayText.includes(qPhrase)) score += 5;
      if (hasAdj) score += 6;

      const titleMatchCount = words.filter((w) => hayTitle.includes(w)).length;
      const textMatchCount = words.filter((w) => hayText.includes(w)).length;

      score += titleMatchCount * 3;
      score += textMatchCount * 1;

      if (score > 0) {
        results.push({
          score,
          module: pack.module,
          title: c.title,
          go: pack.go(c.id),
          snippet: makeSnippet(c.content, qPhrase),
          _fullText: stripHtml(c.content),
        });
      }
    }
  }

  for (const p of SEARCH_PAGES) {
    const hayTitle = normalize(p.title);
    const hayText = normalize(stripHtml(p.content));

    const hasExact = hayTitle.includes(qPhrase) || hayText.includes(qPhrase);
    const hasAdj =
      hasAdjacentWords(hayTitle, words) || hasAdjacentWords(hayText, words);
    const hasAll =
      hasAllWords(hayTitle, words) || hasAllWords(hayText, words);

    if (words.length >= 3) {
      if (!hasExact && !hasAdj) continue;
    } else if (words.length === 2) {
      if (!hasExact && !hasAdj && !hasAll) continue;
    }

    let score = 0;
    if (hayTitle.includes(qPhrase)) score += 10;
    if (hayText.includes(qPhrase)) score += 4;
    if (hasAdj) score += 5;

    const titleMatchCount = words.filter((w) => hayTitle.includes(w)).length;
    const textMatchCount = words.filter((w) => hayText.includes(w)).length;
    score += titleMatchCount * 3;
    score += textMatchCount * 1;

    if (score > 0) {
      results.push({
        score,
        module: p.module,
        title: p.title,
        go: p.go,
        snippet: makeSnippet(p.content, qPhrase),
        _fullText: stripHtml(p.content),
      });
    }
  }

  return results.sort((a, b) => b.score - a.score);
}

// ✅ extrait “taux” : on récupère les % trouvés (snippet + fallback full text)
function extractPercents(text) {
  if (!text) return [];
  const clean = stripHtml(text);
  const matches = clean.match(/(\d+[.,]?\d*)\s?%/g);
  return matches || [];
}

// ✅ une “réponse courte” : si on cherche un taux → affiche les % de la meilleure source
function buildQuickAnswer(q, results) {
  if (!q || !results.length) return "";
  const qn = normalize(q);

  const wantsRate =
    qn.includes("taux") ||
    qn.includes("%") ||
    qn.includes("pourcentage") ||
    qn.includes("cotisation");

  if (!wantsRate) return "";

  const best = results[0];
  const percents = [
    ...extractPercents(best.snippet),
    ...extractPercents(best._fullText),
  ];

  const uniq = Array.from(new Set(percents));
  if (!uniq.length) return "";

  return `
    <div class="formula formula-reminder" style="max-width:900px;margin:18px auto;">
      <p class="formula-title">✅ Réponse rapide (depuis tes fiches)</p>
      <p class="formula-content" style="text-align:left;">
        <b>Question :</b> ${q}<br>
        <b>Réponse possible :</b> <span style="font-size:1.25rem;font-weight:bold;">${uniq.slice(0, 4).join(" • ")}</span><br><br>
        <b>Source :</b> ${best.module} — ${best.title}
      </p>
      <div class="mini-grid">
        <button onclick="location.hash='${best.go}'">📘 Ouvrir la fiche source</button>
      </div>
    </div>
  `;
}

// =========================================================
// ROUTER (render)
// =========================================================
function render() {
  const hash = window.location.hash || "#/";

  // ===============================
  // 🔎 RECHERCHE (extraits + réponse rapide)
  // ===============================
  if (hash.startsWith("#/search")) {
    const params = new URLSearchParams(hash.split("?")[1] || "");
    const q = (params.get("q") || "").trim();

    const results = q ? searchCards(q) : [];
    const quickAnswer = buildQuickAnswer(q, results);

    const resultsHtml = q
      ? results.length
        ? `
          ${quickAnswer}

          <div class="formula formula-example" style="max-width:900px;margin:18px auto;">
            <p class="formula-title">Résultats (${results.length})</p>
            <p class="formula-content">Clique l’extrait (ou le bouton) pour ouvrir la fiche :</p>
          </div>

          ${results
          .slice(0, 30)
          .map((r) => {
            const perc = extractPercents(r.snippet);
            const showPerc = perc.length && normalize(q).includes("taux");

            return `
                <div class="formula formula-example" style="max-width:900px;margin:14px auto;">
                  <p class="formula-title">${r.module} — ${r.title}</p>

                  ${showPerc
                ? `<div style="font-size:1.15rem;font-weight:bold;margin:6px 0 10px;">
                           👉 ${Array.from(new Set(perc)).slice(0, 4).join(" • ")}
                         </div>`
                : ""
              }

                  <button
                    onclick="location.hash='${r.go}'"
                    style="
                      width:100%;
                      text-align:left;
                      border:none;
                      background:rgba(255,255,255,0.06);
                      padding:12px 12px;
                      border-radius:12px;
                      cursor:pointer;
                      color:inherit;
                    "
                    title="Ouvrir la fiche"
                  >
                    ${r.snippet}
                  </button>

                  <div class="mini-grid" style="margin-top:10px;">
                    <button onclick="location.hash='${r.go}'">📘 Ouvrir la fiche</button>
                  </div>
                </div>
              `;
          })
          .join("")}
        `
        : `
          <div class="formula formula-warn" style="max-width:900px;margin:18px auto;">
            <p class="formula-title">Aucun résultat</p>
            <p class="formula-content">
              Essaie plus court (ex : <b>maladie</b>, <b>URSSAF</b>, <b>CSE</b>…)
            </p>
          </div>
        `
      : `
        <div class="formula formula-reminder" style="max-width:900px;margin:18px auto;">
          <p class="formula-title">Astuce</p>
          <p class="formula-content">
            Tape une question ou un mot-clé.<br>
            Ex : <b>taux cotisation maladie</b>, <b>OPPBTP</b>, <b>CSE 11 salariés</b>…
          </p>
        </div>
      `;

    setView(`
      <h1>🔎 Recherche</h1>

      <div class="card">
        <input id="searchInput"
          value="${q.replaceAll('"', "&quot;")}"
          placeholder="Ex : taux cotisation maladie, CSE, OPPBTP…"
          style="width:min(780px, 95%);
                 padding:12px 14px;
                 border-radius:12px;
                 border:1px solid rgba(255,255,255,0.25);
                 background: rgba(255,255,255,0.06);
                 font-size: 1rem;"
        />

        <div style="margin-top:12px;">
          <button id="searchBtn">Rechercher</button>
          <button id="searchClear" style="margin-left:10px;">Effacer</button>
        </div>

        <hr style="margin:18px auto; max-width:860px; opacity:0.25;">

        ${resultsHtml}

        <br><br>
        <a href="#/">⬅ Retour à l’accueil</a>
      </div>
    `);

    const input = document.querySelector("#searchInput");
    const btn = document.querySelector("#searchBtn");
    const clear = document.querySelector("#searchClear");

    function runSearch() {
      const val = input.value.trim();
      location.hash = val ? `#/search?q=${encodeURIComponent(val)}` : "#/search";
    }

    btn.addEventListener("click", runSearch);
    clear.addEventListener("click", () => {
      input.value = "";
      location.hash = "#/search";
    });

    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") runSearch();
    });

    input.focus();
    return;
  }

  // ===============================
  // FICHE : RETENUE - HORAIRE RÉEL
  // ===============================
  if (hash === "#/retenue-horaire-reel") {
    setView(`
      <h1>Retenue pour absence</h1>

      <div class="card">
        <h2>Méthode du taux horaire (horaire réel)</h2>

        <h3>Principe</h3>
        <p>
          La méthode du taux horaire, dite méthode de l’horaire réel,
          est la méthode de retenue pour absence préconisée par la jurisprudence.
          La retenue est calculée à partir du taux horaire du mois,
          déterminé selon le nombre d’heures qui auraient dû être effectuées.
        </p>

        <h3>Détermination du taux horaire</h3>
        <div class="formula">
          <p class="formula-title">Taux horaire du mois</p>
          <p class="formula-content">
            (Salaire de base + éléments liés au temps de travail)<br>
            ÷<br>
            Nombre d’heures normalement travaillées dans le mois
          </p>
        </div>

        <h3>Calcul de la retenue</h3>
        <div class="formula">
          <p class="formula-title">Retenue pour absence</p>
          <p class="formula-content">
            Taux horaire du mois × nombre d’heures d’absence
          </p>
        </div>

        <a href="#/">⬅ Retour aux cartes</a>
      </div>
    `);
    return;
  }

  // ===============================
  // VRP – ACCUEIL DU MODULE
  // ===============================
  if (hash === "#/vrp") {
    const mainCards = vrpCards.filter((c) => c.group === "main");

    setView(`
      <h1>VRP</h1>

      <div class="card">
        <p>Choisir une carte :</p>

        ${mainCards
        .map(
          (c) => `
              <button onclick="location.hash='#/vrp/${c.id}'">
                ${c.title}
              </button>
            `
        )
        .join("")}

        <br><br>
        <a href="#/">⬅ Retour aux cartes</a>
      </div>
    `);
    return;
  }

  // ===============================
  // APPRENTI – CARTE UNIQUE
  // ===============================
  if (hash === "#/apprenti") {
    setView(`
    <h1>Apprenti</h1>

    <div class="card">
      <h2>${apprentiCard.title}</h2>
      ${apprentiCard.content}

      <br><br>
      <a href="#/">⬅ Retour aux cartes</a>
    </div>
  `);
    return;
  }

  // ===============================
  // ACTIVITÉ PARTIELLE – CARTE UNIQUE
  // ===============================
  if (hash === "#/activite-partielle") {
    setView(`
      <h1>Activité partielle</h1>

      <div class="card">
        <h2>${activitePartielleCard.title}</h2>
        ${activitePartielleCard.content}

        <br><br>
        <a href="#/">⬅ Retour aux cartes</a>
      </div>
    `);
    return;
  }

  // ===============================
  // STAGIAIRE – GRATIFICATION (CARTE UNIQUE)
  // ===============================
  if (hash === "#/gratification-stagiaire") {
    setView(`
    <h1>Stagiaire</h1>

    <div class="card">
      <h2>${stagiaireGratificationCard.title}</h2>
      ${stagiaireGratificationCard.content}

      <br><br>
      <a href="#/">⬅ Retour aux cartes</a>
    </div>
  `);
    return;
  }

  // ===============================
  // VARIABLES DE PAIE – CARTE UNIQUE
  // ===============================
  if (hash === "#/variables-paie") {
    setView(`
    <h1>Variables de paie</h1>

    <div class="card">
      <h2>${variablesPaieCard.title}</h2>
      ${variablesPaieCard.content}

      <br><br>
      <a href="#/">⬅ Retour aux cartes</a>
    </div>
  `);
    return;
  }

  // ===============================
  // VRP – DÉTAIL D’UNE CARTE
  // ===============================
  if (hash.startsWith("#/vrp/")) {
    const id = hash.replace("#/vrp/", "");
    const card = vrpCards.find((c) => c.id === id);

    if (!card) {
      setView(`
        <h1>VRP</h1>
        <div class="card">
          <p>Carte introuvable.</p>
          <a href="#/vrp">⬅ Retour au module VRP</a>
        </div>
      `);
      return;
    }

    setView(`
      <h1>VRP</h1>

      <div class="card">
        <h2>${card.title}</h2>
        ${card.content}

        <br><br>

        <div class="mini-grid">
          <button onclick="location.hash='#/vrp'">
            ⬅ Retour au module VRP
          </button>

          <button onclick="location.hash='#/'">
            ⬅⬅ Retour aux cartes
          </button>
        </div>
      </div>
    `);

    if (id === "cotisations") {
      const host = document.querySelector("#cotisations-buttons");
      if (host) {
        const subCards = vrpCards.filter((c) => c.group === "cotisations");

        host.innerHTML = subCards
          .map(
            (it) => `
              <button onclick="location.hash='#/vrp/${it.id}'">
                ${it.title}
              </button>
            `
          )
          .join("");
      }
    }

    return;
  }

  // ===============================
  // OBLIGATIONS – ACCUEIL DU MODULE
  // ===============================
  if (hash === "#/obligations-entreprise") {
    const menuCard = obligationsCards.find(
      (c) => c.id === "obligations-entreprise"
    );
    const subCards = obligationsCards.filter((c) => c.group === "obligations");

    setView(`
      <h1>Obligations de l’entreprise</h1>

      <div class="card">
        <h2>${menuCard?.title || "Obligations de l’entreprise"}</h2>
        ${menuCard?.content || ""}

        <br><br>
        <a href="#/">⬅ Retour aux cartes</a>
      </div>
    `);

    const host = document.querySelector("#obligations-buttons");
    if (host) {
      host.innerHTML = subCards
        .map(
          (c) => `
          <button onclick="location.hash='#/obligations/${c.id}'">
            ${c.title}
          </button>
        `
        )
        .join("");
    }

    return;
  }

  // ===============================
  // OBLIGATIONS – DÉTAIL D’UNE CARTE
  // ===============================
  if (hash.startsWith("#/obligations/")) {
    const id = hash.replace("#/obligations/", "");

    if (id === "obligations-entreprise") {
      location.hash = "#/obligations-entreprise";
      return;
    }

    const card = obligationsCards.find((c) => c.id === id);

    if (!card) {
      setView(`
        <h1>Obligations de l’entreprise</h1>
        <div class="card">
          <p>Carte introuvable.</p>
          <br>
          <a href="#/obligations-entreprise">⬅ Retour au module</a>
          <span style="margin:0 10px;">•</span>
          <a href="#/">🏠 Retour aux cartes</a>
        </div>
      `);
      return;
    }

    setView(`
      <h1>Obligations de l’entreprise</h1>

      <div class="card">
        <h2>${card.title}</h2>
        ${card.content}

        <br><br>
        <a href="#/obligations-entreprise">⬅ Retour au module</a>
        <span style="margin:0 10px;">•</span>
        <a href="#/">🏠 Retour aux cartes</a>
      </div>
    `);

    return;
  }

  // ===============================
  // BTP – ACCUEIL DU MODULE
  // ===============================
  if (hash === "#/btp") {
    const mainCards = btpCards.filter((c) => c.id !== "bulletin-paie-btp");

    setView(`
      <h1>BTP</h1>

      <div class="card">
        <p>Choisir une carte :</p>

        <button onclick="location.hash='#/btp/checklist'">
          ✅ Checklist BTP (interactive)
        </button>

        <hr style="margin:16px 0; opacity:0.3;">

        ${mainCards
        .filter((c) => c.id !== "btp-bulletin-checklist")
        .map(
          (c) => `
              <button onclick="location.hash='#/btp/${c.id}'">
                ${c.title}
              </button>
            `
        )
        .join("")}

        <br><br>
        <a href="#/">⬅ Retour aux cartes</a>
      </div>
    `);
    return;
  }

  // ===============================
  // ✅ BTP – CHECKLIST
  // ===============================
  if (hash === "#/btp/checklist") {
    const section = btpChecklist[0]; // Bloc 1
    setView(renderChecklistPage(section));
    bindChecklistInteractions(section);
    return;
  }

  // ===============================
  // ✅ BTP – CHECKLIST (récapitulatif FINAL)
  // ===============================
  if (hash === "#/btp/checklist-recap-final") {
    setView(renderChecklistRecapFinal());
    return;
  }

  // ===============================
  // ✅ BTP – CHECKLIST (récapitulatif Bloc 1)
  // ===============================
  if (hash === "#/btp/checklist-recap") {
    const section = btpChecklist[0]; // Bloc 1
    setView(renderChecklistRecapPage(section));
    return;
  }

  // ===============================
  // RÉFÉRENTIEL – CARTE PRINCIPALE
  // ===============================
  if (hash === "#/referentiel-cotisations") {
    const card = referentielCards.find(
      (c) => c.id === "referentiel-cotisations"
    );

    if (!card) {
      setView(`
        <h1>Référentiel</h1>
        <div class="card">
          <p>Carte introuvable.</p>
          <a href="#/">⬅ Retour aux cartes</a>
        </div>
      `);
      return;
    }

    setView(`
      <h1>Référentiel</h1>

      <div class="card">
        <h2>${card.title}</h2>
        ${card.content}

        <br><br>
        <a href="#/">⬅ Retour aux cartes</a>
      </div>
    `);
    return;
  }

  // ===============================
  // RÉFÉRENTIEL – DÉTAIL
  // ===============================
  if (hash.startsWith("#/referentiel/")) {
    const id = hash.replace("#/referentiel/", "");
    const card = referentielCards.find((c) => c.id === id);

    if (!card) {
      setView(`
        <h1>Référentiel</h1>
        <div class="card">
          <p>Fiche introuvable.</p>
          <a href="#/referentiel-cotisations">⬅ Retour au référentiel</a>
          <span style="margin:0 10px;">•</span>
          <a href="#/">🏠 Accueil</a>
        </div>
      `);
      return;
    }

    setView(`
      <h1>Référentiel</h1>

      <div class="card">
        <h2>${card.title}</h2>
        ${card.content}

        <br><br>
        <a href="#/referentiel-cotisations">⬅ Retour au référentiel</a>
        <span style="margin:0 10px;">•</span>
        <a href="#/">🏠 Accueil</a>
      </div>
    `);
    return;
  }

  // ===============================
  // BTP – DÉTAIL D’UNE CARTE
  // ===============================
  if (hash.startsWith("#/btp/")) {
    const id = hash.replace("#/btp/", "");
    const card = btpCards.find((c) => c.id === id);

    if (!card) {
      setView(`
        <h1>BTP</h1>
        <div class="card">
          <p>Carte introuvable.</p>
          <br>
          <a href="#/btp">⬅ Retour au module BTP</a>
          <span style="margin:0 10px;">•</span>
          <a href="#/">🏠 Retour aux cartes</a>
        </div>
      `);
      return;
    }

    setView(`
      <h1>BTP</h1>

      <div class="card">
        <h2>${card.title}</h2>
        ${card.content}

        <br><br>
        <a href="#/btp">⬅ Retour au module BTP</a>
        <span style="margin:0 10px;">•</span>
        <a href="#/">🏠 Retour aux cartes</a>
      </div>
    `);
    return;
  }

  // ===============================
  // ACCUEIL – CARTES
  // ===============================
  setView(`
    <h1>Cartes Mémo</h1>

    <div class="home-tabs">
      <div class="card">
        <h2>
          <a href="#/retenue-horaire-reel" class="card-link">
            Retenue pour absence
          </a>
        </h2>
      </div>

      <div class="card">
        <h2>
          <a href="#/vrp" class="card-link">
            VRP
          </a>
        </h2>
      </div>

      <div class="card">
        <h2>
          <a href="#/btp" class="card-link">
            BTP
          </a>
        </h2>
      </div>

      <div class="card">
        <h2>
          <a href="#/referentiel-cotisations" class="card-link">
            Référentiel des cotisations
          </a>
        </h2>
      </div>

      <div class="card">
        <h2>
          <a href="#/obligations-entreprise" class="card-link">
            Obligations de l’entreprise
          </a>
        </h2>
      </div>

      <div class="card">
        <h2>
          <a href="#/apprenti" class="card-link">
            Apprenti
          </a>
        </h2>
      </div>

      <div class="card">
        <h2>
          <a href="#/activite-partielle" class="card-link">
            Activité partielle
          </a>
        </h2>
      </div>

      <div class="card">
        <h2>
          <a href="#/gratification-stagiaire" class="card-link">
            Stagiaire — Gratification
          </a>
        </h2>
      </div>

      <div class="card">
        <h2>
          <a href="#/variables-paie" class="card-link">
            Variables de paie
          </a>
        </h2>
      </div>

      <div class="card">
        <h2>
          <a href="#/search" class="card-link">
            🔎 Recherche
          </a>
        </h2>
      </div>
    </div>
  `);
}

function safeRender() {
  try {
    render();
  } catch (err) {
    console.error("Erreur de rendu :", err);

    app.innerHTML = `
      <h1>Erreur technique</h1>

      <div class="card">
        <div class="formula formula-warn">
          <p class="formula-title">⚠️ Une erreur est survenue</p>
          <p class="formula-content">
            Une erreur JavaScript empêche l’affichage de cette carte.<br><br>
            <b>Astuce :</b> vérifier la dernière carte modifiée
            (guillemets, backticks, virgule en trop…).
          </p>
        </div>

        <p style="margin-top:16px;">
          Message technique :
        </p>
        <pre style="
          background:#111;
          color:#f8f8f2;
          padding:12px;
          border-radius:8px;
          overflow:auto;
          font-size:0.9rem;
        ">${err.message}</pre>

        <br>
        <a href="#/">⬅ Retour à l’accueil</a>
      </div>
    `;
  }
}

window.addEventListener("hashchange", safeRender);
safeRender();
