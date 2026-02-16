// src/data/btpIntemperiesCard.js

export const btpIntemperiesCard = {
  id: "intemperies-btp",
  group: "main",
  title: "Intempéries BTP (paiement & gestion)",
  content: `
    <div class="formula formula-reminder">
      <p class="formula-title">🧠 Définition</p>
      <p class="formula-content">
        Les <b>intempéries BTP</b> correspondent à des <b>conditions météo</b> rendant
        <b>impossible</b> ou <b>dangereuse</b> la poursuite du travail sur chantier
        (pluie intense, neige, verglas, gel, vent violent, etc.).
        <br><br>
        👉 Régime <b>spécifique au BTP</b>, géré via la <b>CIBTP</b>.
      </p>
    </div>

    <div class="formula formula-warn">
      <p class="formula-title">⚠️ Point clé</p>
      <p class="formula-content">
        Intempéries ≠ activité partielle ≠ maladie ≠ absence simple.<br>
        En examen : <b>météo sur chantier BTP → réflexe “Intempéries BTP”</b>.
      </p>
    </div>

    <h3>1) Qui décide ?</h3>
    <p style="text-align:center;">
      L’arrêt du chantier est décidé par <b>l’employeur / chef de chantier</b> (responsabilité sécurité).<br>
      Le salarié <b>ne décide pas</b> seul.
    </p>

    <h3>2) Décision de l’arrêt (référence officielle)</h3>
    <p style="text-align:center;">
      L’arrêt doit être justifié par un <b>danger réel</b> ou une <b>impossibilité</b> de travailler.
    </p>

    <ul class="centered-list">
      <li>
        🔗 Référence officielle CIBTP :
        <a href="https://www.cibtp.fr" target="_blank" rel="noreferrer">
          https://www.cibtp.fr
        </a>
      </li>
    </ul>

    <h3>3) Effet sur le contrat</h3>
    <p style="text-align:center;">
      Le contrat de travail est <b>suspendu</b> pendant l’arrêt intempéries.<br>
      Ce n’est <b>ni</b> une faute, <b>ni</b> une absence injustifiée, <b>ni</b> un congé,
      <b>ni</b> de l’activité partielle.
    </p>
    

    <h3>4) Principe de l’indemnisation intempéries</h3>
    <div class="formula formula-reminder">
      <p class="formula-title">💶 Paiement</p>
      <p class="formula-content">
        <b>1)</b> L’entreprise <b>avance</b> l’indemnité au salarié.<br>
        <b>2)</b> L’entreprise demande ensuite un <b>remboursement</b> à la <b>CIBTP</b>.<br><br>
        ⚠️ L’employeur n’est <b>pas remboursé à 100%</b> (règles de remboursement propres à la caisse).
      </p>
    </div>

    <ul class="centered-list">
      <li>
        🔗 Présentation URSSAF du dispositif :
        <a href="https://www.urssaf.fr/accueil/employeur/reduire-cesser-activite/dispositif-chomage-intemperies.html"
           target="_blank" rel="noreferrer">
          https://www.urssaf.fr/accueil/employeur/reduire-cesser-activite/dispositif-chomage-intemperies.html
        </a>
      </li>
    </ul>

    <h3>5) Conditions pour être indemnisé</h3>
    <ul class="centered-list bullets">
      <li>Relever du <b>secteur BTP</b></li>
      <li>Être habituellement employé <b>sur chantier</b></li>
      <li>Être <b>présent</b> et <b>apte</b> à travailler au moment de l’arrêt</li>
      <li>Justifier d’un <b>minimum d’activité antérieure</b></li>
    </ul>


    <div class="formula formula-reminder">
      <p class="formula-title">⏱️ Condition d’activité minimale</p>
      <p class="formula-content">
        👉 <b>200 heures</b> travaillées au cours des <b>2 mois</b> précédents l’arrêt.
      </p>
    </div>

    <ul class="centered-list">
      <li>
        🔗 Code du travail — Intempéries BTP :
        <a href="https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006072050/LEGISCTA000018496414/"
           target="_blank" rel="noreferrer">
          https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006072050/LEGISCTA000018496414/
        </a>
      </li>
    </ul>

    <h3>6) La règle clé : la carence</h3>
    <div class="formula formula-warn">
      <p class="formula-title">⚠️ 1 heure de carence obligatoire</p>
      <p class="formula-content">
        • La <b>première heure</b> d’arrêt n’est <b>jamais indemnisée</b>.<br>
        • L’indemnisation commence à partir de la <b>2ᵉ heure</b>.<br>
        • Si l’arrêt dure moins d’1 heure après carence → <b>pas d’indemnité</b>.
      </p>
    </div>

    <ul class="centered-list">
      <li>
        🔗 Explications CIBTP (salarié) :
        <a href="https://www.cibtp-idf.fr/salarie/chomage-intemperies/votre-indemnisation"
           target="_blank" rel="noreferrer">
          https://www.cibtp-idf.fr/salarie/chomage-intemperies/votre-indemnisation
        </a>
      </li>
    </ul>

    <h3>7) Calcul de l’indemnité intempéries</h3>

    <div class="formula formula-formula">
      <p class="formula-title">🔹 Étape 1 — Heures indemnisables</p>
      <p class="formula-content">
        Heures indemnisables = heures perdues − <b>1 heure</b> (carence)
      </p>
    </div>

    <div class="formula formula-reminder">
      <p class="formula-title">🔹 Étape 2 — Salaire horaire de référence (Sh)</p>
      <p class="formula-content">
        Sh = salaire horaire normal avant arrêt (hors heures sup, hors primes exceptionnelles / frais).<br>
        🔒 Plafond : Sh limité à <b>120%</b> du <b>plafond horaire de la Sécurité sociale</b>.
      </p>
    </div>

    <ul class="centered-list">
      <li>
        🔗 URSSAF — Plafonds SS :
        <a href="https://www.urssaf.fr/accueil/outils-documentation/taux-baremes/plafonds-securite-sociale.html"
           target="_blank" rel="noreferrer">
         https://www.urssaf.fr/accueil/outils-documentation/taux-baremes/plafonds-securite-sociale.html
        </a>
      </li>
    </ul>

    <div class="formula formula-formula">
      <p class="formula-title">🔹 Étape 3 — Formule officielle</p>
      <p class="formula-content">
        <b>Indemnité intempéries</b> = <b>75%</b> × <b>Sh</b> × <b>heures indemnisables</b>
      </p>
    </div>

    <div class="formula formula-example">
      <p class="formula-title">🧮 Exemple (type examen)</p>
      <p class="formula-content">
        Arrêt = 8h → carence 1h → heures indemnisables = 7h<br>
        Sh = 15€<br><br>
        Indemnité = 0,75 × 15 × 7 = <b>78,75€</b>
      </p>
    </div>

    <h3>8) Remboursement de l’employeur par la CIBTP (dégressif)</h3>

    <div class="formula formula-warn">
      <p class="formula-title">⚠️ Point clé</p>
      <p class="formula-content">
        L’employeur <b>n’est pas remboursé à 100%</b>.<br>
        Principe général (mémo) :<br>
        • <b>6 premières heures indemnisées</b> : remboursement faible (ex. ≈ <b>10%</b>)<br>
        • <b>heures suivantes</b> : remboursement majoritaire (ex. ≈ <b>85% à 90%</b> selon caisse / situation)<br><br>
        👉 Retenir surtout : <b>dégressif + reste à charge employeur</b>.
      </p>
    </div>

    <ul class="centered-list">
      <li>
        🔗 Détail du remboursement (exemple régional CIBTP) :
        <a href="https://www.cibtp-sud-ouest.fr/entreprise/chomage-intemperies/remboursement-a-lentreprise"
           target="_blank" rel="noreferrer">
          https://www.cibtp-sud-ouest.fr/entreprise/chomage-intemperies/remboursement-a-lentreprise
        </a>
      </li>
    </ul>

    <h3>9) Différence essentielle avec l’activité partielle</h3>
    <div class="formula formula-reminder">
      <p class="formula-title">🧭 Tableau de réflexe</p>
      <p class="formula-content">
        Météo empêchant le travail BTP → <b>Intempéries BTP</b><br>
        Baisse d’activité économique / fermeture administrative → <b>Activité partielle</b><br><br>
        🧠 Priorité absolue aux intempéries lorsque la météo est la cause en BTP.
      </p>
    </div>

    <div class="formula formula-reminder">
      <p class="formula-title">🧠 Phrase-clé examen</p>
      <p class="formula-content">
        « En BTP, un arrêt de chantier dû à la météo relève du régime des <b>intempéries</b>,
        jamais de l’activité partielle. »
      </p>
    </div>
  `,
};
