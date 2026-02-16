// src/data/referentiel.js
import { maladieCard } from "./maladieCard.js";
import { csaCard } from "./csaCard.js";
import { proratisationPlafondSSCard } from "./proratisationPlafondSSCard.js";
import { vieillesseAssuranceCard } from "./vieillesseAssuranceCard.js";
import { allocationsFamilialesCard } from "./allocationsFamilialesCard.js";
import { rgduCard } from "./rgduCard.js";
import { atMpCard } from "./atMpCard.js";
import { fnalCard } from "./fnalCard.js";
import { versementMobiliteCard } from "./versementMobiliteCard.js";
import { forfaitSocial8Card } from "./forfaitSocial8Card.js";
import { forfaitSocialCard } from "./forfaitSocialCard.js";
import { dialogueSocialCard } from "./dialogueSocialCard.js";
import { csgCrdsCard } from "./csgCrdsCard.js";
import { assuranceChomageCard } from "./assuranceChomageCard.js";
import { agsCard } from "./agsCard.js";
import { agircNonCadreCard } from "./agircNonCadreCard.js";
import { agircCadreCard } from "./agircCadreCard.js";
import { apecCard } from "./apecCard.js";
import { mutuelleSanteCard } from "./mutuelleSanteCard.js";
import { versementSanteCard } from "./versementSanteCard.js";
import { prevoyanceCard } from "./prevoyanceCard.js";
import { decesCadreCard } from "./decesCadreCard.js";
import { formationApprentissageCard } from "./formationApprentissageCard.js";
import { peecCard } from "./peecCard.js";
import { oethCard } from "./oethCard.js";
import { basesCalculCotisationsCard } from "./basesCalculCotisationsCard.js";
import { tableauCotisationsSocialesCard } from "./tableauCotisationsSocialesCard.js";
import { baseSalaireBrutCard } from "./baseSalaireBrutCard.js";
import { baseSalaireBrutAbattuCard } from "./baseSalaireBrutAbattuCard.js";
import { baseTranchesPlafondSecuriteSocialeCard } from "./baseTranchesPlafondSecuriteSocialeCard.js";
import { proratisationTempsPartielSSCard } from "./proratisationTempsPartielSSCard.js";
import { proratisationSSABSCard } from "./proratisationSSABSCard.js";
import { proratisationPssMultiEmployeursCard } from "./proratisationPssMultiEmployeursCard.js";
import { calculEffectifSalarieEntrepriseCard } from "./calculEffectifSalarieEntrepriseCard.js";
import { deductionPatronaleHSCard } from "./deductionPatronaleHSCard.js";
import { deductionSalarialeHSCard } from "./deductionSalarialeHSCard.js";
import { defiscalisationHsHcCard } from "./defiscalisationHsHcCard.js";



