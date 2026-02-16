// ✅ src/data/baseSalaireBrutCard.js

export const baseSalaireBrutCard = {
    id: "base-salaire-brut",
    group: "referentiel",
    title: "Salaire brut (assiette brute) — cotisations sur brut total — 2026",
    content: `

  <p style="text-align:center;"><b>📘 Salaire brut (assiette brute) — cotisations sur brut total — 2026</b></p>
  <p style="text-align:center;">(Version complète — cours / examen + pratique paie)</p>

  <div class="formula formula-reminder">
    <p class="formula-title">🎯 Objectif</p>
    <p class="formula-content">
      À partir d’un <b>salaire brut total</b> (brut “pur”, <b>sans abattement</b>), savoir :
      <br><br>
      ✅ identifier l’<b>assiette</b> de chaque cotisation : <b>total brut / plafonnée / tranches</b> ;
      <br><br>
      ✅ appliquer les <b>plafonds</b> et <b>limites</b> (PMSS, 4 PASS, tranches AGIRC-ARRCO…) ;
      <br><br>
      ✅ appliquer les <b>taux 2026</b> (part salariale / part patronale) ;
      <br><br>
      ⚠️ distinguer les lignes qui ne sont <b>pas</b> sur “brut pur” (ex : <b>CSG/CRDS</b> = base CSG) → <b>carte dédiée séparée</b>.
    </p>
  </div>

  <h3 style="text-align:center;">1️⃣ Définition : qu’est-ce que le “salaire brut total” (brut pur) ?</h3>

  <p style="text-align:center;">
    Le <b>salaire brut total</b> (ou “brut soumis”) correspond à l’ensemble des éléments de rémunération
    <b>soumis aux cotisations de Sécurité sociale</b>, avant toute retenue salariale.
  </p>

  <div class="formula formula-reminder">
    <p class="formula-title">✅ En pratique : ce qu’on retrouve le plus souvent dans le brut</p>
    <p class="formula-content">
      Salaire de base, heures supplémentaires / complémentaires, primes, commissions,
      avantages en nature <b>soumis</b>, indemnités <b>soumis</b> (selon leur nature), etc.
    </p>
  </div>

  <div class="formula formula-warn">
    <p class="formula-title">⚠️ À ne pas confondre</p>
    <p class="formula-content">
      <b>Frais professionnels</b> remboursés au réel (sur justificatifs) : en principe <b>hors assiette</b> car ce n’est pas du salaire.
      <br><br>
      Éléments <b>exonérés</b> (selon conditions) : certains avantages/indemnités peuvent sortir de l’assiette.
    </p>
  </div>

  <div class="formula formula-reminder">
    <p class="formula-title">📌 Plafonds 2026 (réflexe paie)</p>
    <p class="formula-content" style="text-align:center;">
      <b>PMSS 2026 = 4 005 €</b> ; <b>PASS 2026 = 48 060 €</b>.
      <br><br>
      🔗 BOSS (plafond SS 2026) :<br>
      <a href="https://boss.gouv.fr/portail/accueil/actualites-boss-et-rescrits/actualites-boss/2025/octobre/le-plafond-de-la-securite-social.html"
         target="_blank" rel="noreferrer">
        https://boss.gouv.fr/portail/accueil/actualites-boss-et-rescrits/actualites-boss/2025/octobre/le-plafond-de-la-securite-social.html
      </a>
      <br><br>
      🔗 URSSAF (plafond SS 2026) :<br>
      <a href="https://www.urssaf.fr/accueil/actualites/plafond-annuel-securite-sociale.html"
         target="_blank" rel="noreferrer">
        https://www.urssaf.fr/accueil/actualites/plafond-annuel-securite-sociale.html
      </a>
    </p>
  </div>

  <h3 style="text-align:center;">2️⃣ Pièges d’examen (à connaître)</h3>

  <p style="text-align:center;">
    Ici, on se concentre uniquement sur les cotisations calculées sur le <b>brut total</b> (sans abattement) et sur les pièges à retenir.
  </p>

  <div class="formula formula-warn">
    <p class="formula-title">⚠️ Piège n°1 — “Sur brut” ≠ “sur brut pur” pour tout</p>
    <p class="formula-content">
      Certaines lignes partent du brut mais ont une <b>assiette spécifique</b>.
      Exemple : <b>CSG/CRDS</b> = base CSG (avec abattement, limites et règles spécifiques).
      <br><br>
      ➡️ Ici : uniquement <b>brut total sans abattement</b>. La CSG/CRDS sera traitée dans une <b>carte séparée</b>.
    </p>
  </div>

  <div class="formula formula-warn">
    <p class="formula-title">⚠️ Piège n°2 — plafonds multiples</p>
    <p class="formula-content">
      <b>Vieillesse plafonnée</b> : seulement jusqu’au <b>PMSS</b>.
      <br><br>
      <b>AGIRC-ARRCO</b> : <b>T1</b> = 0 → 1 PMSS ; <b>T2</b> = 1 PMSS → 8 PMSS.
      <br><br>
      <b>Assurance chômage & AGS</b> : assiette <b>limitée à 4 PASS</b>.
    </p>
  </div>

  <div class="formula formula-reminder">
    <p class="formula-title">🔗 Sources “taux 2026” à jour</p>
    <p class="formula-content" style="text-align:center;">
      URSSAF — Taux secteur privé :<br>
      <a href="https://www.urssaf.fr/accueil/outils-documentation/taux-baremes/taux-cotisations-secteur-prive.html"
         target="_blank" rel="noreferrer">
        https://www.urssaf.fr/accueil/outils-documentation/taux-baremes/taux-cotisations-secteur-prive.html
      </a>
      <br><br>
      AGIRC-ARRCO — Paramètres :<br>
      <a href="https://www.agirc-arrco.fr/nous-connaitre/nos-etudes-et-publications/documentation-institutionnelle/parametres-et-donnees-statistiques/"
         target="_blank" rel="noreferrer">
        https://www.agirc-arrco.fr/nous-connaitre/nos-etudes-et-publications/documentation-institutionnelle/parametres-et-donnees-statistiques/
      </a>
      <br><br>
      Unédic — Taux de contribution (chômage / AGS) :<br>
      <a href="https://www.unedic.org/la-reglementation/fiches-thematiques/taux-de-contribution"
         target="_blank" rel="noreferrer">
        https://www.unedic.org/la-reglementation/fiches-thematiques/taux-de-contribution
      </a>
    </p>
  </div>

  <h3 style="text-align:center;">3️⃣ Tableau — Cotisations calculées sur le brut total (sans abattement) — 2026</h3>

  <p style="text-align:center;">
    Tableau récapitulatif des cotisations/contributions dont l’assiette est le <b>brut “pur”</b> (total brut, plafonné ou tranches).
  </p>

  <div class="formula formula-warn">
    <p class="formula-title">⚠️ Point examen — Allocations familiales</p>
    <p class="formula-content">
      <b>Cas général : taux employeur = 5,25%</b>.
      <br><br>
      <b>Taux réduit 3,45% : uniquement dans des cas spécifiques</b> (conditions URSSAF).
      <br><br>
      🔗 URSSAF — Allocations familiales :<br>
      <a href="https://www.urssaf.fr/accueil/employeur/cotisations/liste-cotisations/cotisation-allocation-familiale.html"
         target="_blank" rel="noreferrer">
        https://www.urssaf.fr/accueil/employeur/cotisations/liste-cotisations/cotisation-allocation-familiale.html
      </a>
    </p>
  </div>

  <div class="formula formula-reminder">
    <p class="formula-title">📌 Règle</p>
    <p class="formula-content">
      Ce tableau ne contient <b>que</b> les cotisations/contributions calculées sur une assiette “brut pur”
      (total brut / plafonnée / tranches).
      <br><br>
      Les cotisations à assiette spécifique (ex : <b>CSG/CRDS</b>) ne sont pas ici.
    </p>
  </div>

  <div class="recap-table-wrap">
    <table class="recap-table">
      <thead>
        <tr>
          <th>Cotisation / contribution</th>
          <th>Assiette</th>
          <th>Taux salarié</th>
          <th>Taux employeur</th>
          <th>Plafond / tranches</th>
          <th>Conditions précises</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><b>Maladie – maternité – invalidité – décès</b></td>
          <td>Total brut</td>
          <td>0,00%</td>
          <td>13,00%</td>
          <td>—</td>
          <td>Taux URSSAF secteur privé (2026).</td>
        </tr>

        <tr>
          <td><b>Allocations familiales</b></td>
          <td>Total brut</td>
          <td>0,00%</td>
          <td><b>5,25% (cas général)</b></td>
          <td>—</td>
          <td>
            <b>Taux réduit 3,45% uniquement dans des cas spécifiques</b> (conditions URSSAF) ; sinon taux normal 5,25%.
            <br><br>
            <a href="https://www.urssaf.fr/accueil/employeur/cotisations/liste-cotisations/cotisation-allocation-familiale.html"
               target="_blank" rel="noreferrer">
              https://www.urssaf.fr/accueil/employeur/cotisations/liste-cotisations/cotisation-allocation-familiale.html
            </a>
          </td>
        </tr>

        <tr>
          <td><b>CSA (solidarité autonomie)</b></td>
          <td>Total brut</td>
          <td>0,00%</td>
          <td>0,30%</td>
          <td>—</td>
          <td>Patronale URSSAF.</td>
        </tr>

        <tr>
          <td><b>AT/MP</b></td>
          <td>Total brut</td>
          <td>0,00%</td>
          <td>Variable</td>
          <td>—</td>
          <td>Taux selon risque / entreprise / établissement.</td>
        </tr>

        <tr>
          <td><b>Vieillesse plafonnée</b></td>
          <td>Brut plafonné</td>
          <td>6,90%</td>
          <td>8,55%</td>
          <td>0 → 1 PMSS</td>
          <td>Assiette limitée au PMSS.</td>
        </tr>

        <tr>
          <td><b>Vieillesse déplafonnée</b></td>
          <td>Total brut</td>
          <td>0,40%</td>
          <td>2,11%</td>
          <td>—</td>
          <td>Sur toute la rémunération.</td>
        </tr>

        <tr>
          <td><b>FNAL (&lt; 50)</b></td>
          <td>Brut plafonné</td>
          <td>0,00%</td>
          <td>0,10%</td>
          <td>0 → 1 PMSS</td>
          <td>Dépend de l’effectif (seuil 50).</td>
        </tr>

        <tr>
          <td><b>FNAL (≥ 50)</b></td>
          <td>Total brut</td>
          <td>0,00%</td>
          <td>0,50%</td>
          <td>—</td>
          <td>Dépend de l’effectif (seuil 50).</td>
        </tr>

        <tr>
          <td><b>Contribution au dialogue social</b></td>
          <td>Total brut</td>
          <td>0,00%</td>
          <td>0,016%</td>
          <td>—</td>
          <td>Patronale URSSAF.</td>
        </tr>

        <tr>
          <td><b>Assurance chômage</b></td>
          <td>Brut dans limite</td>
          <td>0,00%</td>
          <td>4,00%</td>
          <td>≤ 4 PASS</td>
          <td>Bonus-malus possible selon secteurs/entreprises (Unédic).</td>
        </tr>

        <tr>
          <td><b>AGS</b></td>
          <td>Brut dans limite</td>
          <td>0,00%</td>
          <td>0,25%</td>
          <td>≤ 4 PASS</td>
          <td>Patronale (Unédic).</td>
        </tr>

        <tr>
          <td><b>Versement mobilité (VM)</b></td>
          <td>Total brut</td>
          <td>0,00%</td>
          <td>Variable</td>
          <td>—</td>
          <td>Seulement si zone assujettie (AOM) + règles d’effectif/implantation.</td>
        </tr>

        <tr>
          <td><b>AGIRC-ARRCO Retraite (T1)</b></td>
          <td>Tranche 1</td>
          <td>3,15%</td>
          <td>4,72%</td>
          <td>0 → 1 PMSS</td>
          <td>Cadres et non-cadres.</td>
        </tr>

        <tr>
          <td><b>AGIRC-ARRCO Retraite (T2)</b></td>
          <td>Tranche 2</td>
          <td>8,64%</td>
          <td>12,95%</td>
          <td>1 PMSS → 8 PMSS</td>
          <td>Cadres et non-cadres.</td>
        </tr>

        <tr>
          <td><b>CEG (T1)</b></td>
          <td>Tranche 1</td>
          <td>0,86%</td>
          <td>1,29%</td>
          <td>0 → 1 PMSS</td>
          <td>Cadres et non-cadres.</td>
        </tr>

        <tr>
          <td><b>CEG (T2)</b></td>
          <td>Tranche 2</td>
          <td>1,08%</td>
          <td>1,62%</td>
          <td>1 PMSS → 8 PMSS</td>
          <td>Cadres et non-cadres.</td>
        </tr>

        <tr>
          <td><b>CET</b></td>
          <td>T1 + T2</td>
          <td>0,14%</td>
          <td>0,21%</td>
          <td>Due si salaire &gt; 1 PMSS</td>
          <td>Déclenchée uniquement si le salaire excède la T1.</td>
        </tr>

        <tr>
          <td><b>APEC (cadres)</b></td>
          <td>Brut plafonné</td>
          <td>0,024%</td>
          <td>0,036%</td>
          <td>≤ 4 PMSS</td>
          <td>Cadres uniquement (assiette plafonnée à 4 PMSS).</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h3 style="text-align:center;">4️⃣ Exemples chiffrés (arrondis au centime)</h3>

  <p style="text-align:center;">
    Exemples rapides pour vérifier les réflexes “plafonds / taux” sur assiette brute.
  </p>

  <div class="formula formula-example">
    <p class="formula-title">✅ Exemple 1 — Salarié à 3 000,00 € brut (en dessous du PMSS)</p>
    <p class="formula-content">
      Vieillesse plafonnée (assiette = 3 000,00) :
      <br>
      • Salarié : 3 000,00 × 6,90% = <b>207,00 €</b>
      <br>
      • Employeur : 3 000,00 × 8,55% = <b>256,50 €</b>
      <br><br>
      Vieillesse déplafonnée (assiette = 3 000,00) :
      <br>
      • Salarié : 3 000,00 × 0,40% = <b>12,00 €</b>
      <br>
      • Employeur : 3 000,00 × 2,11% = <b>63,30 €</b>
      <br><br>
      CSA (employeur) : 3 000,00 × 0,30% = <b>9,00 €</b>
      <br>
      Dialogue social (employeur) : 3 000,00 × 0,016% = <b>0,48 €</b>
      <br>
      Assurance chômage (employeur) : 3 000,00 × 4,00% = <b>120,00 €</b>
      <br>
      AGS (employeur) : 3 000,00 × 0,25% = <b>7,50 €</b>
    </p>
  </div>

  <div class="formula formula-example">
    <p class="formula-title">✅ Exemple 2 — Salarié à 6 000,00 € brut (avec T2 AGIRC-ARRCO)</p>
    <p class="formula-content">
      PMSS 2026 = 4 005,00 € :
      <br>
      • T1 = 4 005,00 €
      <br>
      • T2 = 6 000,00 – 4 005,00 = <b>1 995,00 €</b>
      <br><br>
      CET (car salaire &gt; PMSS, assiette = 6 000,00) :
      <br>
      • Salarié : 6 000,00 × 0,14% = <b>8,40 €</b>
      <br>
      • Employeur : 6 000,00 × 0,21% = <b>12,60 €</b>
    </p>
  </div>

  <h3 style="text-align:center;">5️⃣ Bases juridiques + liens officiels </h3>

  <p style="text-align:center;">
  </p>

  <ul class="centered-list bullets">
    <li>
      URSSAF — Taux secteur privé (2026) :
      <a href="https://www.urssaf.fr/accueil/outils-documentation/taux-baremes/taux-cotisations-secteur-prive.html"
         target="_blank" rel="noreferrer">
        https://www.urssaf.fr/accueil/outils-documentation/taux-baremes/taux-cotisations-secteur-prive.html
      </a>
    </li>
    <li>
      URSSAF — Cotisation allocations familiales :
      <a href="https://www.urssaf.fr/accueil/employeur/cotisations/liste-cotisations/cotisation-allocation-familiale.html"
         target="_blank" rel="noreferrer">
        https://www.urssaf.fr/accueil/employeur/cotisations/liste-cotisations/cotisation-allocation-familiale.html
      </a>
    </li>
    <li>
      BOSS — Plafond SS 2026 :
      <a href="https://boss.gouv.fr/portail/accueil/actualites-boss-et-rescrits/actualites-boss/2025/octobre/le-plafond-de-la-securite-social.html"
         target="_blank" rel="noreferrer">
        https://boss.gouv.fr/portail/accueil/actualites-boss-et-rescrits/actualites-boss/2025/octobre/le-plafond-de-la-securite-social.html
      </a>
    </li>
    <li>
      AGIRC-ARRCO — Paramètres :
      <a href="https://www.agirc-arrco.fr/nous-connaitre/nos-etudes-et-publications/documentation-institutionnelle/parametres-et-donnees-statistiques/"
         target="_blank" rel="noreferrer">
        https://www.agirc-arrco.fr/nous-connaitre/nos-etudes-et-publications/documentation-institutionnelle/parametres-et-donnees-statistiques/
      </a>
    </li>
    <li>
      Unédic — Taux chômage / AGS :
      <a href="https://www.unedic.org/la-reglementation/fiches-thematiques/taux-de-contribution"
         target="_blank" rel="noreferrer">
        https://www.unedic.org/la-reglementation/fiches-thematiques/taux-de-contribution
      </a>
    </li>
  </ul>

  <p style="text-align:center;">
    <a href="#/referentiel/bases-calcul-cotisations">⬅ Retour “Dispositifs / bases-calcul-cotisations”</a>
  </p>
  
  `,
};
