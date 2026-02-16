// src/data/fnalCard.js

export const fnalCard = {
    id: "fnal",
    group: "referentiel",
    title: "FNAL — Fonds National d’Aide au Logement — 2026",
    content: `

<p style="text-align:center;">📘 FNAL — Fonds National d’Aide au Logement</p>
<p style="text-align:center;">Version complète – 2026 – Fond juridique + pratique paie + examen</p>

<h3>1️⃣ Finalité du FNAL : à quoi sert cette cotisation ?</h3>
<p style="text-align:center;">Le FNAL (Fonds National d’Aide au Logement) finance les aides personnelles au logement versées par la branche Famille de la Sécurité sociale :</p>
<ul class="centered-list bullets">
  <li>APL (Aide personnalisée au logement)</li>
  <li>ALF (Allocation de logement familiale)</li>
  <li>ALS (Allocation de logement sociale)</li>
</ul>
<p style="text-align:center;">👉 Il s’agit d’un financement collectif des aides au logement.</p>
<p style="text-align:center;"><b>📖 Référence officielle URSSAF :</b></p>
<ul class="centered-list">
  <li><a href="https://www.urssaf.fr/portail/home/employeur/calculer-les-cotisations/la-base-de-calcul/fnal.html" target="_blank" rel="noreferrer">https://www.urssaf.fr/portail/home/employeur/calculer-les-cotisations/la-base-de-calcul/fnal.html</a></li>
</ul>
<p style="text-align:center;">La contribution au Fonds national d’aide au logement (Fnal)</p>
<ul class="centered-list">
  <li><a href="https://www.urssaf.fr/accueil/employeur/cotisations/liste-cotisations/fonds-national-aide-logement.html" target="_blank" rel="noreferrer">https://www.urssaf.fr/accueil/employeur/cotisations/liste-cotisations/fonds-national-aide-logement.html</a></li>
</ul>

<p style="text-align:center;"><b>📖 Base légale :</b></p>
<p style="text-align:center;">Code de la sécurité sociale – Article L834-1 et suivants</p>
<ul class="centered-list">
  <li><a href="https://www.legifrance.gouv.fr/codes/id/LEGITEXT000006073189/" target="_blank" rel="noreferrer">https://www.legifrance.gouv.fr/codes/id/LEGITEXT000006073189/</a></li>
</ul>

<h3>2️⃣ Nature de la cotisation</h3>
<ul class="centered-list bullets">
  <li>Cotisation 100 % patronale</li>
  <li>Jamais prélevée sur le salarié</li>
  <li>Recouvrée par l’URSSAF</li>
  <li>Apparaît uniquement dans les charges employeur</li>
</ul>
<div class="formula formula-reminder">
  <p class="formula-title">👉 Point clé</p>
  <p class="formula-content">Le salarié ne la voit pas en part salariale.</p>
</div>

<h3>3️⃣ Qui est concerné ?</h3>
<p style="text-align:center;">Toutes les entreprises, quel que soit :</p>
<ul class="centered-list bullets">
  <li>le secteur (y compris BTP),</li>
  <li>la convention collective,</li>
  <li>le statut du salarié (ouvrier / ETAM / cadre),</li>
  <li>le type de contrat (CDD, CDI, apprentissage…).</li>
</ul>
<div class="formula formula-warn">
  <p class="formula-title">⚠️ Attention</p>
  <p class="formula-content">Le FNAL ne dépend PAS du statut du salarié.<br>Il dépend exclusivement de l’effectif de l’entreprise.</p>
</div>

<h3>4️⃣ Les taux du FNAL (point clé examen)</h3>
<p style="text-align:center;">Le taux varie selon l’effectif.</p>

<div class="formula formula-formula">
  <p class="formula-title">🔹 Entreprise de moins de 50 salariés</p>
  <p class="formula-content">
    • Taux : 0,10 %<br>
    • Assiette : rémunération limitée au plafond de la Sécurité sociale (PSS)<br>
    • On parle de FNAL réduit<br>
    👉 On ne calcule que sur la partie plafonnée.
  </p>
</div>

<div class="formula formula-formula">
  <p class="formula-title">🔹 Entreprise de 50 salariés et plus</p>
  <p class="formula-content">
    • Taux : 0,50 %<br>
    • Assiette : totalité du salaire brut<br>
    • On parle de FNAL majoré<br>
    👉 Pas de plafond, on prend tout le brut.
  </p>
</div>

<h3>5️⃣ Plafond de la Sécurité sociale (rappel 2026)</h3>
<p style="text-align:center;">Le plafond mensuel de Sécurité sociale (PMSS) 2026 est fixé par arrêté.</p>
<p style="text-align:center;">(À vérifier officiellement au moment de l’édition finale si mise à jour annuelle.)</p>
<p style="text-align:center;"><b>📖 Référence :</b></p>
<ul class="centered-list">
  <li><a href="https://www.urssaf.fr/portail/home/employeur/calculer-les-cotisations/plafonds.html" target="_blank" rel="noreferrer">https://www.urssaf.fr/portail/home/employeur/calculer-les-cotisations/plafonds.html</a></li>
</ul>

<h3>6️⃣ Exemples chiffrés (calculs au centime)</h3>

<div class="formula formula-example">
  <p class="formula-title">✅ Exemple 1 – Entreprise de 30 salariés</p>
  <p class="formula-content">
    Salarié :<br>
    Salaire brut = 2 500 €<br>
    PMSS supposé = 3 864 € (exemple pédagogique)<br>
    Le salaire est inférieur au plafond.<br><br>
    Base FNAL = 2 500 €<br>
    Taux = 0,10 %<br><br>
    Calcul :<br>
    2 500 × 0,10 % = 2 500 × 0,001 = 2,50 €<br>
    👉 FNAL = 2,50 €
  </p>
</div>

<div class="formula formula-example">
  <p class="formula-title">✅ Exemple 2 – Entreprise de 30 salariés avec salaire élevé</p>
  <p class="formula-content">
    Salaire brut = 5 000 €<br>
    PMSS = 3 864 €<br>
    Base limitée au plafond → 3 864 €<br><br>
    Calcul :<br>
    3 864 × 0,10 % = 3,864 €<br>
    Arrondi au centime : 3,86 €<br>
    👉 Même si le salarié gagne 5 000 €, on ne dépasse pas le plafond.
  </p>
</div>

<div class="formula formula-example">
  <p class="formula-title">✅ Exemple 3 – Entreprise de 80 salariés</p>
  <p class="formula-content">
    Salaire brut = 5 000 €<br>
    Taux = 0,50 %<br>
    Assiette = totalité du salaire<br><br>
    5 000 × 0,50 % = 5 000 × 0,005 = 25,00 €<br>
    👉 FNAL = 25,00 €
  </p>
</div>

<h3>7️⃣ Cas BTP – Ce que tu dois retenir</h3>
<ul class="centered-list bullets">
  <li>Le FNAL s’applique aussi aux entreprises BTP.</li>
  <li>Il concerne ouvriers, ETAM et cadres.</li>
  <li>Si l’entreprise BTP a ≥ 50 salariés → 0,50 % sur tout le brut.</li>
  <li>Il figure en charges patronales.</li>
</ul>
<p style="text-align:center;">Aucune spécificité conventionnelle BTP sur le taux.</p>

<h3>8️⃣ Apparition sur le bulletin de paie</h3>
<p style="text-align:center;">Dans la partie charges patronales, libellé du type :</p>
<ul class="centered-list bullets">
  <li>FNAL 0,10 %</li>
  <li>ou</li>
  <li>FNAL 0,50 %</li>
</ul>
<p style="text-align:center;">Jamais en part salariale.</p>

<h3>9️⃣ Différence avec le “1 % logement”</h3>
<p style="text-align:center;">À ne pas confondre avec :</p>
<p style="text-align:center;"><b>PEEC — Participation des Employeurs à l’Effort de Construction</b></p>
<ul class="centered-list bullets">
  <li>Taux : 0,45 %</li>
  <li>Appelé historiquement “1 % logement”</li>
  <li>Concerne les entreprises d’au moins 50 salariés</li>
  <li>Financement Action Logement</li>
</ul>
<p style="text-align:center;"><b>📖 Service-Public :</b></p>
<ul class="centered-list">
  <li><a href="https://www.service-public.fr/professionnels-entreprises/vosdroits/F225" target="_blank" rel="noreferrer">https://www.service-public.fr/professionnels-entreprises/vosdroits/F225</a></li>
</ul>
<div class="formula formula-warn">
  <p class="formula-title">👉 À retenir</p>
  <p class="formula-content">FNAL ≠ PEEC</p>
</div>

<h3>🔟 Réflexe examen / logiciel de paie</h3>
<ul class="centered-list bullets">
  <li>1️⃣ Je regarde l’effectif</li>
  <li>2️⃣ &lt; 50 salariés → 0,10 % plafonné</li>
  <li>3️⃣ ≥ 50 salariés → 0,50 % sur tout le brut</li>
  <li>4️⃣ Jamais de part salariale</li>
</ul>
<div class="formula formula-warn">
  <p class="formula-title">⚠️ Erreur classique</p>
  <p class="formula-content">croire que cela dépend du statut du salarié.<br>👉 Faux. Seul l’effectif compte.</p>
</div>

<h3>🎯 Résumé ultra synthèse (mémo rapide)</h3>
<p style="text-align:center;">FNAL =</p>
<ul class="centered-list bullets">
  <li>✔ Cotisation patronale</li>
  <li>✔ Finance les aides au logement</li>
  <li>✔ Dépend uniquement de l’effectif</li>
  <li>&lt; 50 salariés → 0,10 % plafonné</li>
  <li>≥ 50 salariés → 0,50 % total brut</li>
</ul>

<p style="text-align:center;">
  <span style="margin:0 10px;">•</span>
  <a href="#/referentiel/urssaf">⬅ Retour URSSAF</a>
</p>

`,
};