export const referentielCards = [
  // =========================================================
  // ✅ HUB — Référentiel (page d’accueil)
  // =========================================================
  {
    id: "referentiel-cotisations",
    group: "main",
    title: "Référentiel des cotisations",
    content: `
      <div class="formula formula-reminder">
        <p class="formula-title">🎯 Objectif du référentiel</p>
        <p class="formula-content">
          Retrouver rapidement <b>une cotisation / contribution</b> ou un <b>dispositif transversal</b>
          (allègements, DFS, déductions HS…), avec méthode, assiette, taux et réflexes paie.
        </p>
      </div>


      <ul class="card-menu">
        <li><a href="#/referentiel/cotisations-contributions">Cotisations & contributions</a></li>
        <li><a href="#/referentiel/dispositifs-transversaux">Dispositifs / outils transversaux</a></li>
         <li><a href="#/referentiel/bases-calcul-cotisations">Bases de calcul des cotisations sociales</a></li>
      </ul>

      <div class="formula formula-reminder">
        <p class="formula-title">🧠 Réflexe pro</p>
        <p class="formula-content">
          1) Je classe d’abord : <b>cotisation/contribution</b> (qui recouvre ?) ou <b>dispositif transversal</b> (réduction/abattement).<br>
          2) Ensuite je vais à la fiche concernée.
        </p>
      </div>
    `,
  },

  // =========================================================
  // ✅ MENU 1 — Cotisations & contributions → 4 familles
  // =========================================================
  {
    id: "cotisations-contributions",
    group: "referentiel",
    title: "Cotisations & contributions",
    content: `
      <div class="formula formula-reminder">
        <p class="formula-title">📌 Logique</p>
        <p class="formula-content">
          Ici, on classe par <b>organisme / bloc de recouvrement</b> (URSSAF, AGIRC-ARRCO…)
          puis on accède aux fiches détaillées.
        </p>
      </div>


      <ul class="card-menu">
        <li><a href="#/referentiel/urssaf">URSSAF</a></li>
        <li><a href="#/referentiel/agirc-arrco">AGIRC-ARRCO</a></li>
        <li><a href="#/referentiel/mutuelle-prevoyance">Mutuelle santé & prévoyance</a></li>
        <li><a href="#/referentiel/contributions-annuelles">Contributions patronales annuelles</a></li>
      </ul>

      <p style="text-align:center;">
      </p>
    `,
  },

  // =========================================================
  // ✅ MENU 2 — Dispositifs / outils transversaux
  // =========================================================
  {
    id: "dispositifs-transversaux",
    group: "referentiel",
    title: "Dispositifs / outils transversaux",
    content: `
      <div class="formula formula-reminder">
        <p class="formula-title">📌 À quoi ça sert ?</p>
        <p class="formula-content">
          Ici, ce n’est pas “une cotisation recouvrée par…”, mais des <b>mécanismes</b>
          qui modifient l’assiette ou réduisent certaines cotisations (allègements, DFS, déductions…).
        </p>
      </div>

          <div class="formula formula-reminder">
      <p class="formula-title">🔎 Réflexe pro — Vérifier les exonérations possibles</p>
      <p class="formula-content">
        En plus des dispositifs “classiques” (HS/HC, déduction forfaitaire patronale, réduction générale…),
        certaines exonérations dépendent de la <b>zone géographique</b> ou de la <b>situation de l’entreprise</b>
        (ex. ZFRR, ZRD, LODEOM DOM, JEI…).
        <br><br>
        ✅ Vérification rapide sur le site URSSAF :
        <br>
        <a href="https://www.urssaf.fr/accueil/employeur/beneficier-exonerations.html" target="_blank" rel="noreferrer">
          https://www.urssaf.fr/accueil/employeur/beneficier-exonerations.html
        </a>
      </p>
    </div>

      <ul class="card-menu">
        <li><a href="#/referentiel/allegements">Allègements (vue d’ensemble)</a></li>
        <li><a href="#/referentiel/DFS">Déduction forfaitaire spécifique (DFS)</a></li>
        <li><a href="#/referentiel/deduction-patronale-hs">Déduction patronale HS</a></li>
        <li><a href="#/referentiel/deduction-salariale-hs">Déduction salariale HS</a></li>
        <li><a href="#/referentiel/defiscalisation-hs-hc">Défiscalisation HS/HC + CSG/CRDS non déductible</a></li>
        <li><a href="#/referentiel/rgdu">RGDU (réduction générale) — 2026</a></li>
      </ul>

      <p style="text-align:center;">
      </p>
    `,
  },

  // =========================================================
  // ✅ FAMILLE 1 — URSSAF (on déplace ici ton intro URSSAF)
  // =========================================================
  {
    id: "urssaf",
    group: "referentiel",
    title: "Cotisations recouvrées par l’URSSAF",
    content: `
      <div class="formula formula-reminder">
        <p class="formula-title">📌 Rôle de l’URSSAF</p>
        <p class="formula-content">
          L’URSSAF (Union de Recouvrement des Cotisations de Sécurité Sociale et d’Allocations Familiales)
          est l’organisme chargé de collecter les cotisations sociales salariales et patronales
          finançant le système de Sécurité sociale.
        </p>
      </div>

     <h3>🧩 Les 4 branches (repérage couleur)</h3>

<div class="urssaf-branches">

  <div class="urssaf-branch branch-maladie">
    <div class="branch-title">
      <span class="branch-dot"></span>
      <span>Branche Maladie</span>
    </div>

    <ul class="card-menu branch-menu">
      <li><a href="#/referentiel/maladie">Cotisation assurance maladie maternité décès</a></li>
      <li><a href="#/referentiel/csg-crds">CSG & CRDS</a></li>
    </ul>
  </div>

  <div class="urssaf-branch branch-vieillesse">
    <div class="branch-title">
      <span class="branch-dot"></span>
      <span>Branche Vieillesse</span>
    </div>

    <ul class="card-menu branch-menu">
      <li><a href="#/referentiel/assurance-vieillesse">Cotisation d’assurance vieillesse</a></li>

    </ul>
  </div>

  <div class="urssaf-branch branch-famille">
    <div class="branch-title">
      <span class="branch-dot"></span>
      <span>Branche Famille</span>
    </div>

    <ul class="card-menu branch-menu">
      <li><a href="#/referentiel/allocations-familiales">Cotisation allocations familiales</a></li>
      <li><a href="#/referentiel/csa-autonomie">Contribution solidarité autonomie</a></li>
    </ul>
  </div>

  <div class="urssaf-branch branch-atmp">
    <div class="branch-title">
      <span class="branch-dot"></span>
      <span>Branche AT / MP</span>
    </div>

    <ul class="card-menu branch-menu">
      <li><a href="#/referentiel/at-mp">Cotisation accidents du travail</a></li>
    </ul>
  </div>

</div>

<div class="urssaf-others">
  <h3 style="text-align:center;">Autres contributions recouvrées URSSAF</h3>

  <ul class="card-menu">
    <li><a href="#/referentiel/fnal">FNAL</a></li>
    <li><a href="#/referentiel/versement-mobilite">Versement mobilité</a></li>
    <li><a href="#/referentiel/assurance-chomage">Assurance chômage</a></li>
    <li><a href="#/referentiel/ags">AGS</a></li>
    <li><a href="#/referentiel/forfait-social-8">Forfait social (8%)</a></li>
    <li><a href="#/referentiel/forfait-social">Forfait social (0% / 10% / 16% / 20%)</a></li>
    <li><a href="#/referentiel/dialogue-social">Contribution au dialogue social</a></li>
    <li><a href="#/referentiel/versement-sante">Versement Santé (chèque santé)</a></li>
  </ul>
</div>




      <p style="text-align:center;">
        <a href="#/referentiel/cotisations-contributions">⬅ Retour “Cotisations & contributions”</a>
      </p>
    `,
  },

  // =========================================================
  // ✅ FAMILLE 2 — AGIRC-ARRCO
  // =========================================================
  {
    id: "agirc-arrco",
    group: "referentiel",
    title: "Cotisations recouvrées par l’AGIRC-ARRCO",
    content: `
    <p class="formula-content">
  La retraite de base (régime général) est gérée par la <b>CNAV</b> (Caisse Nationale d’Assurance Vieillesse)
  et ses cotisations sont <b>recouvrées via l’URSSAF</b>.<br><br>

  En complément, les employeurs du secteur privé (et, par principe, les employeurs relevant des règles de retraite complémentaire)
  ont l’obligation d’affilier leurs salariés à un <b>régime de retraite complémentaire</b>, afin de financer la part “complémentaire”
  de la pension.<br><br>

  Les cotisations de retraite complémentaire sont recouvrées par <b>l’AGIRC-ARRCO</b>, issue de la fusion (janvier 2019)
  des anciens régimes <b>ARRCO</b> (tous salariés) et <b>AGIRC</b> (cadres).<br>
  👉 Ces cotisations concernent <b>cadres et non-cadres</b>, avec des rubriques qui peuvent différer selon le statut.
</p>

<div class="formula formula-reminder">
  <p class="formula-title">✅ Les 3 cotisations AGIRC-ARRCO (cadres + non-cadres)</p>
  <p class="formula-content">
    Pour les salariés non-cadres et cadres, l’AGIRC-ARRCO prélève trois cotisations :
  </p>
  <ul class="centered-list bullets">
    <li>La <b>cotisation retraite complémentaire</b>,</li>
    <li>La <b>cotisation CEG</b> (Contribution d’Équilibre Général) qui est la cotisation permettant le financement des surcoûts des départs anticipés à la retraite</li>
    <li>La <b>cotisation CET</b> (Contribution d’Équilibre Technique), elle s’applique à tous les salariés dont le salaire est supérieur au plafond de la sécurité sociale.</li>
  </ul>
</div>

      <h3 style="text-align:center;">➡️ Fiches AGIRC-ARRCO</h3>

      <ul class="card-menu" style="display:flex; flex-direction:column; align-items:center;">
        <li><a href="#/referentiel/agirc-non-cadre">Retraite complémentaire — Non-cadre</a></li>
        <li><a href="#/referentiel/agirc-cadre">Retraite complémentaire — Cadre</a></li>
        <li><a href="#/referentiel/apec">APEC</a></li>
      </ul>

      <p style="text-align:center;">
        <a href="#/referentiel/cotisations-contributions">⬅ Retour “Cotisations & contributions”</a>
      </p>
    `,
  },

  // =========================================================
  // ✅ FAMILLE 3 — Mutuelle / prévoyance
  // =========================================================
  {
    id: "mutuelle-prevoyance",
    group: "referentiel",
    title: "Cotisations mutuelle santé & prévoyance",
    content: `
  Ici, on regroupe les cotisations liées aux < b > contrats collectifs d’entreprise : <br>
    <b>mutuelle santé</b> (frais de soins) et <b>prévoyance</b> (incapacité, invalidité, décès).<br><br>
      Ces cotisations ne relèvent pas de l’AGIRC-ARRCO : elles dépendent du <b>contrat</b> (assureur / institution de prévoyance)
      et des <b>obligations</b> fixées par la convention collective, l’accord d’entreprise ou la DUE.<br><br>
        👉 Réflexe paie : vérifier <b>caractère collectif et obligatoire</b>, <b>part employeur</b>, et le traitement <b>social / CSG-CRDS</b>
        selon la nature des garanties.
      </p>

      </div>

      <h3>➡️ Fiches mutuelle / prévoyance</h3>

      <ul class="card-menu">
        <li><a href="#/referentiel/mutuelle-sante">Mutuelle santé</a></li>
        <li><a href="#/referentiel/prevoyance">Prévoyance</a></li>
        <li><a href="#/referentiel/deces-cadre">Décès cadre (1,50% T1)</a></li>
      </ul>

      <p style="text-align:center;">
        <a href="#/referentiel/cotisations-contributions">⬅ Retour “Cotisations & contributions”</a>
      </p>
    `,
  },

  // =========================================================
  // ✅ FAMILLE 4 — Contributions patronales annuelles
  // =========================================================
  {
    id: "contributions-annuelles",
    group: "referentiel",
    title: "Contributions patronales annuelles",
    content: `
    <p class="formula-content">
    Les employeurs concourent au développement de la formation professionnelle et de l'apprentissage par le financement direct des actions de formation de leurs salariés ainsi que par le versement de différentes contributions : <br>
      <li> La Contribution Unique à la Formation Professionnelle et à l'Alternance (CUFPA), composée de la Contribution à la Formation Professionnelle (CFP) et de la Taxe d’Apprentissage (TA).
      <li>La Contribution Supplémentaire à l'Apprentissage (CSA)
      <li>La contribution dédiée au financement du Compte Personnel de Formation pour les titulaires d'un Contrat à Durée Déterminée (contribution au CPF-CDD).
    
    
    <div class="formula formula-reminder">
        <p class="formula-title">📌 Idée</p>
        <p class="formula-content">
          Ici, on rangera les contributions patronales “annuelles / liées à l’effectif”
          (ex : participation, apprentissage, formation, effort construction… selon classement retenu).
        </p>
      </div>

      <p style="text-align:center;"><b>➡️ Fiches contributions annuelles</b></p>

      <ul class="card-menu">
       <li><a href="#/referentiel/formation-apprentissage">Formation pro & apprentissage (CUFPA / TA / CSA)</a></li>
        <li><a href="#/referentiel/participation-formation">Participation formation (PF)</a></li>
        <li><a href="#/referentiel/peec">PEEC / Effort construction</a></li>
         <li><a href="#/referentiel/oeth">Contribution annuelle OETH (Agefiph / DOETH)</a></li>
      </ul>

      <p style="text-align:center;">
        <a href="#/referentiel/cotisations-contributions">⬅ Retour “Cotisations & contributions”</a>
      </p>
    `,
  },

  // =========================================================
  // ✅ FICHES (détails) — existantes / déjà prévues
  // =========================================================
  basesCalculCotisationsCard,
  calculEffectifSalarieEntrepriseCard,
  baseSalaireBrutCard,
  baseSalaireBrutAbattuCard,
  tableauCotisationsSocialesCard,

  maladieCard,
  allocationsFamilialesCard,
  csaCard,
  proratisationPlafondSSCard,
  proratisationPssMultiEmployeursCard,
  proratisationTempsPartielSSCard,
  proratisationSSABSCard,
  baseTranchesPlafondSecuriteSocialeCard,
  vieillesseAssuranceCard,
  rgduCard,
  atMpCard,
  fnalCard,
  versementMobiliteCard,
  forfaitSocial8Card,
  forfaitSocialCard,
  dialogueSocialCard,
  csgCrdsCard,
  versementSanteCard,
  assuranceChomageCard,
  agsCard,
  agircNonCadreCard,
  agircCadreCard,
  apecCard,
  mutuelleSanteCard,
  prevoyanceCard,
  decesCadreCard,
  formationApprentissageCard,
  peecCard,
  oethCard,
  deductionPatronaleHSCard,
  deductionSalarialeHSCard,
  defiscalisationHsHcCard,







  {
    id: "allegements",
    group: "referentiel",
    title: "Allègements — vue d’ensemble",
    content: `
      <div class="formula formula-reminder">
        <p class="formula-title">🧠 Rappel</p>
        <p class="formula-content">
          Un allègement = un dispositif qui réduit une cotisation (souvent patronale),
          sous conditions (effectif, rémunération, type d’heures…).
        </p>
      </div>

      <p style="text-align:center;">
        Fiche à compléter au fur et à mesure (réduction générale, déductions HS, etc.).
      </p>
    `,
  },

  {
    id: "deduction-patronale-hs",
    group: "referentiel",
    title: "Déduction forfaitaire patronale — Heures supplémentaires",
    content: `
      <p style="text-align:center;">Fiche à compléter.</p>
    `,
  },

  {
    id: "deduction-salariale-hs",
    group: "referentiel",
    title: "Déduction salariale — Heures supplémentaires",
    content: `
      <p style="text-align:center;">Fiche à compléter.</p>
    `,
  },

  {
    id: "DFS",
    group: "referentiel",
    title: "Déduction forfaitaire spécifique (DFS)",
    content: `
      <p style="text-align:center;">Fiche à compléter.</p>
    `,
  },

  // (APNAB/FNAL/PEEC/Formation ensuite, une par une)
];
