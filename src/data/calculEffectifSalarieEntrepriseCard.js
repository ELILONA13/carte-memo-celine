// src/data/calculEffectifSalarieEntrepriseCard.js

export const calculEffectifSalarieEntrepriseCard = {
    id: "calcul-effectif-salarie-entreprise",
    group: "referentiel",
    title: "Calcul de l’effectif salarié de l’entreprise (méthode Sécurité sociale)",
    content: `

  <p style="text-align:center;"><b>📘 LE CALCUL DE L’EFFECTIF SALARIÉ DE L’ENTREPRISE (Effectif “Sécurité sociale”)</b></p>
  <p style="text-align:center;">(Version complète — cours / examen + pratique paie)</p>

  <div class="formula formula-reminder">
    <p class="formula-title">🎯 Objectif</p>
    <p class="formula-content">
      Comprendre pourquoi l’effectif est indispensable en paie, savoir identifier les salariés pris en compte / exclus,
      appliquer la méthode de l’effectif annuel moyen “Sécurité sociale”, et repérer les pièges d’examen (mois à zéro salarié, troncature, AT/MP…).
    </p>
  </div>

  <h3>1️⃣ Pourquoi l’effectif est-il indispensable en paie ?</h3>
  <p style="text-align:center;">
    Le calcul de l’effectif de l’entreprise détermine :
  </p>
  <ul class="centered-list bullets">
    <li>l’assujettissement à certaines cotisations/contributions,</li>
    <li>l’éligibilité à certains allègements ou dispositifs de réduction,</li>
    <li>et plus largement les obligations sociales liées aux seuils.</li>
  </ul>

  <h3>Incidence de l’effectif sur les cotisations / dispositifs (exemples)</h3>
  <p style="text-align:center;">
    On peut citer notamment :
  </p>
  <ul class="centered-list bullets">
    <li>FNAL (Fonds National d’Aide au Logement),</li>
    <li>Versement mobilité,</li>
    <li>Réduction générale des cotisations patronales (ex “Fillon” / RGDU),</li>
    <li>Déduction patronale TEPA de 1,50 € sur les heures supplémentaires (selon conditions, dont l’effectif).</li>
  </ul>

  <div class="formula formula-reminder">
    <p class="formula-title">🔗 Lien officiel (à copier)</p>
    <p class="formula-content">
      <a href="https://entreprendre.service-public.gouv.fr/vosdroits/F31415" target="_blank" rel="noreferrer">
        https://entreprendre.service-public.gouv.fr/vosdroits/F31415
      </a>
    </p>
  </div>

  <h3>2️⃣ Quelle méthode utiliser ? (Méthode “Sécurité sociale”)</h3>
  <p style="text-align:center;">
    Pour déterminer exonérations et assujettissements, on utilise la méthode de l’effectif salarié annuel
    (aussi appelé effectif annuel moyen), au sens de la Sécurité sociale.
  </p>

  <div class="formula formula-reminder">
    <p class="formula-title">📌 Base juridique principale</p>
    <p class="formula-content">
      Code de la sécurité sociale, art. L130-1 : l’effectif salarié annuel correspond à la moyenne du nombre de personnes employées au cours de chacun des mois de l’année civile précédente (tous établissements confondus).<br><br>
      <a href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000051287151" target="_blank" rel="noreferrer">
        https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000051287151
      </a>
    </p>
  </div>

  <div class="formula formula-reminder">
    <p class="formula-title">📌 AT/MP (exception à connaître)</p>
    <p class="formula-content">
      Tarification AT/MP : l’effectif pris en compte est celui de la dernière année connue (référence incluse dans l’article L130-1).<br><br>
      <a href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000051287151" target="_blank" rel="noreferrer">
        https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000051287151
      </a>
    </p>
  </div>

  <div class="formula formula-warn">
    <p class="formula-title">⚠️ Franchissement d’un seuil (règle importante)</p>
    <p class="formula-content">
      Le franchissement d’un seuil est pris en compte si le seuil est atteint/dépassé pendant 5 années civiles consécutives ;
      si l’entreprise repasse en dessous une année, le compteur repart.<br><br>
      <a href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000051287151" target="_blank" rel="noreferrer">
        https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000051287151
      </a>
    </p>
  </div>

  <h3>3️⃣ Salariés pris en compte / salariés exclus</h3>

  <h3>A) ✅ Salariés pris en compte (principe)</h3>
  <p style="text-align:center;">
    Sont prises en compte :
  </p>
  <ul class="centered-list bullets">
    <li>les personnes titulaires d’un contrat de travail,</li>
    <li>et certaines personnes du secteur public relevant de règles d’assurance chômage (référence au Code du travail, art. L5424-1).</li>
  </ul>

  <div class="formula formula-reminder">
    <p class="formula-title">🔗 Lien L5424-1</p>
    <p class="formula-content">
      <a href="https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006073189/LEGISCTA000006156502/" target="_blank" rel="noreferrer">
        https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006073189/LEGISCTA000006156502/
      </a>
    </p>
  </div>

  <p style="text-align:center;">
    En pratique de paie : présents ou en suspension de contrat (maladie, maternité, etc.) = ils comptent, car ils sont toujours liés par un contrat de travail.
  </p>

  <h3>B) ⛔ Salariés exclus du décompte (principes + bases)</h3>

  <div class="formula formula-reminder">
    <p class="formula-title">📌 Textes à connaître</p>
    <p class="formula-content">
      Code du travail, art. L1111-2 : précise les catégories intégrées et le prorata (CDD, intérim, temps partiel…), et prévoit l’exclusion des CDD/intérimaires lorsqu’ils remplacent un salarié absent ou dont le contrat est suspendu.<br><br>
      <a href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000019353569" target="_blank" rel="noreferrer">
        https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000019353569
      </a><br><br>
      Code du travail, art. L1111-3 : liste des personnes non prises en compte (apprentis, CUI/CIE, CAE, contrat de professionnalisation…), avec la précision : ils restent pris en compte pour la tarification AT/MP.<br><br>
      <a href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000031565369" target="_blank" rel="noreferrer">
        https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000031565369
      </a><br><br>
      CSS, art. R130-1 : renvoie explicitement à ces exclusions et confirme la règle AT/MP.<br><br>
      <a href="https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006073189/LEGISCTA000006156502/" target="_blank" rel="noreferrer">
        https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006073189/LEGISCTA000006156502/
      </a>
    </p>
  </div>

  <p style="text-align:center;">
    Donc, à retenir (cours/examen) :
  </p>
  <ul class="centered-list bullets">
    <li>CDD / intérimaires embauchés pour remplacer un salarié absent (ou contrat suspendu) : exclus du décompte.</li>
    <li>Volontaires en service civique : exclus du décompte (référence ressources URSSAF/BOSS).</li>
    <li>Alternants (apprentis / contrat de professionnalisation) : exclus du décompte, mais comptabilisés pour AT/MP.</li>
    <li>Contrats aidés (CUI-CIE / CAE) : exclus pendant la durée d’attribution de l’aide.</li>
    <li>Salarié français expatrié : s’il n’est plus affilié au régime français de Sécurité sociale, il ne relève plus de ce champ (à vérifier selon maintien/expatriation/détachement et DSN).</li>
  </ul>

  <div class="formula formula-reminder">
    <p class="formula-title">🔗 Sources officielles utiles (à copier dans Word)</p>
    <p class="formula-content">
      Service-Public : <a href="https://entreprendre.service-public.gouv.fr/vosdroits/F24332" target="_blank" rel="noreferrer">https://entreprendre.service-public.gouv.fr/vosdroits/F24332</a><br>
      URSSAF : <a href="https://www.urssaf.fr/accueil/employeur/cotisations/calcul-effectif/comment-calculer-effectif.html" target="_blank" rel="noreferrer">https://www.urssaf.fr/accueil/employeur/cotisations/calcul-effectif/comment-calculer-effectif.html</a><br>
      BOSS : <a href="https://boss.gouv.fr/portail/accueil/regles-dassujettissement/effectif.html" target="_blank" rel="noreferrer">https://boss.gouv.fr/portail/accueil/regles-dassujettissement/effectif.html</a>
    </p>
  </div>

  <h3>4️⃣ Règles de calcul de l’effectif annuel moyen (EMA)</h3>

  <h3>Étape 1 — Calculer l’effectif “mensuel” pour chaque mois de l’année N-1</h3>
  <p style="text-align:center;">
    On tient compte de tous les salariés titulaires d’un contrat de travail (présents ou en suspension).
  </p>

  <h3>Comptent pour 1 unité (sans prorata)</h3>
  <ul class="centered-list bullets">
    <li>CDI à temps plein : 1</li>
    <li>CDI à temps plein dont contrat suspendu : 1</li>
    <li>Travailleurs à domicile : 1</li>
    <li>Forfait jours : compté comme un temps plein (logique “non horaire”).</li>
  </ul>

  <h3>Unités à proratiser</h3>
  <ul class="centered-list bullets">
    <li>Temps partiel : Unité = somme des heures contractuelles / durée légale ou conventionnelle (souvent 35 h).</li>
    <li>Entrée/sortie en cours de mois : décompte au prorata du nombre de jours calendaires de présence dans le mois.</li>
  </ul>

  <h3>Étape 2 — Faire la moyenne annuelle</h3>
  <p style="text-align:center;">
    L’effectif salarié annuel = moyenne des effectifs mensuels.
  </p>

  <div class="formula formula-warn">
    <p class="formula-title">⚠️ Règle EXAMEN très piégeuse</p>
    <p class="formula-content">
      Les mois où aucun salarié n’est employé ne sont pas pris en compte pour établir la moyenne.
    </p>
  </div>

  <h3>Étape 3 — Règle d’arrondi (très importante)</h3>
  <p style="text-align:center;">
    CSS art. R130-1 : l’effectif est arrondi au centième en supprimant la fraction au-delà de la 2ᵉ décimale (troncature).
  </p>

  <div class="formula formula-example">
    <p class="formula-title">✅ Exemple</p>
    <p class="formula-content">
      9,949 devient 9,94 (on ne monte pas à 9,95).
    </p>
  </div>

  <h3>5️⃣ Exemple 1 (cours) — Calcul complet d’un effectif annuel moyen</h3>

  <p style="text-align:center;">
    En N-1, l’entreprise compte :
  </p>
  <ul class="centered-list bullets">
    <li>10 salariés en CDI temps plein</li>
    <li>1 salarié en forfait jours de 216 jours</li>
    <li>2 salariés en CDI temps partiel : 24h et 18h</li>
    <li>1 salarié temps partiel 24h embauché le 1er juillet N-1 (donc présent 6 mois sur 12)</li>
  </ul>

  <div class="formula formula-example">
    <p class="formula-title">📋 Tableau </p>

    <div class="effectif-table-wrap">
  <table class="memo-table effectif-table effectif-2col">
    <thead>
      <tr>
        <th class="col-left">État des salariés</th>
        <th class="col-right">Unités</th>
      </tr>
    </thead>
    <tbody>
      <tr><td class="col-left">10 salariés en CDI temps plein</td><td class="col-right">10,00</td></tr>
      <tr><td class="col-left">1 salarié en forfait jour de 216 jours</td><td class="col-right">1,00</td></tr>
      <tr><td class="col-left indent">1 salarié temps partiel CDI 24 h</td><td class="col-right">1 × 24 / 35 = 0,69</td></tr>
      <tr><td class="col-left indent">1 salarié temps partiel CDI 18 h</td><td class="col-right">1 × 18 / 35 = 0,51</td></tr>
      <tr><td class="col-left indent">1 salarié à temps partiel 24 h 6 mois</td><td class="col-right">(1 × 24 / 35) × (6 / 12) = 0,34</td></tr>
      <tr>
        <td class="col-left"><b>EFFECTIF MOYEN TOTAL</b></td>
        <td class="col-right"><b>= 12,54</b></td>
      </tr>
    </tbody>
  </table>
</div>


    <p class="formula-content">
      Détail des calculs (arrondis au centième) :<br>
      24/35 = 0,685714… → 0,69<br>
      18/35 = 0,514285… → 0,51<br>
      (24/35)×(6/12) = 0,685714…×0,5 = 0,342857… → 0,34<br>
      Total = 10 + 1 + 0,69 + 0,51 + 0,34 = 12,54
    </p>
  </div>

  <h3>6️⃣ Exemple 2 (simulation “SARL CAUME”) — Question type examen</h3>

  <p style="text-align:center;">
    État des salariés :
  </p>
  <ul class="centered-list bullets">
    <li>Salariés à plein temps durant l’année : 8</li>
    <li>1 salarié embauché le 1er juin (présence 7 mois sur 12)</li>
    <li>1 salarié ayant quitté la société le 28 février (présence 2 mois sur 12)</li>
    <li>1 salarié à plein temps en maladie depuis le 15 avril (pris en totalité)</li>
    <li>CDD à temps partiel 20h/semaine : du 1er juin au 30 septembre (4 mois sur 12)</li>
  </ul>

  <div class="formula formula-example">
  <p class="formula-title">📋 Tableau (à reproduire tel quel)</p>

  <div class="effectif-table-wrap">
  <table class="memo-table effectif-table effectif-3col">
    <thead>
      <tr>
        <th class="col-left">État des salariés</th>
        <th class="col-center">Détails calculs</th>
        <th class="col-right">Unités</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="col-left">Salariés à temps plein</td>
        <td class="col-center">1 × 8 salariés</td>
        <td class="col-right">8</td>
      </tr>
      <tr>
        <td class="col-left indent">Salarié embauché</td>
        <td class="col-center">1 × 7 mois / 12 mois</td>
        <td class="col-right">0,583</td>
      </tr>
      <tr>
        <td class="col-left indent">Salariés sortis</td>
        <td class="col-center">1 × 2 mois / 12 mois</td>
        <td class="col-right">0,166</td>
      </tr>
      <tr>
        <td class="col-left indent">Salarié en maladie</td>
        <td class="col-center">Pris en totalité</td>
        <td class="col-right">1</td>
      </tr>
      <tr>
        <td class="col-left">CDD Temps partiel</td>
        <td class="col-center">20 heures / 35 heures × 4 mois / 12 mois</td>
        <td class="col-right">0,19</td>
      </tr>
      <tr>
        <td class="col-left"><b>EFFECTIF MOYEN TOTAL</b></td>
        <td class="col-center"></td>
        <td class="col-right"><b>9,94 salariés</b></td>
      </tr>
    </tbody>
  </table>
</div>

  <p class="formula-content" style="text-align:center;">
    <b>Vérification chiffrée :</b><br>
    7/12 = 0,583333… → 0,583<br>
    2/12 = 0,166666… → 0,166<br>
    (20/35)×(4/12) = 0,571428…×0,333333… = 0,190476… → 0,19<br>
    Total = 8 + 0,583333… + 0,166666… + 1 + 0,190476… = 9,940476…<br>
    Troncature au centième = 9,94
  </p>
</div>


  <h3>7️⃣ Points d’attention (pièges examen + pratique paie)</h3>

  <div class="formula formula-warn">
    <p class="formula-title">⚠️ Piège n°1 — “On divise toujours par 12” (FAUX)</p>
    <p class="formula-content">
      Si certains mois ont 0 salarié, on ne les compte pas dans le dénominateur.
    </p>
  </div>

  <div class="formula formula-warn">
    <p class="formula-title">⚠️ Piège n°2 — Arrondi “classique” (FAUX)</p>
    <p class="formula-content">
      On tronque au centième (on coupe après 2 décimales).
    </p>
  </div>

  <div class="formula formula-warn">
    <p class="formula-title">⚠️ Piège n°3 — Alternants et AT/MP</p>
    <p class="formula-content">
      Apprentis / contrats pro : exclus de l’effectif, mais comptés pour AT/MP.
    </p>
  </div>

  <div class="formula formula-warn">
    <p class="formula-title">⚠️ Piège n°4 — Franchissement d’un seuil (règle des 5 ans)</p>
    <p class="formula-content">
      Le seuil n’est “retenu” qu’après 5 années consécutives au-dessus ; repasser en dessous réinitialise.
    </p>
  </div>

  <div class="formula formula-reminder">
    <p class="formula-title">✅ Réflexe paie (logiciel/DSN)</p>
    <p class="formula-content">
      L’URSSAF calcule l’effectif à partir des données DSN, et l’effectif est généralement mis à disposition sur le compte employeur.
      (Utile en contrôle et pour sécuriser FNAL/versement mobilité/CSA, etc.)<br><br>
      <a href="https://entreprendre.service-public.gouv.fr/vosdroits/F24332" target="_blank" rel="noreferrer">
        https://entreprendre.service-public.gouv.fr/vosdroits/F24332
      </a>
    </p>
  </div>

  <h3>8️⃣ Remarque pédagogique (contexte “bases de calcul / réductions”)</h3>
  <p style="text-align:center;">
    Tu es ici dans le module cotisations sociales et bases de calcul.<br>
    La simulation suivante (réduction générale, réduction heures sup / désocialisation) sert surtout à situer l’impact en bas de bulletin :
    on peut, à ce stade, se limiter au brut et aux cotisations, puis y revenir quand le chapitre “réductions” sera traité.
  </p>
  </ul>

  <p style="text-align:center;">
    <a href="#/referentiel/bases-calcul-cotisations">⬅ Retour “Dispositifs / bases-calcul-cotisations”</a>
  </p>
  
  `,
};
