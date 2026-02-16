// ✅ src/data/proratisationPssMultiEmployeursCard.js

export const proratisationPssMultiEmployeursCard = {
    id: "proratisation-pss-multi-employeurs",
    group: "referentiel",
    title: "Proratisation du plafond SS — multi-employeurs (2026)",
    content: `

  <p style="text-align:center;"><b>📘 La proratisation du plafond de la Sécurité sociale — salarié à multi-employeurs (2026)</b></p>
  <p style="text-align:center;"><b>Version complète “cours / examen” + pratique paie</b></p>

  <div class="formula formula-reminder">
    <p class="formula-title">✅ Objectif</p>
    <p class="formula-content">
      Savoir appliquer la <b>proratisation du plafond de la Sécurité sociale</b> pour un salarié ayant <b>plusieurs employeurs</b>, selon les <b>deux méthodes</b> (prorata des rémunérations / reconstitution “équivalent temps plein”), avec <b>exemples chiffrés</b> et <b>tableaux</b>.
    </p>
  </div>

  <h3>1️⃣ Rappel : c’est quoi le plafond de la Sécurité sociale (PSS / PMSS) ?</h3>

  <p style="text-align:center;">
    Le <b>plafond de la Sécurité sociale</b> est une <b>limite de rémunération</b> utilisée pour calculer certaines cotisations (ex. vieillesse plafonnée) et certaines tranches.
  </p>

  <ul class="centered-list bullets">
    <li><b>Référence de base en paie mensuelle : le plafond mensuel (PMSS).</b></li>
    <li>Il peut être <b>ajusté</b> (proratisé) selon la situation du salarié et/ou la période de paie.</li>
  </ul>

  <div class="formula formula-reminder">
    <p class="formula-title">✅ Valeur officielle 2026 (utile pour tes exemples)</p>
    <p class="formula-content">
      <b>PMSS 2026 = 4 005 €</b><br>
      <b>PASS 2026 = 48 060 €</b><br><br>
      Base juridique (fixation du plafond) : <b>Arrêté du 22 décembre 2025</b> (JO du 23/12/2025)<br>
      <a href="https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000053143451" target="_blank" rel="noreferrer">
        https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000053143451
      </a><br><br>
      Info BOSS :<br>
      <a href="https://boss.gouv.fr/portail/accueil/actualites-boss-et-rescrits/actualites-boss/2025/octobre/le-plafond-de-la-securite-social.html" target="_blank" rel="noreferrer">
        https://boss.gouv.fr/portail/accueil/actualites-boss-et-rescrits/actualites-boss/2025/octobre/le-plafond-de-la-securite-social.html
      </a>
    </p>
  </div>

  <h3>2️⃣ Principe : pourquoi on proratiserait le PMSS ?</h3>

  <p style="text-align:center;">
    Le <b>plafond mensuel</b> est la référence “standard”.<br>
    Mais il peut être <b>réduit à due proportion</b> (proratisé) dans plusieurs cas : entrée/sortie en cours de mois, paies infra-mensuelles, temps partiel, absences non rémunérées… et <b>cas particulier : salarié à employeurs multiples</b>.
  </p>

  <div class="formula formula-reminder">
    <p class="formula-title">📌 Base juridique générale (ajustements du plafond)</p>
    <p class="formula-content">
      <b>Code de la sécurité sociale, article R.242-2</b><br>
      <a href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000039222466" target="_blank" rel="noreferrer">
        https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000039222466
      </a>
    </p>
  </div>

  <h3>3️⃣ Cas “multi-employeurs” : règle de principe</h3>

  <p style="text-align:center;"><b>A) Quand un salarié a plusieurs employeurs</b></p>

  <p style="text-align:center;">
    Lorsqu’un employeur emploie un salarié <b>ayant plusieurs employeurs</b>, il peut <b>proratiser</b> le plafond mensuel <b>qui lui est applicable</b> afin de réaliser une <b>répartition du plafond</b> entre les employeurs.
  </p>

  <p style="text-align:center;">
    👉 <b>Condition pratique</b> : cela suppose que l’employeur ait <b>connaissance de la rémunération</b> du salarié chez ses autres employeurs.
  </p>

  <div class="formula formula-reminder">
    <p class="formula-title">✅ Logique URSSAF</p>
    <p class="formula-content">
      Le plafond est réduit <b>au prorata de la rémunération versée</b> par rapport à la rémunération totale <b>tous employeurs confondus</b>.<br><br>
      URSSAF — “calcul des cotisations” (mention employeurs multiples) :<br>
      <a href="https://www.urssaf.fr/accueil/employeur/cotisations/comprendre-cotisations/calcul-cotisations-employeur.html" target="_blank" rel="noreferrer">
        https://www.urssaf.fr/accueil/employeur/cotisations/comprendre-cotisations/calcul-cotisations-employeur.html
      </a>
    </p>
  </div>

  <h3>4️⃣ Méthode 1 — Répartition au prorata des rémunérations (méthode “multi-employeurs”)</h3>

  <div class="formula formula-formula">
    <p class="formula-title">🧮 Formule</p>
    <p class="formula-content">
      <b>Plafond employeur A = PMSS × (Salaire employeur A / Total salaires tous employeurs)</b>
    </p>
  </div>

  <div class="formula formula-warn">
    <p class="formula-title">⚠️ Piège examen / pratique</p>
    <p class="formula-content">
      La méthode 1 <b>nécessite</b> le total de rémunération “tous employeurs”. Si les salaires des autres employeurs ne sont <b>pas connus</b>, on ne peut pas appliquer proprement cette méthode.
    </p>
  </div>

  <h3>5️⃣ Exemple (méthode 1) — M. MULTI</h3>

  <p style="text-align:center;">
    M. MULTI travaille :<br>
    - 10 h hebdo chez nous : <b>607,00 €</b> brut mensuel<br>
    - 12 h hebdo ailleurs : <b>676,00 €</b><br>
    - 13 h hebdo ailleurs : <b>733,00 €</b>
  </p>

  <p style="text-align:center;">
    Total salaires = 607,00 + 676,00 + 733,00 = <b>2 016,00 €</b>
  </p>

  <div class="formula formula-example">
    <p class="formula-title">✅ Avec un PMSS = 3 864 (valeur d’une autre année utilisée dans l’exemple)</p>
    <p class="formula-content">
      PSS = 3 864 × 607,00 / 2 016,00 = <b>1 163,42 €</b>
    </p>
  </div>

  <div class="formula formula-example">
    <p class="formula-title">🔁 Mise à jour 2026 (PMSS = 4 005 €)</p>
    <p class="formula-content">
      PSS = 4 005 × 607,00 / 2 016,00 = <b>1 205,87 €</b> (arrondi au centime)
    </p>
  </div>

  <h3>6️⃣ Méthode 2 — Si l’employeur ne peut pas (ou ne veut pas) appliquer la méthode 1</h3>

  <p style="text-align:center;">
    Si l’employeur <b>ne veut pas ou ne peut</b> appliquer la méthode “multi-employeurs” (souvent parce que le salarié <b>ne divulgue pas</b> ses autres rémunérations), il peut appliquer une méthode de paie “pratique” consistant à <b>raisonner comme si on reconstituait un équivalent temps plein</b> pour déterminer un plafond “proportionné”.
  </p>

  <div class="formula formula-warn">
    <p class="formula-title">⚠️ Attention</p>
    <p class="formula-content">
      Ce n’est pas “je mets PMSS plein sans réfléchir”. En pratique, on utilise une <b>clé de proportion</b> fondée sur le temps/salaire reconstitué.
    </p>
  </div>

  <div class="formula formula-formula">
    <p class="formula-title">🧮 Formule (version “reconstitution”)</p>
    <p class="formula-content">
      1) Horaire mensuel moyen = Heures hebdo × 52 / 12<br>
      2) Taux horaire = Salaire mensuel / Horaire mensuel moyen<br>
      3) Salaire équivalent temps plein = Taux horaire × 151,67<br>
      4) Plafond employeur = PMSS × (Salaire mensuel / Salaire équivalent temps plein)
    </p>
  </div>

  <h3>7️⃣ Exemple (méthode 2) — M. MULTI</h3>

  <p style="text-align:center;">
    Données (chez nous) : 10 h hebdo, salaire brut mensuel <b>607,00 €</b>
  </p>

  <ul class="centered-list bullets">
    <li>Horaire mensuel moyen = 10 × 52 / 12 = <b>43,33 h</b></li>
    <li>Taux horaire = 607,00 / 43,33 = <b>14,00 €</b></li>
    <li>Salaire équivalent temps plein = 14,00 × 151,67 = <b>2 123,38 €</b></li>
  </ul>

  <div class="formula formula-example">
    <p class="formula-title">✅ Avec un PMSS = 3 864 (valeur d’une autre année utilisée dans l’exemple)</p>
    <p class="formula-content">
      PSS = 3 864 × 607,00 / 2 123,38 = <b>1 104,58 €</b>
    </p>
  </div>

  <div class="formula formula-example">
    <p class="formula-title">🔁 Mise à jour 2026 (PMSS = 4 005 €)</p>
    <p class="formula-content">
      PSS = 4 005 × 607,00 / 2 123,38 = <b>1 144,89 €</b> (arrondi au centime)
    </p>
  </div>

  <h3>8️⃣ Simulation complète — “multi employeurs – Société TIM” (tableaux)</h3>

  <p style="text-align:center;"><b>Énoncé</b></p>

  <table class="memo-table" style="width:100%; border-collapse:collapse;">
    <thead>
      <tr>
        <th style="border:1px solid #ddd; padding:8px; text-align:center;">Employeur</th>
        <th style="border:1px solid #ddd; padding:8px; text-align:center;">Salaire brut</th>
        <th style="border:1px solid #ddd; padding:8px; text-align:center;">Heures hebdo</th>
        <th style="border:1px solid #ddd; padding:8px; text-align:center;">Horaire mensuel moyen</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="border:1px solid #ddd; padding:8px; text-align:center;">Premier employeur</td>
        <td style="border:1px solid #ddd; padding:8px; text-align:center;">1 500 €</td>
        <td style="border:1px solid #ddd; padding:8px; text-align:center;">14 h</td>
        <td style="border:1px solid #ddd; padding:8px; text-align:center;">60,67</td>
      </tr>
      <tr>
        <td style="border:1px solid #ddd; padding:8px; text-align:center;">Deuxième employeur</td>
        <td style="border:1px solid #ddd; padding:8px; text-align:center;">1 600 €</td>
        <td style="border:1px solid #ddd; padding:8px; text-align:center;">15 h</td>
        <td style="border:1px solid #ddd; padding:8px; text-align:center;">65,00</td>
      </tr>
      <tr>
        <td style="border:1px solid #ddd; padding:8px; text-align:center;">Troisième employeur</td>
        <td style="border:1px solid #ddd; padding:8px; text-align:center;">800 €</td>
        <td style="border:1px solid #ddd; padding:8px; text-align:center;">6 h</td>
        <td style="border:1px solid #ddd; padding:8px; text-align:center;">26,00</td>
      </tr>
      <tr>
        <td style="border:1px solid #ddd; padding:8px; text-align:center;"><b>Total brut</b></td>
        <td style="border:1px solid #ddd; padding:8px; text-align:center;"><b>3 900 €</b></td>
        <td style="border:1px solid #ddd; padding:8px; text-align:center;"><b>35 h</b></td>
        <td style="border:1px solid #ddd; padding:8px; text-align:center;"><b>151,67</b></td>
      </tr>
    </tbody>
  </table>

  <p style="text-align:center;">
    <b>Question :</b> calculer le plafond du salarié selon les deux méthodes.
  </p>

  <div class="formula formula-reminder">
    <p class="formula-title">A) Méthode 1 — Au prorata des autres salaires</p>
    <p class="formula-content">
      📌 Formule : <b>PMSS × salaire employeur / total salaires</b>
    </p>
  </div>

  <p style="text-align:center;"><b>Résultats avec PMSS = 3 864 (table d’origine)</b></p>

  <table class="memo-table" style="width:100%; border-collapse:collapse;">
    <thead>
      <tr>
        <th style="border:1px solid #ddd; padding:8px; text-align:center;">Employeurs</th>
        <th style="border:1px solid #ddd; padding:8px; text-align:center;">Calculs</th>
        <th style="border:1px solid #ddd; padding:8px; text-align:center;">Montant PSS proratisé</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="border:1px solid #ddd; padding:8px; text-align:center;">1er employeur</td>
        <td style="border:1px solid #ddd; padding:8px; text-align:center;">3 864 × 1 500 / 3 900</td>
        <td style="border:1px solid #ddd; padding:8px; text-align:center;">1 486,15 €</td>
      </tr>
      <tr>
        <td style="border:1px solid #ddd; padding:8px; text-align:center;">2ème employeur</td>
        <td style="border:1px solid #ddd; padding:8px; text-align:center;">3 864 × 1 600 / 3 900</td>
        <td style="border:1px solid #ddd; padding:8px; text-align:center;">1 585,23 €</td>
      </tr>
      <tr>
        <td style="border:1px solid #ddd; padding:8px; text-align:center;">3ème employeur</td>
        <td style="border:1px solid #ddd; padding:8px; text-align:center;">3 864 × 800 / 3 900</td>
        <td style="border:1px solid #ddd; padding:8px; text-align:center;">792,62 €</td>
      </tr>
      <tr>
        <td style="border:1px solid #ddd; padding:8px; text-align:center;"></td>
        <td style="border:1px solid #ddd; padding:8px; text-align:center;"></td>
        <td style="border:1px solid #ddd; padding:8px; text-align:center;"><b>3 864 €</b></td>
      </tr>
    </tbody>
  </table>

  <p style="text-align:center;"><b>🔁 Mise à jour 2026 (PMSS = 4 005 €)</b></p>

  <table class="memo-table" style="width:100%; border-collapse:collapse;">
    <thead>
      <tr>
        <th style="border:1px solid #ddd; padding:8px; text-align:center;">Employeurs</th>
        <th style="border:1px solid #ddd; padding:8px; text-align:center;">Calculs</th>
        <th style="border:1px solid #ddd; padding:8px; text-align:center;">Montant PSS proratisé</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="border:1px solid #ddd; padding:8px; text-align:center;">1er employeur</td>
        <td style="border:1px solid #ddd; padding:8px; text-align:center;">4 005 × 1 500 / 3 900</td>
        <td style="border:1px solid #ddd; padding:8px; text-align:center;"><b>1 540,38 €</b></td>
      </tr>
      <tr>
        <td style="border:1px solid #ddd; padding:8px; text-align:center;">2ème employeur</td>
        <td style="border:1px solid #ddd; padding:8px; text-align:center;">4 005 × 1 600 / 3 900</td>
        <td style="border:1px solid #ddd; padding:8px; text-align:center;"><b>1 643,08 €</b></td>
      </tr>
      <tr>
        <td style="border:1px solid #ddd; padding:8px; text-align:center;">3ème employeur</td>
        <td style="border:1px solid #ddd; padding:8px; text-align:center;">4 005 × 800 / 3 900</td>
        <td style="border:1px solid #ddd; padding:8px; text-align:center;"><b>821,54 €</b></td>
      </tr>
      <tr>
        <td style="border:1px solid #ddd; padding:8px; text-align:center;"></td>
        <td style="border:1px solid #ddd; padding:8px; text-align:center;"></td>
        <td style="border:1px solid #ddd; padding:8px; text-align:center;"><b>4 005,00 €</b></td>
      </tr>
    </tbody>
  </table>

  <div class="formula formula-reminder">
    <p class="formula-title">B) Méthode 2 — “Considérer le salarié comme étant temps partiel” (reconstitution)</p>
    <p class="formula-content">
      📌 On calcule un <b>équivalent temps plein</b> puis : <b>PMSS × salaire / équivalent temps plein</b>
    </p>
  </div>

  <p style="text-align:center;"><b>Résultats avec PMSS = 3 864 (table d’origine)</b></p>

  <table class="memo-table" style="width:100%; border-collapse:collapse;">
    <thead>
      <tr>
        <th style="border:1px solid #ddd; padding:8px; text-align:center;">Employeur</th>
        <th style="border:1px solid #ddd; padding:8px; text-align:center;">Équivalent temps plein</th>
        <th style="border:1px solid #ddd; padding:8px; text-align:center;">Calculs</th>
        <th style="border:1px solid #ddd; padding:8px; text-align:center;">Montant PSS proratisé</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="border:1px solid #ddd; padding:8px; text-align:center;">1er employeur</td>
        <td style="border:1px solid #ddd; padding:8px; text-align:center;">1 500 / 60,67 × 151,67 = 3 749,95</td>
        <td style="border:1px solid #ddd; padding:8px; text-align:center;">3 864 × 1 500 / 3 749,95</td>
        <td style="border:1px solid #ddd; padding:8px; text-align:center;">1 545,62 €</td>
      </tr>
      <tr>
        <td style="border:1px solid #ddd; padding:8px; text-align:center;">2ème employeur</td>
        <td style="border:1px solid #ddd; padding:8px; text-align:center;">1 600 / 65 × 151,67 = 3 733,42</td>
        <td style="border:1px solid #ddd; padding:8px; text-align:center;">3 864 × 1 600 / 3 733,42</td>
        <td style="border:1px solid #ddd; padding:8px; text-align:center;">1 655,96 €</td>
      </tr>
      <tr>
        <td style="border:1px solid #ddd; padding:8px; text-align:center;">3ème employeur</td>
        <td style="border:1px solid #ddd; padding:8px; text-align:center;">800 / 26 × 151,67 = 4 666,77</td>
        <td style="border:1px solid #ddd; padding:8px; text-align:center;">3 864 × 800 / 4 666,77</td>
        <td style="border:1px solid #ddd; padding:8px; text-align:center;">662,38 €</td>
      </tr>
    </tbody>
  </table>

  <p style="text-align:center;"><b>🔁 Mise à jour 2026 (PMSS = 4 005 €)</b></p>

  <table class="memo-table" style="width:100%; border-collapse:collapse;">
    <thead>
      <tr>
        <th style="border:1px solid #ddd; padding:8px; text-align:center;">Employeur</th>
        <th style="border:1px solid #ddd; padding:8px; text-align:center;">Équivalent temps plein</th>
        <th style="border:1px solid #ddd; padding:8px; text-align:center;">Calculs</th>
        <th style="border:1px solid #ddd; padding:8px; text-align:center;">Montant PSS proratisé</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="border:1px solid #ddd; padding:8px; text-align:center;">1er employeur</td>
        <td style="border:1px solid #ddd; padding:8px; text-align:center;">3 749,95</td>
        <td style="border:1px solid #ddd; padding:8px; text-align:center;">4 005 × 1 500 / 3 749,95</td>
        <td style="border:1px solid #ddd; padding:8px; text-align:center;"><b>1 602,02 €</b></td>
      </tr>
      <tr>
        <td style="border:1px solid #ddd; padding:8px; text-align:center;">2ème employeur</td>
        <td style="border:1px solid #ddd; padding:8px; text-align:center;">3 733,42</td>
        <td style="border:1px solid #ddd; padding:8px; text-align:center;">4 005 × 1 600 / 3 733,42</td>
        <td style="border:1px solid #ddd; padding:8px; text-align:center;"><b>1 716,39 €</b></td>
      </tr>
      <tr>
        <td style="border:1px solid #ddd; padding:8px; text-align:center;">3ème employeur</td>
        <td style="border:1px solid #ddd; padding:8px; text-align:center;">4 666,77</td>
        <td style="border:1px solid #ddd; padding:8px; text-align:center;">4 005 × 800 / 4 666,77</td>
        <td style="border:1px solid #ddd; padding:8px; text-align:center;"><b>686,56 €</b></td>
      </tr>
    </tbody>
  </table>

  <h3>9️⃣ Points de vigilance (examen + logiciel de paie)</h3>

  <ul class="centered-list bullets">
    <li><b>Toujours partir du PMSS de l’année</b> (2026 = 4 005 €) et <b>remplacer</b> dans les formules.</li>
    <li>Méthode 1 <b>nécessite</b> le total de rémunération “tous employeurs”. Sinon, on bascule sur une méthode de substitution (paramétrage / pratique interne).</li>
    <li>Base juridique générale de l’ajustement du plafond : <b>CSS R.242-2</b>.</li>
    <li>Document technique historique (références de calcul du plafond, exemples URSSAF) : lettre-circulaire ACOSS <b>2004-136</b> (PDF).</li>
  </ul>

  <div class="formula formula-reminder">
    <p class="formula-title">🔗 Liens officiels (copiables dans Word)</p>
    <p class="formula-content">
      Arrêté fixant le plafond 2026 (PMSS 4 005 €) :<br>
      <a href="https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000053143451" target="_blank" rel="noreferrer">
        https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000053143451
      </a><br><br>

      BOSS — actualité plafond 2026 :<br>
      <a href="https://boss.gouv.fr/portail/accueil/actualites-boss-et-rescrits/actualites-boss/2025/octobre/le-plafond-de-la-securite-social.html" target="_blank" rel="noreferrer">
        https://boss.gouv.fr/portail/accueil/actualites-boss-et-rescrits/actualites-boss/2025/octobre/le-plafond-de-la-securite-social.html
      </a><br><br>

      URSSAF — comprendre/calculer les cotisations (mention employeurs multiples) :<br>
      <a href="https://www.urssaf.fr/accueil/employeur/cotisations/comprendre-cotisations/calcul-cotisations-employeur.html" target="_blank" rel="noreferrer">
        https://www.urssaf.fr/accueil/employeur/cotisations/comprendre-cotisations/calcul-cotisations-employeur.html
      </a><br><br>

      Légifrance — Code de la sécurité sociale, article R.242-2 :<br>
      <a href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000039222466" target="_blank" rel="noreferrer">
        https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000039222466
      </a><br><br>

      URSSAF/ACOSS — lettre-circulaire “calcul du plafond” (PDF) :<br>
      <a href="https://www.urssaf.fr/files/live/sites/urssaffr/files/outils-documentation/outils/lettres-circulaires/2004/ref_lc2004-136.pdf" target="_blank" rel="noreferrer">
        https://www.urssaf.fr/files/live/sites/urssaffr/files/outils-documentation/outils/lettres-circulaires/2004/ref_lc2004-136.pdf
      </a>
    </p>
  </div>

  `,
};
