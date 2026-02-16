// ✅ src/data/proratisationSSABSCard.js

export const proratisationSSABSCard = {
    id: "proratisation-ss-abs",
    group: "referentiel",
    title: "ProratisationSSABS — Proratisation du plafond SS (absences / entrée / sortie)",
    content: `

  <p style="text-align:center;"><b>📘 La proratisation du plafond de la Sécurité sociale (PSS) en fonction de certaines absences</b></p>
  <p style="text-align:center;"><b>(version complète “cours / examen” + pratique paie)</b></p>

  <h3>1️⃣ Définition : de quoi parle-t-on ?</h3>

  <p style="text-align:center;">
    Le plafond de la Sécurité sociale sert de référence à de nombreux calculs en paie (notamment les cotisations plafonnées et les tranches).
    En pratique, on utilise très souvent le plafond mensuel (PMSS) comme repère de calcul.
  </p>

  <div class="formula formula-reminder">
    <p class="formula-title">📌 Montants 2026 (à connaître / à vérifier dans le logiciel)</p>
    <p class="formula-content">
      PMSS 2026 : <b>4 005 €</b><br>
      PASS 2026 : <b>48 060 €</b>
    </p>
  </div>

  <div class="formula formula-reminder">
    <p class="formula-title">🔗 Sources officielles</p>
    <p class="formula-content">
      URSSAF (actualité plafond 2026) :<br>
      <a href="https://www.urssaf.fr/accueil/actualites/plafond-annuel-securite-sociale.html" target="_blank" rel="noreferrer">
        https://www.urssaf.fr/accueil/actualites/plafond-annuel-securite-sociale.html
      </a>
      <br><br>
      BOSS (actualité plafond 2026) :<br>
      <a href="https://boss.gouv.fr/portail/accueil/actualites-boss-et-rescrits/actualites-boss/2025/octobre/le-plafond-de-la-securite-social.html" target="_blank" rel="noreferrer">
        https://boss.gouv.fr/portail/accueil/actualites-boss-et-rescrits/actualites-boss/2025/octobre/le-plafond-de-la-securite-social.html
      </a>
    </p>
  </div>

  <h3>2️⃣ Principe : pourquoi proratiser le PMSS ?</h3>

  <p style="text-align:center;">
    Le plafond mensuel peut devoir être réduit “à due proportion” quand le salarié n’est pas employé / n’est pas en situation rémunérée pendant toute la période
    (ou quand certaines situations légalement prévues imposent une réduction).
    <br><br>
    ➡️ L’idée : on ne garde pas un plafond “plein mois” si le mois n’est pas “plein” au sens des règles.
  </p>

  <h3>3️⃣ Base juridique (à citer en examen)</h3>

  <p style="text-align:center;"><b>A) Article de référence (Code de la Sécurité sociale)</b></p>

  <p style="text-align:center;">
    Les règles générales figurent dans le Code de la sécurité sociale, notamment l’article <b>R. 242-2</b>
    (plafond ajusté prorata temporis selon périodicité de paie + règles spécifiques).
  </p>

  <div class="formula formula-reminder">
    <p class="formula-title">🔗 Lien Légifrance</p>
    <p class="formula-content">
      <a href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000039222466" target="_blank" rel="noreferrer">
        https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000039222466
      </a>
    </p>
  </div>

  <p style="text-align:center;"><b>B) Texte ayant renforcé/clarifié la proratisation pour certaines absences</b></p>

  <p style="text-align:center;">
    Le <b>décret n° 2017-858 du 9 mai 2017</b> a notamment clarifié des cas où le plafond est également réduit
    (activité partielle, congés payés versés par une caisse, absences non rémunérées…).
  </p>

  <div class="formula formula-reminder">
    <p class="formula-title">🔗 Lien Légifrance (JORF)</p>
    <p class="formula-content">
      <a href="https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000034632416/" target="_blank" rel="noreferrer">
        https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000034632416/
      </a>
    </p>
  </div>

  <h3>4️⃣ Cas où l’on proratifie le plafond (PSS) — “liste réflexe”</h3>

  <p style="text-align:center;">
    Le plafond mensuel est réduit notamment lorsque :
  </p>

  <ul class="centered-list bullets">
    <li>Entrée en cours de mois (salarié embauché en milieu de période)</li>
    <li>Sortie en cours de mois (départ en milieu de période)</li>
    <li>Congés payés lorsque les indemnités sont versées par une caisse de congés payés (cas typique BTP)</li>
  </ul>

  <div class="formula formula-reminder">
    <p class="formula-title">🔗 Référence pratique URSSAF sur les caisses de congés payés</p>
    <p class="formula-content">
      <a href="https://www.urssaf.fr/accueil/employeur/cotisations/liste-cotisations/caisse-conges-payes.html" target="_blank" rel="noreferrer">
        https://www.urssaf.fr/accueil/employeur/cotisations/liste-cotisations/caisse-conges-payes.html
      </a>
    </p>
  </div>

  <ul class="centered-list bullets">
    <li>Activité partielle indemnisée (le plafond est réduit pour tenir compte des périodes concernées)</li>
    <li>Absence non rémunérée : toute absence sans maintien, total ou partiel, de salaire par l’employeur ou un tiers, y compris si l’absence ne couvre pas tout le mois (important depuis l’évolution des règles).</li>
  </ul>

  <div class="formula formula-warn">
    <p class="formula-title">✅ Point examen important</p>
    <p class="formula-content">
      Ce n’est pas “uniquement si l’absence couvre le mois entier”. Les règles visent les périodes d’absence non rémunérées dans le cadre de la paie.
    </p>
  </div>

  <h3>5️⃣ Méthode de calcul (formule à apprendre)</h3>

  <p style="text-align:center;">
    On raisonne en jours calendaires :
  </p>

  <div class="formula formula-formula">
    <p class="formula-title">📌 Formule</p>
    <p class="formula-content">
      <b>PSS proratisé</b> = <b>PMSS du mois</b> × <b>Nombre de jours calendaires “pris en compte”</b> / <b>Nombre de jours calendaires du mois</b>
      <br><br>
      Le “nombre de jours pris en compte” correspond aux jours de la période pendant laquelle le salarié est réputé “dans le champ” (employé/rémunéré selon les règles).
      <br>
      Le dénominateur est le nombre de jours calendaires du mois (28/29/30/31).
    </p>
  </div>

  <h3>6️⃣ Exemple simple (repris de ton cours) — entrée en cours de mois</h3>

  <p style="text-align:center;">
    Donnée de cours : PMSS = 3 864 € (année considérée dans l’exemple), mois de mars (31 jours).
    <br>
    Un salarié commence le 15 mars. Il est donc “présent/employé” du 15 au 31, soit 17 jours.
  </p>

  <div class="formula formula-example">
    <p class="formula-title">✅ Calcul</p>
    <p class="formula-content">
      PSS proratisé = 3 864 × 17 / 31<br>
      17/31 = 0,548387…<br>
      3 864 × 0,548387… = <b>2 118,97 €</b> (arrondi au centime)<br><br>
      ✅ Résultat : <b>PSS proratisé = 2 118,97 €</b>.<br>
      (Même méthode si sortie en cours de mois : on compte les jours jusqu’à la date de sortie.)
    </p>
  </div>

  <h3>7️⃣ ⚠️ Attention (piège classique)</h3>

  <div class="formula formula-warn">
    <p class="formula-title">⚠️ Piège</p>
    <p class="formula-content">
      Les absences inférieures à la journée (ex. : 1 heure non rémunérée, demi-journée de grève) ne donnent pas lieu à réduction du plafond dans la pratique paie usuelle :
      on ne “recalcule pas” un plafond sur de la micro-absence infra-journalière.
      <br><br>
      ➡️ Piège : ne pas confondre retenue sur salaire (qui peut être au réel) et proratisation du plafond, qui reste une logique “périodes / jours” (repère examen).
    </p>
  </div>

  <h3>8️⃣ Simulation complète (type examen) — Salarié cadre “COPIC”</h3>

  <p style="text-align:center;"><b>Énoncé (ton cas)</b></p>

  <ul class="centered-list bullets">
    <li>Salarié cadre “COPIC”, 35 h/semaine</li>
    <li>Salaire brut contractuel : 3 800 €</li>
    <li>Embauché le 10 juin</li>
    <li>Salaire du mois d’embauche : 2 590,90 €</li>
    <li>Juin comporte 30 jours</li>
    <li>Présence du 10 au 30 = 21 jours</li>
  </ul>

  <p style="text-align:center;"><b>A) Calculer le plafond applicable</b></p>

  <p style="text-align:center;">
    Donnée de cours : PMSS = 3 864 € (année de l’exercice).
  </p>

  <div class="formula formula-formula">
    <p class="formula-title">📌 Calcul</p>
    <p class="formula-content">
      PSS proratisé = 3 864 × 21 / 30<br><br>
      3 864 / 30 = 128,80<br>
      128,80 × 21 = <b>2 704,80 €</b><br><br>
      ✅ <b>PSS proratisé = 2 704,80 €</b>
    </p>
  </div>

  <p style="text-align:center;"><b>B) Décomposer le salaire brut en tranches A et B</b></p>

  <div class="formula formula-example">
    <p class="formula-title">✅ Tranches</p>
    <p class="formula-content">
      Tranche A = min(salaire brut, plafond proratisé)<br>
      → min(2 590,90 ; 2 704,80) = <b>2 590,90 €</b><br><br>
      Tranche B = salaire brut − tranche A, si salaire &gt; plafond<br>
      → 2 590,90 − 2 590,90 = <b>0,00 €</b><br><br>
      ✅ Tranche A : <b>2 590,90 €</b><br>
      ✅ Tranche B : <b>0,00 €</b><br><br>
      📌 Lecture examen : le salaire brut du mois est inférieur au plafond proratisé, donc tout en tranche A.
    </p>
  </div>

  <h3>9️⃣ Réflexes “logiciel de paie” (pratique pro)</h3>

  <ul class="centered-list bullets">
    <li>Vérifier le PMSS de l’année (paramètre logiciel) avant de conclure.</li>
    <li>Identifier si on est dans un cas de proratisation : entrée/sortie, activité partielle, congés payés versés par caisse, absence non rémunérée.</li>
    <li>Appliquer la formule en jours calendaires (28/29/30/31).</li>
    <li>Déduire les tranches à partir du plafond proratisé (A/B ou T1/T2 selon la rubrique concernée).</li>
  </ul>

  <div class="formula formula-reminder">
    <p class="formula-title">🔗 URSSAF 2026</p>
    <p class="formula-content">
      <a href="https://www.urssaf.fr/accueil/actualites/plafond-annuel-securite-sociale.html" target="_blank" rel="noreferrer">
        https://www.urssaf.fr/accueil/actualites/plafond-annuel-securite-sociale.html
      </a>
    </p>
  </div>

  <h3>🔗 Liens officiels </h3>

  <ul class="centered-list bullets">
    <li>
      Article R. 242-2 CSS (Légifrance) :<br>
      <a href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000039222466" target="_blank" rel="noreferrer">
        https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000039222466
      </a>
    </li>
    <li>
      Décret n° 2017-858 du 9 mai 2017 (JORF – Légifrance) :<br>
      <a href="https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000034632416/" target="_blank" rel="noreferrer">
        https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000034632416/
      </a>
    </li>
    <li>
      Plafond SS 2026 (URSSAF) :<br>
      <a href="https://www.urssaf.fr/accueil/actualites/plafond-annuel-securite-sociale.html" target="_blank" rel="noreferrer">
        https://www.urssaf.fr/accueil/actualites/plafond-annuel-securite-sociale.html
      </a>
    </li>
    <li>
      Actualité BOSS plafond 2026 :<br>
      <a href="https://boss.gouv.fr/portail/accueil/actualites-boss-et-rescrits/actualites-boss/2025/octobre/le-plafond-de-la-securite-social.html" target="_blank" rel="noreferrer">
        https://boss.gouv.fr/portail/accueil/actualites-boss-et-rescrits/actualites-boss/2025/octobre/le-plafond-de-la-securite-social.html
      </a>
    </li>
    <li>
      URSSAF – Caisse de congés payés :<br>
      <a href="https://www.urssaf.fr/accueil/employeur/cotisations/liste-cotisations/caisse-conges-payes.html" target="_blank" rel="noreferrer">
        https://www.urssaf.fr/accueil/employeur/cotisations/liste-cotisations/caisse-conges-payes.html
      </a>
    </li>
  </ul>

  <p style="text-align:center;">
    <a href="#/referentiel/bases-calcul-cotisations">⬅ Retour “Dispositifs / bases-calcul-cotisations”</a>
  </p>

  `,
};
