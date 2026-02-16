// src/data/vrpCards.js
export const vrpCards = [
  // ===============================
  // CARTES PRINCIPALES (VRP)
  // ===============================
  {
    id: "definition",
    group: "main",
    title: "Définition du VRP",
    content: `
      <p>Le VRP (Voyageur Représentant Placier) est un salarié chargé de la représentation commerciale d’un ou plusieurs employeurs.</p>

      <p>Le statut VRP s’applique <b>de plein droit</b> dès lors que les conditions de l’article <b>L7311-3</b> du Code du travail sont réunies :</p>
      <ul>
        <li>activité principale de représentation,</li>
        <li>absence d’opérations commerciales pour compte personnel,</li>
        <li>accords préalables sur les produits/services, la zone/clients, et la rémunération.</li>
      </ul>

      <div class="formula formula-example">
        <p class="formula-title">✅ Exemple</p>
        <p class="formula-content">
          Une salariée démarche des clients pour vendre les produits de l’entreprise (activité principale),<br>
          ne fait aucune vente pour son compte personnel,<br>
          et son contrat fixe la zone + le % de commission.<br>
          → Les conditions sont réunies : <b>statut VRP s’applique automatiquement</b>.
        </p>
      </div>

      <div class="formula formula-reminder">
        <p class="formula-title">🧠 Réflexe examen</p>
        <p class="formula-content">
          VRP = statut salarié qui s’impose (pas un choix)<br>
          → dès que les conditions de L7311-3 sont réunies
        </p>
      </div>
    `,
  },

  {
    id: "categories",
    group: "main",
    title: "Catégories : VRP exclusif / multicartes",
    content: `
      <ul>
        <li><b>VRP exclusif</b> : travaille pour un seul employeur, avec clause d’exclusivité.</li>
        <li><b>VRP multicartes</b> : travaille pour un ou plusieurs employeurs, sans exclusivité.</li>
      </ul>

      <div class="formula formula-example">
        <p class="formula-title">✅ Exemples</p>
        <p class="formula-content">
          • VRP exclusif : Paul représente uniquement la société A → <b>exclusif</b>.<br>
          • VRP multicartes : Lina représente la société A + la société B → <b>multicartes</b>.
        </p>
      </div>

      <div class="formula formula-reminder">
        <p class="formula-title">🧠 À retenir</p>
        <p class="formula-content">
          Cette distinction impacte : garantie minimale (exclusif temps plein), cotisations (multicartes) et APEC.
        </p>
      </div>
    `,
  },

  {
    id: "contrat",
    group: "main",
    title: "Contrat du VRP (clause frais inclus, essai)",
    content: `
      <p>Le contrat fixe notamment : produits/services, zone/clients, modalités de rémunération, etc.</p>

      <h3>Clause « frais professionnels inclus »</h3>
      <p>Si les frais professionnels sont <b>inclus forfaitairement</b> dans la commission, le contrat doit contenir une <b>clause spécifique</b>.</p>

      <h3>Période d’essai</h3>
      <p>La période d’essai prévue au contrat ne peut pas dépasser <b>3 mois</b>.</p>

      <div class="formula formula-example">
        <p class="formula-title">✅ Exemple</p>
        <p class="formula-content">
          Commission prévue : 8% du CA, mais le contrat précise : “dont 30% correspondent à un forfait de frais”.<br>
          → OK seulement si une <b>clause “frais inclus”</b> est écrite.<br>
          Sans clause : risque de contestation (frais non cadrés).
        </p>
      </div>

      <div class="formula formula-warn">
        <p class="formula-title">⚠️ Point de vigilance</p>
        <p class="formula-content">
          Sans clause “frais inclus”, les frais peuvent être contestés (requalification / rappel).
        </p>
      </div>
    `,
  },

  {
    id: "remuneration",
    group: "main",
    title: "Rémunération du VRP (fixe / commissions)",
    content: `
      <p>Rémunération fixée par le contrat : <b>fixe</b>, <b>commissions seules</b>, ou <b>fixe + commissions</b>.</p>
      <p>En pratique : fixe mensuel ; commissions au moins trimestrielles.</p>
      <p>En principe, le droit à commission est acquis <b>dès la prise de commande</b>.</p>

      <div class="formula formula-example">
        <p class="formula-title">✅ Exemple</p>
        <p class="formula-content">
          CA réalisé : 75 000 € ; commission : 4,5%<br>
          Commission = 75 000 × 4,5% = <b>3 375 €</b><br>
          Si le contrat prévoit “fixe 1 350 € + commissions”, alors brut (hors frais) = <b>1 350 + 3 375 = 4 725 €</b>.
        </p>
      </div>
    `,
  },

  {
    id: "frais-dfs",
    group: "main",
    title: "Frais professionnels & DFS (28% en 2024)",
    content: `
      <h3>Frais professionnels</h3>
      <p>Les frais professionnels sont obligatoirement pris en charge par l’employeur.</p>
      <p>Modalités : remboursement <b>au réel</b> (justificatifs) ou <b>forfait</b> (peut être inclus dans la commission).</p>

      <h3>Frais ≠ salaire</h3>
      <p>Les frais professionnels ne constituent pas un salaire : ils peuvent être exclus de certaines indemnités (selon règles applicables).</p>

      <h3>DFS – Déduction Forfaitaire Spécifique</h3>
      <ul>
        <li><b>Accord du salarié obligatoire</b></li>
        <li><b>Plafond annuel</b> : 7 600 €</li>
        <li><b>Taux VRP 2024</b> : 28%</li>
      </ul>

      <div class="formula formula-formula">
        <p class="formula-title">📐 Exemple DFS</p>
        <p class="formula-content">
          Brut 3 000 € → assiette cotisations = 3 000 × 72% = <b>2 160 €</b>
        </p>
      </div>

      <div class="formula formula-example">
        <p class="formula-title">✅ Exemple “frais inclus dans commission”</p>
        <p class="formula-content">
          Commission “brute” : 3 750 € (dont 30% de frais inclus).<br>
          Part frais = 3 750 × 30% = <b>1 125 €</b><br>
          Commission “nette de frais” = 3 750 − 1 125 = <b>2 625 €</b><br>
          → C’est ce montant net de frais qu’on compare à la garantie minimale (si applicable).
        </p>
      </div>
    `,
  },

  {
    id: "garantie-minimale",
    group: "main",
    title: "Garantie minimale (VRP exclusif temps plein) – avec exemple complet",
    content: `
      <p><b>Seuls les VRP exclusifs à temps plein</b> bénéficient d’une garantie minimale de rémunération.</p>

      <div class="formula formula-formula">
        <p class="formula-title">📐 Garantie minimale trimestrielle</p>
        <p class="formula-content">
          <b>520 × SMIC horaire</b> (taux du dernier mois échu)
        </p>
      </div>

      <p>Garantie réduite en cas d’entrée, sortie ou suspension du contrat en cours de trimestre.</p>
      <p><b>Méthode simple validée</b> : comparer la <b>rémunération nette de frais professionnels</b> à la garantie.</p>
      <p>Si inférieur → <b>complément</b> dû par l’employeur.</p>
      <p>Le complément peut être récupéré sur l’excédent au cours des <b>3 trimestres suivants</b>.</p>

      <h3>Exemple simple</h3>
      <div class="formula formula-example">
        <p class="formula-title">✅ Exemple</p>
        <p class="formula-content">
          SMIC horaire = 11,75 €<br>
          Garantie = 520 × 11,75 = <b>6 110 €</b><br>
          Rémunération nette de frais du trimestre = <b>5 200 €</b><br>
          → Complément = 6 110 − 5 200 = <b>910 €</b>
        </p>
      </div>

      <h3>Exemple “qu’on a fait ensemble” (commissions + frais inclus)</h3>
      <p><b>Données</b> :</p>
      <ul>
        <li>Commission du trimestre : <b>3 750 €</b></li>
        <li>Frais inclus dans la commission : <b>30%</b></li>
        <li>SMIC horaire : <b>11,75 €</b></li>
        <li>Garantie = 520 × 11,75 = <b>6 110 €</b></li>
      </ul>

      <div class="formula formula-formula">
        <p class="formula-title">📐 Étape 1 : isoler la commission nette de frais</p>
        <p class="formula-content">
          Frais = 3 750 × 30% = <b>1 125 €</b><br>
          Commission nette de frais = 3 750 − 1 125 = <b>2 625 €</b>
        </p>
      </div>

      <p><b>Étape 2 : déterminer le “brut équivalent” à verser quand les frais sont inclus</b></p>
      <p>
        Dans ce type de cours/exemple, on “remonte” au montant qui, une fois qu’on enlève 30% de frais,
        donne la garantie nette de frais.
      </p>

      <div class="formula formula-formula">
        <p class="formula-title">📐 Reconstitution</p>
        <p class="formula-content">
          Montant à verser (avec frais inclus) = Garantie × 100 / (100 − % frais)<br>
          = 6 110 × 100 / 70 = <b>8 728,57 €</b>
        </p>
      </div>

      <div class="formula formula-example">
        <p class="formula-title">✅ Étape 3 : complément employeur</p>
        <p class="formula-content">
          Complément = 8 728,57 − 3 750 = <b>4 978,57 €</b>
        </p>
      </div>

      <div class="formula formula-reminder">
        <p class="formula-title">🧠 Réflexe</p>
        <p class="formula-content">
          Si frais inclus = on compare en “net de frais”,<br>
          et si on doit compléter, on raisonne avec la reconstitution (÷ 70%).
        </p>
      </div>
    `,
  },

  {
    id: "temps-travail",
    group: "main",
    title: "Temps de travail du VRP",
    content: `
      <p><b>Principe</b> : le VRP n’est pas soumis aux règles de durée du travail.</p>
      <p>➡️ Donc pas de majoration d’heures supplémentaires.</p>

      <h3>Exception</h3>
      <p>Si le VRP est soumis à un horaire <b>déterminé et contrôlable</b>, les règles de durée du travail peuvent s’appliquer (sauf disposition conventionnelle contraire).</p>

      <div class="formula formula-example">
        <p class="formula-title">✅ Exemple</p>
        <p class="formula-content">
          VRP qui organise librement sa tournée → <b>pas d’horaire contrôlable</b> → pas d’heures sup.<br>
          VRP qui pointe sur un planning quotidien contrôlé → <b>horaire déterminé et contrôlable</b> → règles possibles.
        </p>
      </div>
    `,
  },

  {
    id: "cotisations",
    group: "main",
    title: "Cotisations (menu)",
    content: `
      <p>Choisir une rubrique :</p>
      <div class="mini-grid" id="cotisations-buttons"></div>
      <br>
      <a href="#/vrp">⬅ Retour au module VRP</a>
    `,
  },

  // ===============================
  // SOUS-CARTES (COTISATIONS)
  // ===============================
  {
    id: "cotisations-urssaf",
    group: "cotisations",
    title: "URSSAF – exclusif / multicartes (DSN)",
    content: `
      <ul>
        <li><b>VRP exclusif</b> : cotisations du régime général.</li>
        <li><b>VRP multicartes</b> : cotisations salariales régime général + cotisations patronales spécifiques (arrêté).</li>
      </ul>

      <div class="formula formula-reminder">
        <p class="formula-title">🧠 DSN</p>
        <p class="formula-content">
          DSN <b>mensuelle</b> obligatoire, même si rémunération trimestrielle (avec <b>paie à 0</b> les mois sans paiement).
        </p>
      </div>

      <div class="formula formula-formula">
        <p class="formula-title">📐 Spécificité multicartes 2024</p>
        <p class="formula-content">
          Vieillesse plafonnée : <b>6,90%</b> au lieu de <b>8,55%</b> → impact RGCP : <b>T réduit de 1,65 point</b>.
        </p>
      </div>

      <div class="formula formula-example">
        <p class="formula-title">✅ Exemple DSN “paie à 0”</p>
        <p class="formula-content">
          VRP payé au trimestre : paiement en mars.<br>
          Janvier : DSN envoyée (paie à 0).<br>
          Février : DSN envoyée (paie à 0).<br>
          Mars : DSN envoyée avec la rémunération du trimestre.
        </p>
      </div>
    `,
  },

  {
    id: "rgcp",
    group: "cotisations",
    title: "RGCP – méthode + rappels (VRP multicartes 2024)",
    content: `
      <p>La réduction générale des cotisations patronales (ex-Fillon) est applicable aux <b>VRP multicartes</b>.</p>

      <div class="formula formula-formula">
        <p class="formula-title">📐 Coefficient T ajusté (2024)</p>
        <p class="formula-content">
          • Moins de 50 salariés : 31,94% – 1,65% = <b>30,29%</b> → T = <b>0,3029</b><br>
          • 50 salariés et plus : 32,34% – 1,65% = <b>30,69%</b> → T = <b>0,3069</b>
        </p>
      </div>

      <div class="formula formula-formula">
        <p class="formula-title">📐 Formule coefficient</p>
        <p class="formula-content">
          Coefficient = T × (1,6 × SMIC / rémunération brute – 1)
        </p>
      </div>

      <div class="formula formula-formula">
        <p class="formula-title">📐 Montant RGCP</p>
        <p class="formula-content">
          RGCP = rémunération brute × coefficient
        </p>
      </div>

      <div class="formula formula-reminder">
        <p class="formula-title">🧠 Rappels (examen)</p>
        <p class="formula-content">
          • Réduction <b>maximale au SMIC</b><br>
          • Réduction <b>nulle à 1,6 SMIC</b><br>
          • <b>T</b> = constante ; <b>coefficient</b> = résultat après calcul
        </p>
      </div>

      <div class="formula formula-example">
        <p class="formula-title">✅ Mini-exemple “au SMIC”</p>
        <p class="formula-content">
          Si rémunération = SMIC (sur la période) → réduction proche du maximum (selon la formule).<br>
          Si rémunération = 1,6 SMIC → coefficient tend vers 0 → RGCP = 0.
        </p>
      </div>
    `,
  },

  {
    id: "rgcp-pas-a-pas",
    group: "cotisations",
    title: "RGCP – exemple chiffré pas à pas (2024)",
    content: `
      <ul>
        <li>Salaire brut du trimestre : <b>5 400,00 €</b></li>
        <li>Entreprise : <b>105 salariés</b> → T = <b>0,3069</b></li>
        <li>SMIC horaire : <b>11,75 €</b></li>
        <li>SMIC trimestriel : 11,75 × 520 = <b>6 110,00 €</b></li>
      </ul>

      <div class="formula formula-formula">
        <p class="formula-title">📐 1) Coefficient</p>
        <p class="formula-content">
          Coefficient = 0,3069 × (1,6 × 6 110 / 5 400 − 1) ≈ <b>0,2917</b>
        </p>
      </div>

      <div class="formula formula-formula">
        <p class="formula-title">📐 2) RGCP</p>
        <p class="formula-content">
          RGCP = 5 400,00 × 0,2917 = <b>1 575,43 €</b>
        </p>
      </div>

      <div class="formula formula-reminder">
        <p class="formula-title">🧠 Point clé</p>
        <p class="formula-content">
          Ne pas confondre :<br>
          • T (0,3069) = constante<br>
          • coefficient (0,2917) = résultat du calcul
        </p>
      </div>
    `,
  },

  {
    id: "csg-crds",
    group: "cotisations",
    title: "CSG–CRDS (DFS 28% / abattement 1,75%)",
    content: `
      <div class="formula formula-reminder">
        <p class="formula-title">🧠 Rappel</p>
        <p class="formula-content">
          La DFS (28% en 2024) <b>ne s’applique pas</b> à l’assiette CSG–CRDS.
        </p>
      </div>

      <h3>Assiette CSG–CRDS</h3>
      <p>Calculée sur le <b>salaire brut avant DFS</b>, après abattement <b>1,75%</b>.</p>

      <h3>Frais professionnels</h3>
      <p>Les frais ne sont pas un revenu d’activité : ils sont <b>exclus de l’assiette CSG–CRDS</b>.</p>

      <div class="formula formula-example">
        <p class="formula-title">✅ Exemple</p>
        <p class="formula-content">
          Brut (hors DFS) : 2 000 €<br>
          Abattement 1,75% : 2 000 × 98,25% = <b>1 965 €</b><br>
          → Assiette CSG/CRDS = <b>1 965 €</b> (hors frais pro exclus).
        </p>
      </div>

      <div class="formula formula-warn">
        <p class="formula-title">⚠️ Spécificité (cours)</p>
        <p class="formula-content">
          VRP multicartes : régularisation possible si justificatifs envoyés à la <b>CRAF</b> avant le <b>1er mars</b> de l’année suivante.
        </p>
      </div>
    `,
  },

  {
    id: "retraite",
    group: "cotisations",
    title: "Retraite complémentaire – Tranches T1/T2 (CEG / CET)",
    content: `
      <p>Retraite complémentaire VRP : <b>Omnirep</b>.</p>
      <p>Les VRP cotisent selon : exclusif/multicartes, cadre/non-cadre, et rémunération sous/au-dessus du plafond.</p>

      <div class="formula formula-reminder">
        <p class="formula-title">🧠 Tranches (à connaître)</p>
        <p class="formula-content">
          • <b>T1</b> : part de rémunération <b>jusqu’au plafond</b> de la Sécurité sociale<br>
          • <b>T2</b> : part de rémunération <b>au-delà du plafond</b>
        </p>
      </div>

      <p><b>CET</b> : s’applique si salaire &gt; plafond ; elle est calculée sur <b>T1 + T2</b>.</p>

      <div class="formula formula-example">
        <p class="formula-title">✅ Exemple “découpage en tranches”</p>
        <p class="formula-content">
          Plafond mensuel (exemple) : 3 800 €<br>
          Salaire brut : 5 000 €<br>
          → T1 = 3 800 €<br>
          → T2 = 5 000 − 3 800 = <b>1 200 €</b><br>
          Les cotisations retraite (et CEG) se calculent sur T1 puis T2 ;<br>
          la CET s’applique car salaire &gt; plafond (sur T1 + T2).
        </p>
      </div>
    `,
  },

  {
    id: "apec",
    group: "cotisations",
    title: "APEC (qui cotise ?)",
    content: `
      <div class="formula formula-reminder">
        <p class="formula-title">🧠 Règle</p>
        <p class="formula-content">
          • <b>VRP exclusif cadre</b> : cotise à l’APEC.<br>
          • <b>VRP multicartes</b> : ne cotise pas à l’APEC.
        </p>
      </div>

      <div class="formula formula-example">
        <p class="formula-title">✅ Exemple</p>
        <p class="formula-content">
          • VRP exclusif + statut cadre → <b>APEC OUI</b><br>
          • VRP multicartes + statut cadre → <b>APEC NON</b>
        </p>
      </div>
    `,
  },

  {
    id: "prevoyance",
    group: "cotisations",
    title: "Prévoyance – décès cadre 1,50% (T1)",
    content: `
      <p>Pour les cadres (ou assimilés cadres), cotisation décès obligatoire de <b>1,50%</b> sur la <b>Tranche 1</b>.</p>
      <p>Applicable aux VRP <b>exclusifs</b> et <b>multicartes</b> dès lors qu’ils sont cadres.</p>

      <div class="formula formula-example">
        <p class="formula-title">✅ Exemple</p>
        <p class="formula-content">
          T1 = 3 800 € (exemple plafond)<br>
          Décès cadre = 3 800 × 1,50% = <b>57,00 €</b> (réparti selon part salariale/patronale selon contrat/accord)
        </p>
      </div>
    `,
  },

  // ===============================
  // SIMULATIONS (comme le cours)
  // ===============================
  {
    id: "simulation-multicartes-cadre",
    group: "cotisations",
    title: "Simulation – VRP multicartes cadre (paie trimestrielle) – Mars 2024",
    content: `
      <p><b>Profil</b> : VRP multicartes, statut cadre, rémunéré uniquement à la commission <b>au trimestre</b>.</p>
      <p><b>Contexte</b> : bulletin du mois de <b>mars 2024</b> (paiement du 1er trimestre).</p>

      <h3>Données</h3>
      <ul>
        <li>Chiffre d’affaires 1er trimestre : <b>121 000,00 €</b></li>
        <li>Taux de commission : <b>8%</b></li>
        <li>DFS appliquée : <b>28%</b></li>
        <li>Effectif entreprise : <b>360 salariés</b></li>
        <li>Versement mobilité : <b>2%</b></li>
        <li>Taux AT : <b>0,96%</b></li>
        <li>PAS : <b>9,50%</b></li>
        <li>Cadre non exclusif : <b>pas d’APEC</b></li>
      </ul>

      <div class="formula formula-formula">
        <p class="formula-title">📐 Étape 1 – Commission trimestrielle</p>
        <p class="formula-content">
          121 000 × 8% = <b>9 680,00 €</b>
        </p>
      </div>

      <div class="formula formula-reminder">
        <p class="formula-title">🧠 Étape 2 – Vérification garantie minimale (rappel)</p>
        <p class="formula-content">
          Dans ton cours, la garantie minimale affichée est :<br>
          520 × 11,65 = <b>6 058,00 €</b><br>
          Ici, la commission étant supérieure au minimum, <b>pas de complément</b>.
        </p>
      </div>

      <div class="formula formula-formula">
        <p class="formula-title">📐 Étape 3 – Brut abattu (DFS 28%)</p>
        <p class="formula-content">
          9 680,00 − 28% = <b>6 969,60 €</b>
        </p>
      </div>

      <div class="formula formula-formula">
        <p class="formula-title">📐 Étape 4 – RGCP</p>
        <p class="formula-content">
          Ton cours donne directement : coefficient RGCP = <b>0,1109</b><br>
          Montant = 6 969,60 × 0,1109 = <b>772,93 €</b>
        </p>
      </div>

      <div class="formula formula-formula">
        <p class="formula-title">📐 Étape 5 – Base CSG-CRDS</p>
        <p class="formula-content">
          9 680 × 98,25% + 104,54 = <b>9 615,14 €</b>
        </p>
      </div>

      <div class="formula formula-example">
        <p class="formula-title">✅ Étape 6 – Résultats nets (donnés par le cours)</p>
        <p class="formula-content">
          Net à payer avant impôt : <b>7 959,07 €</b><br>
          Charges salariales : <b>1 720,93 €</b><br>
          Net imposable : <b>8 237,91 €</b> (incluant CSG/CRDS non déductible : <b>278,84 €</b>)
        </p>
      </div>

      <div class="formula formula-reminder">
        <p class="formula-title">🧠 Réflexe examen</p>
        <p class="formula-content">
          1) Commission → 2) Brut abattu (DFS) → 3) RGCP sur brut abattu<br>
          4) Base CSG sur brut avant DFS (abattement 1,75%) + parts employeur si concernées
        </p>
      </div>
    `,
  },

  {
    id: "simulation-exclusif-cadre",
    group: "cotisations",
    title: "Simulation – VRP exclusif cadre (fixe + commissions) – Janvier 2024",
    content: `
      <p><b>Profil</b> : VRP exclusif, statut cadre, fixe mensuel + commissions mensuelles + frais professionnels au réel.</p>
      <p><b>Contexte</b> : bulletin de <b>janvier 2024</b>.</p>

      <h3>Données</h3>
      <ul>
        <li>Salaire fixe : <b>1 350,00 €</b></li>
        <li>CA du mois : <b>75 000,00 €</b></li>
        <li>Commission : <b>4,5%</b></li>
        <li>Frais professionnels du mois (réel) : <b>950,00 €</b></li>
        <li>DFS appliquée : <b>28%</b></li>
        <li>Effectif entreprise : <b>205 salariés</b></li>
        <li>Versement mobilité : <b>2,10%</b></li>
        <li>Taux AT : <b>0,96%</b></li>
        <li>PAS : <b>6,25%</b></li>
        <li>Mutuelle : <b>65,00 €</b> part salariale + <b>65,00 €</b> part patronale</li>
        <li>Cadre exclusif : <b>cotise à l’APEC</b></li>
      </ul>

      <div class="formula formula-formula">
        <p class="formula-title">📐 Étape 1 – Commission mensuelle</p>
        <p class="formula-content">
          75 000 × 4,5% = <b>3 375,00 €</b>
        </p>
      </div>

      <div class="formula formula-formula">
        <p class="formula-title">📐 Étape 2 – Rémunération brute (avec frais)</p>
        <p class="formula-content">
          1 350,00 + 3 375,00 + 950,00 = <b>5 675,00 €</b>
        </p>
      </div>

      <div class="formula formula-formula">
        <p class="formula-title">📐 Étape 3 – Brut abattu (DFS 28%)</p>
        <p class="formula-content">
          5 675,00 − 28% = <b>4 086,00 €</b>
        </p>
      </div>

      <div class="formula formula-warn">
        <p class="formula-title">⚠️ Étape 4 – RGCP</p>
        <p class="formula-content">
          Dans ton cours : la rémunération abattue est &gt; 1,6 SMIC → <b>RGCP non applicable</b>.
        </p>
      </div>

      <div class="formula formula-reminder">
        <p class="formula-title">🧠 Étape 5 – Base CSG-CRDS (rappel important)</p>
        <p class="formula-content">
          Les frais professionnels sont <b>exclus</b> de la base CSG/CRDS.<br>
          Base calculée sur <b>(fixe + commissions)</b> × 98,25% + part employeur mutuelle/prévoyance (selon le cas).<br>
          Ton cours donne : Base = <b>4 765,25 €</b>.
        </p>
      </div>

      <div class="formula formula-example">
        <p class="formula-title">✅ Étape 6 – Résultats nets (donnés par le cours)</p>
        <p class="formula-content">
          Net à payer avant impôt : <b>4 681,58 €</b><br>
          Charges salariales : <b>993,42 €</b><br>
          Net imposable : <b>4 884,78 €</b>
        </p>
      </div>

      <div class="formula formula-reminder">
        <p class="formula-title">🧠 Réflexe examen</p>
        <p class="formula-content">
          1) Fixe + commissions = revenu d’activité<br>
          2) Frais réels : au brut mais <b>hors base CSG</b><br>
          3) DFS : attention, elle ne s’applique pas à la CSG-CRDS
        </p>
      </div>
    `,
  },

  {
    id: "simulation-tranches-cet",
    group: "cotisations",
    title: "Mini-simulation – Découpage T1/T2 + CET (très simple)",
    content: `
      <p><b>Objectif</b> : comprendre le découpage en <b>Tranche 1 (T1)</b> / <b>Tranche 2 (T2)</b> et quand la <b>CET</b> s’applique.</p>

      <h3>Données (exemple volontairement simple)</h3>
      <ul>
        <li>Plafond mensuel Sécurité sociale (exemple) : <b>3 800 €</b></li>
        <li>Salaire brut du mois : <b>5 000 €</b></li>
      </ul>

      <div class="formula formula-formula">
        <p class="formula-title">📐 Étape 1 – Tranche 1 (T1)</p>
        <p class="formula-content">
          T1 = min(salaire, plafond) = min(5 000, 3 800) = <b>3 800 €</b>
        </p>
      </div>

      <div class="formula formula-formula">
        <p class="formula-title">📐 Étape 1 – Tranche 2 (T2)</p>
        <p class="formula-content">
          T2 = salaire − plafond = 5 000 − 3 800 = <b>1 200 €</b>
        </p>
      </div>

      <div class="formula formula-reminder">
        <p class="formula-title">🧠 Étape 2 – Logique de calcul</p>
        <p class="formula-content">
          Les cotisations retraite (et la <b>CEG</b>) se calculent sur <b>T1</b>, et aussi sur <b>T2</b> s’il y en a une.<br>
          La <b>CET</b> s’applique <b>uniquement si le salaire dépasse le plafond</b>.
        </p>
      </div>

      <div class="formula formula-formula">
        <p class="formula-title">📐 Quand la CET s’applique ?</p>
        <p class="formula-content">
          Si salaire &gt; plafond → <b>CET OUI</b><br>
          Ici : 5 000 &gt; 3 800 → <b>CET OUI</b><br>
          Assiette CET : <b>T1 + T2</b> = 3 800 + 1 200 = <b>5 000 €</b>
        </p>
      </div>

      <p><i>(On invente un taux CET pour l’exercice : <b>0,35%</b> – l’objectif est la méthode, pas le taux.)</i></p>

      <div class="formula formula-example">
        <p class="formula-title">✅ Montant CET (exercice)</p>
        <p class="formula-content">
          CET = 5 000 × 0,35% = <b>17,50 €</b>
        </p>
      </div>

      <div class="formula formula-reminder">
        <p class="formula-title">🧠 Réflexe examen</p>
        <p class="formula-content">
          1) Repérer le plafond<br>
          2) T1 = plafond (si salaire au-dessus)<br>
          3) T2 = dépassement<br>
          4) Si dépassement → CET sur <b>T1 + T2</b>
        </p>
      </div>
    `,
  },
];
