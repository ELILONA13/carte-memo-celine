// src/data/baseTranchesPlafondSecuriteSocialeCard.js

export const baseTranchesPlafondSecuriteSocialeCard = {
    id: "base-tranches-plafond-securite-sociale",
    group: "referentiel",
    title: "Tranches et plafond de Sécurité sociale (PSS / PMSS / PASS) — 2026",
    content: `

  <p style="text-align:center;"><b>📘 Les tranches et le plafond de la Sécurité sociale</b></p>
  <p style="text-align:center;">(PSS / PMSS / PASS) — version complète 2026 — cours / examen + pratique paie</p>

  <h3>1️⃣ Définition : à quoi sert le plafond de la Sécurité sociale ?</h3>

  <p style="text-align:center;">
    Le <b>plafond de la Sécurité sociale</b> est un <b>montant de référence</b> fixé par les pouvoirs publics et <b>réactualisé au 1er janvier</b> de chaque année.
    Il sert :
  </p>

  <ul class="centered-list bullets">
    <li>de <b>base</b> (ou de <b>limite</b>) pour le calcul de <b>certaines cotisations</b>,</li>
    <li>et de repère pour le calcul de <b>certaines prestations</b> (IJ, pensions, etc.).</li>
  </ul>

  <div class="formula formula-reminder">
    <p class="formula-title">➡️ Idée clé paie</p>
    <p class="formula-content">
      Certaines cotisations sont <b>plafonnées</b> : on ne calcule <b>pas</b> au-delà du plafond, même si le salaire brut est plus élevé.
    </p>
  </div>

  <div class="formula formula-reminder">
    <p class="formula-title">🔗 Référence officielle (plafond SS)</p>
    <p class="formula-content" style="text-align:center;">
      <a href="https://www.ameli.fr/entreprise/vos-salaries/montants-reference/plafond-securite-sociale" target="_blank" rel="noreferrer">
        https://www.ameli.fr/entreprise/vos-salaries/montants-reference/plafond-securite-sociale
      </a>
    </p>
  </div>

  <h3>2️⃣ Les montants du plafond en 2026 (PASS / PMSS et déclinaisons)</h3>

  <h3>2️⃣ A) Valeurs officielles 2026 (France “générale”)</h3>

  <p style="text-align:center;">Pour l’année <b>2026</b> :</p>

  <ul class="centered-list bullets">
    <li><b>PASS (plafond annuel)</b> : <b>48 060 €</b></li>
    <li><b>Plafond trimestriel</b> : <b>12 015 €</b></li>
    <li><b>PMSS (plafond mensuel)</b> : <b>4 005 €</b></li>
    <li><b>Plafond hebdomadaire</b> : <b>924 €</b></li>
    <li><b>Plafond journalier</b> : <b>220 €</b></li>
    <li><b>Plafond horaire</b> : <b>30 €</b></li>
  </ul>

  <div class="formula formula-reminder">
    <p class="formula-title">📌 Base juridique (fixation 2026)</p>
    <p class="formula-content" style="text-align:center;">
      Arrêté du <b>22 décembre 2025</b> (JO) : valeur <b>mensuelle 4 005 €</b> et <b>journalière 220 €</b>, applicable aux périodes d’activité à compter du <b>1er janvier 2026</b>.<br>
      <a href="https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000053143451" target="_blank" rel="noreferrer">
        https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000053143451
      </a>
    </p>
  </div>

  <div class="formula formula-reminder">
    <p class="formula-title">📌 Référence “procédure / cadre” (code)</p>
    <p class="formula-content" style="text-align:center;">
      Article <b>D.242-17</b> du Code de la sécurité sociale (procédure de fixation du plafond).<br>
      <a href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000043870904" target="_blank" rel="noreferrer">
        https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000043870904
      </a>
    </p>
  </div>

  <h3>2️⃣ B) Valeur “quinzaine” (utile en paie non mensualisée)</h3>

  <ul class="centered-list bullets">
    <li><b>Quinzaine 2026</b> : <b>2 003 €</b> (usage pratique de conversion de périodicité)</li>
  </ul>

  <div class="formula formula-reminder">
    <p class="formula-title">✅ Réflexe logiciel de paie</p>
    <p class="formula-content">
      Vérifier que <b>PMSS/PASS 2026</b> sont bien à jour en paramètres (sinon toutes les tranches plafonnées sont fausses).
    </p>
  </div>

  <h3>3️⃣ Le principe des assiettes plafonnées (comment on “s’arrête” au plafond)</h3>

  <p style="text-align:center;">
    Certaines cotisations sont calculées <b>dans la limite</b> du plafond.
  </p>

  <div class="formula formula-example">
    <p class="formula-title">Exemple : assurance vieillesse plafonnée (logique de la tranche “plafonnée”)</p>
    <p class="formula-content" style="text-align:center;">
      <b>PMSS 2026 = 4 005 €</b>.<br>
      Si un salarié a un <b>brut mensuel = 6 200 €</b>, alors la cotisation plafonnée est calculée sur <b>4 005 €</b>, pas sur 6 200 €.<br><br>
      ➡️ <b>Formulation examen</b> : “La base plafonnée est limitée au PMSS.”
    </p>
  </div>

  <h3>4️⃣ Tranches : comprendre TA/TB (logique plafond URSSAF) vs T1/T2 (logique AGIRC-ARRCO)</h3>

  <h3>4️⃣ A) Tranches “plafond” côté URSSAF / prévoyance / APEC (réflexe 4 PMSS)</h3>

  <p style="text-align:center;">
    En paie, on rencontre souvent un découpage basé sur des <b>multiples de PMSS</b> (souvent jusqu’à <b>4 PMSS</b>).
  </p>

  <ul class="centered-list bullets">
    <li><b>TA (tranche A)</b> : de <b>0 à 1 PMSS</b></li>
    <li><b>TB (tranche B)</b> : de <b>1 à 4 PMSS</b></li>
    <li>(parfois une tranche au-delà selon dispositifs, mais le repère fréquent est <b>4 PMSS</b>)</li>
  </ul>

  <div class="formula formula-reminder">
    <p class="formula-title">📌 Repères 2026</p>
    <p class="formula-content" style="text-align:center;">
      <b>1 PMSS = 4 005 €</b><br>
      <b>4 PMSS = 16 020 €</b><br>
      ➡️ Donc pour des cotisations limitées à <b>TA + TB</b>, l’assiette maximale = <b>16 020 €</b>.
    </p>
  </div>

  <h3>4️⃣ B) Tranches AGIRC-ARRCO : T1 / T2</h3>

  <p style="text-align:center;">
    Pour la retraite complémentaire <b>AGIRC-ARRCO</b> (cadres <b>et</b> non-cadres), on utilise :
  </p>

  <ul class="centered-list bullets">
    <li><b>T1</b> : de <b>0 à 1 PMSS</b> (0 → <b>4 005 €</b> / mois)</li>
    <li><b>T2</b> : de <b>1 à 8 PMSS</b> (<b>4 005 €</b> → <b>32 040 €</b> / mois)</li>
  </ul>

  <div class="formula formula-warn">
    <p class="formula-title">✅ À retenir</p>
    <p class="formula-content">
      <b>TA ≈ T1</b> (même limite : 1 PMSS).<br>
      Mais <b>TB (1→4 PMSS)</b> n’est <b>pas</b> la même chose que <b>T2 (1→8 PMSS)</b>.
    </p>
  </div>

  <h3>5️⃣ Répartir un salaire entre tranches (méthode examen)</h3>

  <div class="formula formula-example">
    <p class="formula-title">Exemple 1 (non-cadre) : salaire brut mensuel = 3 000 €</p>
    <p class="formula-content" style="text-align:center;">
      <b>T1 = 3 000,00 €</b><br>
      <b>T2 = 0,00 €</b><br>
      ➡️ Pas de dépassement du PMSS.
    </p>
  </div>

  <div class="formula formula-example">
    <p class="formula-title">Exemple 2 (non-cadre) : salaire brut mensuel = 15 000 €</p>
    <p class="formula-content" style="text-align:center;">
      <b>PMSS 2026 = 4 005 €</b><br>
      <b>T1 = 4 005,00 €</b><br>
      <b>T2 = 15 000,00 − 4 005,00 = 10 995,00 €</b>
    </p>

    <div class="table-grid" style="max-width:720px; margin:0 auto;">
      <div class="grid-row header">
        <div> </div>
        <div>T1</div>
        <div>T2</div>
        <div>Total</div>
      </div>
      <div class="grid-row">
        <div><b>Répartition du salaire brut</b></div>
        <div>4 005,00</div>
        <div>10 995,00</div>
        <div>15 000,00</div>
      </div>
    </div>
  </div>

  <h3>6️⃣ Ajuster / proratiser le plafond (mois incomplet, entrée/sortie, absence non rémunérée)</h3>

  <p style="text-align:center;">
    Le plafond <b>mensuel</b> doit être <b>réduit à due proportion</b> lorsque le salarié n’est pas employé / rémunéré sur toute la période.
  </p>

  <h3>6️⃣ A) Règle pratique (très utilisée en paie / DSN)</h3>

  <div class="formula formula-formula">
    <p class="formula-title">PMSS proratisé (mois incomplet / absence non rémunérée)</p>
    <p class="formula-content" style="text-align:center;">
      <b>PMSS proratisé = PMSS × (nombre de jours calendaires rémunérés / nombre de jours calendaires du mois)</b>
    </p>
  </div>

  <div class="formula formula-reminder">
    <p class="formula-title">📌 Point DSN (très concret)</p>
    <p class="formula-content" style="text-align:center;">
      “jours calendaires pris en compte pour le calcul du plafond” (exemples et règles).<br>
      <a href="https://www.net-entreprises.fr/media/documentation/dsn-rubrique-unite-de-mesure-valeur40.pdf" target="_blank" rel="noreferrer">
        https://www.net-entreprises.fr/media/documentation/dsn-rubrique-unite-de-mesure-valeur40.pdf
      </a>
    </p>
  </div>

  <div class="formula formula-example">
    <p class="formula-title">Exemple chiffré (arrondi au centime)</p>
    <p class="formula-content" style="text-align:center;">
      <b>PMSS 2026 = 4 005,00 €</b><br>
      Mois de <b>31 jours</b><br>
      Salarié rémunéré <b>18 jours</b> (absence non rémunérée sur 13 jours)<br><br>
      ➡️ PMSS proratisé = 4 005 × 18 / 31 = <b>2 325,48 €</b> (arrondi)
    </p>
  </div>

  <div class="formula formula-warn">
    <p class="formula-title">⚠️ Piège examen</p>
    <p class="formula-content">
      Une <b>absence non rémunérée</b> diminue le plafond, donc diminue la part de salaire soumise aux cotisations plafonnées.
    </p>
  </div>

  <h3>7️⃣ Simulations “bases de calcul” — logique complète (entreprise + salarié)</h3>

  <p style="text-align:center;">
    Objectif : relier <b>salaire</b>, <b>PMSS</b>, <b>tranches</b>, <b>CSG</b>, <b>seuils en SMIC</b>, et <b>plafonds multiples (4 PMSS)</b>.
  </p>

  <h3>7️⃣ Référence SMIC (pour les seuils 2,5 SMIC / 3,5 SMIC)</h3>

  <p style="text-align:center;">
    Au <b>1er janvier 2026</b> :<br>
    <b>SMIC horaire brut : 12,02 €</b><br>
    <b>SMIC mensuel brut (35h) : 1 823,03 €</b>
  </p>

  <p style="text-align:center;">
    Donc :<br>
    <b>2,5 SMIC mensuel</b> = 2,5 × 1 823,03 = <b>4 557,58 €</b><br>
    <b>3,5 SMIC mensuel</b> = 3,5 × 1 823,03 = <b>6 380,61 €</b>
  </p>

  <h3>✅ Simulation 1 — SARL COOL (5 salariés)</h3>

  <p style="text-align:center;">
    <b>Données :</b><br>
    Effectif : <b>5 salariés</b><br>
    AT/MP : <b>1,50 %</b><br>
    Pas de prévoyance complémentaire<br>
    Mutuelle : <b>70,00 €</b> (50 % salarié / 50 % employeur) ⇒ part patronale <b>35,00 €</b>
  </p>

  <h3>Salarié 1 : non-cadre — salaire brut 1 900 €</h3>

  <h3>A) Maladie (taux “réduit” sous 2,5 SMIC)</h3>

  <p style="text-align:center;">
    Le salaire (1 900) est <b>&lt; 4 557,58 €</b>, donc le repère “≤ 2,5 SMIC” est respecté.
  </p>

  <h3>B) Complément allocations familiales</h3>

  <p style="text-align:center;">
    Le salaire (1 900) est <b>&lt; 6 380,61 €</b>, donc pas de déclenchement “au-dessus de 3,5 SMIC”.
  </p>

  <h3>C) Base CSG/CRDS (avec mutuelle patronale)</h3>

  <p style="text-align:center;">
    Base = (salaire × 98,25 %) + part patronale mutuelle<br>
    = (1 900 × 98,25 %) + 35,00<br>
    = 1 866,75 + 35,00<br>
    = <b>1 901,75 €</b>
  </p>

  <h3>Salarié 2 : non-cadre — salaire brut 1 900 € + 5 heures supplémentaires</h3>

  <p style="text-align:center;">
    (On conserve la logique “heures supp”, TEPA, etc., comme repère de raisonnement paie.)
  </p>

  <p style="text-align:center;">
    Base CSG/CRDS (exemple chiffré) :<br>
    = (1 978,30 × 98,25 %) + 35,00 + 30,91<br>
    = <b>2 009,59 €</b>
  </p>

  <h3>Salarié 3 : non-cadre — salaire brut 4 000 €</h3>

  <ul class="centered-list bullets">
    <li>Salaire <b>proche du PMSS 2026 (4 005)</b> : <b>pas de T2</b> en AGIRC-ARRCO (car 4 000 ≤ 4 005)</li>
    <li>Toutes les cotisations “T1/TA” sont calculées sur <b>4 000 €</b>, pas sur 4 005.</li>
  </ul>

  <h3>Salarié 4 : cadre — salaire brut 4 000 €</h3>

  <p style="text-align:center;">
    Même logique de plafond que salarié 3, mais <b>attention CSG</b> : certaines contributions patronales “cadre” peuvent être <b>réintégrées</b> dans l’assiette CSG/CRDS selon les règles applicables (raisonnement identique : base CSG potentiellement <b>&gt;</b> au brut “simple”).
  </p>

  <h3>Salarié 5 : cadre — salaire brut 16 000 €</h3>

  <h3>A) Seuils SMIC</h3>

  <ul class="centered-list bullets">
    <li>16 000 &gt; 4 557,58 ⇒ repère “&gt; 2,5 SMIC”</li>
    <li>16 000 &gt; 6 380,61 ⇒ repère “&gt; 3,5 SMIC”</li>
  </ul>

  <h3>B) Plafonds multiples</h3>

  <p style="text-align:center;">
    <b>4 PMSS 2026 = 16 020 €</b><br>
    ➡️ Ici, <b>16 000 €</b> est <b>inférieur</b> à 4 PMSS : on ne “dépasse” pas la limite 4 PMSS.
  </p>

  <h3>C) Base CSG/CRDS (exemple pédagogique)</h3>

  <p style="text-align:center;">
    Base = (salaire × 98,25 %) + éléments patronaux réintégrés<br>
    = (16 000 × 98,25 %) + 35,00 + 57,96<br>
    = <b>15 812,96 €</b>
  </p>

  <div class="formula formula-warn">
    <p class="formula-title">📌 Piège examen à connaître</p>
    <p class="formula-content">
      L’abattement (1,75 %) n’est applicable que dans la limite d’un plafond (raisonnement par <b>multiples de plafond</b>).
      Quand le brut dépasse 4 PMSS, on doit “bloquer” la partie concernée à ce maximum (logique de cap).
    </p>
  </div>

  <h3>✅ Simulation 2 — SARL CARREDOR (58 salariés)</h3>

  <p style="text-align:center;">
    <b>Données :</b><br>
    Effectif : <b>58 salariés</b><br>
    AT/MP : 1,50 %<br>
    Versement mobilité : 2,00 %<br>
    Prévoyance complémentaire : oui (cadres + non-cadres)<br>
    Mutuelle : 60 € (50/50)
  </p>

  <h3>Salarié 3 : non-cadre — salaire brut 4 000 €</h3>

  <p style="text-align:center;">
    PMSS 2026 = 4 005<br>
    ➡️ <b>TA/T1 = 4 000</b> ; <b>T2 = 0</b> (pas de dépassement du plafond)
  </p>

  <h3>Salarié 5 : cadre — salaire brut 16 000 €</h3>

  <p style="text-align:center;">
    T1 = 4 005<br>
    T2 = 16 000 − 4 005 = 11 995<br>
    Certaines cotisations (ex : limitées à <b>TA+TB</b>, donc <b>4 PMSS</b>) seront plafonnées à <b>16 020 €</b>.
  </p>

  <h3>8️⃣ Pièges d’examen (à connaître par cœur)</h3>

  <ul class="centered-list bullets">
    <li><b>Confusion tranches</b> : <b>TA/TB (jusqu’à 4 PMSS)</b> ≠ <b>T1/T2 (jusqu’à 8 PMSS)</b>.</li>
    <li><b>Oubli de proratisation du plafond</b> : entrée/sortie, absence non rémunérée → plafond réduit.</li>
    <li><b>Croire qu’un non-cadre n’a jamais de T2</b> : Faux : T2 existe dès que salaire &gt; 1 PMSS.</li>
    <li><b>Oublier le repère “4 PMSS”</b> : de nombreuses assiettes “A+B” s’arrêtent à 4 PMSS (examen : on te teste là-dessus).</li>
    <li><b>Se tromper sur les seuils en SMIC (2,5 / 3,5)</b> : Toujours recalculer avec le <b>SMIC en vigueur</b> (ici 2026).</li>
  </ul>

  <h3>9️⃣ Liens officiels </h3>

  <div class="formula formula-reminder">
    <p class="formula-content" style="text-align:center;">
      Service-Public — Plafond Sécurité sociale 2026 :<br>
      <a href="https://www.service-public.gouv.fr/particuliers/actualites/A15386" target="_blank" rel="noreferrer">
        https://www.service-public.gouv.fr/particuliers/actualites/A15386
      </a><br><br>

      Ameli (entreprises) — Plafond Sécurité sociale 2026 + tableau + multiples :<br>
      <a href="https://www.ameli.fr/entreprise/vos-salaries/montants-reference/plafond-securite-sociale" target="_blank" rel="noreferrer">
        https://www.ameli.fr/entreprise/vos-salaries/montants-reference/plafond-securite-sociale
      </a><br><br>

      URSSAF — Actualité plafond annuel 2026 :<br>
      <a href="https://www.urssaf.fr/accueil/actualites/plafond-annuel-securite-sociale.html" target="_blank" rel="noreferrer">
        https://www.urssaf.fr/accueil/actualites/plafond-annuel-securite-sociale.html
      </a><br><br>

      BOSS — Actualité : plafond au 1er janvier 2026 :<br>
      <a href="https://boss.gouv.fr/portail/accueil/actualites-boss-et-rescrits/actualites-boss/2025/octobre/le-plafond-de-la-securite-social.html" target="_blank" rel="noreferrer">
        https://boss.gouv.fr/portail/accueil/actualites-boss-et-rescrits/actualites-boss/2025/octobre/le-plafond-de-la-securite-social.html
      </a><br><br>

      Légifrance — Arrêté du 22 décembre 2025 fixant le plafond (PMSS/journalier) :<br>
      <a href="https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000053143451" target="_blank" rel="noreferrer">
        https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000053143451
      </a><br><br>

      Légifrance — Code de la sécurité sociale, article D.242-17 :<br>
      <a href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000043870904" target="_blank" rel="noreferrer">
        https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000043870904
      </a><br><br>

      INSEE — SMIC (montants 2026) :<br>
      <a href="https://www.insee.fr/fr/statistiques/1375188" target="_blank" rel="noreferrer">
        https://www.insee.fr/fr/statistiques/1375188
      </a><br><br>

      URSSAF — Montant du SMIC (mise à jour 01/01/2026) :<br>
      <a href="https://www.urssaf.fr/accueil/outils-documentation/taux-baremes/montant-smic.html" target="_blank" rel="noreferrer">
        https://www.urssaf.fr/accueil/outils-documentation/taux-baremes/montant-smic.html
      </a>
    </p>
  </div>

  <p style="text-align:center;">
    <a href="#/referentiel/bases-calcul-cotisations">⬅ Retour “Dispositifs / bases-calcul-cotisations”</a>
  </p>

  `,
};
