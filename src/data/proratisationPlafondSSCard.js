// src/data/proratisationPlafondSSCard.js
export const proratisationPlafondSSCard = {
    id: "proratisation-plafond-ss",
    group: "referentiel",
    title: "Proratisation du plafond de Sécurité sociale (PSS)",
    content: `

  <div class="formula formula-reminder">
    <p class="formula-title">📘 PRORATISATION DU PLAFOND DE SÉCURITÉ SOCIALE (PSS)</p>
    <p class="formula-content">
      (Application à la cotisation vieillesse plafonnée – 2026)
    </p>
  </div>

  <h3>1️⃣ Pourquoi on proratise le plafond ?</h3>

  <p style="text-align:center;">
    La cotisation vieillesse plafonnée est calculée :
  </p>

  <p style="text-align:center;">
    sur la rémunération dans la limite du plafond de Sécurité sociale (PSS).
  </p>

  <p style="text-align:center;">
    Or, le plafond mensuel (PMSS) n’est pas toujours applicable en totalité.
  </p>

  <p style="text-align:center;">
    Il doit être ajusté lorsque la situation du salarié ne correspond pas à un mois complet à temps plein.
  </p>

  <p style="text-align:center;">
    📌 Cas nécessitant une proratisation :
  </p>

  <ul class="centered-list bullets">
    <li>📅 Entrée ou sortie en cours de mois</li>
    <li>⏸ Absence non rémunérée</li>
    <li>⏳ Temps partiel</li>
    <li>📆 Mois incomplet</li>
  </ul>

  <p style="text-align:center;">
    👉 Dans ces situations, on applique un plafond proratisé.
  </p>

  <h3>2️⃣ Base légale</h3>

  <p style="text-align:center;">
    📖 Code de la Sécurité sociale – Article R242-2
  </p>

  <p style="text-align:center;">
    (Plafond applicable et modalités d’ajustement)
  </p>

  <p style="text-align:center;">
    Lien officiel Légifrance :
  </p>

  <p style="text-align:center;">
    <a href="https://www.legifrance.gouv.fr/codes/id/LEGITEXT000006073189/"
       target="_blank" rel="noreferrer">
      https://www.legifrance.gouv.fr/codes/id/LEGITEXT000006073189/
    </a>
  </p>

  <p style="text-align:center;">
    📖 URSSAF – Assiette et plafond des cotisations
  </p>

  <p style="text-align:center;">
    <a href="https://www.urssaf.fr/accueil/employeur/cotisations/comprendre-cotisations/calcul-cotisations-employeur.html"
       target="_blank" rel="noreferrer">
      https://www.urssaf.fr/accueil/employeur/cotisations/comprendre-cotisations/calcul-cotisations-employeur.html
    </a>
  </p>

  <h3>3️⃣ Valeur du plafond 2026</h3>

  <p style="text-align:center;">
    PMSS 2026 = <b>4 005 €</b>
  </p>

  <p style="text-align:center;">
    Source officielle Service-Public :
  </p>

  <p style="text-align:center;">
    <a href="https://www.service-public.fr/particuliers/actualites/A15386"
       target="_blank" rel="noreferrer">
      https://www.service-public.fr/particuliers/actualites/A15386
    </a>
  </p>

  <h3>4️⃣ Règles de proratisation</h3>

  <div class="formula formula-formula">
    <p class="formula-title">🟢 CAS 1 — Entrée ou sortie en cours de mois</p>
    <p class="formula-content">
      On proratise le plafond selon le nombre de jours calendaires de présence.
    </p>
  </div>

  <div class="formula formula-formula">
    <p class="formula-title">✔ Formule</p>
    <p class="formula-content">
      Plafond proratisé =<br>
      PMSS × (nombre de jours de présence / nombre de jours calendaires du mois)
    </p>
  </div>

  <div class="formula formula-warn">
    <p class="formula-title">⚠</p>
    <p class="formula-content">
      On raisonne en jours calendaires (du 1er au 31 par exemple), et non en jours ouvrés.
    </p>
  </div>

  <div class="formula formula-example">
    <p class="formula-title">🔎 Exemple 1</p>
    <p class="formula-content">
      Salarié embauché le 10 mars 2026<br>
      Mars = 31 jours<br>
      Présence du 10 au 31 inclus = 22 jours<br><br>
      Plafond proratisé =<br>
      4 005 × (22 / 31)<br>
      22 / 31 = 0,7097<br>
      4 005 × 0,7097 = <b>2 843,34 €</b><br><br>
      👉 La vieillesse plafonnée sera calculée dans la limite de <b>2 843,34 €</b>, même si le salarié perçoit 5 000 €.
    </p>
  </div>

  <div class="formula formula-formula">
    <p class="formula-title">🟢 CAS 2 — Absence non rémunérée (mois incomplet)</p>
    <p class="formula-content">
      Lorsque le salarié perçoit un salaire réduit (absence sans solde, par exemple),
      le plafond est réduit proportionnellement à la rémunération réellement soumise.
    </p>
  </div>

  <div class="formula formula-formula">
    <p class="formula-title">✔ Méthode usuelle en logiciel de paie</p>
    <p class="formula-content">
      Plafond proratisé =<br>
      PMSS × (salaire brut soumis / salaire brut théorique temps plein)
    </p>
  </div>

  <div class="formula formula-example">
    <p class="formula-title">🔎 Exemple 2</p>
    <p class="formula-content">
      Salarié temps plein<br>
      Salaire théorique = 3 000 €<br>
      Absence sans solde = 5 jours<br>
      Salaire versé = 2 500 €<br><br>
      Calcul :<br>
      2 500 / 3 000 = 0,8333<br>
      4 005 × 0,8333 = <b>3 337,50 €</b><br><br>
      👉 Le plafond applicable devient <b>3 337,50 €</b>.
    </p>
  </div>

  <div class="formula formula-formula">
    <p class="formula-title">🟢 CAS 3 — Temps partiel</p>
    <p class="formula-content">
      Le plafond est ajusté proportionnellement à la durée contractuelle.
    </p>
  </div>

  <div class="formula formula-formula">
    <p class="formula-title">✔ Formule</p>
    <p class="formula-content">
      Plafond proratisé =<br>
      PMSS × (durée contractuelle / durée légale)<br>
      Durée légale hebdomadaire = 35 heures.
    </p>
  </div>

  <div class="formula formula-example">
    <p class="formula-title">🔎 Exemple 3</p>
    <p class="formula-content">
      Salarié à 28 heures par semaine<br>
      Durée légale = 35 heures<br>
      Ratio = 28 / 35 = 0,8<br><br>
      Plafond proratisé =<br>
      4 005 × 0,8 = <b>3 204,00 €</b>
    </p>
  </div>

  <h3>5️⃣ Impact sur les cotisations vieillesse</h3>

  <p style="text-align:center;">
    La vieillesse plafonnée utilise le plafond proratisé.
  </p>

  <p style="text-align:center;">
    La vieillesse déplafonnée, elle, reste toujours calculée sur la rémunération totale.
  </p>

  <div class="formula formula-example">
    <p class="formula-title">🔎 Exemple complet</p>
    <p class="formula-content">
      Salaire brut = 4 500 €<br>
      Salarié à 80 % → plafond proratisé = 3 204 €<br><br>
      Bases :<br>
      Base vieillesse plafonnée = min (4 500 ; 3 204) = 3 204 €<br>
      Base vieillesse déplafonnée = 4 500 €<br><br>
      Calcul part salariale :<br>
      Vieillesse plafonnée : 3 204 × 6,90 % = <b>221,08 €</b><br>
      Vieillesse déplafonnée : 4 500 × 0,40 % = <b>18,00 €</b><br><br>
      👉 La proratisation ne concerne que la ligne plafonnée.
    </p>
  </div>

  <h3>6️⃣ Points pièges examen</h3>

  <div class="formula formula-warn">
    <p class="formula-title">⚠</p>
    <p class="formula-content">
      • On proratise le plafond, jamais le taux.<br>
      • Pour entrée/sortie, on raisonne en jours calendaires.<br>
      • La ligne déplafonnée ne change jamais.<br>
      • En cas d’absence avec maintien total du salaire, le plafond n’est pas réduit.<br>
      • En cas d’absence partiellement rémunérée, la proratisation se fait selon la rémunération réellement soumise.
    </p>
  </div>

  <h3>7️⃣ Résumé synthétique</h3>

  <div class="formula formula-formula">
    <p class="formula-title">Situation → Plafond proratisé ?</p>
    <p class="formula-content">
      Mois complet temps plein → ❌ Non<br>
      Entrée / sortie → ✅ Oui<br>
      Temps partiel → ✅ Oui<br>
      Absence sans solde → ✅ Oui<br>
      Absence avec maintien total → ❌ Non
    </p>
  </div>

  <div class="formula formula-reminder">
    <p class="formula-title">🎯 Conclusion pédagogique</p>
    <p class="formula-content">
      La proratisation du plafond de Sécurité sociale est un mécanisme technique indispensable pour :<br>
      • sécuriser les bases vieillesse plafonnées,<br>
      • éviter un sur-plafonnement,<br>
      • garantir la conformité URSSAF.<br><br>
      Elle constitue un point fréquent d’erreur en examen et en contrôle URSSAF.
    </p>
  </div>

  <p style="text-align:center;">
    <a href="#/referentiel/bases-calcul-cotisations">⬅ Retour “Dispositifs / bases-calcul-cotisations”</a>
  </p>

  `,
};
