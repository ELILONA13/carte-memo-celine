// ✅ src/data/agircCadreCard.js
export const agircCadreCard = {
    id: "agirc-cadre",
    group: "referentiel",
    title: "Cotisations AGIRC-ARRCO pour les salariés cadres (2026)",
    content: `

  <p style="text-align:center;"><b>📘 Cotisations AGIRC-ARRCO pour les salariés cadres (2026)</b></p>
  <p style="text-align:center;"><b>Version complète — cours / examen + pratique paie</b></p>

  <div class="formula formula-reminder">
    <p class="formula-title">✅ Objectif</p>
    <p class="formula-content">
      Savoir identifier les <b>tranches (T1/T2)</b>, les <b>cotisations</b> (Retraite complémentaire / CEG / CET),
      et appliquer les <b>réflexes logiciel de paie</b> (PMSS à jour, déclenchement CET, assiettes).
    </p>
  </div>

  <h3>1️⃣ Ce que finance l’AGIRC-ARRCO (et qui est concerné)</h3>
  <ul class="centered-list bullets">
    <li>La retraite de base (régime général) est gérée par la CNAV et recouvrée via l’URSSAF.</li>
    <li>La retraite complémentaire obligatoire du secteur privé est gérée par l’AGIRC-ARRCO (fusion ARRCO + AGIRC depuis 01/01/2019) et concerne tous les salariés : cadres et non-cadres.</li>
  </ul>
  <p style="text-align:center;">
    👉 Donc : un salarié “cadre” cotise à l’AGIRC-ARRCO comme un non-cadre, avec en plus, souvent, la cotisation APEC (si le poste est “cadre” au sens des règles applicables dans l’entreprise).
  </p>

  <div class="formula formula-reminder">
    <p class="formula-title">🔗 Liens officiels</p>
    <p class="formula-content" style="text-align:center;">
      URSSAF — Rôle / recouvrement :<br>
      <a href="https://www.urssaf.fr/accueil/employeur/declarer-et-payer/urssaf.html" target="_blank" rel="noreferrer">https://www.urssaf.fr/accueil/employeur/declarer-et-payer/urssaf.html</a><br><br>

      AGIRC-ARRCO — Calcul des cotisations :<br>
      <a href="https://www.agirc-arrco.fr/entreprises/mon-entreprise/calculer-et-declarer/le-calcul-des-cotisations-de-retraite-complementaire/" target="_blank" rel="noreferrer">https://www.agirc-arrco.fr/entreprises/mon-entreprise/calculer-et-declarer/le-calcul-des-cotisations-de-retraite-complementaire/</a><br><br>

      AGIRC-ARRCO — Paramètres & données :<br>
      <a href="https://www.agirc-arrco.fr/nous-connaitre/nos-etudes-et-publications/documentation-institutionnelle/parametres-et-donnees-statistiques/" target="_blank" rel="noreferrer">https://www.agirc-arrco.fr/nous-connaitre/nos-etudes-et-publications/documentation-institutionnelle/parametres-et-donnees-statistiques/</a>
    </p>
  </div>

  <h3>2️⃣ Bases juridiques (à citer en examen)</h3>

  <div class="formula formula-reminder">
    <p class="formula-title">📌 Textes à citer</p>
    <p class="formula-content" style="text-align:center;">
      <b>a) Obligation d’affiliation à une retraite complémentaire</b><br><br>
      Le Code de la sécurité sociale prévoit la généralisation/obligation d’affiliation à un régime de retraite complémentaire pour les salariés concernés par le régime général.<br><br>
      <a href="https://www.service-public.gouv.fr/particuliers/vosdroits/F15396" target="_blank" rel="noreferrer">https://www.service-public.gouv.fr/particuliers/vosdroits/F15396</a><br><br>

      <b>b) Texte “socle” du régime AGIRC-ARRCO</b><br><br>
      Le régime est organisé par l’Accord National Interprofessionnel (ANI) du 17 novembre 2017, étendu/élargi.<br><br>
      <a href="https://www.legifrance.gouv.fr/conv_coll/id/KALITEXT000036731682/" target="_blank" rel="noreferrer">https://www.legifrance.gouv.fr/conv_coll/id/KALITEXT000036731682/</a><br><br>

      <b>c) Paramètres & taux applicables</b><br><br>
      Les paramètres (taux, tranches, etc.) sont publiés via la documentation AGIRC-ARRCO (circulaires / paramètres).<br><br>
      <a href="https://www.agirc-arrco.fr/nous-connaitre/nos-etudes-et-publications/documentation-institutionnelle/parametres-et-donnees-statistiques/" target="_blank" rel="noreferrer">https://www.agirc-arrco.fr/nous-connaitre/nos-etudes-et-publications/documentation-institutionnelle/parametres-et-donnees-statistiques/</a>
    </p>
  </div>

  <h3>3️⃣ Tranches de salaire (T1 / T2) — repère indispensable 2026</h3>
  <p style="text-align:center;">
    Les cotisations AGIRC-ARRCO se calculent par tranches sur la rémunération brute soumise (assiette globalement alignée sur la Sécu, sauf exceptions).
  </p>
  <p style="text-align:center;">
    <a href="https://www.agirc-arrco.fr/entreprises/mon-entreprise/calculer-et-declarer/le-calcul-des-cotisations-de-retraite-complementaire/" target="_blank" rel="noreferrer">https://www.agirc-arrco.fr/entreprises/mon-entreprise/calculer-et-declarer/le-calcul-des-cotisations-de-retraite-complementaire/</a>
  </p>

  <div class="formula formula-reminder">
    <p class="formula-title">✅ Plafond 2026 (PSS)</p>
    <p class="formula-content" style="text-align:center;">
      • PMSS 2026 = 4 005 €<br>
      • PASS 2026 = 48 060 €<br><br>
      <a href="https://www.service-public.gouv.fr/particuliers/actualites/A15386" target="_blank" rel="noreferrer">https://www.service-public.gouv.fr/particuliers/actualites/A15386</a><br>
      <a href="https://boss.gouv.fr/portail/accueil/actualites-boss-et-rescrits/actualites-boss/2025/octobre/le-plafond-de-la-securite-social.html" target="_blank" rel="noreferrer">https://boss.gouv.fr/portail/accueil/actualites-boss-et-rescrits/actualites-boss/2025/octobre/le-plafond-de-la-securite-social.html</a>
    </p>
  </div>

  <div class="formula formula-formula">
    <p class="formula-title">📌 Définition des tranches (mensuel)</p>
    <p class="formula-content" style="text-align:center;">
      • Tranche 1 (T1) : de 0 à 1 PMSS → de 0 à 4 005 €<br>
      • Tranche 2 (T2) : de 1 à 8 PMSS → de 4 005 € à 32 040 € (8 × 4 005)<br><br>
      <a href="https://www.agirc-arrco.fr/particuliers/ma-retraite/comprendre-ma-retraite/points-de-retraite-comment-sont-ils-obtenus/" target="_blank" rel="noreferrer">https://www.agirc-arrco.fr/particuliers/ma-retraite/comprendre-ma-retraite/points-de-retraite-comment-sont-ils-obtenus/</a>
    </p>
  </div>

  <h3>4️⃣ Les cotisations AGIRC-ARRCO “cœur” (cadres compris)</h3>
  <p style="text-align:center;"><b>✅ Les 3 cotisations à connaître (cadres + non-cadres)</b></p>
  <ul class="centered-list bullets">
    <li>1. Retraite complémentaire (RC) : génère des points AGIRC-ARRCO</li>
    <li>2. CEG (Contribution d’Équilibre Général)</li>
    <li>3. CET (Contribution d’Équilibre Technique) — uniquement si le salaire dépasse 1 PMSS</li>
  </ul>
  <p style="text-align:center;">
    <a href="https://www.agirc-arrco.fr/nous-connaitre/nos-etudes-et-publications/documentation-institutionnelle/parametres-et-donnees-statistiques/" target="_blank" rel="noreferrer">https://www.agirc-arrco.fr/nous-connaitre/nos-etudes-et-publications/documentation-institutionnelle/parametres-et-donnees-statistiques/</a>
  </p>

  <h3>5️⃣ Taux 2026 (général) + répartition employeur/salarié</h3>
  <div class="formula formula-warn">
    <p class="formula-title">⚠️</p>
    <p class="formula-content" style="text-align:center;">
      ⚠️ En paie, on utilise généralement les taux “appelés” (avec pourcentage d’appel 127% inclus).<br>
      Les documents AGIRC-ARRCO rappellent cette logique : taux contractuels ≠ taux appelés.
    </p>
  </div>

  <p style="text-align:center;">
    <a href="https://www.agirc-arrco.fr/particuliers/ma-retraite/comprendre-ma-retraite/points-de-retraite-comment-sont-ils-obtenus/" target="_blank" rel="noreferrer">https://www.agirc-arrco.fr/particuliers/ma-retraite/comprendre-ma-retraite/points-de-retraite-comment-sont-ils-obtenus/</a>
  </p>

  <p style="text-align:center;"><b>A) Retraite complémentaire (taux appelés 2026)</b></p>
  <ul class="centered-list bullets">
    <li>RC T1 : 7,87% (Employeur 4,72% / Salarié 3,15%)</li>
    <li>RC T2 : 21,59% (Employeur 12,95% / Salarié 8,64%)</li>
  </ul>

  <p style="text-align:center;"><b>B) CEG (2026)</b></p>
  <ul class="centered-list bullets">
    <li>CEG T1 : 2,15% (Employeur 1,29% / Salarié 0,86%)</li>
    <li>CEG T2 : 2,70% (Employeur 1,62% / Salarié 1,08%)</li>
  </ul>

  <p style="text-align:center;"><b>C) CET (2026)</b></p>
  <ul class="centered-list bullets">
    <li>CET : 0,35% (Employeur 0,21% / Salarié 0,14%)</li>
  </ul>
  <p style="text-align:center;">
    📌 Condition : elle est due sur T1 + T2 si la rémunération du salarié dépasse 1 PMSS.
  </p>

  <p style="text-align:center;"><b>D) Répartition “standard”</b></p>
  <p style="text-align:center;">
    AGIRC-ARRCO rappelle que la prise en charge est en principe 60% employeur / 40% salarié sur T1 et T2 (sauf accord collectif différent).
  </p>

  <p style="text-align:center;">
    <a href="https://www.agirc-arrco.fr/nous-connaitre/nos-etudes-et-publications/documentation-institutionnelle/parametres-et-donnees-statistiques/" target="_blank" rel="noreferrer">https://www.agirc-arrco.fr/nous-connaitre/nos-etudes-et-publications/documentation-institutionnelle/parametres-et-donnees-statistiques/</a><br>
    <a href="https://www.agirc-arrco.fr/entreprises/mon-entreprise/calculer-et-declarer/le-calcul-des-cotisations-de-retraite-complementaire/" target="_blank" rel="noreferrer">https://www.agirc-arrco.fr/entreprises/mon-entreprise/calculer-et-declarer/le-calcul-des-cotisations-de-retraite-complementaire/</a>
  </p>

  <h3>6️⃣ Spécificité “cadres” : APEC (souvent en plus)</h3>

  <p style="text-align:center;">
  <span style="font-size:0.95em;">🔎 Voir détail :</span>
  <a href="#/referentiel/apec" style="font-size:0.95em; text-decoration:underline;">clique ici</a>
  </a>
</p>

  <div class="formula formula-reminder">
    <p class="formula-title">📌 APEC : repère</p>
    <p class="formula-content" style="text-align:center;">
      <b>🔎 APEC : c’est quoi exactement ?</b><br><br>
      L’APEC = Association Pour l’Emploi des Cadres.<br>
      <a href="https://www.apec.fr/" target="_blank" rel="noreferrer">https://www.apec.fr/</a><br><br>

      C’est un organisme “carrière / emploi” (pas une caisse de retraite) qui accompagne :<br><br>
      • les cadres (et souvent les “assimilés cadre” selon l’entreprise/CCN)<br>
      • les entreprises (recrutement, conseils RH, mobilité, etc.)<br><br>

      👉 Concrètement, l’APEC sert à financer des services : accompagnement à l’emploi, évolution de carrière, conseil, études marché, mise en relation, etc. (Ce n’est pas une cotisation qui te donne des “points” de retraite.)<br><br>
      <a href="https://www.agirc-arrco.fr/particuliers/ma-retraite/comprendre-ma-retraite/points-de-retraite-comment-sont-ils-obtenus/" target="_blank" rel="noreferrer">https://www.agirc-arrco.fr/particuliers/ma-retraite/comprendre-ma-retraite/points-de-retraite-comment-sont-ils-obtenus/</a><br><br>

      <b>🧾 Elle “fait recouvrir quoi” exactement ?</b><br><br>
      Elle ne recouvre pas la retraite (ça, c’est AGIRC-ARRCO : RC + CEG + CET).<br>
      Elle recouvre le financement de l’APEC (services d’accompagnement cadre / entreprises).<br>
      📌 Important examen : APEC = cotisation “annexe” recouvrée par les institutions AGIRC-ARRCO, mais destination différente (APEC ≠ retraite).<br><br>

      <b>✅ Qui paye ?</b><br><br>
      La cotisation APEC concerne les cadres (au sens des règles applicables dans l’entreprise : classification/emploi).<br>
      Elle est recouvrée avec les cotisations AGIRC-ARRCO.<br><br>

      <b>✅ Assiette (très important)</b><br><br>
      • Assiette limitée à 4 × PMSS<br>
      → en 2026 : 4 × 4 005 = 16 020 € (mensuel).<br><br>

      <b>✅ Taux 2026</b><br><br>
      • APEC : 0,06% au total<br>
      o Employeur 0,036%<br>
      o Salarié 0,024%<br><br>

      <b>Conséquences “paie / logiciel” (ce que tu dois retenir)</b><br><br>
      • APEC ne génère pas de points : c’est un financement de services “emploi/cadre”.<br>
      • Elle est plafonnée à 4 PMSS, donc même si le salaire est très élevé, tu ne la calcules pas au-delà de ce plafond.<br>
      • En DSN, il existe une codification dédiée “cotisation APEC” (utile si tu vois des rubriques/codes dans un paramétrage).
    </p>
  </div>

  <div class="formula formula-reminder">
    <p class="formula-title">🔗 Liens officiels</p>
    <p class="formula-content" style="text-align:center;">
      Service-Public — Plafond Sécurité sociale :<br>
      <a href="https://www.service-public.gouv.fr/particuliers/actualites/A15386" target="_blank" rel="noreferrer">https://www.service-public.gouv.fr/particuliers/actualites/A15386</a><br><br>

      AGIRC-ARRCO — Paramètres & données :<br>
      <a href="https://www.agirc-arrco.fr/nous-connaitre/nos-etudes-et-publications/documentation-institutionnelle/parametres-et-donnees-statistiques/" target="_blank" rel="noreferrer">https://www.agirc-arrco.fr/nous-connaitre/nos-etudes-et-publications/documentation-institutionnelle/parametres-et-donnees-statistiques/</a><br><br>

      Net-entreprises — Cotisations AGIRC-ARRCO / DSN :<br>
      <a href="https://net-entreprises.custhelp.com/app/answers/detail_dsn/a_id/2556/~/cotisations-de-retraite-compl%C3%A9mentaire-agirc-arrco-dues-%C3%A0-partir-du-01%2F01%2F2023" target="_blank" rel="noreferrer">https://net-entreprises.custhelp.com/app/answers/detail_dsn/a_id/2556/~/cotisations-de-retraite-compl%C3%A9mentaire-agirc-arrco-dues-%C3%A0-partir-du-01%2F01%2F2023</a>
    </p>
  </div>

  <h3>7️⃣ Exemples chiffrés (arrondis au centime)</h3>

  <div class="formula formula-example">
    <p class="formula-title">✅ Exemple 1 — Cadre à 6 000,00 € brut/mois (2026)</p>
    <p class="formula-content" style="text-align:center;">
      • T1 = 4 005,00 €<br>
      • T2 = 6 000,00 – 4 005,00 = 1 995,00 €<br>
      • Salaire > PMSS ⇒ CET due sur 6 000,00 €<br>
      • APEC sur 6 000,00 € (car < 16 020)<br><br>

      <b>A) Part salariale (retenue salarié)</b><br><br>
      • RC T1 : 4 005 × 3,15% = 126,16 €<br>
      • RC T2 : 1 995 × 8,64% = 172,37 €<br>
      • CEG T1 : 4 005 × 0,86% = 34,44 €<br>
      • CEG T2 : 1 995 × 1,08% = 21,55 €<br>
      • CET : 6 000 × 0,14% = 8,40 €<br>
      • APEC : 6 000 × 0,024% = 1,44 €<br><br>
      ✅ <b>Total salarié = 364,36 €</b><br><br>

      <b>B) Part patronale</b><br><br>
      • RC T1 : 4 005 × 4,72% = 189,04 €<br>
      • RC T2 : 1 995 × 12,95% = 258,35 €<br>
      • CEG T1 : 4 005 × 1,29% = 51,66 €<br>
      • CEG T2 : 1 995 × 1,62% = 32,32 €<br>
      • CET : 6 000 × 0,21% = 12,60 €<br>
      • APEC : 6 000 × 0,036% = 2,16 €<br><br>
      ✅ <b>Total employeur = 546,13 €</b><br><br>

      (Taux officiels 2026 : AGIRC-ARRCO paramètres/circulaire)<br>
      <a href="https://www.agirc-arrco.fr/nous-connaitre/nos-etudes-et-publications/documentation-institutionnelle/parametres-et-donnees-statistiques/" target="_blank" rel="noreferrer">https://www.agirc-arrco.fr/nous-connaitre/nos-etudes-et-publications/documentation-institutionnelle/parametres-et-donnees-statistiques/</a>
    </p>
  </div>

  <div class="formula formula-example">
    <p class="formula-title">✅ Exemple 2 — Cadre à 3 500,00 € brut/mois (en dessous du PMSS)</p>
    <p class="formula-content" style="text-align:center;">
      • T1 = 3 500,00 €<br>
      • T2 = 0<br>
      • Salaire ≤ PMSS ⇒ pas de CET<br>
      • APEC sur 3 500<br><br>

      <b>Retenue salarié</b><br><br>
      • RC T1 : 3 500 × 3,15% = 110,25 €<br>
      • CEG T1 : 3 500 × 0,86% = 30,10 €<br>
      • APEC : 3 500 × 0,024% = 0,84 €<br><br>
      ✅ <b>Total salarié (sur ces lignes) = 141,19 €</b>
    </p>
  </div>

  <h3>8️⃣ Pièges classiques (examen + logiciel de paie)</h3>

  <div class="formula formula-warn">
    <p class="formula-title">⚠️ Pièges classiques (examen + logiciel de paie)</p>
    <p class="formula-content" style="text-align:center;">
      <b>⚠️ Piège 1 — Confondre “taux contractuel” et “taux appelé”</b><br><br>
      • Les taux “points” (contractuels) sont inférieurs.<br>
      • En paie, on prélève le taux appelé (127%) → ex : T1 6,20% devient 7,87%.<br><br>
      <a href="https://www.agirc-arrco.fr/particuliers/ma-retraite/comprendre-ma-retraite/points-de-retraite-comment-sont-ils-obtenus/" target="_blank" rel="noreferrer">https://www.agirc-arrco.fr/particuliers/ma-retraite/comprendre-ma-retraite/points-de-retraite-comment-sont-ils-obtenus/</a><br><br>

      <b>⚠️ Piège 2 — CET : pas automatique</b><br><br>
      La CET (0,35%) n’est due que si la rémunération dépasse 1 PMSS, et elle se calcule alors sur T1 + T2.<br><br>
      <a href="https://www.agirc-arrco.fr/nous-connaitre/nos-etudes-et-publications/documentation-institutionnelle/parametres-et-donnees-statistiques/" target="_blank" rel="noreferrer">https://www.agirc-arrco.fr/nous-connaitre/nos-etudes-et-publications/documentation-institutionnelle/parametres-et-donnees-statistiques/</a><br><br>

      <b>⚠️ Piège 3 — APEC : base plafonnée à 4 PMSS</b><br><br>
      Même si le salaire est très élevé, APEC s’arrête à 16 020 € (2026).<br><br>
      <a href="https://www.service-public.gouv.fr/particuliers/actualites/A15386" target="_blank" rel="noreferrer">https://www.service-public.gouv.fr/particuliers/actualites/A15386</a><br>
      <a href="https://www.agirc-arrco.fr/nous-connaitre/nos-etudes-et-publications/documentation-institutionnelle/parametres-et-donnees-statistiques/" target="_blank" rel="noreferrer">https://www.agirc-arrco.fr/nous-connaitre/nos-etudes-et-publications/documentation-institutionnelle/parametres-et-donnees-statistiques/</a><br><br>

      <b>⚠️ Piège 4 — Répartition 60/40 modifiable</b><br><br>
      Par défaut : 60% employeur / 40% salarié, mais un accord peut modifier la répartition → vérifier certificat d’adhésion / CCN / accord d’entreprise.<br><br>
      <a href="https://www.agirc-arrco.fr/entreprises/mon-entreprise/calculer-et-declarer/le-calcul-des-cotisations-de-retraite-complementaire/" target="_blank" rel="noreferrer">https://www.agirc-arrco.fr/entreprises/mon-entreprise/calculer-et-declarer/le-calcul-des-cotisations-de-retraite-complementaire/</a>
    </p>
  </div>

  <h3>9️⃣ Réflexe “bulletin de paie” (ce que tu dois voir apparaître)</h3>
  <p style="text-align:center;">Sur un bulletin cadre, tu retrouves très souvent, ligne par ligne :</p>
  <ul class="centered-list bullets">
    <li>Retraite compl. T1</li>
    <li>Retraite compl. T2</li>
    <li>CEG T1</li>
    <li>CEG T2</li>
    <li>CET (si salaire > PMSS)</li>
    <li>APEC (si cadre)</li>
  </ul>
  <p style="text-align:center;">
    <a href="https://www.agirc-arrco.fr/nous-connaitre/nos-etudes-et-publications/documentation-institutionnelle/parametres-et-donnees-statistiques/" target="_blank" rel="noreferrer">https://www.agirc-arrco.fr/nous-connaitre/nos-etudes-et-publications/documentation-institutionnelle/parametres-et-donnees-statistiques/</a>
  </p>

  <p style="text-align:center;">
    <a href="#/referentiel/agirc-arrco">⬅ Retour “AGIRC-ARRCO”</a>
  </p>

  `,
};
