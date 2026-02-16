// ✅ src/data/agircNonCadreCard.js

export const agircNonCadreCard = {
    id: "agirc-non-cadre",
    group: "referentiel",
    title: "AGIRC-ARRCO — Retraite complémentaire (non-cadre) — 2026",
    content: `

  <p style="text-align:center;">📘 <b>AGIRC-ARRCO — Retraite complémentaire des salariés non-cadres (2026)</b></p>
  <p style="text-align:center;">(leçon “cours / examen” + pratique paie)</p>

  <div class="formula formula-reminder">
    <p class="formula-title">✅ Objectif</p>
    <p class="formula-content">
      Savoir identifier les <b>tranches (T1/T2)</b>, les <b>cotisations</b> (Retraite complémentaire / CEG / CET),
      et appliquer les <b>réflexes logiciel de paie</b> (PMSS à jour, déclenchement CET, assiettes).
    </p>
  </div>

  <h3 style="text-align:center;">1️⃣ À quoi sert l’AGIRC-ARRCO pour les non-cadres ?</h3>
  <p style="text-align:center;">
    Un salarié <b>non-cadre</b> du secteur privé cotise :
  </p>
  <ul class="centered-list bullets">
    <li>à la <b>retraite de base</b> (régime général) via <b>l’URSSAF / CNAV</b>,</li>
    <li>et à la <b>retraite complémentaire</b> via <b>l’AGIRC-ARRCO</b>.</li>
  </ul>

  <p style="text-align:center;">
    Depuis la fusion <b>ARRCO + AGIRC</b> (en vigueur depuis 2019), <b>tous les salariés</b> (cadres et non-cadres)
    relèvent de l’AGIRC-ARRCO pour la retraite complémentaire, avec des cotisations communes
    (les libellés peuvent varier selon les logiciels).
  </p>

  <div class="formula formula-reminder">
    <p class="formula-title">🔗 Source officielle (AGIRC-ARRCO — entreprises)</p>
    <p class="formula-content">
      <a href="https://www.agirc-arrco.fr/entreprises/mon-entreprise/calculer-et-declarer/le-calcul-des-cotisations-de-retraite-complementaire/" target="_blank" rel="noreferrer">
        https://www.agirc-arrco.fr/entreprises/mon-entreprise/calculer-et-declarer/le-calcul-des-cotisations-de-retraite-complementaire/
      </a>
    </p>
  </div>

  <h3 style="text-align:center;">2️⃣ Tranches de calcul (T1 / T2) — repère indispensable</h3>
  <p style="text-align:center;">
    Les cotisations AGIRC-ARRCO sont calculées sur des <b>tranches</b> basées sur le <b>plafond de la Sécurité sociale</b>.
  </p>

  <div class="formula formula-reminder">
    <p class="formula-title">✅ Plafond 2026 (PASS/PMSS)</p>
    <p class="formula-content">
      • <b>PMSS 2026</b> = <b>4 005 € / mois</b><br>
      • <b>PASS 2026</b> = <b>48 060 € / an</b><br><br>
      Source Service-Public :<br>
      <a href="https://www.service-public.fr/particuliers/vosdroits/F15396" target="_blank" rel="noreferrer">
        https://www.service-public.fr/particuliers/vosdroits/F15396
      </a>
    </p>
  </div>

  <div class="formula formula-formula">
    <p class="formula-title">📌 Tranches AGIRC-ARRCO</p>
    <p class="formula-content">
      • <b>Tranche 1 (T1)</b> : rémunération de <b>0 à 1 PMSS</b> (0 → 4 005 € / mois)<br>
      • <b>Tranche 2 (T2)</b> : rémunération de <b>1 à 8 PMSS</b> (4 005 → 32 040 € / mois)<br><br>
      Source Service-Public :<br>
      <a href="https://www.service-public.fr/particuliers/vosdroits/F15396" target="_blank" rel="noreferrer">
        https://www.service-public.fr/particuliers/vosdroits/F15396
      </a>
    </p>
  </div>

  <div class="formula formula-warn">
    <p class="formula-title">⚠ Piège examen</p>
    <p class="formula-content">
      Un <b>non-cadre</b> peut être en <b>T2</b> s’il dépasse <b>1 PMSS</b> (même si “non-cadre”).
    </p>
  </div>

  <h3 style="text-align:center;">3️⃣ Les cotisations AGIRC-ARRCO “standard” (non-cadres) — 2026</h3>
  <p style="text-align:center;">
    Pour un non-cadre, on retrouve en pratique <b>3 cotisations</b> :
  </p>

  <h3 style="text-align:center;">A) Retraite complémentaire (acquisition de points)</h3>
  <p style="text-align:center;">
    <b>Taux appelés 2026 (taux obligatoires standard)</b> :
  </p>
  <ul class="centered-list bullets">
    <li><b>T1 : 7,87%</b> = (Salarié <b>3,15%</b> / Employeur <b>4,72%</b>)</li>
    <li><b>T2 : 21,59%</b> = (Salarié <b>8,64%</b> / Employeur <b>12,95%</b>)</li>
  </ul>

  <div class="formula formula-reminder">
    <p class="formula-title">🔗 Source officielle (AGIRC-ARRCO — paramètres / taux)</p>
    <p class="formula-content">
      <a href="https://www.agirc-arrco.fr/nous-connaitre/nos-etudes-et-publications/documentation-institutionnelle/parametres-et-donnees-statistiques/" target="_blank" rel="noreferrer">
        https://www.agirc-arrco.fr/nous-connaitre/nos-etudes-et-publications/documentation-institutionnelle/parametres-et-donnees-statistiques/
      </a>
    </p>
  </div>

  <div class="formula formula-reminder">
    <p class="formula-title">🔎 Important (culture paie)</p>
    <p class="formula-content">
      Ces taux “appelés” incluent un <b>taux d’appel</b> (127%). Les <b>points</b> ne sont acquis que sur le
      <b>taux contractuel</b> (6,20% en T1 et 17% en T2), mais en paie on prélève bien <b>7,87%</b> et <b>21,59%</b>.<br><br>
      Source AGIRC-ARRCO (explications entreprises) :<br>
      <a href="https://www.agirc-arrco.fr/entreprises/mon-entreprise/calculer-et-declarer/le-calcul-des-cotisations-de-retraite-complementaire/" target="_blank" rel="noreferrer">
        https://www.agirc-arrco.fr/entreprises/mon-entreprise/calculer-et-declarer/le-calcul-des-cotisations-de-retraite-complementaire/
      </a>
    </p>
  </div>

  <h3 style="text-align:center;">B) CEG — Contribution d’Équilibre Général</h3>
  <p style="text-align:center;">
    Elle finance des équilibres du régime (notamment liés à des mécanismes de solidarité).
  </p>
  <p style="text-align:center;">
    <b>Taux 2026</b> :
  </p>
  <ul class="centered-list bullets">
    <li><b>CEG T1 : 2,15%</b> (Salarié <b>0,86%</b> / Employeur <b>1,29%</b>)</li>
    <li><b>CEG T2 : 2,70%</b> (Salarié <b>1,08%</b> / Employeur <b>1,62%</b>)</li>
  </ul>

  <div class="formula formula-reminder">
    <p class="formula-title">🔗 Source officielle (AGIRC-ARRCO — paramètres / taux)</p>
    <p class="formula-content">
      <a href="https://www.agirc-arrco.fr/nous-connaitre/nos-etudes-et-publications/documentation-institutionnelle/parametres-et-donnees-statistiques/" target="_blank" rel="noreferrer">
        https://www.agirc-arrco.fr/nous-connaitre/nos-etudes-et-publications/documentation-institutionnelle/parametres-et-donnees-statistiques/
      </a>
    </p>
  </div>

  <h3 style="text-align:center;">C) CET — Contribution d’Équilibre Technique</h3>

  <div class="formula formula-warn">
    <p class="formula-title">📌 Condition déclenchement (PIÈGE EXAMEN N°1)</p>
    <p class="formula-content">
      La <b>CET</b> ne s’applique que si la rémunération <b>dépasse 1 PMSS</b>
      (donc si T2 existe, même partiellement).
    </p>
  </div>

  <p style="text-align:center;">
    <b>Taux CET 2026 : 0,35%</b> (Salarié <b>0,14%</b> / Employeur <b>0,21%</b>)
  </p>

  <div class="formula formula-warn">
    <p class="formula-title">📌 Assiette CET (PIÈGE EXAMEN N°2)</p>
    <p class="formula-content">
      Quand elle s’applique, la CET est calculée sur <b>T1 + T2</b> (dans la limite <b>8 PMSS</b>),
      pas “uniquement sur la T2”.
    </p>
  </div>

  <div class="formula formula-reminder">
    <p class="formula-title">🔗 Source officielle (AGIRC-ARRCO — paramètres / taux)</p>
    <p class="formula-content">
      <a href="https://www.agirc-arrco.fr/nous-connaitre/nos-etudes-et-publications/documentation-institutionnelle/parametres-et-donnees-statistiques/" target="_blank" rel="noreferrer">
        https://www.agirc-arrco.fr/nous-connaitre/nos-etudes-et-publications/documentation-institutionnelle/parametres-et-donnees-statistiques/
      </a>
    </p>
  </div>

  <h3 style="text-align:center;">4️⃣ Exemples chiffrés (arrondis au centime) — non-cadre 2026</h3>

  <div class="formula formula-example">
    <p class="formula-title">✅ Exemple 1 : salaire brut mensuel = 3 000 € (donc uniquement T1)</p>
    <p class="formula-content">
      • T1 = 3 000 € ; T2 = 0 €<br>
      • CET : <b>NON</b> (car salaire ≤ 1 PMSS)<br><br>

      <b>Retraite complémentaire :</b><br>
      • Salarié : 3 000 × 3,15% = <b>94,50 €</b><br>
      • Employeur : 3 000 × 4,72% = <b>141,60 €</b><br><br>

      <b>CEG :</b><br>
      • Salarié : 3 000 × 0,86% = <b>25,80 €</b><br>
      • Employeur : 3 000 × 1,29% = <b>38,70 €</b><br><br>

      ✅ <b>Total prélevé salarié</b> = 94,50 + 25,80 = <b>120,30 €</b><br>
      ✅ <b>Total part employeur</b> = 141,60 + 38,70 = <b>180,30 €</b><br><br>

      Source taux 2026 :<br>
      <a href="https://www.agirc-arrco.fr/nous-connaitre/nos-etudes-et-publications/documentation-institutionnelle/parametres-et-donnees-statistiques/" target="_blank" rel="noreferrer">
        https://www.agirc-arrco.fr/nous-connaitre/nos-etudes-et-publications/documentation-institutionnelle/parametres-et-donnees-statistiques/
      </a>
    </p>
  </div>

  <div class="formula formula-example">
    <p class="formula-title">✅ Exemple 2 : salaire brut mensuel = 6 000 € (T1 + T2 + CET)</p>
    <p class="formula-content">
      • PMSS 2026 = 4 005 €<br>
      • T1 = 4 005 €<br>
      • T2 = 6 000 − 4 005 = <b>1 995 €</b><br>
      • CET : <b>OUI</b> (car salaire &gt; 1 PMSS) → assiette <b>T1 + T2 = 6 000 €</b><br><br>

      <b>Retraite complémentaire :</b><br>
      • Salarié = (4 005×3,15%) + (1 995×8,64%)<br>
      &nbsp;&nbsp;= 126,16 + 172,37 = <b>298,53 €</b><br>
      • Employeur = (4 005×4,72%) + (1 995×12,95%)<br>
      &nbsp;&nbsp;= 189,04 + 258,35 = <b>447,39 €</b><br><br>

      <b>CEG :</b><br>
      • Salarié = (4 005×0,86%) + (1 995×1,08%)<br>
      &nbsp;&nbsp;= 34,44 + 21,55 = <b>55,99 €</b><br>
      • Employeur = (4 005×1,29%) + (1 995×1,62%)<br>
      &nbsp;&nbsp;= 51,66 + 32,32 = <b>83,98 €</b><br><br>

      <b>CET (assiette 6 000 €) :</b><br>
      • Salarié = 6 000 × 0,14% = <b>8,40 €</b><br>
      • Employeur = 6 000 × 0,21% = <b>12,60 €</b><br><br>

      ✅ <b>Total prélevé salarié</b> = 298,53 + 55,99 + 8,40 = <b>362,92 €</b><br>
      ✅ <b>Total part employeur</b> = 447,39 + 83,98 + 12,60 = <b>543,97 €</b><br><br>

      Source taux/assiette CET :<br>
      <a href="https://www.agirc-arrco.fr/nous-connaitre/nos-etudes-et-publications/documentation-institutionnelle/parametres-et-donnees-statistiques/" target="_blank" rel="noreferrer">
        https://www.agirc-arrco.fr/nous-connaitre/nos-etudes-et-publications/documentation-institutionnelle/parametres-et-donnees-statistiques/
      </a>
    </p>
  </div>

  <h3 style="text-align:center;">5️⃣ Réflexes “logiciel de paie” (ce qu’on contrôle)</h3>
  <ul class="centered-list bullets">
    <li>
      Vérifier <b>PMSS/PASS 2026</b> à jour → impact direct sur T1/T2 :<br>
      <a href="https://www.service-public.fr/particuliers/vosdroits/F15396" target="_blank" rel="noreferrer">
        https://www.service-public.fr/particuliers/vosdroits/F15396
      </a>
    </li>
    <li>
      Vérifier si l’entreprise a un <b>taux supérieur</b> (taux dérogatoire historique / accord de branche) :<br>
      <a href="https://www.agirc-arrco.fr/entreprises/mon-entreprise/calculer-et-declarer/le-calcul-des-cotisations-de-retraite-complementaire/" target="_blank" rel="noreferrer">
        https://www.agirc-arrco.fr/entreprises/mon-entreprise/calculer-et-declarer/le-calcul-des-cotisations-de-retraite-complementaire/
      </a>
    </li>
    <li>
      Pour un non-cadre : <b>pas d’APEC</b> (sauf cas particulier si classification/emploi le rend “cadre” au sens du régime).<br>
      <a href="https://www.entreprises.cci-paris-idf.fr/fiches-pratiques/les-charges-sociales-au-1er-janvier-2026" target="_blank" rel="noreferrer">
        https://www.entreprises.cci-paris-idf.fr/fiches-pratiques/les-charges-sociales-au-1er-janvier-2026
      </a>
    </li>
    <li>
      CET : penser au <b>double piège</b> (condition &gt; PMSS + assiette T1+T2) :<br>
      <a href="https://www.agirc-arrco.fr/nous-connaitre/nos-etudes-et-publications/documentation-institutionnelle/parametres-et-donnees-statistiques/" target="_blank" rel="noreferrer">
        https://www.agirc-arrco.fr/nous-connaitre/nos-etudes-et-publications/documentation-institutionnelle/parametres-et-donnees-statistiques/
      </a>
    </li>
  </ul>

  <h3 style="text-align:center;">6️⃣ Liens officiels à intégrer (révision + sources)</h3>
  <ul class="centered-list bullets">
    <li>
      AGIRC-ARRCO (entreprises) — <b>calcul des cotisations</b> :<br>
      <a href="https://www.agirc-arrco.fr/entreprises/mon-entreprise/calculer-et-declarer/le-calcul-des-cotisations-de-retraite-complementaire/" target="_blank" rel="noreferrer">
        https://www.agirc-arrco.fr/entreprises/mon-entreprise/calculer-et-declarer/le-calcul-des-cotisations-de-retraite-complementaire/
      </a>
    </li>
    <li>
      AGIRC-ARRCO — <b>paramètres / taux 2026 (tableau officiel)</b> :<br>
      <a href="https://www.agirc-arrco.fr/nous-connaitre/nos-etudes-et-publications/documentation-institutionnelle/parametres-et-donnees-statistiques/" target="_blank" rel="noreferrer">
        https://www.agirc-arrco.fr/nous-connaitre/nos-etudes-et-publications/documentation-institutionnelle/parametres-et-donnees-statistiques/
      </a>
    </li>
    <li>
      Service-Public — <b>retraite complémentaire Agirc-Arrco (taux + tranches)</b> :<br>
      <a href="https://www.service-public.fr/particuliers/vosdroits/F15396" target="_blank" rel="noreferrer">
        https://www.service-public.fr/particuliers/vosdroits/F15396
      </a>
    </li>
    <li>
      Circulaire AGIRC-ARRCO “Paramètres 2026” (PDF) :<br>
      <a href="https://www.agirc-arrco.fr/storage/CirculaireAgircArrco2025-16sg-drj.pdf" target="_blank" rel="noreferrer">
        https://www.agirc-arrco.fr/storage/CirculaireAgircArrco2025-16sg-drj.pdf
      </a>
    </li>
  </ul>

  <p style="text-align:center;">
    <a href="#/referentiel/agirc-arrco">⬅ Retour “AGIRC-ARRCO”</a>
    <span style="margin:0 10px;">•</span>
    <a href="#/referentiel/cotisations-contributions">⬅ Retour “Cotisations & contributions”</a>
  </p>

  `,
};
