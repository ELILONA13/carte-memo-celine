// src/data/vieillesseAssuranceCard.js
export const vieillesseAssuranceCard = {
    id: "assurance-vieillesse",
    group: "referentiel",
    title: "Cotisation d’assurance vieillesse",
    content: `

  <div class="formula formula-reminder">
    <p class="formula-title">📘 LA COTISATION D’ASSURANCE VIEILLESSE</p>
    <p class="formula-content">
      (Retraite de base – régime général – 2026)
    </p>
  </div>

  <h3>1️⃣ Finalité : à quoi sert la cotisation vieillesse ?</h3>

  <p style="text-align:center;">
    La cotisation d’assurance vieillesse finance la retraite de base des salariés du régime général.
  </p>

  <p style="text-align:center;">
    Elle permet d’ouvrir des droits à pension auprès de la :
  </p>

  <p style="text-align:center;">
    <b>CNAV – Caisse Nationale d’Assurance Vieillesse</b>
  </p>

  <p style="text-align:center;">
    La CNAV est la branche vieillesse du régime général de la Sécurité sociale.
  </p>

  <p style="text-align:center;">
    📖 Référence officielle URSSAF – Cotisation d’assurance vieillesse :
  </p>

  <p style="text-align:center;">
    <a href="https://www.urssaf.fr/accueil/employeur/cotisations/liste-cotisations/at-vieillesse-csa-dialoguesocial.html#ancre-cotisation-d-assurance-vieillesse"
       target="_blank" rel="noreferrer">
      https://www.urssaf.fr/accueil/employeur/cotisations/liste-cotisations/at-vieillesse-csa-dialoguesocial.html#ancre-cotisation-d-assurance-vieillesse
    </a>
  </p>

  <div class="formula formula-reminder">
    <p class="formula-title">📌 Pourquoi apparaît-elle sur 2 lignes sur le bulletin ?</p>
    <p class="formula-content">
      Sur le bulletin de salaire, la cotisation vieillesse figure sur deux lignes distinctes car les bases de calcul sont différentes :<br>
      • 🔹 Une ligne calculée sur la rémunération plafonnée<br>
      • 🔹 Une ligne calculée sur la rémunération totale (déplafonnée)<br><br>
      Cette distinction provient du mécanisme du plafond de Sécurité sociale.
    </p>
  </div>

  <h3>2️⃣ Pourquoi 2 lignes sur le bulletin ?</h3>

  <div class="formula formula-reminder">
    <p class="formula-title">A) Vieillesse plafonnée — ✔ Assiette</p>
    <p class="formula-content">
      La cotisation est calculée sur la rémunération dans la limite du plafond de Sécurité sociale (PSS).<br><br>
      Autrement dit :<br>
      On ne cotise pas au-delà du plafond pour cette ligne.<br><br>
      Dans les logiciels de paie, on parle parfois par analogie de “Tranche A / T1”,<br>
      mais juridiquement, c’est bien le plafond Sécurité sociale qui pilote.
    </p>
  </div>

  <p style="text-align:center;">
    📖 URSSAF – Assiette des cotisations :
  </p>

  <p style="text-align:center;">
    <a href="https://www.urssaf.fr/accueil/employeur/cotisations/comprendre-cotisations/calcul-cotisations-employeur.html"
       target="_blank" rel="noreferrer">
      https://www.urssaf.fr/accueil/employeur/cotisations/comprendre-cotisations/calcul-cotisations-employeur.html
    </a>
  </p>

  <div class="formula formula-reminder">
    <p class="formula-title">B) Vieillesse déplafonnée — ✔ Assiette</p>
    <p class="formula-content">
      La cotisation est calculée sur la rémunération totale soumise à cotisations, sans aucune limite de plafond.<br><br>
      Même si le salarié perçoit 10 000 €, la base déplafonnée sera 10 000 €.
    </p>
  </div>

  <h3>3️⃣ Le plafond de Sécurité sociale (PSS) à connaître (2026)</h3>

  <p style="text-align:center;">
    Au 1er janvier 2026, les valeurs officielles sont :
  </p>

  <ul class="centered-list bullets">
    <li>Plafond mensuel (PMSS) : <b>4 005 €</b></li>
    <li>Plafond annuel (PASS) : <b>48 060 €</b></li>
    <li>Plafond hebdomadaire : 924 €</li>
    <li>Plafond journalier : 220 €</li>
    <li>Plafond horaire : 30 €</li>
  </ul>

  <p style="text-align:center;">
    📖 Source officielle Service-Public :
  </p>

  <p style="text-align:center;">
    <a href="https://www.service-public.fr/particuliers/actualites/A15386"
       target="_blank" rel="noreferrer">
      https://www.service-public.fr/particuliers/actualites/A15386
    </a>
  </p>

  <div class="formula formula-reminder">
    <p class="formula-title">📌 Réflexe paie indispensable</p>
    <p class="formula-content">
      Si le salaire brut mensuel dépasse 4 005 € :<br>
      • la vieillesse plafonnée sera calculée uniquement sur 4 005 €<br>
      • la vieillesse déplafonnée restera calculée sur la totalité
    </p>
  </div>

  <h3>4️⃣ Taux 2026 – Secteur privé – Régime général</h3>

  <p style="text-align:center;">
    📖 Barèmes URSSAF secteur privé :
  </p>

  <p style="text-align:center;">
    <a href="https://www.urssaf.fr/accueil/outils-documentation/taux-baremes/taux-cotisations-secteur-prive.html"
       target="_blank" rel="noreferrer">
      https://www.urssaf.fr/accueil/outils-documentation/taux-baremes/taux-cotisations-secteur-prive.html
    </a>
  </p>

  <div class="formula formula-formula">
    <p class="formula-title">A) Assurance vieillesse plafonnée (dans la limite du PMSS)</p>
    <p class="formula-content">
      • Part salariale : <b>6,90 %</b><br>
      • Part patronale : <b>8,55 %</b>
    </p>
  </div>

  <div class="formula formula-formula">
    <p class="formula-title">B) Assurance vieillesse déplafonnée (sur la totalité de la rémunération)</p>
    <p class="formula-content">
      • Part salariale : <b>0,40 %</b><br>
      • Part patronale : <b>2,11 %</b>
    </p>
  </div>

  <p style="text-align:center;">
    📖 Base réglementaire : Code de la Sécurité sociale – Article D242-4
  </p>

  <p style="text-align:center;">
    <a href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006746698"
       target="_blank" rel="noreferrer">
      https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006746698
    </a>
  </p>

  <p style="text-align:center;">
    Cet article fixe les taux applicables à l’assurance vieillesse.
  </p>

  <h3>5️⃣ Méthode de calcul – Logique “logiciel de paie”</h3>

  <div class="formula formula-reminder">
    <p class="formula-title">Étape 1 — Déterminer les bases</p>
    <p class="formula-content">
      Pour un mois complet standard :<br>
      • Base déplafonnée = salaire brut soumis à cotisations (souvent appelé “brut SS”)<br>
      • Base plafonnée = minimum entre : salaire brut soumis et PMSS<br><br>
      Formule :<br>
      Base plafonnée = <b>min (brut soumis ; PMSS)</b>
    </p>
  </div>

  <div class="formula formula-reminder">
    <p class="formula-title">Étape 2 — Appliquer les taux</p>
    <p class="formula-content">
      Montant = base × taux<br>
      ➡ Arrondi au centime.
    </p>
  </div>

  <h3>6️⃣ Exemples chiffrés complets (vérifiés)</h3>

  <div class="formula formula-example">
    <p class="formula-title">🔎 Exemple 1 — Salaire brut soumis = 3 000 € (inférieur au PMSS)</p>
    <p class="formula-content">
      Bases :<br>
      Base plafonnée = 3 000 €<br>
      Base déplafonnée = 3 000 €<br><br>

      Vieillesse plafonnée :<br>
      • Salariale : 3 000 × 6,90 % = <b>207,00 €</b><br>
      • Patronale : 3 000 × 8,55 % = <b>256,50 €</b><br><br>

      Vieillesse déplafonnée :<br>
      • Salariale : 3 000 × 0,40 % = <b>12,00 €</b><br>
      • Patronale : 3 000 × 2,11 % = <b>63,30 €</b><br><br>

      ✅ Sur le bulletin : 2 lignes, mais bases identiques car salaire inférieur au plafond.
    </p>
  </div>

  <div class="formula formula-example">
    <p class="formula-title">🔎 Exemple 2 — Salaire brut soumis = 5 000 € (supérieur au PMSS)</p>
    <p class="formula-content">
      Bases :<br>
      Base plafonnée = min (5 000 ; 4 005) = <b>4 005 €</b><br>
      Base déplafonnée = 5 000 €<br><br>

      Vieillesse plafonnée :<br>
      • Salariale : 4 005 × 6,90 % = <b>276,35 €</b><br>
      • Patronale : 4 005 × 8,55 % = <b>342,43 €</b><br><br>

      Vieillesse déplafonnée :<br>
      • Salariale : 5 000 × 0,40 % = <b>20,00 €</b><br>
      • Patronale : 5 000 × 2,11 % = <b>105,50 €</b><br><br>

      🔎 Total vieillesse :<br>
      Part salariale totale = 276,35 + 20,00 = <b>296,35 €</b><br>
      Part patronale totale = 342,43 + 105,50 = <b>447,93 €</b>
    </p>
  </div>

  <h3>7️⃣ Points d’attention – Pièges examen</h3>

  <div class="formula formula-warn">
    <p class="formula-title">⚠️ 1) Le plafond n’est pas toujours 4 005 €</p>
    <p class="formula-content">
      Le PMSS 4 005 € est la valeur mensuelle standard 2026.<br>
      Mais il peut être proratisé (entrée/sortie, temps partiel, absence).<br>
      ➡ La base plafonnée peut donc être inférieure au PMSS même si le salaire est élevé.<br><br>
      Voir leçon : <a href="#/referentiel/proratisation-plafond-ss">PRORATISATION DU PLAFOND DE SÉCURITÉ SOCIALE (PSS)</a>
    </p>
  </div>

  <div class="formula formula-warn">
    <p class="formula-title">⚠️ 2) La déplafonnée ne change jamais</p>
    <p class="formula-content">
      Même si le plafond est proratisé, la vieillesse déplafonnée reste calculée sur la totalité de la rémunération soumise.
    </p>
  </div>

  <div class="formula formula-warn">
    <p class="formula-title">⚠️ 3) Ne pas confondre retraite de base et retraite complémentaire</p>
    <p class="formula-content">
      Vieillesse = régime de base (CNAV, recouvrée par l’URSSAF).<br>
      Retraite complémentaire = AGIRC-ARRCO (lignes distinctes sur le bulletin).
    </p>
  </div>

  <h3>8️⃣ Récapitulatif officiel des sources</h3>

  <p style="text-align:center;">
    URSSAF – Calcul des cotisations employeur
  </p>
  <p style="text-align:center;">
    <a href="https://www.urssaf.fr/accueil/employeur/cotisations/comprendre-cotisations/calcul-cotisations-employeur.html"
       target="_blank" rel="noreferrer">
      https://www.urssaf.fr/accueil/employeur/cotisations/comprendre-cotisations/calcul-cotisations-employeur.html
    </a>
  </p>

  <p style="text-align:center;">
    URSSAF – Cotisation d’assurance vieillesse
  </p>
  <p style="text-align:center;">
    <a href="https://www.urssaf.fr/accueil/employeur/cotisations/liste-cotisations/at-vieillesse-csa-dialoguesocial.html"
       target="_blank" rel="noreferrer">
      https://www.urssaf.fr/accueil/employeur/cotisations/liste-cotisations/at-vieillesse-csa-dialoguesocial.html
    </a>
  </p>

  <p style="text-align:center;">
    URSSAF – Taux secteur privé 2026
  </p>
  <p style="text-align:center;">
    <a href="https://www.urssaf.fr/accueil/outils-documentation/taux-baremes/taux-cotisations-secteur-prive.html"
       target="_blank" rel="noreferrer">
      https://www.urssaf.fr/accueil/outils-documentation/taux-baremes/taux-cotisations-secteur-prive.html
    </a>
  </p>

  <p style="text-align:center;">
    Légifrance – Article D242-4 CSS
  </p>
  <p style="text-align:center;">
    <a href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006746698"
       target="_blank" rel="noreferrer">
      https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006746698
    </a>
  </p>

  <p style="text-align:center;">
    Service-Public – Plafond Sécurité sociale
  </p>
  <p style="text-align:center;">
    <a href="https://www.service-public.fr/particuliers/actualites/A15386"
       target="_blank" rel="noreferrer">
      https://www.service-public.fr/particuliers/actualites/A15386
    </a>
  </p>

  <p style="text-align:center;">
    <a href="#/referentiel/urssaf">⬅ Retour “URSSAF”</a>
  </p>

  `,
};
