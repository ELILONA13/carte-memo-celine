// src/data/basesCalculCotisationsCard.js

export const basesCalculCotisationsCard = {
    id: "bases-calcul-cotisations",
    group: "referentiel",
    title: "Bases de calcul des cotisations sociales",
    content: `

  <p style="text-align:center;"><b>📘 Bases de calcul des cotisations sociales</b></p>
  <p style="text-align:center;">(accueil + renvois vers les fiches détaillées)</p>

  <div class="formula formula-reminder">
    <p class="formula-title">📌 Introduction</p>
    <p class="formula-content">
      Les cotisations se calculent selon un pourcentage appliqué sur une base (appelée assiette). Cependant, toutes les cotisations sociales ne sont pas calculées sur une même base.
      <br><br>
      Il est tout de même important de noter que les retenues salariales et les cotisations patronales ont, en pratique, les mêmes assiettes de calcul lorsqu’elles existent sur la même rubrique (même base, taux différent ou répartition différente). La complexité des calculs provient surtout de la multitude des assiettes.
      <br><br>
      Parmi les principales assiettes, nous pouvons retrouver :
      <br><br>
      Le salaire brut,
      <br><br>
      Le salaire brut abattu,
      <br><br>
      Les tranches calculées en fonction du plafond de la Sécurité sociale,
      <br><br>
      Certaines cotisations patronales (oui, des cotisations sont calculées sur des cotisations ou sur des contributions patronales intégrées à l’assiette d’une autre contribution).
      <br><br>
      Les bases de calcul des cotisations sociales sont données par les divers organismes collecteurs et sources officielles (URSSAF, BOSS, etc.).
      <br><br>
      Ainsi, pour réaliser les bulletins de salaire, il convient de se référer au tableau des cotisations sociales à jour, en début de chaque année.
    </p>
  </div>

  <div class="formula formula-reminder">
    <p class="formula-title">🔗 Sources officielles</p>
    <p class="formula-content" style="text-align:center;">
      🔗 Source officielle “assiette / calcul” (URSSAF) :<br>
      <a href="https://www.urssaf.fr/accueil/employeur/cotisations/comprendre-cotisations/calcul-cotisations-employeur.html" target="_blank" rel="noreferrer">
        https://www.urssaf.fr/accueil/employeur/cotisations/comprendre-cotisations/calcul-cotisations-employeur.html
      </a>
      <br><br>
      🔗 Source officielle “Assiette générale” (BOSS) :<br>
      <a href="https://boss.gouv.fr/portail/accueil/regles-dassujettissement/assiette-generale.html" target="_blank" rel="noreferrer">
        https://boss.gouv.fr/portail/accueil/regles-dassujettissement/assiette-generale.html
      </a>
    </p>
  </div>

  <h3 style="text-align:center;">➡️ Accès rapide (fiches)</h3>

<ul class="card-menu" style="display:flex; flex-direction:column; align-items:center;">
  <li><a href="#/referentiel/base-salaire-brut">Salaire brut</a></li>
  <li><a href="#/referentiel/base-salaire-brut-abattu">Salaire brut abattu</a></li>
  <li><a href="#/referentiel/base-tranches-plafond-securite-sociale">Tranches et plafond de Sécurité sociale</a></li>
  <li><a href="#/referentiel/proratisation-plafond-ss">proratisation-plafond-ss</a></li>
  <li><a href="#/referentiel/proratisation-temps-partiel-ss">Proratisation PSS — temps partiel</a></li>
  <li><a href="#/referentiel/proratisation-ss-abs">Proratisation-SS-ABS</a></li>
  <li><a href="#/referentiel/proratisation-pss-multi-employeurs">Proratisation PSS — multi-employeurs</a></li>
  <li><a href="#/referentiel/calcul-effectif-salarie-entreprise">Calcul de l’effectif salarié de l’entreprise</a></li>
</ul>


  <div class="formula formula-example">
  <p class="formula-title">📄 Tableau des cotisations sociales (à jour)</p>

  <ul class="card-menu" style="display:flex; flex-direction:column; align-items:center; margin-top:10px;">
    <li>
      <a href="#/referentiel/tableau-cotisations-sociales">
        Tableau des cotisations
      </a>
    </li>
  </ul>

  <p style="text-align:center; margin-top:10px;">
    Source supplémentaire :
    <a href="https://www.urssaf.fr/accueil/outils-documentation/taux-baremes/taux-cotisations-secteur-prive.html" target="_blank" rel="noreferrer">
      https://www.urssaf.fr/accueil/outils-documentation/taux-baremes/taux-cotisations-secteur-prive.html
    </a>
  </p>
</div>

  `,
};
