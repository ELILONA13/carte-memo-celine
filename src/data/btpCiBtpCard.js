// src/data/btpCiCard.js
export const btpCiBtpCard = {
    id: "ci-btp-intemperies",
    group: "btp-bulletin",
    title: "Chômage intempéries du BTP (CI-BTP)",
  content: `
    <div class="formula formula-reminder">
      <p class="formula-title">🧠 Objectif</p>
      <p class="formula-content">
        Comprendre le régime <b>chômage intempéries</b> du BTP (CIC-BTP / réseau CIBTP),
        l’affiliation obligatoire, le fonctionnement (employeur → salarié → remboursement),
        et <b>où vérifier le taux officiel</b>.
      </p>
    </div>

    <h3>1️⃣ Définition</h3>
    <p style="text-align:center;">
      Le <b>chômage intempéries</b> est un <b>régime spécial légal</b> propre au BTP,
      qui indemnise les heures non travaillées lorsque la météo rend le travail
      impossible ou dangereux sur chantier (pluie, gel, neige, canicule exceptionnelle…).
    </p>

    <div class="formula formula-warn">
      <p class="formula-title">⚠️ Vigilance</p>
      <p class="formula-content">
        Ce régime <b>n’est pas</b> l’activité partielle de droit commun.
      </p>
    </div>

    <ul class="centered-list">
      <li>
        🔗 <b>Page officielle – Chômage intempéries (CIBTP France)</b><br/>
        <a href="https://www.cibtp.fr/missions-metiers/chomage-intemperies" target="_blank" rel="noreferrer">
          https://www.cibtp.fr/missions-metiers/chomage-intemperies
        </a>
      </li>
    </ul>

    <h3>2️⃣ Entreprises concernées (affiliation)</h3>
    <p style="text-align:center;">
      Sont concernées les entreprises relevant du <b>secteur BTP</b> dès lors qu’elles emploient
      des salariés exposés aux intempéries (principalement les ouvriers de chantier).
    </p>

    <ul class="centered-list bullets">
      <li>Affiliation <b>obligatoire</b></li>
      <li>Affiliation <b>automatique</b> (pas un choix employeur)</li>
      <li>Indépendante de l’effectif</li>
      <li><b>Distincte</b> de l’affiliation CIBTP « congés payés »</li>
    </ul>

    <ul class="centered-list">
      <li>
        🔗 <b>Accès aux caisses CIBTP (réseau / caisse compétente)</b><br/>
        <a href="https://www.cibtp.fr/caisses" target="_blank" rel="noreferrer">
          https://www.cibtp.fr/caisses
        </a>
      </li>
    </ul>

    <h3>3️⃣ Salariés couverts</h3>
    <p style="text-align:center;">
      En pratique, le régime vise principalement les <b>ouvriers de chantier</b>.
      Les ETAM / cadres sont en principe exclus, sauf cas très particuliers.
    </p>

    <ul class="centered-list bullets">
      <li><b>Ouvriers de chantier</b> : ✅ OUI (cœur du dispositif)</li>
      <li>ETAM / cadres : ❌ en principe NON (sauf cas très spécifiques)</li>
    </ul>

    <div class="formula formula-reminder">
      <p class="formula-title">📌 Logique examen</p>
      <p class="formula-content">« Intempéries = ouvriers de chantier »</p>
    </div>

    <h3>4️⃣ Fonctionnement (schéma paie)</h3>
    <p style="text-align:center;">
      L’indemnité est versée par l’employeur au salarié via la paie, puis l’employeur est remboursé par la caisse,
      sous conditions et plafonds.
    </p>

    <ol class="centered-list bullets">
      <li>L’employeur constate l’arrêt du chantier (météo dangereuse / impossible).</li>
      <li>Le salarié perçoit une <b>indemnité intempéries</b> (versée par l’employeur via la paie).</li>
      <li>L’employeur est <b>remboursé</b> par la caisse CIBTP, sous conditions et plafonds.</li>
    </ol>

    <div class="formula formula-formula">
      <p class="formula-title">✅ Schéma à retenir</p>
      <p class="formula-content"><b>Employeur → verse indemnité → CIBTP rembourse</b></p>
    </div>

    <h3>5️⃣ Cotisation intempéries</h3>
    <p style="text-align:center;">
      La cotisation « intempéries » est une cotisation <b>patronale</b> destinée à financer le régime.
      Elle est assise principalement sur les salaires des ouvriers.
    </p>

    <ul class="centered-list bullets">
      <li><b>Patronale uniquement</b></li>
      <li>Assise principalement sur les <b>salaires des ouvriers</b></li>
      <li>Finance le régime intempéries</li>
    </ul>

    <h3>6️⃣ Qui fixe les taux ? (point clé)</h3>
    <p style="text-align:center;">
      Les taux de cotisation intempéries sont fixés dans un <b>cadre légal</b>
      et publiés via les sources officielles du réseau CIBTP.
    </p>

    <div class="formula formula-warn">
      <p class="formula-title">🚫 Ce n’est pas…</p>
      <p class="formula-content">
        Ce n’est <b>pas</b> l’URSSAF • ce n’est <b>pas</b> l’entreprise • ce n’est <b>pas</b> un accord local seul.
      </p>
    </div>

    <ul class="centered-list">
      <li>
        🔗 <b>Vérifier le taux applicable (source pratique)</b><br/>
        <a href="https://www.cibtp.fr/caisses" target="_blank" rel="noreferrer">
          https://www.cibtp.fr/caisses
        </a>
      </li>
    </ul>

    <ul class="centered-list">
      <li>
        🔗 <b>Recherche des arrêtés au Journal officiel (Légifrance)</b><br/>
        <a href="https://www.legifrance.gouv.fr/jorf/recherche" target="_blank" rel="noreferrer">
          https://www.legifrance.gouv.fr/jorf/recherche
        </a><br/>
        <span style="opacity:.9;">Mots-clés : “chômage intempéries BTP” / “arrêté cotisation intempéries”.</span>
      </li>
    </ul>

    <ul class="centered-list">
      <li>
        🔗 <b>Base légale (Code du travail – section intempéries)</b><br/>
        <a href="https://www.legifrance.gouv.fr/codes/id/LEGISCTA000006177947/" target="_blank" rel="noreferrer">
          https://www.legifrance.gouv.fr/codes/id/LEGISCTA000006177947/
        </a>
      </li>
    </ul>

    <div class="formula formula-reminder">
      <p class="formula-title">🧠 Phrase type examen</p>
      <p class="formula-content">
        « Toute entreprise du BTP employant des ouvriers est affiliée au régime intempéries.
        L’indemnité est versée par l’employeur via la paie puis remboursée par la caisse.
        Le taux doit être vérifié sur les sources officielles du réseau CIBTP et les textes au JO. »
      </p>
    </div>
  `,
};
