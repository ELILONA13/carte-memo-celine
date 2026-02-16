// ✅ src/data/baseSalaireBrutAbattuCard.js

export const baseSalaireBrutAbattuCard = {
    id: "base-salaire-brut-abattu",
    group: "referentiel",
    title: "Salaire brut abattu (base CSG/CRDS) — 2026",
    content: `

  <p style="text-align:center;"><b>📘 Salaire brut abattu (base CSG/CRDS) — 2026</b></p>
  <p style="text-align:center;">(Version complète — cours / examen + pratique paie)</p>

  <div class="formula formula-reminder">
    <p class="formula-title">🎯 Objectif</p>
    <p class="formula-content">
      Comprendre et calculer la <b>base CSG/CRDS</b> :
      <br><br>
      ✅ <b>brut abattu</b> (abattement 1,75% dans la limite de <b>4 PMSS</b>) ;
      <br><br>
      ✅ puis <b>ajout</b> des participations patronales <b>mutuelle</b> et <b>prévoyance</b> (y compris décès cadre) ;
      <br><br>
      ✅ expliquer pourquoi la <b>base CSG/CRDS</b> peut être <b>supérieure</b> au salaire brut abattu.
    </p>
  </div>

  <h3 style="text-align:center;">1️⃣ Définition : “salaire brut abattu” = base de départ CSG/CRDS</h3>

  <p style="text-align:center;">
    Les cotisations sociales salariales <b>CSG</b> et <b>CRDS</b> ne sont pas calculées sur le “brut pur” (assiette brute classique),
    mais sur une <b>base spécifique</b> appelée couramment :
  </p>

  <p style="text-align:center;">
    ✅ <b>le salaire brut abattu</b> = le salaire brut soumis (revenus d’activité concernés) <b>diminué d’un abattement forfaitaire de 1,75%</b>
    représentatif de frais professionnels.
  </p>

  <div class="formula formula-reminder">
    <p class="formula-title">✅ Conséquence</p>
    <p class="formula-content">
      Cela revient à calculer CSG/CRDS sur <b>98,25%</b> de la partie de rémunération <b>éligible à l’abattement</b>.
      <br><br>
      🔗 URSSAF — CSG/CRDS :
      <br>
      <a href="https://www.urssaf.fr/accueil/employeur/cotisations/liste-cotisations/csg-crds.html"
         target="_blank" rel="noreferrer">
        https://www.urssaf.fr/accueil/employeur/cotisations/liste-cotisations/csg-crds.html
      </a>
    </p>
  </div>

  <h3 style="text-align:center;">2️⃣ Base juridique (à citer à l’examen)</h3>

  <p style="text-align:center;">
    L’abattement de 1,75% et son plafonnement sont prévus par le <b>Code de la sécurité sociale</b>.
  </p>

  <div class="formula formula-reminder">
    <p class="formula-title">📌 CSG — Article L136-2 (abattement 1,75% + plafond)</p>
    <p class="formula-content">
      L’abattement de <b>1,75%</b> s’applique sur la fraction de rémunération <b>dans la limite de 4 fois le plafond</b> (référence plafond Sécurité sociale).
      <br><br>
      🔗 Légifrance — CSS, article L136-2 :
      <br>
      <a href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000042683568"
         target="_blank" rel="noreferrer">
        https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000042683568
      </a>
    </p>
  </div>

  <div class="formula formula-reminder">
    <p class="formula-title">📌 CRDS — assiette alignée sur la CSG</p>
    <p class="formula-content">
      La CRDS reprend les règles d’assiette de la CSG (renvoi aux dispositions CSG).
      <br><br>
      🔗 Légifrance — Ordonnance n°96-50 du 24 janvier 1996 (CRDS) :
      <br>
      <a href="https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000029961312/2015-01-08"
         target="_blank" rel="noreferrer">
        https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000029961312/2015-01-08
      </a>
    </p>
  </div>

  <h3 style="text-align:center;">3️⃣ Point clé : “dans la limite de 4 PMSS”</h3>

  <p style="text-align:center;">
    En paie mensuelle, on formule souvent la règle comme un abattement de 1,75% <b>dans la limite de 4 PMSS</b>.
  </p>

  <div class="formula formula-warn">
    <p class="formula-title">⚠️ Piège examen — formulation “mensuelle” vs “juridique”</p>
    <p class="formula-content">
      ✅ Présentation pratique (mensuelle) : <b>4 PMSS</b>.
      <br><br>
      ✅ Référence juridique : <b>4 fois le plafond</b> (CSS L136-2).
      <br><br>
      ➡️ À l’examen, tu dois pouvoir citer : <b>CSS L136-2</b>.
    </p>
  </div>

  <h3 style="text-align:center;">4️⃣ Méthode complète : comment obtenir la base CSG/CRDS</h3>

  <p style="text-align:center;">
    La base CSG/CRDS se calcule en deux temps : <b>brut abattu</b>, puis <b>ajouts patronaux</b>.
  </p>

  <div class="formula formula-formula">
    <p class="formula-title">🧮 Étape 1 — Calculer le “brut abattu”</p>
    <p class="formula-content">
      On part du salaire brut “soumis” (revenus d’activité concernés) et on applique :
      <br><br>
      • Part éligible à l’abattement : <b>× 98,25%</b>
      <br>
      • Part au-delà du plafond : <b>pas d’abattement</b> (× 100%)
      <br><br>
      🔗 URSSAF — CSG/CRDS :
      <br>
      <a href="https://www.urssaf.fr/accueil/employeur/cotisations/liste-cotisations/csg-crds.html"
         target="_blank" rel="noreferrer">
        https://www.urssaf.fr/accueil/employeur/cotisations/liste-cotisations/csg-crds.html
      </a>
    </p>
  </div>

  <div class="formula formula-formula">
    <p class="formula-title">🧮 Étape 2 — Ajouter mutuelle + prévoyance (parts patronales)</p>
    <p class="formula-content">
      Une fois le “brut abattu” calculé, il faut <b>ajouter</b> à la base CSG/CRDS :
      <br><br>
      ✅ contributions patronales finançant :
      <br>
      • la <b>mutuelle santé obligatoire</b>,
      <br>
      • la <b>prévoyance</b> (incapacité/invalidité/décès),
      <br>
      • y compris <b>l’assurance décès cadre</b> si le salarié est <b>cadre</b>.
      <br><br>
      ➡️ Résultat : la base CSG/CRDS peut être <b>supérieure</b> au salaire brut abattu.
      <br><br>
      🔗 URSSAF — Complémentaire frais de santé (mutuelle) :
      <br>
      <a href="https://www.urssaf.fr/accueil/employeur/embaucher-gerer-salaries/embaucher/complementaire-frais-sante.html"
         target="_blank" rel="noreferrer">
        https://www.urssaf.fr/accueil/employeur/embaucher-gerer-salaries/embaucher/complementaire-frais-sante.html
      </a>
    </p>
  </div>

  <div class="formula formula-reminder">
    <p class="formula-title">📌 Phrase à retenir (ton cours, mot pour mot)</p>
    <p class="formula-content">
      La base de calcul de la CSG et de la CRDS est constituée du salaire brut après abattement de 1,75 %, dans la limite de 4 plafonds mensuels de la Sécurité sociale.
      À cette base doivent être ajoutées les participations patronales à la mutuelle obligatoire et à la prévoyance, y compris l’assurance décès cadre lorsque le salarié relève du statut cadre.
      Ces éléments expliquent que la base CSG/CRDS puisse être supérieure au salaire brut abattu
    </p>
  </div>

  <h3 style="text-align:center;">5️⃣ Taux à connaître (revenus d’activité — bulletin “classique”)</h3>

  <p style="text-align:center;">
    Sur la base CSG/CRDS (calculée ci-dessus), on applique les taux suivants :
  </p>

  <ul class="centered-list bullets">
    <li><b>CSG totale : 9,20%</b> (dont <b>6,80%</b> déductible et <b>2,40%</b> non déductible)</li>
    <li><b>CRDS : 0,50%</b></li>
  </ul>

  <div class="formula formula-reminder">
    <p class="formula-title">🔗 Source URSSAF (taux + règles d’assiette)</p>
    <p class="formula-content" style="text-align:center;">
      <a href="https://www.urssaf.fr/accueil/employeur/cotisations/liste-cotisations/csg-crds.html"
         target="_blank" rel="noreferrer">
        https://www.urssaf.fr/accueil/employeur/cotisations/liste-cotisations/csg-crds.html
      </a>
    </p>
  </div>

  <h3 style="text-align:center;">6️⃣ Exemples chiffrés (arrondis au centime)</h3>

  <p style="text-align:center;">
    Deux exemples pour automatiser les réflexes “98,25%” + “ajouts patronaux” + “plafond 4 PMSS”.
  </p>

  <div class="formula formula-example">
    <p class="formula-title">✅ Exemple 1 — Brut 3 000,00 € (pas de dépassement du plafond)</p>
    <p class="formula-content">
      Hypothèses :
      <br>
      • Salaire brut soumis = <b>3 000,00 €</b>
      <br>
      • Part patronale mutuelle obligatoire = <b>50,00 €</b>
      <br>
      • Part patronale prévoyance = <b>20,00 €</b>
      <br><br>
      <b>1) Brut abattu</b> = 3 000,00 × 98,25% = 3 000,00 × 0,9825 = <b>2 947,50 €</b>
      <br><br>
      <b>2) Base CSG/CRDS</b> = brut abattu + mutuelle patronale + prévoyance patronale
      <br>
      = 2 947,50 + 50,00 + 20,00 = <b>3 017,50 €</b>
      <br><br>
      <b>3) CSG/CRDS (salarial)</b>
      <br>
      • CSG déductible (6,80%) : 3 017,50 × 6,80% = <b>205,19 €</b>
      <br>
      • CSG non déductible (2,40%) : 3 017,50 × 2,40% = <b>72,42 €</b>
      <br>
      • CRDS (0,50%) : 3 017,50 × 0,50% = <b>15,09 €</b>
      <br><br>
      Total CSG/CRDS = 205,19 + 72,42 + 15,09 = <b>292,70 €</b>
    </p>
  </div>

  <div class="formula formula-example">
    <p class="formula-title">✅ Exemple 2 — Brut 20 000,00 € (illustration plafond “4 PMSS” en mensuel)</p>
    <p class="formula-content">
      On illustre la règle “abattement 1,75% dans la limite de 4 PMSS”.
      <br><br>
      Hypothèses :
      <br>
      • Brut soumis = <b>20 000,00 €</b>
      <br>
      • Part patronale mutuelle + prévoyance = <b>100,00 €</b>
      <br>
      • Plafond mensuel : on applique l’abattement seulement jusqu’à <b>4 PMSS</b> (présentation mensuelle).
      <br><br>
      <b>1) Part avec abattement</b> : 4 PMSS × 98,25%
      <br>
      <b>2) Part sans abattement</b> : Brut − 4 PMSS
      <br>
      <b>3) Brut abattu “plafonné”</b> = (part abattue) + (part non abattue)
      <br>
      <b>4) Base CSG/CRDS finale</b> = brut abattu plafonné + (mutuelle + prévoyance patronales)
      <br><br>
      ➡️ On retient le raisonnement : <b>au-delà du plafond, pas d’abattement</b>, puis <b>ajout des parts patronales</b>.
    </p>
  </div>

  <h3 style="text-align:center;">7️⃣ Pièges examen (à apprendre par cœur)</h3>

  <p style="text-align:center;">
    Les 3 points qui font perdre des points si on les oublie :
  </p>

  <div class="formula formula-warn">
    <p class="formula-title">⚠️ Piège 1 — “Brut abattu” ≠ “base CSG/CRDS finale”</p>
    <p class="formula-content">
      Le <b>brut abattu</b> (98,25%) n’est qu’une <b>étape</b>.
      La <b>base CSG/CRDS finale</b> = brut abattu (et fraction non abattue si dépassement) <b>+ parts patronales mutuelle/prévoyance</b>.
    </p>
  </div>

  <div class="formula formula-warn">
    <p class="formula-title">⚠️ Piège 2 — Plafond : mensuel vs juridique</p>
    <p class="formula-content">
      • En pratique paie : <b>limite 4 PMSS</b> (raisonnement mensuel).
      <br>
      • Référence juridique : <b>CSS L136-2</b> (4 fois le plafond).
    </p>
  </div>

  <div class="formula formula-warn">
    <p class="formula-title">⚠️ Piège 3 — Cadre : décès cadre à inclure</p>
    <p class="formula-content">
      Si le salarié est <b>cadre</b>, la part patronale de <b>prévoyance décès cadre</b> fait partie des éléments pouvant <b>augmenter</b> la base CSG/CRDS.
    </p>
  </div>

  <h3 style="text-align:center;">8️⃣ Notes pratiques “logiciel de paie”</h3>

  <p style="text-align:center;">
    Sur un bulletin, on retrouve généralement :
  </p>

  <ul class="centered-list bullets">
    <li><b>Base CSG/CRDS</b> (assiette affichée)</li>
    <li><b>CSG déductible 6,80%</b></li>
    <li><b>CSG non déductible 2,40%</b></li>
    <li><b>CRDS 0,50%</b></li>
  </ul>

  <div class="formula formula-reminder">
    <p class="formula-title">📌 À retenir</p>
    <p class="formula-content">
      L’“assiette CSG” peut être <b>supérieure</b> au brut abattu car elle inclut des <b>ajouts patronaux</b> (mutuelle/prévoyance).
    </p>
  </div>

  <h3 style="text-align:center;">9️⃣ Liens officiels (à garder cliquables dans l’application)</h3>

  <p style="text-align:center;">
    URSSAF — CSG/CRDS :
    <br>
    <a href="https://www.urssaf.fr/accueil/employeur/cotisations/liste-cotisations/csg-crds.html"
       target="_blank" rel="noreferrer">
      https://www.urssaf.fr/accueil/employeur/cotisations/liste-cotisations/csg-crds.html
    </a>
  </p>

  <p style="text-align:center;">
    URSSAF — Complémentaire frais de santé (mutuelle) :
    <br>
    <a href="https://www.urssaf.fr/accueil/employeur/embaucher-gerer-salaries/embaucher/complementaire-frais-sante.html"
       target="_blank" rel="noreferrer">
      https://www.urssaf.fr/accueil/employeur/embaucher-gerer-salaries/embaucher/complementaire-frais-sante.html
    </a>
  </p>

  <p style="text-align:center;">
    Légifrance — CSS, article L136-2 (CSG) :
    <br>
    <a href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000042683568"
       target="_blank" rel="noreferrer">
      https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000042683568
    </a>
  </p>

  <p style="text-align:center;">
    Légifrance — Ordonnance n°96-50 du 24 janvier 1996 (CRDS) :
    <br>
    <a href="https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000029961312/2015-01-08"
       target="_blank" rel="noreferrer">
      https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000029961312/2015-01-08
    </a>
  </p>

  <p style="text-align:center;">
    <a href="#/referentiel/bases-calcul-cotisations">⬅ Retour “Dispositifs / bases-calcul-cotisations”</a>
  </p>
  
  `,
};
