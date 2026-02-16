// src/data/allocationsFamilialesCard.js

export const allocationsFamilialesCard = {
    id: "allocations-familiales",
    group: "referentiel",
    title: "Cotisation allocations familiales (AF) — 2026",
    content: `


  <div class="formula formula-reminder">
    <p class="formula-title">0) Le SMIC à jour (référence 2026)</p>
    <p class="formula-content">À compter du 1er janvier 2026, le SMIC horaire brut = 12,02 € et le SMIC mensuel brut (151,67 h) = 1 823,03 € (France hors Mayotte).</p>
    <p class="formula-content">Source INSEE :</p>
    <p class="formula-content">
      <a href="https://www.insee.fr/fr/statistiques/1375188" target="_blank" rel="noreferrer">https://www.insee.fr/fr/statistiques/1375188</a>
    </p>
  </div>

  <div class="formula formula-reminder">
    <p class="formula-title">1) Définition et rôle</p>
    <p class="formula-content">La cotisation d’allocations familiales est une cotisation patronale recouvrée par l’URSSAF, destinée au financement de la branche Famille (prestations familiales).</p>
    <p class="formula-content">Source URSSAF :</p>
    <p class="formula-content">
      <a href="https://www.urssaf.fr/accueil/employeur/cotisations/liste-cotisations/cotisation-allocation-familiale.html" target="_blank" rel="noreferrer">https://www.urssaf.fr/accueil/employeur/cotisations/liste-cotisations/cotisation-allocation-familiale.html</a>
    </p>
    <p class="formula-content">✅ Employeur uniquement (pas de part salariale).</p>
    <p class="formula-content">Source :</p>
    <p class="formula-content">
      <a href="https://www.urssaf.fr/accueil/employeur/cotisations/liste-cotisations/cotisation-allocation-familiale.html" target="_blank" rel="noreferrer">https://www.urssaf.fr/accueil/employeur/cotisations/liste-cotisations/cotisation-allocation-familiale.html</a>
    </p>
  </div>

  <div class="formula formula-reminder">
    <p class="formula-title">2) Assiette (base de calcul)</p>
    <p class="formula-content">La cotisation AF est calculée sur la totalité de la rémunération entrant dans l’assiette des cotisations : salaire, primes, avantages, etc. (assiette déplafonnée).</p>
    <p class="formula-content">Source URSSAF :</p>
    <p class="formula-content">
      <a href="https://www.urssaf.fr/accueil/employeur/cotisations/liste-cotisations/cotisation-allocation-familiale.html" target="_blank" rel="noreferrer">https://www.urssaf.fr/accueil/employeur/cotisations/liste-cotisations/cotisation-allocation-familiale.html</a>
    </p>
  </div>

  <div class="formula formula-formula">
    <p class="formula-title">3) Taux de droit commun (règle générale)</p>
    <p class="formula-content">📌 Taux AF = 5,25 % (patronal uniquement).</p>
    <p class="formula-content">Source URSSAF :</p>
    <p class="formula-content">
      <a href="https://www.urssaf.fr/accueil/employeur/cotisations/liste-cotisations/cotisation-allocation-familiale.html" target="_blank" rel="noreferrer">https://www.urssaf.fr/accueil/employeur/cotisations/liste-cotisations/cotisation-allocation-familiale.html</a>
    </p>
  </div>

  <div class="formula formula-warn">
    <p class="formula-title">4) Évolutions 2026 : ce qui change vraiment</p>
    <p class="formula-content">En 2026, l’URSSAF précise que la réduction du taux AF est supprimée sauf pour certains cas (exonérations dégressives spécifiques, employeurs/régimes spéciaux non éligibles à la réduction générale “RGDU”, etc.).</p>
    <a href="#/referentiel/rgdu">Voir explications complètes RGDU 2026</a>
    <p class="formula-content">Source URSSAF :</p>
    <p class="formula-content">
      <a href="https://www.urssaf.fr/accueil/employeur/cotisations/liste-cotisations/cotisation-allocation-familiale.html" target="_blank" rel="noreferrer">https://www.urssaf.fr/accueil/employeur/cotisations/liste-cotisations/cotisation-allocation-familiale.html</a>
    </p>
    <p class="formula-content">👉 Conséquence pratique : dans la majorité des situations “classiques”, on applique 5,25 %.</p>
    <p class="formula-content">Source :</p>
    <p class="formula-content">
      <a href="https://www.urssaf.fr/accueil/employeur/cotisations/liste-cotisations/cotisation-allocation-familiale.html" target="_blank" rel="noreferrer">https://www.urssaf.fr/accueil/employeur/cotisations/liste-cotisations/cotisation-allocation-familiale.html</a>
    </p>
  </div>

  <h3>5) Quand peut-on encore avoir 3,45 % ?</h3>

  <div class="formula formula-reminder">
    <p class="formula-title">A) Cas “réduction de taux” maintenue via exonérations dégressives spécifiques</p>
    <p class="formula-content">URSSAF cite notamment :</p>
    <p class="formula-content">ZRR / ZFRR, ZRD, ZFU, LODEOM, aides à domicile “personne fragile”.</p>
    <p class="formula-content">Source URSSAF :</p>
    <p class="formula-content">
      <a href="https://www.urssaf.fr/accueil/employeur/cotisations/liste-cotisations/cotisation-allocation-familiale.html" target="_blank" rel="noreferrer">https://www.urssaf.fr/accueil/employeur/cotisations/liste-cotisations/cotisation-allocation-familiale.html</a>
    </p>
    <p class="formula-content">➡️ Dans ces cas, le taux AF est :</p>

    <ul class="centered-list bullets">
      <li>3,45 % si la rémunération annuelle ≤ 3,5 SMIC (SMIC de référence au 31/12/2023)</li>
      <li>5,25 % au-delà</li>
    </ul>

    <p class="formula-content">Source URSSAF :</p>
    <p class="formula-content">
      <a href="https://www.urssaf.fr/accueil/employeur/cotisations/liste-cotisations/cotisation-allocation-familiale.html" target="_blank" rel="noreferrer">https://www.urssaf.fr/accueil/employeur/cotisations/liste-cotisations/cotisation-allocation-familiale.html</a>
    </p>

    <p class="formula-content">⚠️ SMIC de référence (31/12/2023) : au 31/12/2023, le SMIC horaire brut était 11,52 €.</p>
    <p class="formula-content">Source INSEE :</p>
    <p class="formula-content">
      <a href="https://www.insee.fr/fr/statistiques/1375188" target="_blank" rel="noreferrer">https://www.insee.fr/fr/statistiques/1375188</a>
    </p>
  </div>

  <div class="formula formula-example">
    <p class="formula-title">Calcul SMIC annuel de référence (35 h / 1820 h)</p>
    <p class="formula-content">SMIC annuel = 11,52 × 1820 = 20 966,40 €</p>
    <p class="formula-content">Seuil 3,5 SMIC = 20 966,40 × 3,5 = 73 382,40 €</p>
  </div>

  <div class="formula formula-reminder">
    <p class="formula-title">B) Régimes spéciaux non éligibles à la RGDU (ex : SNCF, RATP)</p>
    <p class="formula-content">Pour certains employeurs/régimes spéciaux non éligibles à la RGDU, l’URSSAF prévoit un seuil différent :</p>

    <ul class="centered-list bullets">
      <li>3,45 % si rémunération annuelle ≤ 3,3 SMIC (SMIC de référence au 01/01/2025)</li>
      <li>5,25 % au-delà</li>
    </ul>

    <p class="formula-content">Source URSSAF :</p>
    <p class="formula-content">
      <a href="https://www.urssaf.fr/accueil/employeur/cotisations/liste-cotisations/cotisation-allocation-familiale.html" target="_blank" rel="noreferrer">https://www.urssaf.fr/accueil/employeur/cotisations/liste-cotisations/cotisation-allocation-familiale.html</a>
    </p>

    <p class="formula-content">⚠️ SMIC de référence (01/01/2025) : SMIC horaire brut 11,88 €.</p>
    <p class="formula-content">Source URSSAF (exemple officiel) :</p>
    <p class="formula-content">
      <a href="https://www.urssaf.fr/accueil/employeur/cotisations/liste-cotisations/cotisation-allocation-familiale.html" target="_blank" rel="noreferrer">https://www.urssaf.fr/accueil/employeur/cotisations/liste-cotisations/cotisation-allocation-familiale.html</a>
    </p>
  </div>

  <div class="formula formula-example">
    <p class="formula-title">Calcul (35 h / 1820 h)</p>
    <p class="formula-content">SMIC annuel = 11,88 × 1820 = 21 621,60 €</p>
    <p class="formula-content">Seuil 3,3 SMIC = 21 621,60 × 3,3 = 71 351,28 €</p>
  </div>

  <h3>6) Base légale</h3>

  <div class="formula formula-reminder">
    <p class="formula-content">• Article L241-6 Code de la Sécurité sociale</p>
    <p class="formula-content">
      <a href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006739308" target="_blank" rel="noreferrer">https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006739308</a>
    </p>
    <p class="formula-content">• Article L241-6-1 Code de la Sécurité sociale</p>
    <p class="formula-content">
      <a href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000051285453" target="_blank" rel="noreferrer">https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000051285453</a>
    </p>
    <p class="formula-content">• Article D241-3-1 Code de la Sécurité sociale</p>
    <p class="formula-content">
      <a href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000029238003" target="_blank" rel="noreferrer">https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000029238003</a>
    </p>
    <p class="formula-content">• Article D241-3-2 Code de la Sécurité sociale</p>
    <p class="formula-content">
      <a href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000029238005" target="_blank" rel="noreferrer">https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000029238005</a>
    </p>
  </div>

  <h3>7) Méthode de calcul en paie</h3>

  <div class="formula formula-reminder">
    <p class="formula-content">L’URSSAF indique que le taux dépend de la rémunération annuelle arrêtée.</p>
    <p class="formula-content">On peut :</p>

    <ul class="centered-list bullets">
      <li>appliquer le taux réduit par anticipation chaque mois,</li>
      <li>puis effectuer une régularisation annuelle,</li>
      <li>ou mettre en place une régularisation progressive en DSN.</li>
    </ul>

    <p class="formula-content">Source URSSAF :</p>
    <p class="formula-content">
      <a href="https://www.urssaf.fr/accueil/employeur/cotisations/liste-cotisations/cotisation-allocation-familiale.html" target="_blank" rel="noreferrer">https://www.urssaf.fr/accueil/employeur/cotisations/liste-cotisations/cotisation-allocation-familiale.html</a>
    </p>
  </div>

  <h3>8) Déclaration DSN — CTP à connaître</h3>

  <div class="formula formula-formula">
    <p class="formula-content">Source URSSAF :</p>
    <p class="formula-content">
      <a href="https://www.urssaf.fr/accueil/employeur/cotisations/liste-cotisations/cotisation-allocation-familiale.html" target="_blank" rel="noreferrer">https://www.urssaf.fr/accueil/employeur/cotisations/liste-cotisations/cotisation-allocation-familiale.html</a>
    </p>

    <ul class="centered-list bullets">
      <li>CTP 100 : taux réduit 3,45 %</li>
      <li>CTP 430 : complément 1,80 % (pour atteindre 5,25 %)</li>
      <li>CTP 437 : déduction si trop versé</li>
    </ul>

    <p class="formula-content">⚠️ CTP 430 et 437 peuvent apparaître ensemble.</p>
  </div>

  <h3>9) Exemples chiffrés</h3>

  <div class="formula formula-example">
    <p class="formula-title">Exemple 1 — Calcul simple</p>
    <p class="formula-content">Salarié à 2 500 € brut mensuel :</p>
    <p class="formula-content">2 500 × 5,25 % = 131,25 €</p>
    <p class="formula-content">Source URSSAF :</p>
    <p class="formula-content">
      <a href="https://www.urssaf.fr/accueil/employeur/cotisations/liste-cotisations/cotisation-allocation-familiale.html" target="_blank" rel="noreferrer">https://www.urssaf.fr/accueil/employeur/cotisations/liste-cotisations/cotisation-allocation-familiale.html</a>
    </p>
  </div>

  <div class="formula formula-example">
    <p class="formula-title">Exemple 2 — Test du seuil 3,3 SMIC</p>
    <p class="formula-content">Salarié à 6 000 € / mois</p>
    <p class="formula-content">Annuel = 72 000 €</p>
    <p class="formula-content">Seuil = 71 351,28 €</p>
    <p class="formula-content">72 000 &gt; 71 351,28</p>
    <p class="formula-content">➡️ Taux plein 5,25 %</p>
    <p class="formula-content">Source URSSAF :</p>
    <p class="formula-content">
      <a href="https://www.urssaf.fr/accueil/employeur/cotisations/liste-cotisations/cotisation-allocation-familiale.html" target="_blank" rel="noreferrer">https://www.urssaf.fr/accueil/employeur/cotisations/liste-cotisations/cotisation-allocation-familiale.html</a>
    </p>
  </div>

  <div class="formula formula-example">
    <p class="formula-title">Exemple 3 — SMIC annuel 2026 (repère)</p>
    <p class="formula-content">SMIC annuel 2026 (35 h) :</p>
    <p class="formula-content">12,02 × 1820 = 21 876,40 €</p>
    <p class="formula-content">Source INSEE :</p>
    <p class="formula-content">
      <a href="https://www.insee.fr/fr/statistiques/1375188" target="_blank" rel="noreferrer">https://www.insee.fr/fr/statistiques/1375188</a>
    </p>
  </div>

  <h3>10) Vigilances examen</h3>

  <div class="formula formula-warn">
    <ul class="centered-list bullets">
      <li>Ne pas confondre SMIC 2026 et SMIC de référence pour les seuils AF</li>
      <li>Cotisation toujours patronale</li>
      <li>Le taux réduit n’est plus automatique en 2026</li>
    </ul>

    <p class="formula-content">Source URSSAF :</p>
    <p class="formula-content">
      <a href="https://www.urssaf.fr/accueil/employeur/cotisations/liste-cotisations/cotisation-allocation-familiale.html" target="_blank" rel="noreferrer">https://www.urssaf.fr/accueil/employeur/cotisations/liste-cotisations/cotisation-allocation-familiale.html</a>
    </p>
  </div>

  <p style="text-align:center;">
    <a href="#/referentiel/urssaf">⬅ Retour “URSSAF”</a>
  </p>

  `,
};
