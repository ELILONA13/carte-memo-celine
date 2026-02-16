// ✅ src/data/btpChecklist.js
export const btpChecklist = [
  {
    id: "btp-context",
    title: "Bloc 1 — Identifier le contexte BTP",
    items: [

      // ✅ 1) EFFECTIF
      {
        id: "effectif",
        label: "Effectif de l’entreprise (seuils sociaux)",
        explain:
          "Les obligations basculent sur des seuils : formation (≥11), déduction patronale HS (<20), FNAL/PEEC (≥50).",
        reminder: "Réflexe : poser l’effectif AVANT de paramétrer les cotisations.",
        followups: [
          {
            id: "effectif-choice",
            title: "Dans quelle tranche se situe l’effectif ?",
            type: "radio",
            items: [
              {
                id: "eff_lt_11",
                label: "Moins de 11 salariés",
                explain:
                  "Formation < 11 ; déduction patronale HS possible (<20) ; FNAL réduit.",
                reminder: "<11 = petite entreprise.",
                linkHash: "#/referentiel-cotisations",
                linkLabel: "Voir : seuils sociaux",
              },
              {
                id: "eff_11_19",
                label: "De 11 à 19 salariés",
                explain:
                  "Seuil formation franchi ; déduction HS encore possible.",
                reminder: "≥11 = formation modifiée.",
                linkHash: "#/referentiel-cotisations",
                linkLabel: "Voir : seuils sociaux",
              },
              {
                id: "eff_20_49",
                label: "De 20 à 49 salariés",
                explain:
                  "Déduction patronale HS non applicable ; FNAL réduit.",
                reminder: "≥20 = plus de déduction HS.",
                linkHash: "#/referentiel-cotisations",
                linkLabel: "Voir : FNAL / HS",
              },
              {
                id: "eff_ge_50",
                label: "50 salariés et plus",
                explain:
                  "FNAL plein taux + PEEC ; CSE en principe obligatoire.",
                reminder: "≥50 = FNAL plein + PEEC.",
                linkHash: "#/referentiel-cotisations",
                linkLabel: "Voir : FNAL / PEEC",
              },
            ],
          },
        ],
      },

      // ✅ 2) CATÉGORIE
      { id: "categorie-salarie", label: "Catégorie du salarié", explain: "La catégorie du salarié détermine directement la convention collective applicable en BTP.", reminder: "Identifier la catégorie AVANT de chercher la convention collective.", followups: [{ id: "categorie-salarie-choice", title: "Quelle est la catégorie du salarié concerné par le bulletin ?", type: "radio", items: [{ id: "cat_ouvrier", label: "Ouvrier", explain: "Salarié d’exécution affecté aux travaux de chantier. En BTP, les ouvriers relèvent de conventions collectives spécifiques.", reminder: "Ouvrier = catégorie professionnelle BTP (et non un statut juridique distinct).", }, { id: "cat_etam", label: "ETAM (Employés, Techniciens et Agents de Maîtrise)", explain: "Salariés occupant des fonctions administratives, techniques ou d’encadrement intermédiaire, sans statut cadre.", reminder: "ETAM = catégorie intermédiaire entre ouvriers et cadres.", }, { id: "cat_cadre", label: "Cadre", explain: "Salarié relevant du statut cadre, avec des règles spécifiques (prévoyance, retraite, parfois forfait).", reminder: "Cadres BTP = règles spécifiques distinctes des ouvriers et ETAM.", },], },], },

      // ✅ 3) CCN AUTO
      {
        id: "ccn-auto",
        label: "Convention collective BTP",
        followups: [
          {
            id: "ccn-auto-result",
            type: "info",
            items: [
              {
                id: "idcc_1596",
                showIf: { all: ["cat_ouvrier", "eff_lt_11"] },
                label: "Ouvriers bâtiment ≤ 10 salariés — IDCC 1596",
                linkUrl:
                  "https://www.legifrance.gouv.fr/conv_coll/id/KALITEXT000005647125/",
                linkLabel: "📘 CCN 1596",
              },
              {
                id: "idcc_1597",
                showIf: { all: ["cat_ouvrier"], any: ["eff_11_19", "eff_20_49", "eff_ge_50"] },
                label: "Ouvriers bâtiment > 10 salariés — IDCC 1597",
                linkUrl:
                  "https://www.legifrance.gouv.fr/conv_coll/id/KALICONT000005635220/",
                linkLabel: "📘 CCN 1597",
              },
              {
                id: "idcc_2609",
                showIf: { all: ["cat_etam"] },
                label: "ETAM bâtiment — IDCC 2609",
                linkUrl:
                  "https://www.legifrance.gouv.fr/conv_coll/id/KALICONT000018773893/",
                linkLabel: "📘 CCN 2609",
              },
              {
                id: "idcc_2420",
                showIf: { all: ["cat_cadre"] },
                label: "Cadres du bâtiment",
                linkUrl:
                  "https://www.legifrance.gouv.fr/conv_coll/id/KALICONT000017941839",
                linkLabel: "📘 CCN 2420",
              },
            ],
          },
        ],
      },

      // ✅ 4) Versement mobilité
      {
        id: "versement-mobilite",
        label: "Versement mobilité",
        explain:
          "À partir de 11 salariés, l’entreprise peut être assujettie au VM selon la zone géographique (taux local).",
        reminder: "Cotisation patronale, taux local, assise sur le brut soumis.",
        linkHash: "#/referentiel-cotisations",
        linkLabel: "Voir : Versement mobilité (à détailler au Référentiel)",

        followups: [
          // 🔹 Question principale
          {
            id: "vm-assujetti",
            title: "La société est-elle soumise au versement mobilité ?",
            type: "radio",
            items: [
              {
                id: "vm-non",
                label: "Non",
                reminder:
                  "Si l’une des conditions manque (effectif < 11 ou hors zone couverte), le versement mobilité n’est pas dû.",
              },
              {
                id: "vm-oui",
                label: "Oui",
                reminder:
                  "Si l’établissement est situé en zone couverte et l’effectif ≥ 11 salariés, le versement mobilité est dû.",
              },
            ],
          },

          // 🔹 Bloc “ticket / taux” → UNIQUEMENT si VM = OUI
          {
            id: "vm-ticket",
            type: "info",
            title: "Indiquer le taux de versement mobilité applicable",
            items: [
              {
                id: "vm-ticket-info",
                showIf: { all: ["vm-oui"] },
                label:
                  "Le VM dépend de la commune / AOM de l’établissement. Renseigner le taux correspondant.",
                reminder:
                  "Réflexe : vérifier le taux officiel (URSSAF) avant d’établir le bulletin.",
              },
              {
                id: "vm-taux-a-remplir",
                showIf: { all: ["vm-oui"] },
                label: `
    <div class="formula formula-example">
      <div style="margin-top:10px;">
        <label style="font-weight:600;">
          Taux à appliquer (%):
          <input 
            type="text"
            data-field="vm_taux"
            inputmode="decimal"
            pattern="[0-9]+([.,][0-9]+)?"
            placeholder="Ex : 2,00"
            style="
              width:90px;
              margin-left:6px;
              padding:4px 6px;
              border-radius:6px;
              border:1px solid #ccc;
            "
          />
        </label>
      </div>
    </div>
  `,
              },

            ],
          },

          // 🔹 Bloc INFO — toujours visible
          {
            id: "vm-taux",
            type: "info",
            title: "Indiquer le taux applicable (à vérifier sur le site de l’URSSAF)",
            items: [
              {
                id: "vm-taux-info",
                label:
                  "Le taux dépend exclusivement de la commune d’implantation de l’établissement.",
                reminder:
                  "Le taux est exprimé en pourcentage (%) et s’applique sur le brut soumis Sécurité sociale.",
                linkUrl:
                  "https://www.urssaf.fr/accueil/employeur/cotisations/liste-cotisations/versement-mobilite.html",
                linkLabel: "🔗 Consulter le taux du versement mobilité (URSSAF)",
              },
            ],
          },
        ],
      },

      // ✅ 5) DFS
      {
        id: "dfs",
        label: "DFS (déduction forfaitaire spécifique)",
        reminder:
          "La DFS modifie l’assiette sociale et entraîne des vigilances (accord, plafond annuel, ne pas passer sous SMIC).",

        followups: [
          // 🔹 Question Oui / Non
          {
            id: "dfs-choice",
            title: "La DFS est-elle appliquée sur ce salarié ?",
            type: "radio",
            items: [
              {
                id: "dfs_non",
                label: "Non",
                explain:
                  "Panier/transport : frais exonérés dans limites URSSAF ; trajet : toujours soumis.",
                reminder: "Sans DFS → logique URSSAF classique (plafonds).",
                linkUrl:
                  "https://www.urssaf.fr/accueil/outils-documentation/taux-baremes/frais-professionnels.html",
                linkLabel: "🔗 URSSAF — Barèmes des frais professionnels",
              },
              {
                id: "dfs_oui",
                label: "Oui",
                explain:
                  "Vérifier accord salarié + plafond annuel + garantie SMIC ; distinguer régime social et CSG/fiscal selon le cours.",
                reminder: "L’éligibilité dépend de l'activité du salarié.",
              },
            ],
          },

          // 🔹 Bloc “ticket / taux” → UNIQUEMENT si DFS = OUI
          {
            id: "dfs-ticket",
            type: "info",
            title: "Indiquer le taux DFS applicable",
            items: [
              {
                id: "dfs-ticket-info",
                showIf: { all: ["dfs_oui"] },
                label:
                  "Dans le secteur du BTP, la DFS bénéficie d’un régime dérogatoire officiel.",
                reminder:
                  "Toujours vérifier : accord salarié + plafond annuel + maintien du SMIC.",
              },
              {
                id: "dfs-taux-a-remplir",
                showIf: { all: ["dfs_oui"] },
                label: `
            <div class="formula formula-example">
              <div style="margin-top:10px;">
                <label style="font-weight:600;">
                  Taux DFS à appliquer :
                  <input 
                    type="text" 
                    data-field="dfs_taux"
                    inputmode="decimal"
                    pattern="[0-9]+([.,][0-9]+)?"
                    placeholder="Ex : 10"
                    style="
                      width:80px;
                      margin-left:6px;
                      padding:4px 6px;
                      border-radius:6px;
                      border:1px solid #ccc;
                    "
                  /> %
                </label>
              </div>
            </div>
          `,
              },
            ],
          },

          // 🔹 Bloc INFO TOUJOURS VISIBLE (carte + liens Internet)
          {
            id: "dfs-liens",
            type: "info",
            items: [
              {
                id: "dfs-carte-btp",
                label: "Carte cours DFS BTP.",
                linkHash: "#/btp/dfs-btp",
                linkLabel: "📘 Ouvrir la carte BTP — DFS",
              },
              {
                id: "dfs-liens-urssaf",
                label:
                  "Cadre URSSAF des frais professionnels et de la DFS.",
                linkUrl:
                  "https://www.urssaf.fr/accueil/employeur/gerer-entreprise/frais-professionnels.html",
                linkLabel: "🔗 URSSAF — Frais professionnels / DFS",
              },
              {
                id: "dfs-liens-mma",
                label:
                  "Article MMA: DFS dans le BTP.",
                linkUrl:
                  "https://entreprise.mma.fr/connexionpro/deduction-forfaitaire-specifique-btp.html",
                linkLabel: "🔗 MMA Entreprise — DFS BTP",
              },
            ],
          },
        ],
      },

      // ✅ 6) CSE — AUTO selon effectif (sans question)
      {
        id: "cse",
        label: "CSE (Comité Social et Économique)",
        reminder: "Seuil clé : 11 salariés pendant 12 mois consécutifs.",
        followups: [
          // ==========================
          // CAS 1 — Effectif < 11
          // ==========================
          {
            id: "cse-info-lt11",
            type: "info",
            items: [
              // 1) Bloc texte + lien interne
              {
                id: "cse-lt11-lecon",
                showIf: { all: ["eff_lt_11"] },
                label: `
            <b>Entreprise &lt; 11 salariés</b><br>
            Le CSE devient obligatoire si l’effectif atteint au moins
            <b>11 salariés pendant 12 mois consécutifs</b>.
          `,
                reminder: "En dessous de 11 salariés → pas d’obligation CSE.",
                linkHash: "#/obligations/cse",
                linkLabel: "📘 Fiche CSE — obligations employeur",
              },
              // 2) Source officielle
              {
                id: "cse-lt11-source",
                showIf: { all: ["eff_lt_11"] },
                label: "Source officielle (Service-public).",
                linkUrl: "https://www.service-public.fr/particuliers/vosdroits/F34474",
                linkLabel: "📄 CSE — Service-public",
              },
            ],
          },

          // ==========================
          // CAS 2 — Effectif ≥ 11
          // ==========================
          {
            id: "cse-info-11plus",
            type: "info",
            items: [
              // 1) Règle + lien interne
              {
                id: "cse-11plus-regle-lecon",
                showIf: { any: ["eff_11_19", "eff_20_49", "eff_ge_50"] },
                label: `
            <b>Entreprise ≥ 11 salariés (sur 12 mois consécutifs)</b><br>
            Le CSE devient obligatoire si l’effectif atteint au moins
            <b>11 salariés pendant 12 mois consécutifs</b>.<br>
            L’obligation de l’employeur est <b>d’organiser les élections</b>,
            pas de “créer un CSE coûte que coûte”.
          `,
                reminder:
                  "➡️ Entreprise sans CSE ≠ forcément en faute : cela peut être dû à une carence de candidatures (PV de carence).",
                linkHash: "#/obligations/cse",
                linkLabel: "📘 Fiche CSE — obligations employeur",
              },
              // 2) Source officielle CSE
              {
                id: "cse-11plus-source",
                showIf: { any: ["eff_11_19", "eff_20_49", "eff_ge_50"] },
                label: "Source officielle (Service-public).",
                linkUrl: "https://www.service-public.fr/particuliers/vosdroits/F34474",
                linkLabel: "📄 CSE — Service-public",
              },

              // 3) Carence + lien interne
              {
                id: "cse-11plus-carence-lecon",
                showIf: { any: ["eff_11_19", "eff_20_49", "eff_ge_50"] },
                label: `
            <b>Aucune candidature (1er et 2e tour) : PV de carence</b><br>
            Si aucune candidature (1er et 2e tour), un procès-verbal de carence
            est établi : l’entreprise peut ne pas avoir de CSE simplement parce
            qu’il n’y a pas de candidats, à condition d’avoir respecté la procédure.
          `,
                reminder: "PV de carence = élections faites + absence de candidats.",
              },
              // 4) Source officielle PV de carence
              {
                id: "cse-11plus-carence-source",
                showIf: { any: ["eff_11_19", "eff_20_49", "eff_ge_50"] },
                label: "Formulaire / explications officielles (PV de carence).",
                linkUrl: "https://entreprendre.service-public.fr/vosdroits/R56454",
                linkLabel: "📄 PV de carence — Service-public Pro",
              },
            ],
          },
        ],
      },

      // ✅ 7) APAS
      {
        id: "apas-btp",
        label: "APAS BTP (action sociale / œuvres sociales)",
        explain:
          "Selon la région et les accords applicables, une cotisation « action sociale / œuvres sociales » peut exister en BTP (souvent rattachée à une structure type APAS ou équivalent).",
        reminder:
          "Réflexe BTP : APAS n’est pas nationale → toujours vérifier la zone géographique / accords.",

        followups: [
          {
            id: "apas-choice",
            title: "Une cotisation APAS est-elle applicable à l’entreprise ?",
            type: "radio",
            items: [
              {
                id: "apas-non",
                label: "Non / non prévue dans la région",
                reminder:
                  "Aucune cotisation APAS à paramétrer si aucun accord local/régional ne la prévoit.",
              },
              {
                id: "apas-oui",
                label: "Oui / prévue par accord régional",
                explain:
                  "Cotisation patronale destinée au financement d’aides / prestations sociales pour les salariés du BTP (selon l’organisme régional).",
                reminder:
                  "Charge employeur : peut être gérée par un organisme tiers (selon régions/accords). Vérifier l’assiette et le circuit de déclaration.",
                linkHash: "#/btp/apas",
                linkLabel: "📘 Ouvrir la carte BTP — APAS",
              },
            ],
          },

          // ✅ Ticket — paramètres (affiché uniquement si APAS = OUI)
          {
            id: "apas-ticket",
            type: "info",
            title: "Indiquer les paramètres APAS",
            items: [
              {
                id: "apas-ticket-info",
                showIf: { all: ["apas-oui"] },
                label:
                  "Le taux et l’assiette APAS dépendent de la région et de l’accord applicable. Renseigner les paramètres pour le récapitulatif final.",
                reminder:
                  "Réflexe : récupérer le taux officiel (accord / organisme APAS régional).",
              },

              // ✅ Champ 1 : Taux (pour résumé)
              {
                id: "apas-taux-a-remplir",
                showIf: { all: ["apas-oui"] },
                label: `
            <div class="formula formula-example">
              <div style="margin-top:10px;">
                <label style="font-weight:600;">
                  Taux APAS à appliquer (%):
                  <input 
                    type="text"
                    data-field="apas_taux"
                    inputmode="decimal"
                    pattern="[0-9]+([.,][0-9]+)?"
                    placeholder="Ex : 0,30"
                    style="
                      width:90px;
                      margin-left:6px;
                      padding:4px 6px;
                      border-radius:6px;
                      border:1px solid #ccc;
                    "
                  />
                </label>
              </div>
            </div>
          `,
              },

              // ✅ Champ 3 : Assiette (formulation juridiquement verrouillée)
              {
                id: "apas-assiette",
                showIf: { all: ["apas-oui"] },
                label: `
            <div class="formula formula-reminder">
              <p class="formula-title">🧠 Assiette</p>
              <p class="formula-content">
                L’assiette APAS est celle prévue par l’accord collectif régional applicable
                (ex. brut total, brut soumis à cotisations, base spécifique BTP).
                Toujours se référer au texte régional ou à l’organisme APAS compétent.
              </p>
            </div>
          `,
              },
            ],
          },

          // 🔹 Bloc INFO — liens (toujours visible)
          {
            id: "apas-liens",
            type: "info",
            items: [
              {
                id: "apas-carte",
                label: "Carte cours APAS (logique paie BTP).",
                linkHash: "#/btp/apas",
                linkLabel: "📘 Carte APAS BTP",
              },
              {
                id: "apas-site",
                label: "APAS — organisme d’action sociale BTP (réseau).",
                linkUrl: "https://www.apas.asso.fr/",
                linkLabel: "🔗 APAS — site national",
              },
              {
                id: "apas-site-provence",
                label: "Exemple régional : APAS Provence (PACA).",
                linkUrl: "https://apasprovence.com/",
                linkLabel: "🔗 APAS Provence",
              },
            ],
          },
        ],
      },




      // ✅ 8) CIBTP — Congés payés (caisse)
      {
        id: "cibtp",
        label: "CIBTP — Congés payés (affiliation + cotisation)",
        explain:
          "En BTP, les congés payés sont gérés par une caisse (réseau CIBTP) : l’employeur cotise, la caisse centralise les droits et paie les congés (selon circuit caisse).",
        reminder:
          "Réflexe : vérifier l’affiliation à la caisse CIBTP compétente + où consulter le taux officiel (site de la caisse).",
        followups: [
          {
            id: "cibtp-affiliation",
            title: "L’entreprise est-elle affiliée à une caisse CIBTP (congés payés) ?",
            type: "radio",
            items: [
              {
                id: "cibtp-non",
                label: "Non / je ne sais pas",
                explain:
                  "Si l’entreprise relève du BTP avec salariés de chantier, l’affiliation est en principe obligatoire : vérifier la caisse compétente (zone) et l’immatriculation.",
                reminder:
                  "En pratique : retrouver la caisse via le réseau CIBTP, puis vérifier l’espace entreprise / les appels de cotisations.",
                linkUrl: "https://www.cibtp.fr/caisses",
                linkLabel: "🔗 Trouver la caisse CIBTP compétente",
              },
              {
                id: "cibtp-oui",
                label: "Oui",
                reminder:
                  "OK : l’entreprise doit cotiser sur l’assiette BTP et vérifier les taux sur le site de sa caisse.",
              },
            ],
          },

          // ✅ 1) Taux (si OUI) — AVANT les liens
          {
            id: "cibtp-ticket",
            type: "info",
            title: "Indiquer le taux CIBTP — Congés payés",
            items: [
              {
                id: "cibtp-ticket-info",
                showIf: { all: ["cibtp-oui"] },
                label:
                  "Renseigner le taux de cotisation congés payés publié par la caisse CIBTP compétente.",
                reminder:
                  "Point examen / paie : le taux est fixé et publié par la caisse (pas par l’URSSAF).",
              },

              // ✅ Champ SAISIE — taux (pour futur récapitulatif)
              {
                id: "cibtp-taux-a-remplir",
                showIf: { all: ["cibtp-oui"] },
                label: `
            <div class="formula formula-example">
              <div style="margin-top:10px;">
                <label style="font-weight:600;">
                  Taux CIBTP – congés payés (%):
                  <input 
                    type="text"
                    data-field="cibtp_taux"
                    inputmode="decimal"
                    pattern="[0-9]+([.,][0-9]+)?"
                    placeholder="Ex : 20,40"
                    style="
                      width:90px;
                      margin-left:6px;
                      padding:4px 6px;
                      border-radius:6px;
                      border:1px solid #ccc;
                    "
                  />
                </label>
              </div>
            </div>
          `,
              },

              // ✅ Rappel assiette (sans lien)
              {
                id: "cibtp-assiette-reminder",
                showIf: { all: ["cibtp-oui"] },
                label: `
            <div class="formula formula-reminder">
              <p class="formula-title">🧠 Assiette</p>
              <p class="formula-content">
                La cotisation congés payés CIBTP est calculée sur une
                <b>assiette spécifique BTP</b> (base congés payés),
                définie par la réglementation et la caisse compétente.
              </p>
            </div>
          `,
              },
            ],
          },

          // ✅ 2) Mémo (si OUI) — (ID différent pour éviter doublon)
          {
            id: "cibtp-memo",
            type: "info",
            title: "Paramètres à relever (si CIBTP = OUI)",
            items: [
              {
                id: "cibtp-memo-info",
                showIf: { all: ["cibtp-oui"] },
                label:
                  "Relever sur le site de la caisse : taux congés payés, assiette applicable, modalités de déclaration/paiement (selon caisse).",
                reminder:
                  "Point examen : le taux est publié par la caisse compétente (pas par l’URSSAF).",
              },
            ],
          },

          // ✅ 3) Liens (toujours visibles) — APRÈS le taux
          {
            id: "cibtp-liens",
            type: "info",
            items: [
              {
                id: "cibtp-carte-conges",
                label: "Carte cours : CIBTP — Congés dans le BTP.",
                linkHash: "#/btp/cibtp-conges",
                linkLabel: "📘 Ouvrir la carte CIBTP — Congés",
              },
              {
                id: "cibtp-site",
                label: "Réseau national CIBTP (accès général).",
                linkUrl: "https://www.cibtp.fr",
                linkLabel: "🔗 CIBTP (site national)",
              },
            ],
          },
        ],
      },

      // ✅ 9) INTEMPÉRIES BTP — régime légal (CIC-BTP)
      {
        id: "cic-btp",
        label: "Intempéries BTP (CIC-BTP)",
        explain:
          "En cas d’arrêt de chantier dû à la météo, le régime légal des intempéries BTP s’applique : l’employeur avance l’indemnité au salarié puis est remboursé partiellement par la caisse.",
        reminder: "Réflexe paie : intempéries ≠ activité partielle ≠ absence simple.",
        followups: [
          {
            id: "cic-affiliation",
            title: "L’entreprise est-elle affiliée au régime intempéries BTP ?",
            type: "radio",
            items: [
              {
                id: "cic-non",
                label: "Non / je ne sais pas",
                explain:
                  "Toute entreprise du BTP employant des ouvriers de chantier est en principe affiliée au régime intempéries.",
                reminder: "Vérifier l’affiliation via la caisse CIBTP compétente.",
              },
              {
                id: "cic-oui",
                label: "Oui",
                reminder:
                  "OK : le régime intempéries peut être mobilisé en cas d’arrêt météo.",
              },
            ],
          },

          // ✅ 1) Ticket TAUX — JUSTE SOUS LE “OUI”
          {
            id: "cic-ticket",
            type: "info",
            title: "Indiquer le taux intempéries applicable",
            items: [
              {
                id: "cic-ticket-info",
                showIf: { all: ["cic-oui"] },
                label:
                  "Renseigner le taux de cotisation intempéries publié par la caisse CIBTP compétente.",
                reminder:
                  "Point examen : le taux dépend de la caisse et des arrêtés applicables.",
              },

              {
                id: "cic-taux-a-remplir",
                showIf: { all: ["cic-oui"] },
                label: `
            <div class="formula formula-example">
              <div style="margin-top:10px;">
                <label style="font-weight:600;">
                  Taux intempéries (%):
                  <input 
                    type="text" 
                    data-field="cic_taux"
                    inputmode="decimal"
                    pattern="[0-9]+([.,][0-9]+)?"
                    placeholder="Ex : 0,68"
                    style="
                      width:90px;
                      margin-left:6px;
                      padding:4px 6px;
                      border-radius:6px;
                      border:1px solid #ccc;
                    "
                  />
                </label>
              </div>
            </div>
          `,
              },

              {
                id: "cic-assiette-reminder",
                showIf: { all: ["cic-oui"] },
                label: `
            <div class="formula formula-reminder">
              <p class="formula-title">🧠 Assiette</p>
              <p class="formula-content">
                La cotisation intempéries est une <b>cotisation patronale</b>,
                principalement assise sur les <b>salaires des ouvriers</b>.
                L’assiette exacte dépend des règles du régime intempéries.
              </p>
            </div>
          `,
              },
            ],
          },

          // ✅ 2) Bloc INFO — liens + rappels (APRÈS le ticket taux)
          {
            id: "cic-liens",
            type: "info",
            items: [
              {
                id: "cic-carte-intemperies",
                label: "Carte cours : Intempéries BTP (paiement & gestion).",
                linkHash: "#/btp/intemperies-btp",
                linkLabel: "🌧️ Ouvrir la carte Intempéries BTP",
              },
              {
                id: "cic-cibtp-ref",
                label: "Référence officielle (réseau CIBTP).",
                linkUrl: "https://www.cibtp.fr",
                linkLabel: "🔗 CIBTP (site officiel)",
              },
              {
                id: "cic-urssaf-dispositif",
                label: "Présentation URSSAF du dispositif (employeur).",
                linkUrl:
                  "https://www.urssaf.fr/accueil/employeur/reduire-cesser-activite/dispositif-chomage-intemperies.html",
                linkLabel: "🔗 URSSAF — Chômage intempéries BTP",
              },
              {
                id: "cic-legifrance-base",
                label: "Base légale (Code du travail — Intempéries BTP).",
                linkUrl:
                  "https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006072050/LEGISCTA000018496414/",
                linkLabel: "📘 Légifrance — Code du travail (intempéries BTP)",
              },
              {
                id: "cic-cibtp-salarie",
                label: "Explications CIBTP (salarié) — indemnisation / carence.",
                linkUrl:
                  "https://www.cibtp-idf.fr/salarie/chomage-intemperies/votre-indemnisation",
                linkLabel: "🔗 CIBTP IDF — Votre indemnisation",
              },
              {
                id: "cic-remboursement-exemple",
                label: "Exemple : remboursement employeur (illustration régionale).",
                linkUrl:
                  "https://www.cibtp-sud-ouest.fr/entreprise/chomage-intemperies/remboursement-a-lentreprise",
                linkLabel: "🔗 CIBTP Sud-Ouest — Remboursement",
              },
              {
                id: "cic-plafonds-ss",
                label: "Plafonds de Sécurité sociale (pour le plafond du Sh).",
                linkUrl:
                  "https://www.urssaf.fr/accueil/outils-documentation/taux-baremes/plafonds-securite-sociale.html",
                linkLabel: "🔗 URSSAF — Plafonds SS",
              },
            ],
          },
        ],
      },



      // ✅ 10) OPPBTP — Prévention (obligatoire BTP)
      {
        id: "oppbtp",
        label: "OPPBTP — Prévention des risques (cotisation BTP)",
        explain:
          "En BTP, l’OPPBTP (prévention des risques) est financé par une cotisation patronale obligatoire. Le circuit est spécifique BTP (appel via caisse).",
        reminder:
          "Réflexe : BTP = OPPBTP. Vérifier le taux annuel sur source officielle et le circuit d’appel via la caisse.",
        followups: [
          // 🔹 Question principale (sécurise le raisonnement)
          {
            id: "oppbtp-choice",
            title: "L’entreprise relève-t-elle bien du secteur BTP (donc OPPBTP applicable) ?",
            type: "radio",
            items: [
              {
                id: "oppbtp-non",
                label: "Non / hors champ BTP",
                reminder:
                  "Si l’entreprise n’est pas dans le champ BTP, OPPBTP ne s’applique pas. Revoir le contexte (activité réelle / champ BTP).",
              },
              {
                id: "oppbtp-oui",
                label: "Oui (BTP)",
                explain:
                  "OPPBTP = obligation légale (prévention). Cotisation patronale à paramétrer selon le taux annuel officiel.",
                reminder:
                  "BTP = OPPBTP (prévention). Charge employeur.",
              },
            ],
          },

          // ✅ Ticket — taux (uniquement si OPPBTP = OUI)
          {
            id: "oppbtp-ticket",
            type: "info",
            title: "Indiquer le taux OPPBTP applicable",
            items: [
              {
                id: "oppbtp-ticket-info",
                showIf: { all: ["oppbtp-oui"] },
                label:
                  "Renseigner le taux annuel officiel (fixé réglementairement).",
                reminder:
                  "Réflexe : vérifier le taux sur une source officielle à jour (OPPBTP / Légifrance).",
              },
              {
                id: "oppbtp-taux-a-remplir",
                showIf: { all: ["oppbtp-oui"] },
                label: `
                  <div class="formula formula-example">
                    <div style="margin-top:10px;">
                      <label style="font-weight:600;">
                        Taux OPPBTP (%):
                        <input 
                          type="text"
                          data-field="oppbtp_taux"
                          inputmode="decimal"
                          pattern="[0-9]+([.,][0-9]+)?"
                          placeholder="Ex : 0,11"
                          style="
                            width:90px;
                            margin-left:6px;
                            padding:4px 6px;
                            border-radius:6px;
                            border:1px solid #ccc;
                          "
                        />
                      </label>
                    </div>
                  </div>
                `,
              },

              {
                id: "oppbtp-circuit-reminder",
                showIf: { all: ["oppbtp-oui"] },
                label: `
                  <div class="formula formula-reminder">
                    <p class="formula-title">🧠 Circuit BTP</p>
                    <p class="formula-content">
                      La cotisation OPPBTP est <b>appelée via la caisse CIBTP</b> (circuit BTP).
                      La DSN peut intervenir selon les situations (ex. intérim), mais la logique centrale reste celle des caisses.
                    </p>
                  </div>
                `,
              },
            ],
          },

          // 🔹 Liens (toujours visibles si OPPBTP = OUI)
          {
            id: "oppbtp-liens",
            type: "info",
            items: [
              {
                id: "oppbtp-carte",
                showIf: { all: ["oppbtp-oui"] },
                label: "Carte cours : OPPBTP — Prévention des risques BTP.",
                linkHash: "#/btp/oppbtp",
                linkLabel: "📘 Ouvrir la carte OPPBTP",
              },
              {
                id: "oppbtp-legifrance",
                showIf: { all: ["oppbtp-oui"] },
                label: "Base légale (Code du travail — art. R.4642-1).",
                linkUrl:
                  "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000043909039",
                linkLabel: "📘 Légifrance — R.4642-1",
              },
              {
                id: "oppbtp-site",
                showIf: { all: ["oppbtp-oui"] },
                label: "Site officiel OPPBTP (rubriques entreprises / cotisations).",
                linkUrl: "https://www.oppbtp.com",
                linkLabel: "🔗 OPPBTP — site officiel",
              },
              {
                id: "oppbtp-legifrance-taux",
                showIf: { all: ["oppbtp-oui"] },
                label: "Arrêtés fixant le taux annuel (recherche Légifrance).",
                linkUrl: "https://www.legifrance.gouv.fr",
                linkLabel: "🔎 Légifrance — rechercher « taux cotisation OPPBTP »",
              },
            ],
          },
        ],
      },

      // ✅ 🔙 NAVIGATION — bas de page
      {
        id: "btp-checklist-navigation",
        type: "info",
        items: [
          {
            id: "retour-module-btp",
            label: "🔙 Retour au module BTP",
            linkHash: "#/btp",
          },
          {
            id: "retour-accueil",
            label: "🏠 Retour à l’accueil (cartes)",
            linkHash: "#/",
          },
        ],
      },
    ],
  },
];
