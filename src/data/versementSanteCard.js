// src/data/versementSanteCard.js

export const versementSanteCard = {
    id: "versement-sante",
    group: "referentiel",
    title: "📘 Versement Santé (chèque santé) — 2026",
    content: `


  <div class="formula formula-reminder">
    <p class="formula-title">✅ Objectif</p>
    <p class="formula-content">
      Comprendre <b>quand</b> l’employeur doit proposer le <b>versement santé</b>, <b>à qui</b>, <b>comment</b> le calculer
      (montant de référence + coefficient + proratisation) et connaître le <b>régime social</b> (CSG/CRDS + forfait social).
    </p>
  </div>

  <h3>1️⃣ Définition : à quoi sert le versement santé ?</h3>
  <p style="text-align:center;">
    Le <b>versement santé</b> (souvent appelé “chèque santé”) est une <b>aide financière versée par l’employeur</b> à certains salariés
    <b>dispensés</b> de la mutuelle d’entreprise, afin de les aider à financer leur <b>complémentaire santé individuelle</b>
    (à condition qu’elle soit <b>responsable</b>).
  </p>
  <p style="text-align:center;">
    👉 Il s’agit donc d’un <b>remplacement de la couverture collective obligatoire</b> (mutuelle d’entreprise) <b>uniquement</b>
    pour les salariés qui ont une <b>dispense d’adhésion valable</b>.
  </p>

  <div class="formula formula-reminder">
    <p class="formula-title">📌 Base légale principale</p>
    <p class="formula-content">
      Code de la sécurité sociale — <b>article L. 911-7-1</b> :<br/>
      <a href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000037950320" target="_blank" rel="noreferrer">
        https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000037950320
      </a>
    </p>
  </div>

  <div class="formula formula-reminder">
    <p class="formula-title">📌 Rappel : obligation “mutuelle d’entreprise”</p>
    <p class="formula-content">
      Service-Public (Entreprendre) — Complémentaire santé d’entreprise :<br/>
      <a href="https://entreprendre.service-public.gouv.fr/vosdroits/F33754" target="_blank" rel="noreferrer">
        https://entreprendre.service-public.gouv.fr/vosdroits/F33754
      </a>
    </p>
  </div>

  <h3>2️⃣ Qui est concerné ? (règle + cas pratiques examen)</h3>

  <div class="formula formula-reminder">
    <p class="formula-title">✅ Principe</p>
    <p class="formula-content">
      Quel que soit le contrat (<b>CDD, CDI ou intérim/mission</b>), le salarié doit en principe être affilié à la
      <b>mutuelle d’entreprise dès l’embauche</b>, même pour une durée très courte.
    </p>
  </div>

  <div class="formula formula-formula">
    <p class="formula-title">✅ Exception : dispense d’adhésion → obligation de proposer le versement santé</p>
    <p class="formula-content">
      L’employeur doit proposer le <b>versement santé</b> uniquement si le salarié :
      <br/>1) <b>peut être dispensé</b> de la mutuelle d’entreprise (cas de dispense autorisé),
      <br/>2) <b>justifie</b> d’une <b>complémentaire santé individuelle responsable</b>,
      <br/>3) produit une <b>attestation</b> de son organisme assureur.
    </p>
  </div>

  <h3>3️⃣ Conditions à respecter (à vérifier en paie)</h3>

  <p style="text-align:center;">
    Pour bénéficier du versement santé, le salarié doit <b>justifier</b> d’une <b>couverture individuelle responsable</b>
    (attestation à produire), et respecter les règles de non-cumul.
  </p>

  <div class="formula formula-warn">
    <p class="formula-title">⛔ Le salarié ne doit pas, par ailleurs :</p>
    <p class="formula-content">
      • être déjà bénéficiaire d’une <b>couverture collective</b>,<br/>
      • avoir contracté une couverture santé <b>financée partiellement par une collectivité publique</b>,<br/>
      • être bénéficiaire de la <b>CSS</b> (Complémentaire Santé Solidaire).
    </p>
  </div>

  <h3>4️⃣ Montant du versement santé (méthode de calcul)</h3>

  <div class="formula formula-formula">
    <p class="formula-title">✅ Étape 1 — Déterminer le “montant de référence”</p>
    <p class="formula-content">
      Le <b>montant de référence</b> correspond à la <b>contribution mensuelle de l’employeur</b> à la mutuelle santé
      (celle qui aurait été payée si le salarié avait adhéré).
    </p>
  </div>

  <div class="formula formula-formula">
    <p class="formula-title">✅ Étape 2 — Appliquer le coefficient selon le contrat</p>
    <p class="formula-content">
      Le montant de référence est multiplié par un coefficient de :
      <br/>• <b>105 %</b> pour les salariés en <b>CDI</b>
      <br/>• <b>125 %</b> pour les salariés en <b>CDD</b> ou en <b>contrat de mission</b> (intérim)
    </p>
  </div>

  <div class="formula formula-formula">
    <p class="formula-title">✅ Étape 3 — Proratiser si temps partiel</p>
    <p class="formula-content">
      Le versement est <b>proportionnel</b> à la durée du travail du salarié dans l’entreprise.
      En pratique paie, on utilise souvent :<br/>
      <b>Versement proratisé = (Versement temps plein) × (Heures mensuelles du contrat / 151,67 h)</b>
    </p>
  </div>

  <h3>5️⃣ Montant minimum légal (si la référence est trop faible)</h3>

  <div class="formula formula-reminder">
    <p class="formula-title">✅ Montants minimums (montant de référence minimal)</p>
    <p class="formula-content">
      Arrêté du <b>8 janvier 2026</b> (JO du 13 janvier 2026) :<br/>
      • <b>22,27 €</b> (régime général)<br/>
      • <b>7,44 €</b> (Alsace-Moselle)<br/>
      <a href="https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000053346060" target="_blank" rel="noreferrer">
        https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000053346060
      </a>
    </p>
  </div>

  <div class="formula formula-warn">
    <p class="formula-title">⚠️ Piège examen</p>
    <p class="formula-content">
      Ne pas rester sur les montants 2024 (20,75 € / 6,93 €) : ils ont été <b>revalorisés</b> en 2026.
    </p>
  </div>

  <h3>6️⃣ Exemples chiffrés (arrondis au centime)</h3>

  <div class="formula formula-example">
    <p class="formula-title">✅ Exemple 1 — CDD 3 mois, temps plein</p>
    <p class="formula-content">
      M. DOMALIN est embauché 3 mois à 35 h/semaine (temps plein). Il a une mutuelle individuelle responsable et une dispense validée.<br/>
      Contribution employeur mutuelle : <b>30,00 €</b> / mois. Contrat : <b>CDD</b> → coefficient <b>125 %</b>.<br/><br/>
      <b>Versement santé = 30,00 × 1,25 = 37,50 €</b><br/>
      ➡️ Montant versé : <b>37,50 €</b> (par mois)
    </p>
  </div>

  <div class="formula formula-example">
    <p class="formula-title">✅ Exemple 2 — CDI 15 h/semaine (temps partiel)</p>
    <p class="formula-content">
      Mme DOUPLIN est en <b>CDI</b> à <b>15 h/semaine</b>. Contribution employeur “temps plein” : <b>30,00 €</b> / mois.
      CDI → coefficient <b>105 %</b>. Heures mensuelles : <b>15 × 52 / 12 = 65,00 h</b>.<br/><br/>
      1) Référence majorée : <b>30,00 × 1,05 = 31,50 €</b><br/>
      2) Proratisation : <b>31,50 / 151,67 × 65,00 = 13,50 €</b> (arrondi)<br/>
      ➡️ Versement santé : <b>13,50 €</b> / mois
    </p>
  </div>

  <div class="formula formula-example">
    <p class="formula-title">✅ Application — Entreprise DEMEMT</p>
    <p class="formula-content">
      Entreprise DEMEMT : <b>5 salariés</b>. M. DAVOTTE : non-cadre, <b>CDD 2 mois</b>, temps plein, taux horaire <b>15,50 €</b>, pas de variable.
      Part patronale mutuelle : <b>22,00 €</b>. CDD → coefficient <b>125 %</b>.<br/><br/>
      Salaire de base : <b>151,67 × 15,50 = 2 350,89 €</b><br/>
      Versement santé : <b>22,00 × 1,25 = 27,50 €</b><br/>
      ➡️ Versement santé : <b>27,50 €</b>
    </p>
  </div>

  <div class="formula formula-example">
    <p class="formula-title">✅ Cas “plancher” 2026 (minimum légal)</p>
    <p class="formula-content">
      Minimum mensuel 2026 (régime général) : <b>22,27 €</b>.<br/>
      Exemple (CDI, 15 h/semaine = 65 h/mois) :<br/>
      1) Minimum proratisé : <b>22,27 / 151,67 × 65 = 9,54 €</b> (arrondi)<br/>
      2) CDI → × 1,05 : <b>9,54 × 1,05 = 10,02 €</b><br/>
      ➡️ Versement santé minimum : <b>10,02 €</b> / mois
    </p>
  </div>

  <h3>7️⃣ Régime social (cotisations / CSG-CRDS / forfait social)</h3>

  <div class="formula formula-reminder">
    <p class="formula-title">✅ Cotisations sociales</p>
    <p class="formula-content">
      Les sommes versées au titre du versement santé sont <b>exonérées de cotisations sociales</b> (dans les conditions du dispositif),
      mais restent soumises aux règles spécifiques (CSG/CRDS + forfait social selon l’effectif).
    </p>
  </div>

  <div class="formula formula-formula">
    <p class="formula-title">✅ CSG/CRDS</p>
    <p class="formula-content">
      Le versement santé est <b>assujetti en totalité</b> à la <b>CSG/CRDS</b> (sur 100 %).
    </p>
  </div>

  <div class="formula formula-formula">
    <p class="formula-title">✅ Forfait social (11 salariés et +)</p>
    <p class="formula-content">
      Si l’entreprise a <b>11 salariés ou plus</b>, il y a <b>forfait social</b> au taux de <b>8 %</b> sur les contributions “frais de santé”.<br/>
      Référence URSSAF (complémentaire frais de santé) :<br/>
      <a href="https://www.urssaf.fr/accueil/employeur/embaucher-gerer-salaries/embaucher/complementaire-frais-sante.html" target="_blank" rel="noreferrer">
        https://www.urssaf.fr/accueil/employeur/embaucher-gerer-salaries/embaucher/complementaire-frais-sante.html
      </a>
    </p>
  </div>

  <div class="formula formula-warn">
    <p class="formula-title">⚠️ Piège examen</p>
    <p class="formula-content">
      <b>Moins de 11 salariés</b> : pas de forfait social, mais la <b>CSG/CRDS</b> reste due.
    </p>
  </div>

  <h3>8️⃣ Remarque fiscale (prudence)</h3>
  <p style="text-align:center;">
    En pratique, le versement santé est souvent assimilé à un <b>revenu imposable</b> (logique proche d’une contribution patronale),
    mais le cours/logiciel peut préciser le traitement “net imposable / PAS” dans un module dédié.
  </p>

  <h3>9️⃣ Attention (méthode pédagogique — ce qu’on calcule maintenant)</h3>

  <div class="formula formula-warn">
    <p class="formula-title">⚠️ Important</p>
    <p class="formula-content">
      Tu es dans le module “cotisations sociales” (diverses cotisations).<br/>
      À ce stade, on te demande surtout de savoir :<br/>
      • identifier l’éligibilité<br/>
      • calculer le montant du versement santé<br/>
      • comprendre l’impact : CSG/CRDS + éventuellement forfait social<br/><br/>
      Les calculs complets “bulletin final” (net imposable, net à payer, réductions, PAS, etc.) seront vus dans les modules dédiés.
    </p>
  </div>

  <h3>🔟 Mini-simulation : repère d’assiette</h3>

  <div class="formula formula-reminder">
    <p class="formula-title">📌 Repère</p>
    <p class="formula-content">
      Pour la CSG/CRDS, le brut est généralement pris à <b>98,25 %</b>, puis on <b>ajoute</b> le versement santé (soumis à CSG/CRDS sur 100 %).
      L’objectif ici est seulement de situer l’impact “bas de bulletin”.
    </p>
  </div>

  <h3>1️⃣1️⃣ Liens officiels (à copier)</h3>
  <ul class="centered-list bullets">
    <li>
      Code de la sécurité sociale — article L. 911-7-1 :
      <a href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000037950320" target="_blank" rel="noreferrer">
        https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000037950320
      </a>
    </li>
    <li>
      Arrêté du 8 janvier 2026 (montants minimums) :
      <a href="https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000053346060" target="_blank" rel="noreferrer">
        https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000053346060
      </a>
    </li>
    <li>
      Service-Public (mutuelle d’entreprise + cas) :
      <a href="https://entreprendre.service-public.gouv.fr/vosdroits/F33754" target="_blank" rel="noreferrer">
        https://entreprendre.service-public.gouv.fr/vosdroits/F33754
      </a>
    </li>
    <li>
      URSSAF — complémentaire frais de santé (forfait social) :
      <a href="https://www.urssaf.fr/accueil/employeur/embaucher-gerer-salaries/embaucher/complementaire-frais-sante.html" target="_blank" rel="noreferrer">
        https://www.urssaf.fr/accueil/employeur/embaucher-gerer-salaries/embaucher/complementaire-frais-sante.html
      </a>
    </li>
  </ul>

  <p style="text-align:center;">
  <a href="#/referentiel/urssaf">⬅ Retour “URSSAF”</a>
</p>

  `,
};
