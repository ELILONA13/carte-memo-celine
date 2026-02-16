// src/data/obligationsCards.js
export const obligationsCards = [
  // =========================================================
  // 1) CARTE "MENU" (module Obligations)
  // =========================================================
  {
    id: "obligations-entreprise",
    group: "main",
    title: "Obligations de l’entreprise",
    content: `
      <div class="formula formula-reminder">
        <p class="formula-title">🎯 Objectif</p>
        <p class="formula-content">
          Cette carte regroupe les principales obligations légales de l’employeur,
          indépendamment du secteur d’activité ou du type de salarié.
        </p>
      </div>

      <!-- ✅ Ici on injecte automatiquement les boutons (via main.js) -->
      <div id="obligations-buttons" class="mini-grid"></div>
    `,
  },

  // =========================================================
  // 2) SOUS-CARTE : CSE
  // =========================================================
  {
  id: "cse",
  group: "obligations",
  title: "CSE (Comité Social et Économique)",
  content: `
    <div class="formula formula-reminder">
      <p class="formula-title">🎯 Objectif</p>
      <p class="formula-content">
        Comprendre <b>quand</b> le CSE devient obligatoire, <b>quelle est l’obligation exacte</b> de l’employeur,
        et comment sécuriser la conformité (élections / PV de carence).
      </p>
    </div>

    <div class="formula formula-reminder">
      <p class="formula-title">1️⃣ Principe général</p>
      <p class="formula-content">
        Le <b>Comité Social et Économique (CSE)</b> est l’instance représentative du personnel dans l’entreprise.<br>
        Il a remplacé les anciennes instances (<b>DP</b>, <b>CE</b>, <b>CHSCT</b>).<br><br>
        👉 Ce n’est pas une option : c’est une <b>obligation légale</b> déclenchée par l’effectif.
      </p>
    </div>

    <div class="check-link">
      <a href="https://www.service-public.fr/particuliers/vosdroits/F34474" target="_blank" rel="noopener noreferrer">
        👉 CSE (Service-public)
      </a>
    </div>

    <div class="formula formula-reminder">
      <p class="formula-title">2️⃣ Condition essentielle : l’effectif</p>
      <p class="formula-content">
        Le CSE devient obligatoire lorsque l’entreprise atteint <b>au moins 11 salariés</b>
        pendant <b>12 mois consécutifs</b>.<br><br>
        ✅ Deux éléments indissociables :<br>
        • <b>11 salariés minimum</b><br>
        • <b>pendant 12 mois consécutifs</b>
      </p>
    </div>

    <div class="check-link">
      <a href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000035609353" target="_blank" rel="noopener noreferrer">
        👉 Code du travail — Seuil 11 / 12 mois (Légifrance)
      </a>
    </div>

    <div class="formula formula-warn">
      <p class="formula-title">🔹 Règle du “compteur des 12 mois” (point clé RH)</p>
      <p class="formula-content">
        ✅ Si l’entreprise est à <b>11 salariés pendant 10 mois</b>, puis repasse à <b>10 salariés un seul mois</b>,<br>
        ➡️ <b>le compteur repart à zéro</b>.<br><br>
        Il faudra à nouveau <b>12 mois consécutifs ≥ 11</b> pour déclencher l’obligation.
      </p>
    </div>

    <div class="formula formula-reminder">
      <p class="formula-title">3️⃣ Comment calcule-t-on l’effectif ?</p>
      <p class="formula-content">
        L’effectif ne se calcule pas “au feeling”.<br>
        Il existe des règles légales précises (CDI, CDD proratisés, temps partiel, intérim…).<br><br>
        👉 En tant qu’employeur / RH, il faut pouvoir <b>justifier</b> le calcul.
      </p>
    </div>

    <div class="check-link">
      <a href="https://travail-emploi.gouv.fr/les-regles-de-decompte-des-effectifs" target="_blank" rel="noopener noreferrer">
        👉 Règles officielles de décompte des effectifs (Travail-emploi.gouv.fr)
      </a>
    </div>

    <div class="check-link">
      <a href="https://www.service-public.fr/professionnels-entreprises/vosdroits/F31415" target="_blank" rel="noopener noreferrer">
        👉 Effectif de l’entreprise : règles de calcul (Service-public pro)
      </a>
    </div>

    <div class="formula formula-warn">
      <p class="formula-title">4️⃣ Obligation exacte de l’employeur</p>
      <p class="formula-content">
        ⚠️ Point essentiel :<br>
        👉 L’obligation de l’employeur n’est <b>PAS</b> d’avoir des élus.<br>
        👉 L’obligation de l’employeur est <b>d’ORGANISER les élections</b>.
      </p>
    </div>

    <div class="check-link">
      <a href="https://code.travail.gouv.fr/fiche-service-public/elections-du-cse-dans-les-entreprises-de-11-salaries-et-plus" target="_blank" rel="noopener noreferrer">
        👉 Élections du CSE (Code du travail numérique)
      </a>
    </div>

    <div class="formula formula-reminder">
      <p class="formula-title">5️⃣ Procédure employeur : mise en place</p>
      <p class="formula-content">
        <b>Étape 1 — Constater le seuil</b><br>
        • Vérifier que l’effectif ≥ 11 a été atteint pendant 12 mois consécutifs<br>
        • Conserver la preuve du calcul<br><br>
        <b>Étape 2 — Lancer les élections</b><br>
        • Information des salariés<br>
        • Calendrier électoral<br>
        • Invitation des OS à négocier le PAP (selon les cas)
      </p>
    </div>

    <div class="check-link">
      <a href="https://travail-emploi.gouv.fr/sites/travail-emploi/files/files-spip/pdf/comment_mettre_en_place_le_cse_au_sein_de_votre_entreprise_11_a_49_salaries.pdf" target="_blank" rel="noopener noreferrer">
        👉 Guide officiel : mettre en place le CSE (11 à 49 salariés) — PDF
      </a>
    </div>

    <div class="formula formula-example">
      <p class="formula-title">6️⃣ Et s’il n’y a AUCUN candidat ?</p>
      <p class="formula-content">
        👉 Très fréquent, surtout dans les petites entreprises.<br>
        👉 Ce n’est pas une faute de l’employeur, si la procédure est respectée.<br><br>
        Déroulement :<br>
        • Aucun candidat au 1er tour<br>
        • Aucun candidat au 2e tour<br>
        ➡️ Établir un <b>procès-verbal de carence</b>.
      </p>
    </div>

    <div class="formula formula-warn">
      <p class="formula-title">7️⃣ PV de carence : rôle et preuve</p>
      <p class="formula-content">
        Le PV de carence prouve que :<br>
        • les élections ont été organisées,<br>
        • mais qu’aucun salarié ne s’est porté candidat.<br><br>
        ✅ Avec un PV de carence valide, l’employeur est <b>couvert</b>.<br><br>
        Cerfa : <b>15248*06</b> — Procès-verbal de carence.<br>
        Il doit être établi, porté à la connaissance des salariés et conservé.
      </p>
    </div>

    <div class="check-link">
      <a href="https://entreprendre.service-public.fr/vosdroits/R56454" target="_blank" rel="noopener noreferrer">
        👉 PV de carence (Service-public pro)
      </a>
    </div>

    <div class="formula formula-warn">
      <p class="formula-title">8️⃣ Si rien n’est fait</p>
      <p class="formula-content">
        Si l’entreprise est bien à ≥ 11 salariés pendant 12 mois, et que :<br>
        • aucun CSE n’est mis en place,<br>
        • et aucun PV de carence n’existe,<br>
        ➡️ l’employeur est en situation de <b>non-respect</b>.<br><br>
        Risques : contentieux, sanctions, et parfois <b>délit d’entrave</b>.
      </p>
    </div>

    <div class="check-link">
      <a href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000035634273" target="_blank" rel="noopener noreferrer">
        👉 Base légale : délit d’entrave (Légifrance)
      </a>
    </div>

    <div class="formula formula-reminder">
      <p class="formula-title">9️⃣ Impact en paie / gestion RH</p>
      <p class="formula-content">
        Le CSE n’entraîne pas automatiquement une ligne de cotisation sur le bulletin.<br>
        Mais c’est un point de <b>conformité RH</b> obligatoire.<br><br>
        À sécuriser :<br>
        • Méthode de calcul de l’effectif<br>
        • Historique des 12 mois<br>
        • PV d’élections ou PV de carence
      </p>
    </div>

    <div class="formula formula-formula">
      <p class="formula-title">✅ Synthèse “à retenir”</p>
      <p class="formula-content">
        • CSE obligatoire si effectif ≥ 11 pendant 12 mois consécutifs<br>
        • Un mois < 11 = compteur remis à zéro<br>
        • Obligation employeur = organiser les élections (pas d’avoir des élus)<br>
        • Aucun candidat → PV de carence → employeur couvert<br>
        • Sans CSE ni PV de carence → non-conformité
      </p>
    </div>

    <div class="formula formula-example">
      <p class="formula-title">✅ Texte “SAISO” (rappel court)</p>
      <p class="formula-content">
        • CSE obligatoire si effectif ≥ 11 pendant 12 mois consécutifs.<br>
        • Obligation employeur : organiser les élections, pas “créer un CSE coûte que coûte”.<br>
        • Si aucune candidature (1er et 2e tour) → PV de carence : l’entreprise peut ne pas avoir de CSE si la procédure a été faite.<br>
        ➡️ Entreprise sans CSE ≠ forcément en faute : carence de candidatures (PV de carence).
      </p>
    </div>

    <div class="formula formula-reminder">
      <p class="formula-title">🟩 Encadré vert (APAS) — à vérifier avant le bulletin</p>
      <p class="formula-content">
        <b>APAS / action sociale BTP</b><br>
        • Vérifier si une cotisation APAS est imposée par un accord régional (selon la zone de l’établissement).<br>
        • En PACA (Bouches-du-Rhône / Aix-Marseille) : accord régional → cotisation APAS <b>0,13 %</b> des salaires bruts, à la charge de l’employeur, collectée via la caisse de congés payés BTP (CIBTP).<br>
        • Cette cotisation peut être <b>hors bulletin</b> (appelée via la caisse) : son absence sur le bulletin n’est pas forcément une erreur.
      </p>
    </div>
  `,
 },
];
