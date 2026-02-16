// src/data/deductionSalarialeHSCard.js

export const deductionSalarialeHSCard = {
    id: "deduction-salariale-hs",
    group: "referentiel",
    title: "Réduction de cotisations salariales — HS & HC (désocialisation)",
    content: `

  <p style="text-align:center;"><b>📘 Réduction de cotisations sociales salariales sur heures supplémentaires et heures complémentaires</b></p>
  <p style="text-align:center;"><b>« Désocialisation » des heures supplémentaires et complémentaires</b></p>
  <p style="text-align:center;">(version complète — cours / examen + pratique paie)</p>

  <div class="formula formula-warn">
    <p class="formula-title">⚠️ Remarque essentielle (piège examen)</p>
    <p class="formula-content">
      Il est indispensable de ne pas confondre :
      <br><br>
      <b>A) La déduction forfaitaire patronale TEPA (côté employeur)</b> : déduction en euros par heure sur les cotisations patronales URSSAF, sous conditions d’effectif, concernant les heures supplémentaires (et pas les heures complémentaires).
      <br><br>
      <b>B) La réduction de cotisations salariales HS/HC (côté salarié)</b> : réduction de cotisations salariales sur les heures supplémentaires et les heures complémentaires.
      <br><br>
      ⚠️ À ne pas confondre non plus avec la réduction générale de cotisations patronales (ex “Fillon”, RG… / RGDU) : ce n’est pas un dispositif “heures supplémentaires”.
      <br><br>
      Référence BOSS (allègements généraux) :
      <a href="https://boss.gouv.fr/portail/accueil/exonerations/allegements-generaux.html" target="_blank" rel="noreferrer">
        https://boss.gouv.fr/portail/accueil/exonerations/allegements-generaux.html
      </a>
      <br><br>
      <b>➡️ Voir aussi la leçon TEPA (déduction forfaitaire patronale HS)</b> :
      <a href="#/referentiel/deduction-patronale-hs">Cliquez ici</a>
    </p>
  </div>

  <div class="formula formula-reminder">
    <p class="formula-title">🎯 Objectif</p>
    <p class="formula-content">
      Comprendre et appliquer la réduction de cotisations salariales sur heures supplémentaires et heures complémentaires :
      heures concernées, majorations limitées, taux plafond (11,31 %), cotisations exclues, exemple chiffré et tableau hors CSG/CRDS.
    </p>
  </div>

  <h3>1️⃣ Origine et entrée en vigueur (dates à connaître)</h3>
  <p style="text-align:center;">
    La loi de financement de la Sécurité Sociale prévoyait une exonération sur certaines cotisations salariales pour les heures supplémentaires
    à compter du <b>1er septembre 2019</b>.
    <br><br>
    La loi <b>2018-1213</b> (mesures d’urgence économique et sociale) du <b>24 décembre 2018</b> a modifié le calendrier : application dès le <b>1er janvier 2019</b>.
  </p>

  <div class="formula formula-reminder">
    <p class="formula-title">📌 Bases juridiques</p>
    <p class="formula-content">
      Code de la sécurité sociale — article L241-17 :
      <a href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000037947458" target="_blank" rel="noreferrer">
        https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000037947458
      </a>
      <br><br>
      Décret n° 2019-40 du 24 janvier 2019 :
      <a href="https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000038052425" target="_blank" rel="noreferrer">
        https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000038052425
      </a>
    </p>
  </div>

  <h3>2️⃣ Heures concernées par la réduction salariale</h3>

  <p style="text-align:center;"><b>2.1 Heures supplémentaires (HS)</b></p>
  <p style="text-align:center;">
    Sont concernées les heures effectuées au-delà de la durée légale :
    <br>
    <b>35 heures par semaine</b>,
    <br>
    ou pour un salarié en <b>forfait annuel en heures</b> : heures au-delà de <b>1 607 heures annuelles</b>.
  </p>

  <p style="text-align:center;"><b>2.2 Heures complémentaires (HC)</b></p>
  <p style="text-align:center;">
    Sont concernées les heures effectuées :
    <br>
    au-delà de la durée contractuelle (temps partiel),
    <br>
    <b>sans atteindre la durée légale (35 heures)</b>.
  </p>

  <h3>3️⃣ Limites de majorations (condition d’application)</h3>
  <p style="text-align:center;">
    La réduction s'applique dans la limite des taux de majorations prévus par la convention/accord collectif applicable.
  </p>

  <p style="text-align:center;"><b>À défaut d’accord (règles “plafond” à retenir)</b></p>

  <div class="formula formula-warn">
    <p class="formula-title">⚠️ Heures supplémentaires (HS)</p>
    <p class="formula-content">
      <b>25 %</b> pour les <b>8 premières heures</b>
      <br>
      <b>50 %</b> pour les suivantes
    </p>
  </div>

  <div class="formula formula-warn">
    <p class="formula-title">⚠️ Heures complémentaires (HC)</p>
    <p class="formula-content">
      <b>10 %</b> dans la limite de <b>1/10</b> de la durée contractuelle
      <br>
      ou <b>25 %</b> dans la limite de <b>1/3</b> de la durée contractuelle si la convention collective le prévoit
    </p>
  </div>

  <div class="formula formula-warn">
    <p class="formula-title">⚠️ Piège examen</p>
    <p class="formula-content">
      Si une majoration est au-delà de ces limites, on retient la réduction uniquement dans la limite admise.
    </p>
  </div>

  <h3>4️⃣ Quelles cotisations sont réduites ? (définition et périmètre)</h3>

  <div class="formula formula-reminder">
    <p class="formula-title">📝 Remarque (vocabulaire)</p>
    <p class="formula-content">
      Les “déductions sociales salariales” sont aussi appelées : réduction de cotisations salariales sur heures supplémentaires et complémentaires.
    </p>
  </div>

  <p style="text-align:center;">
    Les heures supplémentaires ou complémentaires bénéficient d'une réduction salariale imputée sur des cotisations (vieillesse / retraite)
    dans la limite d'un taux fixé par décret.
    <br><br>
    Le taux plafond est <b>11,31 %</b>.
  </p>

  <p style="text-align:center;">
    Pour les salariés dont la rémunération est inférieure au plafond de sécurité sociale, cette réduction est équivalente au montant des cotisations
    payées par le salarié au titre de la retraite.
  </p>

  <div class="formula formula-warn">
    <p class="formula-title">⚠️ Cotisations exclues (à apprendre par cœur)</p>
    <p class="formula-content">
      Ne sont pas concernées par la réduction :
      <br>
      <b>CSG / CRDS</b>
      <br>
      <b>prévoyance</b>
      <br>
      <b>mutuelle</b>
      <br><br>
      Donc, même si on “désocialise”, la CSG/CRDS continue de s’appliquer sur la rémunération des heures.
    </p>
  </div>

  <div class="formula formula-reminder">
    <p class="formula-title">🔗 Sources officielles</p>
    <p class="formula-content">
      URSSAF — Réduction de cotisations salariales :
      <a href="https://www.urssaf.fr/accueil/employeur/beneficier-exonerations/exonerations-heures/reduction-cotisations-salariales.html" target="_blank" rel="noreferrer">
        https://www.urssaf.fr/accueil/employeur/beneficier-exonerations/exonerations-heures/reduction-cotisations-salariales.html
      </a>
      <br><br>
      BOSS — Exonérations heures supplémentaires et complémentaires :
      <a href="https://boss.gouv.fr/accueil/exonerations/exonerations-heures-supplementai.html" target="_blank" rel="noreferrer">
        https://boss.gouv.fr/accueil/exonerations/exonerations-heures-supplementai.html
      </a>
    </p>
  </div>

  <h3>5️⃣ Employeurs éligibles (rappel pratique)</h3>
  <p style="text-align:center;">
    La réduction de cotisations salariales HS/HC s’applique sans condition d’effectif, à très large périmètre (secteur privé et public selon règles).
    <br><br>
    (À distinguer de la déduction forfaitaire patronale TEPA qui, elle, dépend notamment d’un seuil d’effectif.)
  </p>

  <h3>6️⃣ Méthode “paie” (application opérationnelle)</h3>

  <p style="text-align:center;"><b>Étape 1 — Identifier les heures éligibles</b></p>
  <ul class="centered-list bullets">
    <li>HS : au-delà 35h / semaine (ou &gt; 1 607h / an forfait heures)</li>
    <li>HC : au-delà durée contractuelle, sans atteindre 35h</li>
  </ul>

  <p style="text-align:center;"><b>Étape 2 — Vérifier la majoration applicable</b></p>
  <ul class="centered-list bullets">
    <li>Respect des limites 25/50 (HS), 10/25 (HC)</li>
    <li>Contrôle convention collective si règles spécifiques</li>
  </ul>

  <p style="text-align:center;"><b>Étape 3 — Calculer la rémunération des heures concernées</b></p>
  <ul class="centered-list bullets">
    <li>Base = taux horaire × nombre d’heures</li>
    <li>+ majoration dans la limite admise</li>
  </ul>

  <p style="text-align:center;"><b>Étape 4 — Appliquer la réduction salariale</b></p>
  <ul class="centered-list bullets">
    <li>Réduction = rémunération des HS/HC × taux de réduction, dans la limite du plafond (11,31 %) et des cotisations effectivement dues</li>
  </ul>

  <h3>7️⃣ Exemple chiffré complet (avec arrondis au centime)</h3>

  <div class="formula formula-example">
    <p class="formula-title">🧮 Données</p>
    <p class="formula-content">
      Entreprise : effectif 6 salariés (information de contexte).
      <br>
      Salarié non-cadre à temps plein : taux horaire <b>13,00 €</b>.
      <br>
      En janvier :
      <br>
      <b>10 heures supplémentaires majorées 25 %</b>
      <br>
      <b>3 heures supplémentaires majorées 50 %</b>
    </p>
  </div>

  <div class="formula formula-example">
    <p class="formula-title">1) Calcul de la rémunération des heures supplémentaires</p>
    <p class="formula-content">
      <b>Heures à 25 % :</b>
      <br>
      Rémunération = 10 h × 13,00 € × 1,25
      <br>
      = 162,50 €
      <br><br>
      <b>Heures à 50 % :</b>
      <br>
      Rémunération = 3 h × 13,00 € × 1,50
      <br>
      = 58,50 €
      <br><br>
      ✅ Total rémunération HS ouvrant droit à réduction = 162,50 € + 58,50 € = <b>221,00 €</b>
    </p>
  </div>

  <h3>8️⃣ Tableau (hors CSG/CRDS) — application de la réduction</h3>

  <div class="formula formula-example">
    <p class="formula-title">📊 Tableau hors CSG/CRDS (arrondi au centime)</p>

    <div class="recap-table-wrap">
      <table class="recap-table">
        <thead>
          <tr>
            <th>Cotisations salariales sur heures supplémentaires (hors CSG/CRDS)</th>
            <th>Assiette</th>
            <th>Taux salarial</th>
            <th>Cotisations salariales</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Sécurité sociale plafonnée</td>
            <td>221,00 €</td>
            <td>6,90 %</td>
            <td>15,25 €</td>
          </tr>
          <tr>
            <td>Sécurité sociale déplafonnée</td>
            <td>221,00 €</td>
            <td>0,40 %</td>
            <td>0,89 €</td>
          </tr>
          <tr>
            <td>Retraite complémentaire T1+ CEG T1</td>
            <td>221,00 €</td>
            <td>4,01 %</td>
            <td>8,86 €</td>
          </tr>
          <tr>
            <td>Réduction salariale sur heures supplémentaires</td>
            <td>221,00 €</td>
            <td>11,31 %</td>
            <td>- 25,00 €</td>
          </tr>
          <tr>
            <td colspan="3"><b>Total cotisations salariales, hors CSG / CRDS</b></td>
            <td><b>0,00</b></td>
          </tr>
        </tbody>
      </table>
    </div>

    <p class="formula-content" style="margin-top:12px;">
      Explication “réflexe paie” : on raisonne souvent avec arrondi au centime ligne par ligne, ce qui permet ici d’aboutir à 0,00 hors CSG/CRDS
      (15,25 + 0,89 + 8,86 = 25,00 ; puis -25,00).
    </p>
  </div>

  <h3>9️⃣ Conclusion (phrase à apprendre)</h3>
  <div class="formula formula-reminder">
    <p class="formula-title">✅ Conclusion</p>
    <p class="formula-content">
      La réduction des cotisations salariales est équivalente au montant des cotisations retraite payées par le salarié au titre de ces heures supplémentaires (dans la limite du taux plafond).
    </p>
  </div>

  <h3>🔗 Liens officiels à copier dans Word</h3>
  <ul class="centered-list bullets">
    <li>
      URSSAF — Réduction de cotisations salariales :
      <a href="https://www.urssaf.fr/accueil/employeur/beneficier-exonerations/exonerations-heures/reduction-cotisations-salariales.html" target="_blank" rel="noreferrer">
        https://www.urssaf.fr/accueil/employeur/beneficier-exonerations/exonerations-heures/reduction-cotisations-salariales.html
      </a>
    </li>
    <li>
      BOSS — Exonérations heures supplémentaires et complémentaires :
      <a href="https://boss.gouv.fr/accueil/exonerations/exonerations-heures-supplementai.html" target="_blank" rel="noreferrer">
        https://boss.gouv.fr/accueil/exonerations/exonerations-heures-supplementai.html
      </a>
    </li>
    <li>
      Légifrance — CSS art. L241-17 :
      <a href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000037947458" target="_blank" rel="noreferrer">
        https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000037947458
      </a>
    </li>
    <li>
      Légifrance — Décret n° 2019-40 du 24 janvier 2019 :
      <a href="https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000038052425" target="_blank" rel="noreferrer">
        https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000038052425
      </a>
    </li>
  </ul>

  `,
};
