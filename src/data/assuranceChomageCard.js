// src/data/assuranceChomageCard.js

export const assuranceChomageCard = {
    id: "assurance-chomage",
    group: "referentiel",
    title: "Cotisation assurance chômage — 2026",
    content: `

  <p style="text-align:center;">📘 <b>LA COTISATION ASSURANCE CHÔMAGE (Contribution patronale) — 2026</b></p>
  <p style="text-align:center;">Version intégrale — Fond juridique + pratique paie + examen</p>

  <div class="formula formula-reminder">
    <p class="formula-title">1️⃣ Définition & finalité (à quoi sert cette cotisation ?)</p>
    <p class="formula-content">
      La <b>contribution d’assurance chômage</b> est une <b>cotisation uniquement patronale</b> (pas de part salariale)
      due, en principe, pour les <b>salariés titulaires d’un contrat de travail</b>.<br><br>
      Elle sert à <b>financer l’assurance chômage</b>, c’est-à-dire les allocations versées aux personnes privées d’emploi
      (gestion/indemnisation par <b>France Travail / Unédic</b>), même si le <b>recouvrement</b> est assuré via l’<b>URSSAF</b>
      (collecte et déclaration via la DSN).<br><br>
      ➡️ <b>Référence officielle URSSAF (assurance chômage + AGS, recouvrement, principes, taux)</b> :<br>
      <a href="https://www.urssaf.fr/accueil/employeur/cotisations/liste-cotisations/assurance-chomage-ags.html"
         target="_blank" rel="noreferrer">
         https://www.urssaf.fr/accueil/employeur/cotisations/liste-cotisations/assurance-chomage-ags.html
      </a><br><br>
      ➡️ <b>Référence Unédic (taux de contribution et cadre assurance chômage)</b> :<br>
      <a href="https://www.unedic.org/la-reglementation/fiches-thematiques/taux-de-contribution"
         target="_blank" rel="noreferrer">
         https://www.unedic.org/la-reglementation/fiches-thematiques/taux-de-contribution
      </a>
    </p>
  </div>

  <h3>2️⃣ Champ d’application : quels travailleurs sont concernés ?</h3>

  <p style="text-align:center;"><b>✅ 2.1 Salariés (contrat de travail)</b></p>
  <p style="text-align:center;">
    La contribution est due sur les <b>rémunérations des salariés</b> relevant d’un <b>contrat de travail</b>
    (CDI, CDD, etc.), sous réserve des règles d’assiette/plafond et des cas particuliers (ex. CDD d’usage).
  </p>
  <p style="text-align:center;">
    Référence URSSAF :<br>
    <a href="https://www.urssaf.fr/accueil/employeur/cotisations/liste-cotisations/assurance-chomage-ags.html"
       target="_blank" rel="noreferrer">
       https://www.urssaf.fr/accueil/employeur/cotisations/liste-cotisations/assurance-chomage-ags.html
    </a>
  </p>

  <p style="text-align:center;"><b>❌ 2.2 Mandataires sociaux sans contrat de travail</b></p>
  <p style="text-align:center;">
    Un <b>mandataire social</b> (gérant, président, DG, etc.) <b>sans contrat de travail</b> n’est <b>pas</b> assujetti à
    l’assurance chômage <b>au titre de ce mandat</b>, car il n’y a pas de <b>lien de subordination</b>.
  </p>

  <div class="formula formula-warn">
    <p class="formula-title">📌 Cas pratique important</p>
    <p class="formula-content">
      Si un mandataire cumule :<br>
      • un <b>mandat social</b> (rémunération de mandat) +<br>
      • un <b>contrat de travail distinct</b> (fonctions techniques réelles + subordination + rémunération séparée)<br><br>
      ➡️ <b>Seule la rémunération liée au contrat de travail</b> entre dans l’assiette de la contribution d’assurance chômage
      (la rémunération de mandat reste hors champ).<br><br>
      📌 <b>Piège examen</b> : on raisonne <b>rémunération par rémunération</b> selon leur <b>nature juridique</b>
      (mandat ≠ contrat de travail).
    </p>
  </div>

  <h3>3️⃣ Qui collecte et comment ? (URSSAF / DSN)</h3>

  <p style="text-align:center;">
    Même si l’assurance chômage est “gérée” côté assurance chômage (France Travail/Unédic), l’employeur <b>déclare et paie</b>
    la contribution <b>à l’URSSAF</b>, via la <b>DSN</b>.
  </p>

  <p style="text-align:center;">
    ➡️ Référence URSSAF (taux secteur privé — utile en paie) :<br>
    <a href="https://www.urssaf.fr/accueil/outils-documentation/taux-baremes/taux-cotisations-secteur-prive.html"
       target="_blank" rel="noreferrer">
       https://www.urssaf.fr/accueil/outils-documentation/taux-baremes/taux-cotisations-secteur-prive.html
    </a>
  </p>

  <h3>4️⃣ Assiette & plafond (règle de calcul 2026)</h3>

  <p style="text-align:center;"><b>4.1 Assiette</b></p>
  <p style="text-align:center;">
    La contribution est calculée sur la <b>rémunération brute soumise</b>, dans la <b>limite d’un plafond</b>
    (plafond = <b>4 PSS</b>).
  </p>

  <p style="text-align:center;">
    Référence Unédic :<br>
    <a href="https://www.unedic.org/la-reglementation/fiches-thematiques/taux-de-contribution"
       target="_blank" rel="noreferrer">
       https://www.unedic.org/la-reglementation/fiches-thematiques/taux-de-contribution
    </a>
  </p>

  <p style="text-align:center;"><b>4.2 Plafond 2026</b></p>
  <p style="text-align:center;">
    En pratique paie 2026, on retient :<br>
    • <b>Plafond mensuel 4 PSS = 16 020 €</b> (ce qui implique un PSS mensuel de 4 005 €)<br>
    • Plafond annuel correspondant : <b>192 240 €</b>
  </p>

  <div class="formula formula-warn">
    <p class="formula-title">📌 Piège examen</p>
    <p class="formula-content">
      Un salaire brut &gt; 4 PSS <b>ne</b> se cotise <b>pas</b> en totalité à l’assurance chômage : on <b>plafonne</b> la base.
    </p>
  </div>

  <p style="text-align:center;">
    Référence taux/baremes URSSAF :<br>
    <a href="https://www.urssaf.fr/accueil/outils-documentation/taux-baremes/taux-cotisations-secteur-prive.html"
       target="_blank" rel="noreferrer">
       https://www.urssaf.fr/accueil/outils-documentation/taux-baremes/taux-cotisations-secteur-prive.html
    </a>
  </p>

  <h3>5️⃣ Taux 2026 (et cas particulier CDDU)</h3>

  <p style="text-align:center;"><b>✅ 5.1 Taux “normal” (hors bonus-malus et hors CDDU spécifique)</b></p>
  <p style="text-align:center;">
    Le <b>taux standard</b> de la contribution patronale est <b>4,00 %</b> (en vigueur depuis le 1er mai 2025).
  </p>

  <p style="text-align:center;">
    Référence Unédic :<br>
    <a href="https://www.unedic.org/la-reglementation/fiches-thematiques/taux-de-contribution"
       target="_blank" rel="noreferrer">
       https://www.unedic.org/la-reglementation/fiches-thematiques/taux-de-contribution
    </a>
  </p>

  <p style="text-align:center;"><b>⚠️ 5.2 Cas particulier : CDD d’usage (CDDU) ≤ 3 mois</b></p>
  <p style="text-align:center;">
    Pour certains <b>CDDU</b> d’une durée <b>≤ 3 mois</b>, l’URSSAF mentionne un taux spécifique à <b>4,50 %</b>.
  </p>

  <div class="formula formula-warn">
    <p class="formula-title">📌 Piège examen</p>
    <p class="formula-content">
      Ne pas confondre <b>taux standard 4,00 %</b> et <b>taux particulier CDDU 4,50 %</b> (quand les conditions sont remplies).
    </p>
  </div>

  <p style="text-align:center;">
    Référence URSSAF :<br>
    <a href="https://www.urssaf.fr/accueil/employeur/cotisations/liste-cotisations/assurance-chomage-ags.html"
       target="_blank" rel="noreferrer">
       https://www.urssaf.fr/accueil/employeur/cotisations/liste-cotisations/assurance-chomage-ags.html
    </a>
  </p>

  <h3>6️⃣ Exemples chiffrés (arrondis au centime)</h3>

  <div class="formula formula-example">
    <p class="formula-title">✅ Exemple 1 — salarié “classique” (taux standard 4,00 %)</p>
    <p class="formula-content">
      • Salaire brut soumis : <b>3 000,00 €</b><br>
      • Plafond 4 PSS (mensuel) : <b>16 020,00 €</b> → ici <b>pas de plafonnement</b><br>
      • Taux : <b>4,00 %</b><br><br>
      <b>Calcul</b> : 3 000,00 × 4,00 % = 3 000,00 × 0,04 = <b>120,00 €</b><br><br>
      ➡️ <b>Cotisation patronale assurance chômage = 120,00 €</b>
    </p>
  </div>

  <div class="formula formula-example">
    <p class="formula-title">✅ Exemple 2 — salaire élevé (plafonnement à 4 PSS)</p>
    <p class="formula-content">
      • Salaire brut soumis : <b>20 000,00 €</b><br>
      • Plafond 4 PSS mensuel : <b>16 020,00 €</b><br>
      ➡️ Base retenue = <b>16 020,00 €</b><br>
      • Taux : <b>4,00 %</b><br><br>
      <b>Calcul</b> : 16 020,00 × 0,04 = <b>640,80 €</b><br><br>
      ➡️ <b>Cotisation patronale assurance chômage = 640,80 €</b><br>
      📌 Le surplus (20 000 − 16 020 = 3 980 €) <b>n’est pas cotisé</b> au chômage.
    </p>
  </div>

  <div class="formula formula-example">
    <p class="formula-title">✅ Exemple 3 — CDDU ≤ 3 mois (taux 4,50 %)</p>
    <p class="formula-content">
      • Salaire brut soumis : <b>2 500,00 €</b><br>
      • Taux CDDU ≤ 3 mois : <b>4,50 %</b><br><br>
      <b>Calcul</b> : 2 500,00 × 0,045 = <b>112,50 €</b><br><br>
      ➡️ <b>Cotisation patronale assurance chômage = 112,50 €</b>
    </p>
  </div>

  <h3>7️⃣ Remarque EXAMEN : bonus-malus (modulation du taux)</h3>

  <p style="text-align:center;"><b>🎯 Objectif</b></p>
  <p style="text-align:center;">
    Le <b>bonus-malus</b> vise à <b>limiter le recours excessif aux contrats courts</b> :<br>
    • bonus = baisse du taux<br>
    • malus = hausse du taux<br>
    selon le <b>taux de séparation</b> de l’entreprise (ruptures/fin de contrats rapportées à l’effectif).
  </p>

  <p style="text-align:center;">
    Référence Ministère du Travail :<br>
    <a href="https://travail-emploi.gouv.fr/le-bonus-malus-assurance-chomage"
       target="_blank" rel="noreferrer">
       https://travail-emploi.gouv.fr/le-bonus-malus-assurance-chomage
    </a>
  </p>

  <p style="text-align:center;"><b>✅ Entreprises concernées</b></p>
  <p style="text-align:center;">
    Le bonus-malus s’applique aux entreprises :<br>
    • de <b>11 salariés et plus</b><br>
    • relevant de <b>secteurs d’activité</b> dont le <b>taux de séparation moyen est supérieur à 150 %</b>
  </p>

  <p style="text-align:center;">
    Référence Service-Public (entreprises) :<br>
    <a href="https://entreprendre.service-public.gouv.fr/actualites/A15776"
       target="_blank" rel="noreferrer">
       https://entreprendre.service-public.gouv.fr/actualites/A15776
    </a>
  </p>

  <p style="text-align:center;"><b>✅ Taux modulé : bornes</b></p>
  <p style="text-align:center;">
    Depuis le <b>1er mai 2025</b>, le taux standard est <b>4,00 %</b>, et la modulation est encadrée :<br>
    • <b>plancher : 2,95 %</b><br>
    • <b>plafond : 5,00 %</b>
  </p>

  <p style="text-align:center;">
    Textes / références :<br>
    <a href="https://entreprendre.service-public.gouv.fr/actualites/A15776"
       target="_blank" rel="noreferrer">
       https://entreprendre.service-public.gouv.fr/actualites/A15776
    </a><br>
    <a href="https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000043715401"
       target="_blank" rel="noreferrer">
       https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000043715401
    </a>
  </p>

  <h3>8️⃣ Base juridique (réflexe “fondement”)</h3>

  <p style="text-align:center;">
    Le Code du travail encadre le financement de l’allocation d’assurance chômage et les contributions,
    notamment dans la section “Financement de l’allocation d’assurance”.
  </p>

  <p style="text-align:center;">
    Accès Légifrance (section Code du travail) :<br>
    <a href="https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006072050/LEGISCTA000006189822/"
       target="_blank" rel="noreferrer">
       https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006072050/LEGISCTA000006189822/
    </a>
  </p>

  <p style="text-align:center;">
    Article L5422-9 (accès direct) :<br>
    <a href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000038951969"
       target="_blank" rel="noreferrer">
       https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000038951969
    </a>
  </p>

  <div class="formula formula-reminder">
    <p class="formula-title">✅ Synthèse “réflexe paie”</p>
    <p class="formula-content">
      • Cotisation <b>patronale</b> uniquement (assurance chômage)<br>
      • Base <b>plafonnée à 4 PSS</b> (2026 : <b>16 020 €</b>/mois ; <b>192 240 €</b>/an)<br>
      • <b>Taux standard : 4,00 %</b><br>
      • <b>CDDU ≤ 3 mois : 4,50 %</b> (si conditions URSSAF)<br>
      • <b>Bonus-malus</b> : entreprises <b>≥ 11 salariés</b>, secteurs ciblés, bornes <b>2,95 % à 5,00 %</b>
    </p>
  </div>

  <p style="text-align:center;">
    <a href="#/referentiel/urssaf">⬅ Retour “URSSAF”</a>
  </p>
`,
};
