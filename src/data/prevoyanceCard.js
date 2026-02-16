// src/data/prevoyanceCard.js

export const prevoyanceCard = {
    id: "prevoyance",
    group: "referentiel",
    title: "📘 LA PRÉVOYANCE COMPLÉMENTAIRE (2026)",
    content: `

  <p style="text-align:center;">(⚠️ On parle ici de la prévoyance complémentaire : incapacité / invalidité / décès. Pas de la mutuelle “frais de santé”.)</p>

  <div class="formula formula-reminder">
    <p class="formula-title">✅ Repère rapide</p>
    <p class="formula-content">
      Cette fiche explique la <b>prévoyance complémentaire</b> (arrêt de travail / invalidité / incapacité / décès) et son traitement
      <b>URSSAF + CSG/CRDS + forfait social + net imposable</b>.
    </p>
  </div>

  <h3>1️⃣ Définition : de quoi parle-t-on ?</h3>

  <p style="text-align:center;">
    Tous les salariés sont couverts par la protection sociale de base (Sécurité sociale), qui intervient notamment en cas de :
  </p>

  <ul class="centered-list bullets">
    <li>arrêt de travail (indemnités journalières),</li>
    <li>invalidité,</li>
    <li>incapacité permanente (selon les situations),</li>
    <li>et plus largement certains risques liés à la personne.</li>
  </ul>

  <p style="text-align:center;">
    La prévoyance complémentaire est une couverture (souvent collective) souscrite via une institution de prévoyance, un assureur ou une mutuelle,
    qui complète les prestations du régime obligatoire, par exemple :
  </p>

  <ul class="centered-list bullets">
    <li>indemnités complémentaires en cas d’arrêt de travail,</li>
    <li>rente d’invalidité complémentaire,</li>
    <li>prestations en incapacité,</li>
    <li>capital décès et/ou rente (conjoint, enfants, rente éducation…).</li>
  </ul>

  <div class="formula formula-reminder">
    <p class="formula-title">📌 Mise en place (accord / référendum / DUE)</p>
    <p class="formula-content">
      Code de la sécurité sociale — article L911-1 :
      <a href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006745463" target="_blank" rel="noreferrer">https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006745463</a>
    </p>
  </div>

  <div class="formula formula-reminder">
    <p class="formula-title">📌 Fiche URSSAF de référence</p>
    <p class="formula-content">
      Prévoyance complémentaire : mise en place + règles sociales :
      <a href="https://www.urssaf.fr/accueil/employeur/embaucher-gerer-salaries/embaucher/prevoyance-complementaire.html" target="_blank" rel="noreferrer">https://www.urssaf.fr/accueil/employeur/embaucher-gerer-salaries/embaucher/prevoyance-complementaire.html</a>
    </p>
  </div>

  <div class="formula formula-reminder">
    <p class="formula-title">🔎 Lien “sup” (pédagogique, non officiel)</p>
    <p class="formula-content">
      <a href="https://www.legisocial.fr/vie-entreprise/mutuelle-et-prevoyance/couverture-prevoyance-complementaire-obligatoire.html" target="_blank" rel="noreferrer">https://www.legisocial.fr/vie-entreprise/mutuelle-et-prevoyance/couverture-prevoyance-complementaire-obligatoire.html</a>
    </p>
  </div>

  <h3>2️⃣ Cadres : focus sur l’obligation “décès cadre” (1,50% sur T1)</h3>

  <div class="formula formula-reminder">
    <p class="formula-title">A) Principe (à connaître “par cœur”)</p>
    <p class="formula-content">
      Les salariés cadres bénéficient d’une obligation de couverture décès : l’employeur doit financer au minimum 1,50% de la Tranche 1 (T1),
      à sa charge exclusive, avec une affectation prioritaire à la garantie décès (logique “décès cadre”).
    </p>
  </div>

  <div class="formula formula-reminder">
    <p class="formula-title">📌 ANI du 17 novembre 2017 (Légifrance)</p>
    <p class="formula-content">
      <a href="https://www.legifrance.gouv.fr/conv_coll/id/KALITEXT000036732007" target="_blank" rel="noreferrer">https://www.legifrance.gouv.fr/conv_coll/id/KALITEXT000036732007</a>
    </p>
  </div>

  <div class="formula formula-reminder">
    <p class="formula-title">B) Tranche 1 (T1) : plafond 2026</p>
    <p class="formula-content">
      En 2026 :<br>
      • PMSS 2026 (plafond mensuel) = 4 005 €<br>
      • PASS 2026 (plafond annuel) = 48 060 €
    </p>
  </div>

  <p style="text-align:center;">
    Références officielles (URSSAF / BOSS / INSEE) :
  </p>

  <ul class="centered-list bullets">
    <li>
      <a href="https://www.urssaf.fr/accueil/actualites/plafond-annuel-securite-sociale.html" target="_blank" rel="noreferrer">https://www.urssaf.fr/accueil/actualites/plafond-annuel-securite-sociale.html</a>
    </li>
    <li>
      <a href="https://boss.gouv.fr/portail/accueil/actualites-boss-et-rescrits/actualites-boss/2025/octobre/le-plafond-de-la-securite-social.html" target="_blank" rel="noreferrer">https://boss.gouv.fr/portail/accueil/actualites-boss-et-rescrits/actualites-boss/2025/octobre/le-plafond-de-la-securite-social.html</a>
    </li>
    <li>
      <a href="https://www.insee.fr/fr/statistiques/serie/000822494" target="_blank" rel="noreferrer">https://www.insee.fr/fr/statistiques/serie/000822494</a>
    </li>
  </ul>

  <p style="text-align:center;">
    ➡️ Donc T1 mensuelle = rémunération brute limitée à 4 005 €.
  </p>

  <div class="formula formula-example">
    <p class="formula-title">C) Exemples chiffrés (arrondis au centime)</p>
    <p class="formula-content">
      <b>Exemple 1 : cadre à 3 000,00 € brut mensuel</b><br>
      T1 = 3 000,00 €<br>
      Cotisation décès cadre minimale = 3 000,00 × 1,50% = 45,00 € (100% employeur)<br><br>
      <b>Exemple 2 : cadre à 6 000,00 € brut mensuel</b><br>
      T1 = 4 005,00 € (plafonnée)<br>
      Cotisation décès cadre minimale = 4 005,00 × 1,50% = 60,075 → 60,08 € (100% employeur)
    </p>
  </div>

  <div class="formula formula-reminder">
    <p class="formula-title">📌 (Pour ton appli) Voir plus de détails</p>
    <p class="formula-content">
      <a href="#/referentiel/prevoyance-cadre-150">#/referentiel/prevoyance-cadre-150</a>
    </p>
  </div>

  <h3>3️⃣ Prévoyance complémentaire : obligatoire ou facultative ?</h3>

  <p style="text-align:center;">
    En dehors du “décès cadre 1,50% T1”, la prévoyance complémentaire peut être :
  </p>

  <div class="formula formula-reminder">
    <p class="formula-title">A) Imposée par une convention collective / un accord de branche</p>
    <p class="formula-content">
      Certaines branches imposent une prévoyance (selon catégories/métiers).<br>
      ➡️ Si la branche impose : l’entreprise doit appliquer taux / garanties / répartition employeur-salarié / catégories prévus.
    </p>
  </div>

  <div class="formula formula-reminder">
    <p class="formula-title">B) Mise en place par décision de l’employeur (si aucune obligation)</p>
    <p class="formula-content">
      Si aucune obligation conventionnelle : l’employeur peut décider une prévoyance collective, en respectant les modalités de mise en place.
    </p>
  </div>

  <div class="formula formula-reminder">
    <p class="formula-title">📌 Mode de mise en place : CSS L911-1</p>
    <p class="formula-content">
      <a href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006745463" target="_blank" rel="noreferrer">https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006745463</a>
    </p>
  </div>

  <h3>4️⃣ ⚠️ Attention (PIÈGE EXAMEN) : base et modalités = celles du contrat</h3>

  <p style="text-align:center;">
    La base de calcul, l’assiette, les taux, la répartition employeur/salarié, les garanties et les catégories couvertes sont fixés par :
  </p>

  <ul class="centered-list bullets">
    <li>le contrat de prévoyance (institution/assureur/mutuelle),</li>
    <li>et l’acte de mise en place (accord/DUE…).</li>
  </ul>

  <div class="formula formula-reminder">
    <p class="formula-title">📌 URSSAF (référence pratique)</p>
    <p class="formula-content">
      <a href="https://www.urssaf.fr/accueil/employeur/embaucher-gerer-salaries/embaucher/prevoyance-complementaire.html" target="_blank" rel="noreferrer">https://www.urssaf.fr/accueil/employeur/embaucher-gerer-salaries/embaucher/prevoyance-complementaire.html</a>
    </p>
  </div>

  <div class="formula formula-reminder">
    <p class="formula-title">✅ Réflexe paie</p>
    <p class="formula-content">
      Donc en paie : on ne “devine” pas un taux → on applique le contrat (ou la branche).
    </p>
  </div>

  <h3>5️⃣ Traitement social en paie : URSSAF / CSG-CRDS / forfait social</h3>

  <div class="formula formula-reminder">
    <p class="formula-title">A) Cotisations de Sécurité sociale (assiette “brut Sécu”)</p>
    <p class="formula-content">
      Le financement patronal de la prévoyance complémentaire peut, sous conditions, bénéficier d’un régime social (exclusions/limites).<br><br>
      Base générale : CSS L242-1<br>
      <a href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000053282401" target="_blank" rel="noreferrer">https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000053282401</a><br><br>
      Limites : CSS D242-1<br>
      <a href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000046317928" target="_blank" rel="noreferrer">https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000046317928</a><br><br>
      📌 Piège examen : “exonéré URSSAF” ne veut pas dire “hors CSG/CRDS”.
    </p>
  </div>

  <h3>B) CSG / CRDS : la règle qui te sert en gestionnaire de paie</h3>

  <div class="formula formula-reminder">
    <p class="formula-title">✅ Règle officielle (à retenir)</p>
    <p class="formula-content">
      Les CSG-CRDS sur revenus d’activité sont calculées sur 98,25% des revenus entrant dans le champ de l’abattement (salaires).<br><br>
      Page URSSAF CSG-CRDS :<br>
      <a href="https://www.urssaf.fr/accueil/employeur/cotisations/liste-cotisations/csg-crds.html" target="_blank" rel="noreferrer">https://www.urssaf.fr/accueil/employeur/cotisations/liste-cotisations/csg-crds.html</a>
    </p>
  </div>

  <div class="formula formula-warn">
    <p class="formula-title">✅ Le point crucial “prévoyance complémentaire”</p>
    <p class="formula-content">
      La participation patronale à la prévoyance complémentaire est soumise à la CSG-CRDS, et elle est assujettie dans son intégralité, sans abattement.<br><br>
      Page URSSAF “Prévoyance complémentaire” :<br>
      <a href="https://www.urssaf.fr/accueil/employeur/embaucher-gerer-salaries/embaucher/prevoyance-complementaire.html" target="_blank" rel="noreferrer">https://www.urssaf.fr/accueil/employeur/embaucher-gerer-salaries/embaucher/prevoyance-complementaire.html</a><br><br>
      BOSS (assiette générale : 98,25% sur ce qui est éligible à l’abattement) :<br>
      <a href="https://boss.gouv.fr/portail/accueil/regles-dassujettissement/assiette-generale.html" target="_blank" rel="noreferrer">https://boss.gouv.fr/portail/accueil/regles-dassujettissement/assiette-generale.html</a>
    </p>
  </div>

  <div class="formula formula-formula">
    <p class="formula-title">✅ Méthode de calcul “comme un logiciel de paie” (TA question exacte)</p>
    <p class="formula-content">
      On NE met PAS la part patronale de prévoyance “dans le brut puis × 98,25%”.<br><br>
      On fait en pratique :<br>
      <b>Assiette CSG/CRDS = (Salaire brut soumis CSG × 98,25%) + (Part patronale prévoyance soumise CSG, en totalité)</b><br><br>
      ➡️ Donc : on ajoute après l’abattement, en montant plein.
    </p>
  </div>

  <div class="formula formula-example">
    <p class="formula-title">✅ Exemple chiffré (arrondi au centime)</p>
    <p class="formula-content">
      Hypothèses :<br>
      • salaire brut soumis CSG : 3 000,00 €<br>
      • part patronale prévoyance (ex. décès cadre) : 45,00 € (soumise CSG)<br><br>
      1. Base “salaires” = 3 000,00 × 98,25% = 2 947,50 €<br>
      2. prévoyance patronale (sans abattement) = 2 947,50 + 45,00 = 2 992,50 €<br>
      ➡️ Assiette CSG/CRDS = 2 992,50 €
    </p>
  </div>

  <div class="formula formula-reminder">
    <p class="formula-title">🎯 Lecture gestionnaire de paie</p>
    <p class="formula-content">
      si tu vois une assiette CSG supérieure à “98,25% du brut”, pense immédiatement : part patronale prévoyance (et éventuellement autres éléments soumis CSG sans abattement).
    </p>
  </div>

  <h3>C) Forfait social : oui si effectif ≥ 11 (cas courant)</h3>

  <p style="text-align:center;">
    La participation patronale à la prévoyance complémentaire peut être soumise au forfait social lorsque l’entreprise est dans le champ,
    avec un repère de seuil 11 salariés dans les règles URSSAF.
  </p>

  <p style="text-align:center;">
    📌 URSSAF — Forfait social :
    <a href="https://www.urssaf.fr/accueil/employeur/cotisations/liste-cotisations/forfait-social.html" target="_blank" rel="noreferrer">https://www.urssaf.fr/accueil/employeur/cotisations/liste-cotisations/forfait-social.html</a>
  </p>

  <p style="text-align:center;">
    📌 Service-Public — Forfait social :
    <a href="https://entreprendre.service-public.gouv.fr/vosdroits/F31532" target="_blank" rel="noreferrer">https://entreprendre.service-public.gouv.fr/vosdroits/F31532</a>
  </p>

  <div class="formula formula-example">
    <p class="formula-title">✅ Exemple chiffré (arrondi au centime)</p>
    <p class="formula-content">
      Hypothèse : entreprise ≥ 11 salariés ; part employeur prévoyance = 60,00 € / mois<br>
      Forfait social (8%) = 60,00 × 8% = 4,80 €
    </p>
  </div>

  <h3>6️⃣ Traitement fiscal : net imposable / réintégration fiscale (prévoyance)</h3>

  <div class="formula formula-reminder">
    <p class="formula-title">✅ Principe “examen”</p>
    <p class="formula-content">
      Pour la prévoyance complémentaire obligatoire (mise en place dans les conditions de l’article L911-1 CSS),
      les cotisations/primes (y compris la participation employeur) sont déductibles sous plafond (règles fiscales “article 83”).<br><br>
      BOFiP (référence) :<br>
      <a href="https://bofip.impots.gouv.fr/bofip/5956-PGP.html/identifiant%3DBOI-RSA-BASE-30-10-20-20120912" target="_blank" rel="noreferrer">https://bofip.impots.gouv.fr/bofip/5956-PGP.html/identifiant%3DBOI-RSA-BASE-30-10-20-20120912</a>
    </p>
  </div>

  <div class="formula formula-formula">
    <p class="formula-title">✅ Plafond fiscal (à connaître)</p>
    <p class="formula-content">
      Les cotisations/primes de prévoyance complémentaire obligatoires sont déductibles dans une limite annuelle égale à :<br>
      • 7% du PASS<br>
      +<br>
      • 3% de la rémunération annuelle brute<br>
      sans que le total n’excède 3% de 8 PASS.
    </p>
  </div>

  <div class="formula formula-warn">
    <p class="formula-title">✅ Conséquence : “réintégration fiscale” si dépassement</p>
    <p class="formula-content">
      Si les cotisations dépassent le plafond : l’excédent est traité fiscalement comme imposable (on le “réintègre” via une rubrique paie),
      ce qui augmente le net imposable.<br><br>
      📌 Piège examen :<br>
      • “Soumis à CSG = forcément net imposable” ❌ Faux (logiques différentes).<br>
      • “100% patronal = jamais imposable” ❌ Faux (réintégration possible si dépassement de plafond).
    </p>
  </div>

  <h3>7️⃣ Mode opératoire “gestionnaire de paie” (ce que tu fais concrètement)</h3>

  <div class="formula formula-reminder">
    <p class="formula-title">✅ Étape 1 — Identifier la nature : prévoyance, pas mutuelle</p>
    <p class="formula-content">
      Vérifier que la rubrique correspond bien à : incapacité / invalidité / décès (prévoyance) et non “frais de santé”.
    </p>
  </div>

  <div class="formula formula-reminder">
    <p class="formula-title">✅ Étape 2 — Vérifier le contrat / la branche</p>
    <p class="formula-content">
      • assiette (brut total ? T1 ?),<br>
      • taux,<br>
      • répartition employeur/salarié,<br>
      • catégories couvertes,<br>
      • garanties (décès cadre 1,50% T1 si cadre).
    </p>
  </div>

  <div class="formula formula-reminder">
    <p class="formula-title">✅ Étape 3 — Paramétrer / contrôler CSG-CRDS</p>
    <p class="formula-content">
      • appliquer l’abattement 1,75% sur le salaire éligible : brut × 98,25%<br>
      • ajouter ensuite la part patronale prévoyance en totalité (sans abattement)<br>
      ➡️ Contrôle : l’assiette CSG doit refléter cette addition.
    </p>
  </div>

  <div class="formula formula-reminder">
    <p class="formula-title">✅ Étape 4 — Forfait social (si entreprise dans le champ)</p>
    <p class="formula-content">
      Si règles applicables (dont effectif ≥ 11 selon les cas) : calculer et contrôler la ligne forfait social.
    </p>
  </div>

  <div class="formula formula-reminder">
    <p class="formula-title">✅ Étape 5 — Net imposable / réintégration fiscale</p>
    <p class="formula-content">
      • appliquer les règles BOFiP “plafonds” en annuel,<br>
      • si dépassement : créer/contrôler une ligne “réintégration fiscale prévoyance” (net imposable ↑).
    </p>
  </div>

  <h3>8️⃣ Mini-récap “à réciter” (examen)</h3>

  <ul class="centered-list bullets">
    <li>Prévoyance complémentaire = incapacité/invalidité/décès (pas frais de santé).</li>
    <li>Cadres : obligation décès = 1,50% T1, 100% employeur.</li>
    <li>CSG/CRDS : base “salaires” = 98,25%, puis on ajoute la part patronale prévoyance sans abattement.</li>
    <li>Forfait social : à contrôler selon champ (dont seuil d’effectif).</li>
    <li>Net imposable : logique plafonds BOFiP + réintégration si dépassement.</li>
  </ul>

  <p style="text-align:center;">
    <a href="#/referentiel/mutuelle-prevoyance">⬅ Retour “Mutuelle santé & prévoyance”</a>
  </p>

  <p style="text-align:center;">
    <a href="#/referentiel/cotisations-contributions">⬅ Retour “Cotisations & contributions”</a>
  </p>

  `,
};
