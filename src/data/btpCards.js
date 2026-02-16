// src/data/btpCards.js
import { btpApasCard } from "./btpApasCard.js";
import { btpIntemperiesCard } from "./btpIntemperiesCard.js";
import { btpCiBtpCard } from "./btpCiBtpCard.js";
import { btpCibtpCongesCard } from "./btpCibtpConges.js";
import { btpOppbtpCard } from "./btpOppbtpCard.js";
export const btpCards = [


  // =========================================================
  // 1) CONVENTIONS COLLECTIVES DU BTP (carte validée)
  // =========================================================
  {
    id: "conventions",
    group: "main",
    title: "Conventions collectives du BTP",
content: `
  <div class="formula formula-reminder">
    <p class="formula-title">🧠 À retenir</p>
    <p class="formula-content">
      Contrairement à la plupart des autres secteurs, le <b>secteur du BTP</b> ne relève pas d’une convention collective unique.<br>
      Il existe <b>plusieurs conventions collectives</b>, déterminées selon <b>3 critères</b> :<br>
      1) <b>statut</b> (ouvriers / ETAM / cadres) • 2) <b>effectif</b> • 3) <b>région</b>.
    </p>
  </div>

  <h3>1) Le statut des salariés</h3>
  <ul>
    <li><b>Ouvriers</b></li>
    <li><b>ETAM</b> (Employés, Techniciens et Agents de Maîtrise)</li>
    <li><b>Ingénieurs et Cadres</b></li>
  </ul>
  <p>
    Chaque catégorie relève de <b>conventions collectives distinctes</b>,
    adaptées aux fonctions exercées et au statut professionnel.
  </p>

  <h3>2) L’effectif de l’entreprise</h3>
  <p>
    Pour les <b>ouvriers du BTP</b>, les conventions collectives nationales
    sont différenciées selon l’effectif :
  </p>

  <div class="formula formula-formula">
    <p class="formula-title">📌 Ouvriers BTP : conventions nationales selon l’effectif</p>
    <p class="formula-content">
      • <b>Jusqu’à 10 salariés</b> : CCN ouvriers BTP — <b>IDCC 1596</b><br>
      • <b>Plus de 10 salariés</b> : CCN ouvriers BTP — <b>IDCC 1597</b>
    </p>
  </div>

  <p>
    Ces conventions s’appliquent aux <b>ouvriers du BTP</b>
    exécutant des <b>travaux manuels sur les chantiers</b>.
  </p>

  <div class="formula formula-formula">
    <p class="formula-title">ℹ️ Justification</p>
    <p class="formula-content">
      La distinction <b>-10 / +10</b> tient compte des contraintes économiques
      et d’organisation propres aux petites entreprises,
      et des différences de moyens selon la taille de la structure.
    </p>
  </div>

  <h3>3) La région d’implantation de l’entreprise</h3>
  <p>En plus des conventions collectives nationales, le BTP peut relever de :</p>
  <ul>
    <li><b>Conventions collectives régionales</b></li>
    <li><b>Accords régionaux</b>, notamment en matière de rémunération</li>
  </ul>
  <p>
    Ces textes peuvent fixer des <b>grilles de salaires différentes</b>,
    en tenant compte notamment du <b>coût de la vie</b>
    et de la <b>demande de main-d’œuvre</b> dans la région.
  </p>

  <div class="formula formula-warn">
    <p class="formula-title">⚠️ Point de vigilance</p>
    <p class="formula-content">
      Si l’entreprise dispose d’une <b>convention collective régionale</b>,
      cette dernière <b>prime</b> sur la convention collective nationale.
    </p>
  </div>

  <h3>Choisir la convention collective applicable</h3>
  <p>
    Pour choisir la convention collective applicable,
    on se réfère au <b>code APE</b> de la structure.
    Un même code APE peut être couvert par <b>plusieurs conventions collectives</b> :
    on retient alors celle qui est la plus en lien avec le
    <b>statut social</b> et l’activité de l’entreprise.
  </p>

  <div class="formula formula-warn">
    <p class="formula-title">⚠️ Point de vigilance</p>
    <p class="formula-content">
      Le <b>code APE</b> est un <b>indicateur</b> :
      le critère déterminant reste l’<b>activité principale réellement exercée</b>
      par l’entreprise.
    </p>
  </div>

  <h3>Coexistence de plusieurs conventions dans une même entreprise</h3>
  <p>
    La convention collective choisie s’applique en principe à l’ensemble des salariés,
    mais une entreprise peut employer plusieurs catégories
    (ouvriers, ETAM, cadres).
    Dans ce cas, <b>plusieurs conventions collectives peuvent coexister</b> :
    il faut déterminer la convention applicable
    <b>selon la catégorie de chaque salarié</b>.
  </p>

  <div class="formula formula-warn">
    <p class="formula-title">⚠️ Point de vigilance</p>
    <p class="formula-content">
      La convention collective n’est donc pas toujours unique pour l’entreprise :
      elle peut être <b>déterminée salarié par salarié</b>
      lorsque plusieurs catégories coexistent.
    </p>
  </div>

  <div class="formula formula-example">
    <p class="formula-title">✅ Exemple</p>
    <p class="formula-content">
      Une entreprise du BTP compte <b>8 salariés</b> :
      <b>6 ouvriers</b> et <b>2 ETAM</b>.<br><br>
      Il y aura <b>2 conventions collectives applicables</b> :<br>
      • <b>6 ouvriers</b> → CCN ouvriers <b>jusqu’à 10 salariés</b> — <b>IDCC 1596</b><br>
      • <b>2 ETAM</b> → CCN des ETAM — <b>IDCC 2609</b>
    </p>
  </div>

  <h3>📚 Textes officiels – Accès direct (option pro)</h3>

  <div class="formula formula-example">
    <p class="formula-title">📘 Conventions collectives nationales du BTP</p>
    <p class="formula-content">

      👉 Ouvriers du bâtiment – entreprises jusqu’à 10 salariés (IDCC 1596)<br>
      <a href="https://www.legifrance.gouv.fr/conv_coll/id/KALITEXT000005647125/"
         target="_blank" rel="noopener noreferrer">
        📘 Lire sur Légifrance (IDCC 1596)
      </a>
      <br><br>

      👉 Ouvriers du bâtiment – entreprises de plus de 10 salariés (IDCC 1597)<br>
      <a href="https://www.legifrance.gouv.fr/conv_coll/id/KALICONT000005635220/"
         target="_blank" rel="noopener noreferrer">
        📘 Lire sur Légifrance (IDCC 1597)
      </a>
      <br><br>

      👉 ETAM du bâtiment (IDCC 2609)<br>
      <a href="https://www.legifrance.gouv.fr/conv_coll/id/KALICONT000018773893/"
         target="_blank" rel="noopener noreferrer">
        📘 Lire sur Légifrance (IDCC 2609)
      </a>

    </p>
  </div>
`,
  },

  // =========================================================
  // 2) SPÉCIFICITÉS DE LA PAIE BTP (leçon)
  // =========================================================
  {
    id: "specificites-paie",
    group: "main",
    title: "Spécificités de la paie BTP (leçon)",
    content: `
      <div class="formula formula-reminder">
        <p class="formula-title">🧠 À retenir</p>
        <p class="formula-content">
          La gestion de paie dans le <b>BTP</b> présente des <b>particularités</b> liées aux <b>réglementations</b> en vigueur
          et aux <b>conditions de chantier</b> (déplacements, intempéries, primes).<br>
          Le point clé est de bien qualifier chaque élément : <b>salaire</b> ou <b>frais/indemnités</b>.
        </p>
      </div>

      <div class="formula formula-formula">
        <p class="formula-title">📌 Réflexe paie (méthode)</p>
        <p class="formula-content">
          Pour chaque ligne “BTP” :<br>
          1) c’est du <b>salaire</b> ou un <b>frais pro / indemnité</b> ?<br>
          2) quelle <b>assiette</b> (cotisations / CSG / PAS) ?<br>
          3) quel <b>texte</b> (CCN / accord régional / accord d’entreprise) ?
        </p>
      </div>

      <h3>1) Indemnités de déplacement (transport / repas / hébergement)</h3>
      <p>
        Le BTP prévoit fréquemment des <b>indemnités de déplacement</b> : transport, repas, hébergement.
        Elles ne sont pas soumises aux mêmes cotisations que les salaires dans tous les cas :
        il faut déterminer si l’on est en présence d’un <b>remboursement de frais</b> ou d’un <b>complément de rémunération</b>.
      </p>

      <div class="formula formula-warn">
        <p class="formula-title">⚠️ Point de vigilance (assiette)</p>
        <p class="formula-content">
          Une indemnité mal qualifiée (frais vs salaire) peut générer une erreur d’<b>assiette</b>
          et un risque de redressement.<br>
          Toujours vérifier les <b>conditions d’attribution</b> (chantier/zone) et la règle prévue.
        </p>
      </div>

      <h3>2) Intempéries & activité partielle (chômage partiel)</h3>
      <p>
        En BTP, les <b>intempéries</b> peuvent entraîner des interruptions de chantier.
        Il existe aussi le recours à l’<b>activité partielle</b> (chômage partiel).<br>
        Ces situations impliquent des <b>déclarations</b> et des <b>indemnisations</b> particulières.
      </p>

      <div class="formula formula-warn">
        <p class="formula-title">⚠️ Point clé</p>
        <p class="formula-content">
          <b>Intempéries ≠ activité partielle</b> : identifier le bon régime avant de calculer et de déclarer.
        </p>
      </div>

      <h3>3) Heures supplémentaires et majorations</h3>
      <p>
        Les heures supplémentaires existent en BTP et doivent respecter les dispositions
        <b>légales</b> et <b>conventionnelles</b>.
        Le cours indique des majorations pouvant aller jusqu’à <b>50%</b> ou <b>100%</b> selon les cas.
      </p>

      <div class="formula formula-warn">
        <p class="formula-title">⚠️ Vigilance</p>
        <p class="formula-content">
          Les taux (50% / 100%) ne sont pas automatiques : ils dépendent du <b>texte applicable</b>
          (CCN, accords régionaux, accord d’entreprise, situation du chantier).
        </p>
      </div>

      <h3>4) Congés payés via une caisse BTP</h3>
      <p>
        Dans le BTP, les congés payés sont souvent gérés par une <b>caisse de congés payés</b> :
        l’employeur cotise et la caisse prend en charge le paiement des congés.
      </p>

      <div class="formula formula-reminder">
        <p class="formula-title">🧠 Particularité bulletin</p>
        <p class="formula-content">
          Il est courant que le <b>solde de congés payés</b> ne figure pas sur le bulletin de paie employeur.
        </p>
      </div>

      <h3>5) Frais professionnels et avantages en nature</h3>
      <p>
        Les <b>frais professionnels</b> (déplacements, repas, hébergement…) et les <b>avantages en nature</b>
        doivent être correctement encadrés et traités dans la paie.
      </p>

      <div class="formula formula-warn">
        <p class="formula-title">⚠️ Vigilance (qualification)</p>
        <p class="formula-content">
          Bien distinguer : <b>frais</b> vs <b>avantage en nature</b> vs <b>prime</b>.<br>
          Vérifier l’impact sur les cotisations, la CSG-CRDS et le PAS.
        </p>
      </div>

      <h3>6) Prévoyance / retraite spécifiques</h3>
      <p>
        Le BTP peut prévoir des régimes de <b>prévoyance</b> et/ou de <b>retraite</b> spécifiques,
        avec des <b>cotisations particulières</b> à intégrer dans le bulletin.
      </p>

      <div class="formula formula-warn">
        <p class="formula-title">⚠️ Vigilance paie</p>
        <p class="formula-content">
          Vérifier l’organisme, les taux, l’assiette, et la répartition salariale/patronale
          selon la convention/accord applicable.
        </p>
      </div>

      <h3>7) Primes et sujétions de chantier</h3>
      <p>
        Le BTP prévoit des primes spécifiques (ex : <b>prime de danger</b>, <b>prime de froid</b>,
        primes de <b>sujétions</b>) qui doivent être intégrées dans la paie.
      </p>

      <div class="formula formula-warn">
        <p class="formula-title">⚠️ Vigilance (assiette)</p>
        <p class="formula-content">
          Une prime constitue généralement du <b>salaire</b> (assiette cotisations),
          sauf disposition particulière prévue par un texte.
        </p>
      </div>

      <div class="formula formula-example">
        <p class="formula-title">✅ Exemple de raisonnement (méthode)</p>
        <p class="formula-content">
          Ligne “indemnité repas” sur un bulletin BTP :<br>
          1) Est-ce un <b>frais pro</b> lié au chantier (conditions réunies) ?<br>
          2) Si oui : traitement frais (assiette spécifique). Sinon : risque prime/salaire.<br>
          3) Vérifier la règle CCN/accord et la traçabilité sur le bulletin.
        </p>
      </div>
    `,
  },
  // ✅ APAS — nouvelle carte
  btpApasCard,

  // ✅ INTEMPÉRIES — nouvelle carte
  btpIntemperiesCard,

  // ✅ CIBTP — congés dans le BTP
  btpCibtpCongesCard,

  // ✅ CI-BTP — carte chômage intempéries
  btpCiBtpCard,

  // ✅ OPPBTP — prévention des risques
  btpOppbtpCard,




  // =========================================================
  // 3) COTISATIONS SPÉCIFIQUES & CAISSES PARTICULIÈRES (leçon)
  // =========================================================
  {
    id: "cotisations-caisses",
    group: "main",
    title: "Cotisations sociales spécifiques & caisses particulières (BTP)",
    content: `
      <div class="formula formula-reminder">
        <p class="formula-title">🧠 Principe général</p>
        <p class="formula-content">
          La fiche de paie des entreprises du <b>BTP</b> se distingue d’une fiche de paie de droit commun
          par la présence de <b>cotisations sociales spécifiques</b>, liées aux particularités du secteur
          (conditions de chantier, mobilité, risques professionnels, gestion externalisée de certains droits).<br><br>
          Ces cotisations <b>s’ajoutent aux cotisations sociales classiques</b> et rendent la paie BTP plus complexe,
          notamment en raison de l’intervention de <b>caisses dédiées</b>.
        </p>
      </div>

      <h3>1) Nature des cotisations spécifiques au BTP</h3>
      <p>Dans le secteur du BTP, certaines cotisations patronales relèvent :</p>
      <ul>
        <li>des <b>cotisations statutaires</b>,</li>
        <li>ou des <b>cotisations prévues par la convention collective</b>.</li>
      </ul>

      <p>Ces cotisations financent des dispositifs propres à la branche, notamment :</p>
      <ul>
        <li>la <b>gestion des congés payés</b>,</li>
        <li>l’<b>indemnisation des intempéries</b>,</li>
        <li>la <b>prévention des risques professionnels</b>,</li>
        <li>l’<b>action sociale du BTP</b>,</li>
        <li>certaines <b>garanties de prévoyance</b>.</li>
      </ul>

      <div class="formula formula-reminder">
        <p class="formula-title">🧠 Rappel important</p>
        <p class="formula-content">
          Les autres cotisations du bulletin (URSSAF, retraite, chômage, CSG-CRDS…) restent,
          pour l’essentiel, <b>comparables à celles d’un bulletin de paie classique</b>.
        </p>
      </div>

      <h3>2) Présentation sur le bulletin de paie</h3>
      <p>
        Les cotisations spécifiques au BTP apparaissent principalement dans les rubriques suivantes
        du <b>bulletin de paie simplifié</b> :
      </p>
      <ul>
        <li><b>Cotisations statutaires ou prévues par la convention collective</b></li>
        <li><b>Autres contributions dues par l’employeur</b></li>
      </ul>

      <p>C’est dans ces rubriques que figurent notamment :</p>
      <ul>
        <li>la <b>caisse de congés payés BTP</b>,</li>
        <li>la <b>cotisation intempéries</b>,</li>
        <li>l’<b>OPPBTP</b>,</li>
        <li>l’<b>APAS BTP</b>,</li>
        <li>certaines contributions de <b>formation professionnelle</b>.</li>
      </ul>

      <h3>3) Rôle des caisses particulières du BTP</h3>
      <p>
        Le BTP se caractérise par l’existence de <b>caisses spécifiques</b>, auxquelles l’employeur verse
        des cotisations, et qui assurent ensuite directement certaines prestations aux salariés.
      </p>
      <p>C’est notamment le cas pour :</p>
      <ul>
        <li>les <b>congés payés</b>,</li>
        <li>les <b>intempéries</b>.</li>
      </ul>

      <div class="formula formula-reminder">
        <p class="formula-title">🧠 Conséquence clé</p>
        <p class="formula-content">
          L’employeur n’est donc <b>pas toujours l’organisme payeur direct</b> de ces droits.
        </p>
      </div>

      <h3>4) Conséquences pratiques en paie</h3>
      <p>Ces spécificités entraînent plusieurs conséquences importantes :</p>
      <ul>
        <li>certaines cotisations sont <b>exclusivement patronales</b>,</li>
        <li>les <b>assiettes de cotisation</b> peuvent différer du brut classique,</li>
        <li>le <b>solde de congés payés</b> peut ne pas figurer sur le bulletin de paie,</li>
        <li>le bulletin BTP comporte <b>plus de lignes</b> qu’un bulletin standard.</li>
      </ul>

      <div class="formula formula-warn">
        <p class="formula-title">⚠️ Point de vigilance (méthode)</p>
        <p class="formula-content">
          Avant de traiter une ligne de cotisation en BTP, vérifier systématiquement :<br>
          1) s’il s’agit d’une cotisation de <b>droit commun</b> ou <b>spécifique au BTP</b>,<br>
          2) si elle relève d’une <b>caisse particulière</b>,<br>
          3) dans quelle <b>rubrique du bulletin</b> elle doit apparaître,<br>
          4) quelle est son <b>assiette de cotisation</b>.
        </p>
      </div>

      <div class="formula formula-example">
        <p class="formula-title">📚 Lien officiel – taux et assiettes BTP</p>
        <p class="formula-content">
          La référence officielle pour les taux et assiettes propres au BTP est le réseau
          <b>Congés Intempéries BTP (CIBTP)</b>.<br><br>
          👉 Site officiel :<br>
          <a href="https://www.cibtp.fr" target="_blank" rel="noopener noreferrer">
            https://www.cibtp.fr
          </a><br><br>
          👉 Ces tableaux constituent la <b>référence utilisée en pratique</b> pour la paie BTP.
        </p>
      </div>

      <div class="formula formula-reminder">
        <p class="formula-title">🧠 À retenir (synthèse)</p>
        <p class="formula-content">
          • Le BTP comporte des <b>cotisations sociales spécifiques</b>,<br>
          • financées par des <b>caisses particulières</b>,<br>
          • intégrées dans des <b>rubriques dédiées</b> du bulletin,<br>
          • avec des <b>assiettes propres au secteur</b>.<br><br>
          👉 Ces éléments expliquent pourquoi la <b>paie BTP est plus complexe</b> qu’une paie de droit commun.
        </p>
      </div>
    `,
  },

  // =========================================================
  // 4) DFS — DÉDUCTION FORFAITAIRE SPÉCIFIQUE (leçon)
  // =========================================================
  {
    id: "dfs-btp",
    group: "main",
    title: "DFS BTP — Déduction Forfaitaire Spécifique (abattement frais pro)",
    content: `
  <div class="formula formula-reminder">
    <p class="formula-title">🧠 À retenir</p>
    <p class="formula-content">
      La <b>DFS</b> (Déduction Forfaitaire Spécifique) permet un <b>abattement forfaitaire pour frais professionnels</b>
      sur la <b>base de calcul des cotisations sociales</b> (professions éligibles).<br>
      ✔️ Elle <b>réduit l’assiette</b> des cotisations • ✔️ <b>n’affecte pas</b> le salaire brut contractuel •
      ❌ <b>jamais applicable</b> à la <b>CSG</b> et à la <b>CRDS</b>.
    </p>
  </div>

  <h3>1) Définition générale</h3>
  <p>
    La DFS est un dispositif d’abattement forfaitaire appliqué sur l’assiette des cotisations sociales,
    pour tenir compte de frais professionnels, dans certaines professions/secteurs éligibles.
  </p>

  <div class="formula formula-warn">
    <p class="formula-title">⚠️ Règle absolue</p>
    <p class="formula-content">
      La DFS n’est <b>jamais</b> applicable à la <b>CSG</b> ni à la <b>CRDS</b> (et donc pas sur la base CSG/CRDS).
    </p>
  </div>

  <h3>2) Spécificité MAJEURE du BTP : régime dérogatoire</h3>
  <p>
    Le secteur du <b>BTP (construction)</b> bénéficie d’un <b>régime dérogatoire officiel</b>,
    confirmé par :<br>
    • <b>courrier DSS du 22 avril 2022</b><br>
    • mises à jour du <b>BOSS (18 novembre 2022)</b><br>
    ➜ En contrepartie : <b>sortie progressive programmée</b> de la DFS.
  </p>

  <h3>3) Maintien des anciennes règles dans le BTP (jusqu’au 31/12/2031)</h3>

  <div class="formula formula-reminder">
    <p class="formula-title">✅ Régime favorable BTP (transitoire)</p>
    <p class="formula-content">
      Jusqu’au <b>31/12/2031</b>, la DFS BTP peut être appliquée selon des règles assouplies.
    </p>
  </div>

  <ul>
    <li>
      ✅ <b>Possible même sans frais réellement engagés</b> (pas d’exigence de frais supportés par le salarié).
    </li>
    <li>
      ✅ <b>Cumulable avec les remboursements de frais professionnels</b> (panier, transport, remboursements…),
      alors que ce cumul serait interdit hors BTP.
    </li>
    <li>
      ✅ <b>Applicable aux indemnités de congés payés versées par la CIBTP</b>
      (la caisse applique la DFS sur les indemnités qu’elle verse).
    </li>
  </ul>

  <h3>4) Consentement salarié (assoupli en BTP)</h3>
  <ul>
    <li>
      Salariés ayant donné leur accord <b>avant le 01/01/2023</b> :
      accord valable pour toute la période transitoire (<b>jusqu’en 2031</b>).
    </li>
    <li>
      Salariés embauchés à compter du <b>01/01/2023</b> :
      accord requis <b>une seule fois</b>, valable jusqu’en <b>2031</b>.
    </li>
  </ul>

  <div class="formula formula-warn">
    <p class="formula-title">⚠️ Exception</p>
    <p class="formula-content">
      Exception mentionnée au cours : <b>journalistes</b> (CE 29/11/2023).
    </p>
  </div>

  <h3>5) Sortie progressive : tableau officiel des taux (construction)</h3>
  <div class="formula formula-formula">
    <p class="formula-title">📉 Taux DFS — secteur de la construction</p>
    <p class="formula-content">
      2023 : <b>10 %</b><br>
      2024 : <b>9 %</b><br>
      2025 : <b>8 %</b><br>
      2026 : <b>7 %</b><br>
      2027 : <b>6 %</b><br>
      2028 : <b>5 %</b><br>
      2029 : <b>4 %</b><br>
      2030 : <b>3 %</b><br>
      2031 : <b>1,5 %</b><br>
      À partir de 2032 : <b>0 %</b> (suppression définitive)
    </p>
  </div>

  <div class="formula formula-reminder">
    <p class="formula-title">📌 À retenir</p>
    <p class="formula-content">
      Ce tableau <b>remplace</b> la règle générale des <b>-15 %</b> pour le BTP.
      <b>2032 = suppression définitive</b>.
    </p>
  </div>

  <h3>6) Salariés éligibles (critère = activité réelle sur chantier)</h3>
  <p>
    Le critère est <b>l’activité réelle</b> du salarié (chantier), pas son rattachement administratif.
    En cas d’activité mixte : on retient <b>l’activité principale</b>.
  </p>

  <div class="formula formula-example">
    <p class="formula-title">✅ Éligibles (en pratique)</p>
    <p class="formula-content">
      • Ouvriers travaillant sur chantier<br>
      • Apprentis du bâtiment<br>
      • Poseurs d’affiches sur chantier<br>
      • Agents de maîtrise présents durablement sur chantier<br>
      • Chefs de chantier<br>
      • Conducteurs de travaux
    </p>
  </div>

  <div class="formula formula-warn">
    <p class="formula-title">❌ Exclus</p>
    <p class="formula-content">
      • Personnel administratif<br>
      • Salariés travaillant en atelier<br>
      • Dirigeants (sauf exception)<br>
      • Activités hors chantier
    </p>
  </div>

  <h3>7) Assiette de calcul en BTP (spécifique et large)</h3>
  <p>
    En BTP, l’assiette avant abattement (brut non abattu) est <b>volontairement large</b>.
  </p>

  <div class="formula formula-formula">
    <p class="formula-title">🔹 Assiette avant DFS (brut non abattu)</p>
    <p class="formula-content">
      Salaire brut<br>
      + primes / gratifications<br>
      + indemnités de frais<br>
      + remboursements de frais<br>
      + prises en charge directes
    </p>
  </div>

  <div class="formula formula-formula">
    <p class="formula-title">🧾 Calcul</p>
    <p class="formula-content">
      <b>DFS</b> = assiette brute × <b>taux DFS de l’année</b><br>
      <b>Assiette cotisations</b> = assiette brute − DFS
    </p>
  </div>

  <h3>8) Cotisations concernées / exclusions</h3>
  <div class="formula formula-example">
    <p class="formula-title">✅ DFS applicable sur (exemples)</p>
    <p class="formula-content">
      • Cotisations Sécurité sociale • chômage • retraite complémentaire<br>
      • CSA • formation professionnelle • taxe d’apprentissage<br>
      • FNAL, etc.
    </p>
  </div>

  <div class="formula formula-warn">
    <p class="formula-title">❌ DFS non applicable sur</p>
    <p class="formula-content">
      • <b>CSG</b> • <b>CRDS</b> • <b>impôt sur le revenu</b>
    </p>
  </div>

  <h3>9) Limites impératives (même en BTP)</h3>

  <div class="formula formula-formula">
    <p class="formula-title">🔸 Plafond annuel</p>
    <p class="formula-content">
      <b>7 600 €</b> par salarié et par <b>année civile</b> (suivi mois par mois).<br>
      Le <b>mois de dépassement</b> : application du <b>reliquat uniquement</b>.
    </p>
  </div>

  <div class="formula formula-formula">
    <p class="formula-title">🔸 Plancher SMIC</p>
    <p class="formula-content">
      La base après DFS <b>ne peut pas descendre sous le SMIC</b>
      (majoré des primes et majorations légales).
    </p>
  </div>

  <h3>10) Exemples chiffrés</h3>

  <div class="formula formula-example">
    <p class="formula-title">✅ Exemple annuel (BTP — 2026)</p>
    <p class="formula-content">
      Données :<br>
      • Salaire brut annuel : <b>30 000 €</b><br>
      • Indemnités de frais : <b>7 000 €</b><br>
      • Taux DFS 2026 : <b>7 %</b><br><br>
      Calcul :<br>
      Assiette brute = 30 000 + 7 000 = <b>37 000 €</b><br>
      DFS = 37 000 × 7 % = <b>2 590 €</b><br>
      Assiette cotisations = 37 000 − 2 590 = <b>34 410 €</b><br>
      ➜ Plafond annuel respecté.
    </p>
  </div>

  <div class="formula formula-example">
    <p class="formula-title">✅ Exemple mensuel (logique bulletin)</p>
    <p class="formula-content">
      Données :<br>
      • Assiette brute mensuelle : <b>3 100 €</b><br>
      • Taux DFS : <b>7 %</b><br><br>
      DFS mensuelle = 3 100 × 7 % = <b>217 €</b><br>
      Base cotisations = 3 100 − 217 = <b>2 883 €</b><br>
      <b>Base CSG/CRDS</b> = <b>3 100 €</b> (DFS jamais applicable)<br><br>
      📌 La DFS se cumule mois par mois jusqu’à atteindre le plafond annuel.
    </p>
  </div>

  <div class="formula formula-reminder">
    <p class="formula-title">🧠 Synthèse “réflexe examen / paie”</p>
    <p class="formula-content">
      ✔️ DFS BTP = <b>régime dérogatoire</b> (transitoire)<br>
      ✔️ Possible <b>sans frais réels</b> jusqu’en 2031<br>
      ✔️ <b>Cumulable</b> avec frais + applicable aux CP <b>CIBTP</b><br>
      ✔️ Taux spécifiques jusqu’en 2031 • 📅 <b>2032 = suppression</b><br>
      ❌ <b>Jamais</b> sur <b>CSG/CRDS</b>
    </p>
  </div>

      <h3>🟦 Focus — SANS DFS : régime URSSAF des frais professionnels</h3>

<div class="formula formula-reminder">
  <p class="formula-title">Principe</p>
  <p class="formula-content">
    <b>Sans DFS</b>, on applique le <b>régime classique URSSAF des frais professionnels</b>.<br>
    Les indemnités de frais (panier, transport, déplacement…) peuvent être
    <b>exonérées de cotisations sociales dans la limite des barèmes URSSAF</b>.<br>
    La <b>fraction qui dépasse le plafond</b> redevient <b>soumise à cotisations</b>.
  </p>
</div>

<div class="formula formula-formula">
  <p class="formula-title">🧾 Conséquence en paie</p>
  <p class="formula-content">
    • Montant versé ≤ plafond URSSAF → <b>exclu de l’assiette</b> (exonéré)<br>
    • Montant versé &gt; plafond URSSAF → <b>part excédentaire soumise</b><br>
    (sauf justification de <b>frais réels</b> selon les règles).
  </p>
</div>

<div class="formula formula-example">
  <p class="formula-title">📊 Exemple rapide (indemnité repas)</p>
  <p class="formula-content">
    Hypothèse : indemnité repas « en déplacement » — plafond URSSAF 2026 = <b>21,40 €</b><br><br>
    • Indemnité versée : <b>18 €</b> → <b>18 € exonérés</b><br>
    • Indemnité versée : <b>25 €</b> → <b>21,40 € exonérés</b> + <b>3,60 € soumis</b>
  </p>
</div>

<div class="formula formula-warn">
  <p class="formula-title">⚠️ Vigilances BTP</p>
  <p class="formula-content">
    • En BTP, l’<b>indemnité de trajet</b> est <b>toujours soumise</b> (ce n’est pas un frais pro exonérable).<br>
    • Les indemnités de <b>panier</b> et de <b>transport</b> peuvent être exonérées
    <b>uniquement si</b> les conditions sont remplies (chantier/déplacement)
    <b>et dans les limites URSSAF</b>.
  </p>
</div>

<p>
  🔗 <a href="https://www.urssaf.fr/accueil/outils-documentation/taux-baremes/frais-professionnels.html"
       target="_blank" rel="noopener noreferrer">
    URSSAF — Barèmes des frais professionnels
  </a>
</p>

      <h3>Sources utiles</h3>
      <ul>
        <li>
          <a href="https://boss.gouv.fr/accueil/autres-elements-de-remuneration/frais-professionnels.html"
             target="_blank" rel="noopener noreferrer">
            URSSAF — Frais professionnels
          </a>
        </li>
        <li>
          <a href="https://entreprise.mma.fr/connexionpro/deduction-forfaitaire-specifique-btp.html"
             target="_blank" rel="noopener noreferrer">
            MMA — DFS / BTP
          </a>
        </li>
          <a href="https://www.urssaf.fr/accueil/actualites/frais-pro-deduction-forfaitaire.html"
             target="_blank" rel="noopener noreferrer">
            URSSAF — DFS / actualités
          </a>
        </li>
      </ul>
    `,
  },

  // =========================================================
  // 5) BULLETIN DE PAIE BTP (menu)
  // =========================================================
  {
    id: "bulletin-paie-btp",
    group: "main",
    title: "Bulletin de paie (BTP) — Méthode complète",
    content: `
      <div class="formula formula-reminder">
        <p class="formula-title">🧠 Réflexe examen</p>
        <p class="formula-content">
          « J’analyse d’abord l’entreprise et le salarié pour savoir quelles lignes figureront sur le bulletin,
          avant de calculer. »
        </p>
      </div>

      <ul class="card-menu">
        <li><a href="#/btp/btp-bulletin-checklist">✅ Checklist avant bulletin</a></li>
        <li><a href="#/btp/btp-bulletin-step1">Étape 1 — Construire le brut</a></li>
        <li><a href="#/btp/btp-bulletin-step2">Étape 2 — Trier le brut</a></li>
        <li><a href="#/btp/btp-bulletin-step3">Étape 3 — Construire les assiettes</a></li>
        <li><a href="#/btp/btp-bulletin-step3bis">Étape 3 bis — Assiettes express</a></li>
        <li><a href="#/btp/btp-bulletin-step4">Étape 4 — Cotisations & allègements</a></li>
        <li><a href="#/btp/btp-bulletin-step5">Étape 5 — Calcul des nets</a></li>
        <li><a href="#/btp/btp-bulletin-apps">Applications complètes</a></li>
      </ul>
    `,
  },

  // =========================================================
  // BULLETIN BTP — 1) CHECKLIST
  // =========================================================
  {
    id: "btp-bulletin-checklist",
    group: "btp-bulletin",
    title: "Checklist avant bulletin de paie (BTP)",
    content: `
      <div class="formula formula-reminder">
        <p class="formula-title">👉 Règle d’or</p>
        <p class="formula-content">Je ne commence AUCUN calcul tant que je n’ai pas répondu à ces questions.</p>
      </div>

      <!-- TODO: coller ici ta leçon CHECKLIST -->
    `,
  },

  // =========================================================
  // BULLETIN BTP — 2) ÉTAPE 1
  // =========================================================
  {
    id: "btp-bulletin-step1",
    group: "btp-bulletin",
    title: "BTP — Étape 1 : Construire le brut",
    content: `
      <div class="formula formula-reminder">
        <p class="formula-title">🎯 Objectif</p>
        <p class="formula-content">Lister toutes les sommes dues au salarié, sans se poser encore la question du régime social.</p>
      </div>

      <!-- TODO: coller ici ta leçon ÉTAPE 1 -->
    `,
  },

  // =========================================================
  // BULLETIN BTP — 3) ÉTAPE 2
  // =========================================================
  {
    id: "btp-bulletin-step2",
    group: "btp-bulletin",
    title: "BTP — Étape 2 : Trier le brut (soumis / exonéré / partiellement soumis)",
    content: `
      <div class="formula formula-reminder">
        <p class="formula-title">🎯 Objectif</p>
        <p class="formula-content">Pour chaque ligne du brut : déterminer si elle est soumise, exonérée (dans une limite) ou partiellement soumise.</p>
      </div>

      <!-- TODO: coller ici ta leçon ÉTAPE 2 -->
    `,
  },

  // =========================================================
  // BULLETIN BTP — 4) ÉTAPE 3
  // =========================================================
  {
    id: "btp-bulletin-step3",
    group: "btp-bulletin",
    title: "BTP — Étape 3 : Construire les assiettes de cotisations",
    content: `
      <div class="formula formula-reminder">
        <p class="formula-title">🎯 Objectif</p>
        <p class="formula-content">Associer chaque cotisation à la bonne base (Brut SS, Base CIBTP, bases majorées ×1,115 / ×1,1314).</p>
      </div>

      <!-- TODO: coller ici ta leçon ÉTAPE 3 -->
    `,
  },

  // =========================================================
  // BULLETIN BTP — 5) ÉTAPE 3 BIS
  // =========================================================
  {
    id: "btp-bulletin-step3bis",
    group: "btp-bulletin",
    title: "BTP — Étape 3 bis : Assiettes express (fiche examen)",
    content: `
      <div class="formula formula-reminder">
        <p class="formula-title">⚡ Objectif</p>
        <p class="formula-content">Reconnaître la cotisation → associer immédiatement la base + la majoration (si applicable).</p>
      </div>

      <!-- TODO: coller ici ta leçon ÉTAPE 3 BIS -->
    `,
  },

  // =========================================================
  // BULLETIN BTP — 6) ÉTAPE 4
  // =========================================================
  {
    id: "btp-bulletin-step4",
    group: "btp-bulletin",
    title: "BTP — Étape 4 : Cotisations & allègements",
    content: `
      <div class="formula formula-warn">
        <p class="formula-title">⚠️ Règle d’or</p>
        <p class="formula-content">Je calcule toujours les cotisations AVANT les allègements.</p>
      </div>

      <!-- TODO: coller ici ta leçon ÉTAPE 4 -->
    `,
  },

  // =========================================================
  // BULLETIN BTP — 7) ÉTAPE 5
  // =========================================================
  {
    id: "btp-bulletin-step5",
    group: "btp-bulletin",
    title: "BTP — Étape 5 : Calcul des nets (net imposable vs net à payer)",
    content: `
      <div class="formula formula-reminder">
        <p class="formula-title">✅ À retenir</p>
        <p class="formula-content">Le net imposable ≠ le net à payer. (logique fisc vs banque)</p>
      </div>

      <!-- TODO: coller ici ta leçon ÉTAPE 5 -->
    `,
  },

  // =========================================================
  // BULLETIN BTP — 8) HUB APPLICATIONS
  // =========================================================
  {
    id: "btp-bulletin-apps",
    group: "btp-bulletin",
    title: "BTP — Applications complètes",
    content: `
      <div class="formula formula-reminder">
        <p class="formula-title">🧾 Objectif</p>
        <p class="formula-content">Choisir un cas complet chiffré et suivre la méthode de bout en bout.</p>
      </div>

      <ul class="card-menu">
        <li><a href="#/btp/btp-bulletin-apps-a">🧮 CAS A — Entreprise &lt; 11 salariés</a></li>
        <li><a href="#/btp/btp-bulletin-apps-b">🧮 CAS B — Entreprise ≥ 50 salariés</a></li>
      </ul>
    `,
  },

  // =========================================================
  // APPLICATIONS — CAS A
  // =========================================================
  {
    id: "btp-bulletin-apps-a",
    group: "btp-bulletin",
    title: "Application complète — CAS A (Entreprise < 11 salariés)",
    content: `
      <div class="formula formula-reminder">
        <p class="formula-title">📌 Données</p>
        <p class="formula-content">Entreprise 9 salariés — ouvrier — IDF hors 77 — CIBTP — DFS non — etc.</p>
      </div>

      <!-- TODO: coller ici ton CAS A complet -->
    `,
  },

  // =========================================================
  // APPLICATIONS — CAS B
  // =========================================================
  {
    id: "btp-bulletin-apps-b",
    group: "btp-bulletin",
    title: "Application complète — CAS B (Entreprise ≥ 50 salariés)",
    content: `
      <div class="formula formula-reminder">
        <p class="formula-title">📌 Données</p>
        <p class="formula-content">Entreprise 500 salariés — FNAL plein taux — PEEC — pas de déduction patronale HS — etc.</p>
      </div>

      <!-- TODO: coller ici ton CAS B complet -->
    `,
  },
];
