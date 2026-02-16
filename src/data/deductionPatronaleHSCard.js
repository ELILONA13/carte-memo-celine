// src/data/deductionPatronaleHSCard.js

export const deductionPatronaleHSCard = {
    id: "deduction-patronale-hs",
    group: "referentiel",
    title: "Déduction forfaitaire patronale — Heures supplémentaires (TEPA)",
    content: `

  <p style="text-align:center;"><b>📘 DÉDUCTION FORFAITAIRE PATRONALE — HEURES SUPPLÉMENTAIRES (TEPA)</b></p>
  <p style="text-align:center;">(Version complète — cours / examen + pratique paie)</p>

  <div class="formula formula-reminder">
    <p class="formula-title">🎯 Objectif</p>
    <p class="formula-content">
      Savoir appliquer la <b>déduction forfaitaire patronale TEPA</b> sur les <b>heures supplémentaires</b> :
      <b>conditions</b>, <b>montants</b>, <b>effectif</b>, <b>heures éligibles</b>, et <b>pièges d’examen</b>.
    </p>
  </div>

  <div class="formula formula-warn">
    <p class="formula-title">⚠️ Piège examen : ne pas confondre</p>
    <p class="formula-content">
      Il est nécessaire de distinguer :
      <br><br>
      <b>1) Déduction forfaitaire patronale TEPA</b> : une <b>déduction en € par heure supplémentaire</b>, côté <b>employeur</b>.
      <br>
      <b>2) Réduction de cotisations salariales HS/HC</b> : une <b>réduction</b> côté <b>salarié</b> (heures supplémentaires <b>et</b> complémentaires).
      <br><br>
      ✅ Ces deux dispositifs sont liés aux heures, mais <b>leur calcul est différent</b>.
      <br><br>
      <b>➡️ Leçon suivante (dans l’appli)</b> :
      <a href="#/referentiel/deduction-salariale-hs">Voir la réduction de cotisations salariales (HS & HC)</a>
    </p>
  </div>

  <h3>1️⃣ Contexte : loi TEPA</h3>
  <p style="text-align:center;">
    La loi TEPA (Travail Emploi Pouvoir d’Achat) promulguée en 2007 a instauré des mesures favorisant le recours aux heures supplémentaires.
    <br>
    Le dispositif a ensuite été aménagé. En paie, on retrouve notamment la <b>déduction forfaitaire patronale</b> sur les heures supplémentaires.
  </p>

  <h3>2️⃣ Déduction forfaitaire patronale des heures supplémentaires</h3>
  <p style="text-align:center;">
    Depuis l’aménagement de la loi TEPA, certaines entreprises peuvent, sous conditions, <b>déduire</b> un montant de leurs
    <b>cotisations sociales patronales dues à l’URSSAF</b>.
  </p>

  <h3>3️⃣ Montant de la déduction (selon l’effectif)</h3>
  <ul class="centered-list bullets">
    <li><b>Effectif inférieur à 20 salariés</b> : déduction de <b>1,50 €</b> par heure supplémentaire effectuée.</li>
    <li><b>Effectif compris entre 20 et 249 salariés</b> : déduction de <b>0,50 €</b> par heure supplémentaire effectuée.</li>
  </ul>

  <div class="formula formula-warn">
    <p class="formula-title">⚠️ Attention</p>
    <p class="formula-content">
      La déduction forfaitaire patronale s’applique <b>uniquement</b> sur les <b>heures supplémentaires</b> et <b>non</b> sur les <b>heures complémentaires</b>.
    </p>
  </div>

  <div class="formula formula-reminder">
    <p class="formula-title">🔗 Source officielle (URSSAF)</p>
    <p class="formula-content">
      Déduction forfaitaire patronale :
      <a href="https://www.urssaf.fr/accueil/employeur/beneficier-exonerations/exonerations-heures/deduction-forfaitaire-patronale.html" target="_blank" rel="noreferrer">
        https://www.urssaf.fr/accueil/employeur/beneficier-exonerations/exonerations-heures/deduction-forfaitaire-patronale.html
      </a>
    </p>
  </div>

  <div class="formula formula-reminder">
    <p class="formula-title">📌 Base juridique (utile examen)</p>
    <p class="formula-content">
      Code de la sécurité sociale — article L241-18 :
      <a href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000038610232" target="_blank" rel="noreferrer">
        https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000038610232
      </a>
    </p>
  </div>

  <h3>4️⃣ Employeurs éligibles</h3>
  <p style="text-align:center;">
    La déduction forfaitaire patronale TEPA est ouverte (sous conditions) aux employeurs dont l’effectif est
    <b>inférieur à 250 salariés</b>.
  </p>

  <h3>5️⃣ Employeurs non éligibles (selon le cours)</h3>
  <ul class="centered-list bullets">
    <li>L’État, les collectivités territoriales et leurs établissements publics administratifs, scientifiques ou culturels (salariés statutaires ou non)</li>
    <li>Les chambres de commerce et d'industrie, les chambres des métiers et les chambres d'agriculture (salariés statutaires ou non)</li>
    <li>Les particuliers employeurs</li>
  </ul>

  <div class="formula formula-reminder">
    <p class="formula-title">📝 Remarque</p>
    <p class="formula-content">
      La <b>réduction de cotisations salariales</b> (HS et HC) concerne, elle, <b>tous les salariés</b> du secteur privé et public,
      y compris les particuliers employeurs : elle sera traitée dans <b>une autre leçon</b> (voir lien ci-dessus).
    </p>
  </div>

  <h3>6️⃣ Calcul de l’effectif (pour TEPA)</h3>
  <p style="text-align:center;">
    La déduction forfaitaire patronale s’applique au regard de l’effectif au <b>31 décembre de l’année précédente</b>,
    en fonction de la <b>moyenne des effectifs déterminés chaque mois</b>.
    <br><br>
    Cela signifie que, pour appliquer la déduction forfaitaire patronale en <b>N</b>, il convient de connaître
    l’<b>effectif annuel moyen</b> de l’année <b>N-1</b>.
  </p>

  <div class="formula formula-warn">
    <p class="formula-title">⚠️ Franchissement de seuil (à la hausse)</p>
    <p class="formula-content">
      Lorsqu'une entreprise franchit un seuil d’effectif à la hausse, la déduction patronale calculée sur l’effectif antérieur
      continue de s'appliquer pendant <b>5 ans</b>.
      <br><br>
      Attention : cette mesure ne s’applique que pendant les <b>5 premières années</b> qui suivent ce changement.
      À partir de la <b>6ème année</b>, la déduction est calculée selon les règles applicables à l’effectif réel de l’entreprise.
    </p>
  </div>

  <div class="formula formula-example">
    <p class="formula-title">🧮 Exemple</p>
    <p class="formula-content">
      Si au titre de l’année 2024, l’entreprise atteint ou dépasse le seuil de 20 salariés, elle peut bénéficier jusqu’au
      31 décembre 2029 de la déduction forfaitaire de 1,50 €.
      <br>
      À partir du 1er janvier 2030, l’entreprise devra appliquer la déduction forfaitaire de 0,50 € par heure supplémentaire travaillée.
      <br><br>
      En revanche, lorsqu'une entreprise franchit un seuil d’effectif à la baisse, la déduction patronale déterminée selon le nouvel effectif
      s’applique dès l’année suivante.
    </p>
  </div>

  <h3>7️⃣ Règles de calcul de l’effectif (méthode de l’effectif moyen)</h3>
  <p style="text-align:center;">
    Pour le calcul de l’effectif mensuel, il faut tenir compte de tous les salariés titulaires d'un contrat de travail
    présents ou en suspension de contrat (maladie, congé maternité, etc.).
    <br><br>
    Toutefois, les salariés en CDD recrutés pour remplacer un salarié absent ou dont le contrat est suspendu ne sont pas pris en compte dans le calcul de l’effectif.
    De même, les apprentis, les titulaires de contrats de professionnalisation, de contrat initiative emploi ou d’accompagnement dans l’emploi sont exclus du calcul.
  </p>

  <p style="text-align:center;"><b>Comptent pour une unité :</b></p>
  <ul class="centered-list bullets">
    <li>Les salariés en CDI à temps plein</li>
    <li>Les salariés en CDI à temps plein dont le contrat est suspendu</li>
    <li>Les travailleurs à domicile</li>
  </ul>

  <p style="text-align:center;"><b>Unité à proratiser :</b></p>
  <ul class="centered-list bullets">
    <li>Les salariés à temps partiel : 1 × temps de présence hebdomadaire / 35 heures (ou horaire de référence dans l’entreprise)</li>
    <li>Les salariés en forfait jour réduit : 1 × nombre de jours prévu au contrat / 218 jours (ou nombre de jours de référence dans l’entreprise)</li>
    <li>Les salariés dont le mois n'est pas complet (entrée/sortie) : décomptés proportionnellement au nombre de jours calendaires de présence</li>
  </ul>

  <div class="formula formula-example">
  <p class="formula-title">🧮 Exemple (calcul d’effectif)</p>

  <p class="formula-content">
    Calcul de l’effectif dans une entreprise dont le temps de travail est fixé à :
    <br>
    35 heures hebdomadaires pour les salariés gérés en heures
    <br>
    216 jours annuels pour les salariés en forfait jour
  </p>

    <div class="effectif-table-wrap">
    <table class="effectif-table effectif-2col">
      <thead>
        <tr>
          <th class="col-left">État des salariés</th>
          <th class="col-right">Unités</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="col-left">10 salariés en CDI temps plein</td>
          <td class="col-right">10,00</td>
        </tr>
        <tr>
          <td class="col-left">1 salarié en forfait jours de 216 jours</td>
          <td class="col-right">1,00</td>
        </tr>
        <tr>
          <td class="col-left indent">1 salarié temps partiel CDI 24 h</td>
          <td class="col-right">1 × 24 h / 35 h = 0,69</td>
        </tr>
        <tr>
          <td class="col-left indent">1 salarié en forfait jour réduit de 151 jours</td>
          <td class="col-right">1 × 151 j / 216 j = 0,70</td>
        </tr>
        <tr>
          <td class="col-left indent">1 salarié à temps partiel CDD 24 h 6 mois</td>
          <td class="col-right">(1 × 24 h / 35 h) × (6 mois / 12 mois) = 0,34</td>
        </tr>
        <tr>
          <td class="col-left"><b>EFFECTIF TOTAL</b></td>
          <td class="col-right"><b>= 12,73</b></td>
        </tr>
      </tbody>
    </table>
  </div>


  <p class="formula-content" style="margin-top:12px;">
    Déduction forfaitaire patronale applicable : <b>1,50 €</b>.
  </p>
</div>

<p style="text-align:center;">
  Grâce aux données transmises mensuellement en DSN, l’Urssaf calcule et met à disposition de l’entreprise, chaque début d’année N,
  son effectif moyen annuel de l’année N-1.
</p>


  <h3>8️⃣ Heures supplémentaires éligibles à la déduction TEPA</h3>
  <p style="text-align:center;">
    Les heures supplémentaires pouvant bénéficier de la déduction forfaitaire patronale (TEPA) sont celles effectuées
    au-delà de la durée légale du travail : <b>35 heures par semaine</b>.
    <br><br>
    Si le salarié est en convention de forfait en heures annuelles, il s'agira des heures effectuées au-delà de <b>1 607 heures annuelles</b>.
    <br><br>
    Ces heures supplémentaires doivent être rémunérées au moins comme une heure normale pour être éligibles à la déduction forfaitaire patronale (TEPA).
    <br><br>
    Si ces heures supplémentaires sont remplacées par du temps de récupération, elles ne sont pas éligibles à la déduction forfaitaire patronale (TEPA).
  </p>

  <div class="formula formula-warn">
    <p class="formula-title">⚠️ Attention</p>
    <p class="formula-content">
      Elle ne s'applique pas aux heures complémentaires.
    </p>
  </div>

  <h3>9️⃣ Simulation — Déduction TEPA (SARL CARILLON)</h3>
  <p style="text-align:center;">
    L'entreprise CARILLON a un effectif de <b>67 salariés</b>.
    <br>
    Au mois de janvier, ses salariés ont effectué <b>25 heures supplémentaires</b>.
  </p>

  <div class="formula formula-example">
    <p class="formula-title">✅ Question 1 : l’entreprise est-elle éligible ?</p>
    <p class="formula-content">
      Oui. L’entreprise a un effectif inférieur à 250 salariés : la déduction forfaitaire patronale des heures supplémentaires est donc possible.
    </p>
  </div>

  <div class="formula formula-example">
    <p class="formula-title">🧮 Question 2 : quel montant pourra-t-elle déduire ?</p>
    <p class="formula-content">
      Effectif compris entre 20 et 249 salariés : montant de la déduction = <b>0,50 €</b> par heure supplémentaire.
      <br><br>
      Calcul : 25 h × 0,50 € = <b>12,50 €</b>.
    </p>
  </div>

  `,
};
