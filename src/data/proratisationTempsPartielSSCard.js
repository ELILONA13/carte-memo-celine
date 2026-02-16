// src/data/proratisationTempsPartielSSCard.js

export const proratisationTempsPartielSSCard = {
    id: "proratisation-temps-partiel-ss",
    group: "referentiel",
    title: "Proratisation du plafond de la Sécurité sociale (PSS) — temps partiel",
    content: `

  <p style="text-align:center;"><b>📘 La proratisation du plafond de la Sécurité sociale (PSS) — Salariés à temps partiel</b></p>
  <p style="text-align:center;">Version complète “cours / examen” + pratique paie</p>

  <div class="formula formula-reminder">
    <p class="formula-title">🎯 Objectif</p>
    <p class="formula-content">
      Savoir <b>proratiser le plafond de la Sécurité sociale</b> pour un salarié <b>à temps partiel</b>, appliquer la <b>formule légale</b>, et en déduire les <b>tranches</b> (T1/T2, etc.) avec des <b>exemples chiffrés</b>.
    </p>
  </div>

  <h3>1️⃣ Rappel : de quel plafond parle-t-on ?</h3>

  <p style="text-align:center;">
    En paie, la référence opérationnelle est le <b>plafond mensuel de la Sécurité sociale (PMSS)</b>.
    Il sert notamment à déterminer des <b>tranches</b> (ex. retraite complémentaire AGIRC-ARRCO : T1/T2) ou à <b>plafonner</b> certaines cotisations (ex. assurance vieillesse plafonnée).
  </p>

  <div class="formula formula-warn">
    <p class="formula-title">⚠️ Vigilance</p>
    <p class="formula-content">
      Le plafond <b>change chaque année</b> (arrêté annuel). Les exemples chiffrés plus bas utilisent une valeur donnée de PMSS (3 864 €), mais en pratique on remplace par la valeur de l’année de paie.
    </p>
  </div>

  <p style="text-align:center;">Exemples de références officielles :</p>
  <ul class="centered-list bullets">
    <li><b>PMSS 2026 = 4 005 €</b> (Service-Public) :
      <a href="https://www.service-public.gouv.fr/particuliers/actualites/A15386" target="_blank" rel="noreferrer">https://www.service-public.gouv.fr/particuliers/actualites/A15386</a>
    </li>
    <li><b>PMSS 2024 = 3 864 €</b> (BOSS) :
      <a href="https://boss.gouv.fr/portail/accueil/actualites-boss/2023/octobre/le-plafond-de-securite-sociale-a.html" target="_blank" rel="noreferrer">https://boss.gouv.fr/portail/accueil/actualites-boss/2023/octobre/le-plafond-de-securite-sociale-a.html</a>
    </li>
    <li>Page URSSAF (plafonds) :
      <a href="https://www.urssaf.fr/accueil/outils-documentation/taux-baremes/plafonds-securite-sociale.html" target="_blank" rel="noreferrer">https://www.urssaf.fr/accueil/outils-documentation/taux-baremes/plafonds-securite-sociale.html</a>
    </li>
  </ul>

  <h3>2️⃣ Principe général : mensualisation et proratisation “jours d’emploi”</h3>

  <p style="text-align:center;">
    Le Code de la Sécurité sociale pose le cadre : les cotisations concernées sont calculées <b>chaque mois</b>, <b>dans la limite de la valeur mensuelle du plafond</b>.
  </p>

  <p style="text-align:center;">
    Le plafond peut être <b>réduit</b> lorsque le contrat ne couvre pas toute la période (entrée/sortie en cours de mois) :
    réduction <b>au prorata du nombre de jours</b> pendant lesquels le salarié est employé.
  </p>

  <p style="text-align:center;">
    Le plafond est également réduit pour certaines situations : <b>activité partielle</b>, <b>intempéries</b>, <b>absences non rémunérées</b>, etc. (voir le texte complet de l’article).
  </p>

  <div class="formula formula-reminder">
    <p class="formula-title">📌 Référence</p>
    <p class="formula-content">
      Article <b>R. 242-2 Code de la sécurité sociale</b> (texte complet, proratisation et modalités) :
      <a href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000039222466" target="_blank" rel="noreferrer">https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000039222466</a>
    </p>
  </div>

  <div class="formula formula-reminder">
    <p class="formula-title">✅ Conclusion examen</p>
    <p class="formula-content">
      On part du <b>PMSS</b>, puis on applique (si besoin) des corrections : <b>jours de présence</b>, <b>absences non rémunérées</b>, <b>activité partielle</b>, <b>temps partiel</b>, etc., selon les cas prévus.
    </p>
  </div>

  <h3>3️⃣ Salariés à temps partiel : base légale (décret 2017-858) et article applicable</h3>

  <p style="text-align:center;">
    La règle “temps partiel” provient de la réforme entrée en vigueur au <b>1er janvier 2018</b> via le <b>décret n° 2017-858 du 9 mai 2017</b>, qui a modifié l’article <b>R. 242-2</b> du Code de la sécurité sociale.
  </p>

  <p style="text-align:center;">
    Décret n° 2017-858 du 9 mai 2017 :
    <a href="https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000034632416/" target="_blank" rel="noreferrer">https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000034632416/</a>
  </p>

  <p style="text-align:center;">
    Le texte (dans l’article R. 242-2 CSS) prévoit que, <b>pour les salariés à temps partiel</b>, l’employeur peut <b>corriger le plafond</b>, <b>sans pouvoir augmenter sa valeur mensuelle</b>, à proportion :
  </p>

  <ul class="centered-list bullets">
    <li>de la <b>durée contractuelle</b> sur la période où le salarié est présent,</li>
    <li><b>majorée</b> des <b>heures complémentaires</b> effectuées sur la période,</li>
    <li>rapportée à la <b>plus courte</b> des durées mentionnées au <b>1° de l’article L. 3123-1 du Code du travail</b> (durée légale <b>ou</b> durée conventionnelle si elle est inférieure).</li>
  </ul>

  <p style="text-align:center;">
    Article L. 3123-1 Code du travail (définition temps partiel + durée de référence) :
    <a href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000033020098" target="_blank" rel="noreferrer">https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000033020098</a>
  </p>

  <h3>4️⃣ Formule de calcul du PSS temps partiel (à connaître par cœur)</h3>

  <div class="formula formula-formula">
    <p class="formula-title">🧮 Formule</p>
    <p class="formula-content">
      <b>PSS temps partiel = PMSS × (Durée contractuelle du travail + heures complémentaires) / Durée de référence (durée légale ou conventionnelle si elle est inférieure)</b>
    </p>
  </div>

  <p style="text-align:center;">Points clés (examen + paie) :</p>
  <ul class="centered-list bullets">
    <li><b>On ne peut pas dépasser le PMSS</b> (“sans pouvoir augmenter sa valeur mensuelle”).</li>
    <li>Les <b>heures complémentaires</b> s’ajoutent au numérateur (elles <b>augmentent</b> le plafond proratisé).</li>
    <li>La durée de référence au dénominateur = <b>la plus courte</b> des durées du 1° de L3123-1 : durée légale (35 h) ou durée conventionnelle si elle est <b>inférieure</b>.</li>
  </ul>

  <h3>5️⃣ Remarque essentielle : “Chacune des tranches est modifiée en conséquence”</h3>

  <p style="text-align:center;">
    Quand on proratiser le plafond, <b>toutes les tranches indexées sur le PSS</b> changent mécaniquement.
  </p>

  <p style="text-align:center;">
    Exemple typique :
  </p>
  <ul class="centered-list bullets">
    <li>Tranche 1 (T1/TA) = <b>1 × PSS</b></li>
    <li>Tranche 2 (T2) = <b>8 × PSS</b></li>
    <li>Tranche B (TB) = <b>4 × PSS</b></li>
  </ul>

  <div class="formula formula-reminder">
    <p class="formula-title">✅ Conclusion</p>
    <p class="formula-content">
      Si le PSS temps partiel diminue, le maximum de tranche 1 diminue, et la tranche 2 commence plus tôt.
    </p>
  </div>

  <h3>6️⃣ Exemples chiffrés (arrondis au centime) – base PMSS = 3 864 €</h3>

  <div class="formula formula-warn">
    <p class="formula-title">⚠️ Attention</p>
    <p class="formula-content">
      Les exemples ci-dessous utilisent <b>PMSS = 3 864 €</b> (valeur 2024). En pratique, on remplace par le PMSS de l’année de paie (URSSAF / Service-Public / BOSS).
    </p>
  </div>

  <h3>✅ Exemple 1 — 24 h hebdomadaires (horaire mensuel moyen = 104 h)</h3>

  <ul class="centered-list bullets">
    <li>Horaire mensuel moyen = <b>104 h</b></li>
    <li>Durée de référence = <b>151,67 h</b> (35 h × 52 / 12)</li>
    <li><b>PSS temps partiel = 3 864 / 151,67 × 104 = 2 649,54 €</b></li>
  </ul>

  <div class="formula formula-example">
    <p class="formula-title">📊 Tranches (avec PSS proratisé)</p>

    <div class="table-wrap">
      <table class="memo-table">
        <thead>
          <tr>
            <th>Tranches</th>
            <th>x PSS</th>
            <th>Maximum</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>T1 / TA</td>
            <td>1 x PSS</td>
            <td>2 649,54</td>
          </tr>
          <tr>
            <td>T2</td>
            <td>8 x PSS</td>
            <td>21 196,32</td>
          </tr>
          <tr>
            <td>TB</td>
            <td>4 x PSS</td>
            <td>10 598,16</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <h3>✅ Exemple 2 — 20 h hebdomadaires</h3>

  <ul class="centered-list bullets">
    <li>Horaire mensuel moyen = <b>20 × 52 / 12 = 86,67 h</b></li>
    <li><b>PSS temps partiel = 3 864 / 151,67 × 86,67 = 2 208,07 €</b></li>
  </ul>

  <h3>✅ Exemple 3 — 24 h / semaine + 5 h complémentaires dans le mois</h3>

  <ul class="centered-list bullets">
    <li>Horaire mensuel moyen = <b>24 × 52 / 12 = 104 h</b></li>
    <li>Heures complémentaires = <b>5 h</b></li>
    <li><b>PSS temps partiel = (3 864 / 151,67) × (104 + 5) = 2 776,92 €</b></li>
  </ul>

  <div class="formula formula-warn">
    <p class="formula-title">⚠️ Piège examen</p>
    <p class="formula-content">
      Les heures complémentaires <b>remontent</b> le plafond proratisé (et peuvent donc <b>retarder</b> le basculement en tranche 2).
    </p>
  </div>

  <h3>7️⃣ Simulation complète – Décomposition en tranches (T1 / T2)</h3>

  <p style="text-align:center;">
    Le salarié CUMIN, non cadre, travaille <b>30 heures hebdomadaires</b> pour un salaire de base de <b>2 800 €</b>.
  </p>

  <p style="text-align:center;">
    Question : décomposer le salaire brut en tranches 1 et 2 en cas de proratisation de plafond. Dans le cas de la proratisation, il convient de déterminer le plafond applicable.
  </p>

  <ul class="centered-list bullets">
    <li>Horaire mensuel moyen = <b>30 × 52 / 12 = 130</b></li>
    <li><b>PSS temps partiel = 3 864 × 130 / 151,67 = 3 311,92</b></li>
  </ul>

  <div class="formula formula-example">
    <p class="formula-title">📊 Tranches</p>

    <div class="table-wrap">
      <table class="memo-table">
        <thead>
          <tr>
            <th>Tranches</th>
            <th>x PSS</th>
            <th>Maximum</th>
            <th>De</th>
            <th>à</th>
            <th>Montant tranche</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>T1 / TA</td>
            <td>1 x PSS</td>
            <td>3 311,92</td>
            <td>0</td>
            <td>3 311,92</td>
            <td>3 311,92</td>
          </tr>
          <tr>
            <td>T2</td>
            <td>8 x PSS</td>
            <td>26 495,36</td>
            <td>3 311,92</td>
            <td>26 495,36</td>
            <td>23 183,44</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <p style="text-align:center;">
    Le mois suivant, le salarié CUMIN a bénéficié d'une prime exceptionnelle de <b>700 €</b>.
  </p>

  <p style="text-align:center;">
    Question : décomposer le salaire brut en tranches 1 et 2.
  </p>

  <p style="text-align:center;">
    Le PSS temps partiel est de <b>3 311,92 €</b> et le salaire brut est de <b>3 500 €</b> (700 + 2 800) €.
    La tranche 1 est donc de <b>3 311,92 €</b>.
  </p>

  <p style="text-align:center;">
    La tranche 2 est de <b>188,08 €</b> (3 500 - 3 311,92).
  </p>

  <div class="formula formula-reminder">
    <p class="formula-title">✅ Réflexe paie</p>
    <p class="formula-content">
      Dès qu’il y a une prime qui fait dépasser le plafond proratisé, une partie du brut bascule en tranche 2.
    </p>
  </div>

  <h3>8️⃣ Simulation complète – Cadre à temps partiel (Tranche A / B)</h3>

  <p style="text-align:center;">
    Un salarié, cadre, de la société CRAMA est à temps partiel. Durée du travail : <b>22 h / semaine</b>.
  </p>

  <p style="text-align:center;">
    Durée mensuelle : <b>22 × 52 semaines / 12 mois = 95,33</b>.
  </p>

  <p style="text-align:center;">
    Salaire brut = <b>2 900,00 €</b>.
  </p>

  <p style="text-align:center;">
    Question : décomposer le salaire brut en tranches 1 et 2. PSS temps partiel = <b>3 864 × 95,33 / 151,67 = 2 428,66</b>
  </p>

  <ul class="centered-list bullets">
    <li>Tranche A/1 = <b>2 428,66</b></li>
    <li>Tranche B/2 = <b>471,34</b> = (2 900,00 - 2 428,66)</li>
  </ul>

  <h3>9️⃣ Pièges “examen / pratique paie” (à ressortir dans une copie)</h3>

  <ul class="centered-list bullets">
    <li><b>Ne pas confondre</b> : proratisation <b>jours d’emploi</b> (entrée/sortie/absence non rémunérée) et proratisation <b>temps partiel</b> (durée contractuelle + heures complémentaires).</li>
    <li><b>Ne jamais dépasser le PMSS</b> : même si le ratio donne plus, on est bloqué par la règle “sans pouvoir augmenter”.</li>
    <li><b>Bien choisir la durée de référence</b> : durée légale ou durée conventionnelle si inférieure (car on retient “la plus courte”).</li>
    <li><b>Heures complémentaires</b> : elles s’ajoutent au numérateur → plafond proratisé augmente → impact direct sur les tranches.</li>
    <li><b>Toutes les tranches bougent</b> : si le PSS change, les maxima (1×, 4×, 8×…) changent aussi.</li>
  </ul>

  <h3>🔗 Liens officiels (à copier dans Word)</h3>

  <ul class="centered-list bullets">
    <li>Article <b>R. 242-2 Code de la sécurité sociale</b> (texte complet, proratisation + temps partiel) :
      <a href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000039222466" target="_blank" rel="noreferrer">https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000039222466</a>
    </li>
    <li><b>Décret n° 2017-858 du 9 mai 2017</b> (réforme des règles, entrée en vigueur 2018) :
      <a href="https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000034632416/" target="_blank" rel="noreferrer">https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000034632416/</a>
    </li>
    <li>Article <b>L. 3123-1 Code du travail</b> (définition temps partiel + durée de référence) :
      <a href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000033020098" target="_blank" rel="noreferrer">https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000033020098</a>
    </li>
    <li><b>URSSAF – Plafonds de Sécurité sociale</b> :
      <a href="https://www.urssaf.fr/accueil/outils-documentation/taux-baremes/plafonds-securite-sociale.html" target="_blank" rel="noreferrer">https://www.urssaf.fr/accueil/outils-documentation/taux-baremes/plafonds-securite-sociale.html</a>
    </li>
    <li><b>BOSS – actualité plafond 2024 (PMSS 3 864 €)</b> :
      <a href="https://boss.gouv.fr/portail/accueil/actualites-boss/2023/octobre/le-plafond-de-securite-sociale-a.html" target="_blank" rel="noreferrer">https://boss.gouv.fr/portail/accueil/actualites-boss/2023/octobre/le-plafond-de-securite-sociale-a.html</a>
    </li>
    <li><b>Service-Public – actualité plafond 2026 (PMSS 4 005 €)</b> :
      <a href="https://www.service-public.gouv.fr/particuliers/actualites/A15386" target="_blank" rel="noreferrer">https://www.service-public.gouv.fr/particuliers/actualites/A15386</a>
    </li>
  </ul>

  <p style="text-align:center;">
    <a href="#/referentiel/bases-calcul-cotisations">⬅ Retour “Dispositifs / bases-calcul-cotisations”</a>
  </p>
  
`,
};
