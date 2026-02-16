// src/data/peecCard.js

export const peecCard = {
    id: "peec",
    group: "referentiel",
    title: "PEEC / Effort de construction — 2026",
    content: `

  <p style="text-align:center;"><b>📘 La Participation des Employeurs à l’Effort de Construction (PEEC) — « 1 % logement »</b></p>
  <p style="text-align:center;"><b>(mise à jour : changement de seuil / numérotation – Loi PACTE, entrée en vigueur au 1er janvier 2020)</b></p>

  <div class="formula formula-reminder">
    <p class="formula-title">✅ Objectif</p>
    <p class="formula-content">
      Savoir <b>identifier</b> les entreprises redevables, <b>calculer</b> la PEEC (assiette + taux),
      <b>déclarer</b> (DSN) et connaître la <b>sanction 2%</b> en cas de défaut/insuffisance.
    </p>
  </div>

  <div class="formula formula-reminder">
    <p class="formula-title">🔗 Liens officiels (copie Word)</p>
    <p class="formula-content">
      Service-Public (Entreprendre) : 
      <a href="https://entreprendre.service-public.gouv.fr/vosdroits/F22583" target="_blank" rel="noreferrer">https://entreprendre.service-public.gouv.fr/vosdroits/F22583</a><br/>
      Ministère de l’Économie (rappel global) : 
      <a href="https://www.economie.gouv.fr/entreprises/gerer-sa-fiscalite-et-ses-impots/autres-impots-et-taxes/entreprises-quelles-sont-vos" target="_blank" rel="noreferrer">https://www.economie.gouv.fr/entreprises/gerer-sa-fiscalite-et-ses-impots/autres-impots-et-taxes/entreprises-quelles-sont-vos</a><br/>
      Code de la construction et de l’habitation (PEEC) – Légifrance : 
      <a href="https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006074096/LEGISCTA000006159043/" target="_blank" rel="noreferrer">https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006074096/LEGISCTA000006159043/</a><br/>
      Action Logement (versement / obligation) : 
      <a href="https://www.actionlogement.fr/le-versement-de-la-participation-des-employeurs-l-effort-de-construction-peec" target="_blank" rel="noreferrer">https://www.actionlogement.fr/le-versement-de-la-participation-des-employeurs-l-effort-de-construction-peec</a>
    </p>
  </div>

  <h3>1️⃣ Définition (à quoi sert la PEEC ?)</h3>

  <p style="text-align:center;">
    La <b>Participation des Employeurs à l’Effort de Construction (PEEC)</b> est une obligation imposée à certains employeurs pour
    <b>financer des actions en faveur du logement des salariés</b>. Elle est souvent appelée <b>« 1 % logement »</b>, même si le taux n’est plus de 1 %.
  </p>

  <h3>2️⃣ Entreprises concernées : changement de seuil (Loi PACTE)</h3>

  <div class="formula formula-formula">
    <p class="formula-title">✅ Conditions (à apprendre “examen”)</p>
    <p class="formula-content">
      Une entreprise est redevable de la PEEC si elle remplit <b>les conditions cumulatives</b> :<br/><br/>
      1) <b>Employeur du secteur privé non agricole</b><br/>
      2) <b>Effectif d’au moins 50 salariés</b> (tous établissements confondus, effectif “Sécurité sociale”)<br/>
      3) <b>Assujettie à la taxe sur les salaires</b> (logique fiscale)
    </p>
  </div>

  <p style="text-align:center;">
    ➡️ <b>Base légale du seuil de 50 salariés</b> : le CCH précise le <b>seuil de cinquante salariés</b> et renvoie au mode de calcul “Sécurité sociale”.
    La réforme est <b>entrée en vigueur le 1er janvier 2020</b> (Loi PACTE).
  </p>

  <div class="formula formula-warn">
    <p class="formula-title">⚠️ Comment se calcule l’effectif (point piège)</p>
    <p class="formula-content">
      - L’effectif est calculé selon les <b>règles “Sécurité sociale”</b>, en tenant compte de <b>tous les établissements</b>.<br/>
      - Le <b>franchissement du seuil de 50</b> n’entraîne pas une obligation immédiate : il est <b>pris en compte après 5 années civiles consécutives</b>.<br/>
      - Si l’effectif repasse sous 50, l’entreprise bénéficie à nouveau de <b>5 années</b> avant d’être soumise.<br/><br/>
      ✅ Retenir : <b>quand on repasse sous le seuil, le compteur repart</b> (logique “5 ans”).
    </p>
  </div>

  <div class="formula formula-warn">
    <p class="formula-title">⚠️ Attention (cas agricole)</p>
    <p class="formula-content">
      Les entreprises agricoles ne relèvent pas de la PEEC “classique” : elles relèvent d’un dispositif spécifique, souvent appelé <b>PEAEC</b>
      (participation de l’employeur agricole à l’effort de construction).
    </p>
  </div>

  <h3>3️⃣ Assiette : base de calcul de la PEEC</h3>

  <p style="text-align:center;">
    La PEEC est calculée sur les <b>rémunérations versées pendant l’année civile précédente (N-1)</b> :
    masse salariale imposable (salaires + primes + indemnités + avantages en nature…).
  </p>

  <div class="formula formula-reminder">
    <p class="formula-title">📌 Repère pratique paie</p>
    <p class="formula-content">
      En pratique “paie/cours”, retenir : <b>assiette large = rémunérations brutes de l’année</b>, dans l’esprit d’une base proche de la masse salariale fiscale.
    </p>
  </div>

  <h3>4️⃣ Taux : combien doit verser l’entreprise ?</h3>

  <p style="text-align:center;">
    Le taux minimal de PEEC est : <b>0,45 %</b> des rémunérations versées en <b>N-1</b>.
  </p>

  <div class="formula formula-formula">
    <p class="formula-title">🧮 Formule (examen)</p>
    <p class="formula-content">
      <b>PEEC due = Masse salariale N-1 × 0,45 %</b>
    </p>
  </div>

  <h3>5️⃣ Investissements / réalisation de l’obligation (comment l’entreprise “se libère”)</h3>

  <p style="text-align:center;">
    L’entreprise peut satisfaire à son obligation :
  </p>

  <p style="text-align:center;"><b>A) Par versement à l’organisme collecteur</b></p>
  <p style="text-align:center;">
    En pratique, le versement se fait à <b>Action Logement</b> (Action Logement Services).
  </p>

  <p style="text-align:center;"><b>B) Par investissements directs (plus rare en pratique)</b></p>
  <ul class="centered-list bullets">
    <li>prêts aidés / à taux réduit pour la résidence principale,</li>
    <li>investissements dans des logements locatifs destinés aux salariés, parfois sous conditions/autorisations.</li>
  </ul>

  <div class="formula formula-reminder">
    <p class="formula-title">📌 Remarque importante sur ton passage “1/9 + 8/9”</p>
    <p class="formula-content">
      Ton cours mentionne une répartition <b>1/9 (0,05 %) + 8/9 (0,40 %)</b>.<br/>
      👉 Aujourd’hui, les sources officielles grand public présentent surtout l’obligation comme un <b>minimum global de 0,45 %</b>
      et mettent l’accent sur le <b>versement/affectation via Action Logement</b>.<br/><br/>
      ✅ Donc, en mode “paie pratique”, retenir surtout : <b>0,45 % à satisfaire</b>, le plus souvent par <b>versement</b>.
    </p>
  </div>

  <p style="text-align:center;">
    ✅ <b>Report d’excédent</b> : si l’employeur a investi <b>plus que le minimum</b>, il peut <b>reporter l’excédent</b> sur les exercices suivants (logique de report).
  </p>

  <h3>6️⃣ Déclaration et versement : DSN (point “logiciel paie”)</h3>

  <p style="text-align:center;">
    L’entreprise déclare la masse salariale et la PEEC via la <b>DSN</b> : en principe, dans la <b>DSN du mois de décembre</b>, déposée en janvier.
  </p>

  <div class="formula formula-reminder">
    <p class="formula-title">🔗 DSN (aide officielle)</p>
    <p class="formula-content">
      Net-entreprises (PEEC DSN) : 
      <a href="https://net-entreprises.custhelp.com/app/answers/detail_dsn/a_id/791/~/participation-de-lemployeur-%C3%A0-leffort-de-construction-%28peec%29--" target="_blank" rel="noreferrer">https://net-entreprises.custhelp.com/app/answers/detail_dsn/a_id/791/~/participation-de-lemployeur-%C3%A0-leffort-de-construction-%28peec%29--</a>
    </p>
  </div>

  <div class="formula formula-warn">
    <p class="formula-title">📌 Tolérance (ce que tu as noté)</p>
    <p class="formula-content">
      Par tolérance, il est admis que les données puissent être déclarées <b>au plus tard en janvier</b>, avec une DSN déposée <b>au plus tard le 5 ou le 15 février</b>.
    </p>
  </div>

  <h3>7️⃣ Sanction en cas d’absence ou insuffisance d’investissement : cotisation de 2 %</h3>

  <p style="text-align:center;">
    Si l’entreprise <b>n’a pas réalisé</b> (ou pas suffisamment) les investissements/versements requis, elle doit payer une <b>cotisation supplémentaire de 2 %</b> sur les salaires concernés.
  </p>

  <div class="formula formula-reminder">
    <p class="formula-title">✅ Déclaration : bordereau n° 2485-SD</p>
    <p class="formula-content">
      Formulaire Service-Public : 
      <a href="https://entreprendre.service-public.gouv.fr/vosdroits/R18003" target="_blank" rel="noreferrer">https://entreprendre.service-public.gouv.fr/vosdroits/R18003</a><br/>
      BOFiP (référence) : 
      <a href="https://bofip.impots.gouv.fr/bofip/6364-PGP.html/identifiant%3DBOI-TPS-PEEC-50-20200122" target="_blank" rel="noreferrer">https://bofip.impots.gouv.fr/bofip/6364-PGP.html/identifiant%3DBOI-TPS-PEEC-50-20200122</a>
    </p>
  </div>

  <h3>8️⃣ Exemples chiffrés (arrondis au centime)</h3>

  <div class="formula formula-example">
    <p class="formula-title">✅ Exemple 1 : calcul de la PEEC (situation normale)</p>
    <p class="formula-content">
      Entreprise assujettie (≥ 50 salariés).<br/>
      <b>Masse salariale brute N-1 = 1 200 000,00 €</b><br/><br/>
      PEEC = 1 200 000,00 × 0,45 %<br/>
      = 1 200 000,00 × 0,0045<br/>
      = <b>5 400,00 €</b><br/><br/>
      👉 <b>PEEC minimale à satisfaire : 5 400,00 €</b>
    </p>
  </div>

  <div class="formula formula-example">
    <p class="formula-title">✅ Exemple 2 : insuffisance → cotisation de 2 %</p>
    <p class="formula-content">
      Même entreprise, même masse salariale N-1 = <b>1 200 000,00 €</b><br/>
      Elle n’a réalisé <b>aucun investissement/versement</b>.<br/><br/>
      Cotisation 2 % = 1 200 000,00 × 2 %<br/>
      = 1 200 000,00 × 0,02<br/>
      = <b>24 000,00 €</b><br/><br/>
      ➡️ À déclarer via <b>bordereau 2485-SD</b>.
    </p>
  </div>

  <h3>9️⃣ Pièges “examen / pratique paie” (à apprendre)</h3>

  <div class="formula formula-warn">
    <p class="formula-title">⚠️ Points à retenir</p>
    <p class="formula-content">
      - <b>Seuil = 50 salariés</b> (et non 20) depuis la réforme entrée en vigueur <b>au 1er janvier 2020</b>.<br/>
      - <b>Franchissement du seuil</b> : prise en compte <b>après 5 années consécutives</b> ; si l’effectif repasse sous 50, <b>on repart sur 5 ans</b>.<br/>
      - <b>Déclaration DSN</b> : logique “décembre / janvier” + <b>tolérance</b> jusqu’à dépôt en février (5/15).<br/>
      - <b>Secteur agricole</b> : dispositif distinct (PEAEC).
    </p>
  </div>

  <p style="text-align:center;">
    <a href="#/referentiel/cotisations-contributions">⬅ Retour “Cotisations & contributions”</a>
  </p>

  <p style="text-align:center;">
    <a href="#/">⬅ Retour accueil</a>
  </p>

  `,
};
