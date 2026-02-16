// src/data/variablesPaieCard.js

export const variablesPaieCard = {
    id: "variables-paie",
    group: "main",
    title: "Collecter et traiter les variables de paie",
    content: `
    <h3>Contexte général</h3>

    <p style="text-align:center;">
      La gestion des <b>variables de paie</b> consiste à :
    </p>

    <ul class="centered-list bullets">
      <li><b>Identifier</b></li>
      <li><b>Collecter</b></li>
      <li><b>Contrôler</b></li>
      <li><b>Intégrer</b></li>
    </ul>

    <p style="text-align:center;">
      toutes les données nécessaires au calcul du salaire du mois.
    </p>

    <p style="text-align:center;">
      Une erreur à ce stade peut entraîner :
    </p>

    <ul class="centered-list bullets">
      <li>une erreur sur le bulletin,</li>
      <li>une DSN erronée,</li>
      <li>un redressement URSSAF,</li>
      <li>un litige prud’homal,</li>
      <li>un rappel de salaire.</li>
    </ul>

    <div class="formula formula-reminder">
      <p class="formula-title">📌 Obligation légale</p>
      <p class="formula-content">
        L’employeur doit remettre un bulletin exact et conforme.
        <br><br>
        🔹 Article <b>L3243-2</b> Code du travail :
        <br>
        <a href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006902828"
           target="_blank" rel="noreferrer">
          https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006902828
        </a>
        <br><br>
        👉 Une variable mal traitée = <b>bulletin inexact</b> = responsabilité de l’employeur.
      </p>
    </div>

    <h3>Qu’est-ce qu’une variable de paie ?</h3>

    <p style="text-align:center;">
      On distingue :
    </p>

    <div class="formula formula-formula">
      <p class="formula-title">🔹 1. Les éléments permanents</p>
      <div class="formula-content">
        <ul class="centered-list bullets">
          <li>Salaire de base</li>
          <li>Taux horaire contractuel</li>
          <li>Qualification</li>
          <li>Temps contractuel</li>
        </ul>
        <p style="text-align:center; margin-top:10px;">
          ➡️ Ils ne changent pas d’un mois à l’autre.
        </p>
      </div>
    </div>

    <div class="formula formula-formula">
      <p class="formula-title">🔹 2. Les variables de paie</p>
      <div class="formula-content">
        <p style="text-align:center;">
          Ce sont tous les éléments fluctuants impactant la rémunération réelle du mois.
        </p>
        <p style="text-align:center;">
          Elles traduisent :
        </p>
        <ul class="centered-list bullets">
          <li>le travail réellement effectué,</li>
          <li>les absences,</li>
          <li>les événements particuliers,</li>
          <li>les primes,</li>
          <li>les avantages.</li>
        </ul>
      </div>
    </div>

    <h3>Les catégories de variables</h3>

    <div class="formula formula-reminder">
      <p class="formula-title">1️⃣ Temps de travail</p>
      <div class="formula-content">
        <ul class="centered-list bullets">
          <li>Heures normales</li>
          <li>Heures supplémentaires</li>
          <li>Heures complémentaires</li>
          <li>Travail de nuit</li>
          <li>Travail du dimanche</li>
        </ul>
      </div>
    </div>

    <div class="formula formula-formula">
      <p class="formula-title">🔹 Heures supplémentaires</p>
      <p class="formula-content">
        📌 Article <b>L3121-28</b> Code du travail :
        <br>
        <a href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000037388482"
           target="_blank" rel="noreferrer">
          https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000037388482
        </a>
        <br><br>
        👉 Toute heure au-delà de <b>35h</b> = heure supplémentaire.
      </p>
    </div>

    <div class="formula formula-formula">
      <p class="formula-title">🔹 Taux de majoration</p>
      <p class="formula-content">
        📌 Article <b>L3121-33</b> :
        <br>
        <a href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000037388511"
           target="_blank" rel="noreferrer">
          https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000037388511
        </a>
        <br><br>
        ➡️ <b>25 %</b> pour les 8 premières heures<br>
        ➡️ <b>50 %</b> au-delà<br>
        (sauf accord collectif)
      </p>
    </div>

    <div class="formula formula-example">
      <p class="formula-title">📌 Exemple chiffré</p>
      <div class="formula-content">
        <p style="text-align:center;">
          Salarié 35h / semaine<br>
          Taux horaire : <b>15 €</b><br><br>
          10 heures supplémentaires à 25 %
        </p>
        <p style="text-align:center;">
          Majoration : 15 € × 25 % = <b>3,75 €</b><br>
          Heure majorée = <b>18,75 €</b><br>
          10 × 18,75 € = <b>187,50 €</b>
        </p>
      </div>
    </div>

    <div class="formula formula-reminder">
      <p class="formula-title">🔹 Exonération sociale heures sup</p>
      <p class="formula-content">
        Source URSSAF :
        <br>
        <a href="https://www.urssaf.fr/portail/home/employeur/beneficier-dexonerations/heures-supplementaires.html"
           target="_blank" rel="noreferrer">
          https://www.urssaf.fr/portail/home/employeur/beneficier-dexonerations/heures-supplementaires.html
        </a>
        <br><br>
        ➡️ Réduction salariale de cotisations<br>
        ➡️ Exonération d’impôt dans la limite légale
      </p>
    </div>

    <div class="formula formula-reminder">
      <p class="formula-title">2️⃣ Les absences</p>
      <div class="formula-content">
        <ul class="centered-list bullets">
          <li>Maladie</li>
          <li>Congés payés</li>
          <li>Absence injustifiée</li>
          <li>Activité partielle</li>
          <li>Congé maternité</li>
        </ul>
      </div>
    </div>

    <div class="formula formula-formula">
      <p class="formula-title">🔹 Maintien de salaire maladie</p>
      <p class="formula-content">
        📌 Article <b>L1226-1</b> Code du travail :
        <br>
        <a href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006901863"
           target="_blank" rel="noreferrer">
          https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006901863
        </a>
        <br><br>
        Conditions :
      </p>
      <ul class="centered-list bullets">
        <li>ancienneté</li>
        <li>justificatif</li>
        <li>délai de carence</li>
      </ul>
    </div>

    <div class="formula formula-reminder">
      <p class="formula-title">🔹 IJSS</p>
      <p class="formula-content">
        Source Service Public :
        <br>
        <a href="https://www.service-public.fr/particuliers/vosdroits/F3053"
           target="_blank" rel="noreferrer">
          https://www.service-public.fr/particuliers/vosdroits/F3053
        </a>
        <br><br>
        👉 La CPAM verse les indemnités journalières.
      </p>
    </div>

    <div class="formula formula-example">
      <p class="formula-title">📌 Exemple retenue pour absence</p>
      <div class="formula-content">
        <p style="text-align:center;">
          Salaire brut : <b>2 000 €</b><br>
          151,67 h prévues
        </p>
        <p style="text-align:center;">
          Taux horaire = 2 000 / 151,67 = <b>13,19 €</b>
        </p>
        <p style="text-align:center;">
          Absence 14 h : 13,19 × 14 = <b>184,66 €</b>
        </p>
      </div>
    </div>

    <div class="formula formula-reminder">
      <p class="formula-title">3️⃣ Éléments financiers ponctuels</p>
      <div class="formula-content">
        <ul class="centered-list bullets">
          <li>Prime exceptionnelle</li>
          <li>Prime sur objectifs</li>
          <li>Commission</li>
          <li>Rappel de salaire</li>
          <li>Indemnité de rupture</li>
        </ul>
      </div>
    </div>

    <div class="formula formula-warn">
      <p class="formula-title">⚠️ Règle juridique</p>
      <p class="formula-content">
        Une prime devient obligatoire si :
      </p>
      <ul class="centered-list bullets">
        <li>elle est prévue au contrat,</li>
        <li>elle résulte d’un accord collectif,</li>
        <li>elle constitue un usage.</li>
      </ul>
      <p style="text-align:center; margin-top:10px;">
        Source :
        <br>
        <a href="https://www.service-public.fr/particuliers/vosdroits/F1781"
           target="_blank" rel="noreferrer">
          https://www.service-public.fr/particuliers/vosdroits/F1781
        </a>
      </p>
    </div>

    <div class="formula formula-reminder">
      <p class="formula-title">🔹 Prime de partage de la valeur (ex PEPA)</p>
      <p class="formula-content">
        Source URSSAF :
        <br>
        <a href="https://www.urssaf.fr/portail/home/employeur/beneficier-dexonerations/prime-de-partage-de-la-valeur.html"
           target="_blank" rel="noreferrer">
          https://www.urssaf.fr/portail/home/employeur/beneficier-dexonerations/prime-de-partage-de-la-valeur.html
        </a>
      </p>
    </div>

    <div class="formula formula-reminder">
      <p class="formula-title">4️⃣ Avantages en nature</p>
      <div class="formula-content">
        <ul class="centered-list bullets">
          <li>Logement</li>
          <li>Véhicule</li>
          <li>Repas</li>
          <li>NTIC</li>
        </ul>
      </div>
    </div>

    <div class="formula formula-reminder">
      <p class="formula-title">🔹 Barèmes URSSAF officiels</p>
      <p class="formula-content">
        <a href="https://www.urssaf.fr/portail/home/employeur/calculer-les-cotisations/avantages-en-nature.html"
           target="_blank" rel="noreferrer">
          https://www.urssaf.fr/portail/home/employeur/calculer-les-cotisations/avantages-en-nature.html
        </a>
        <br><br>
        Les montants sont revalorisés chaque année.
        <br><br>
        ⚠️ L’avantage en nature doit être intégré dans l’assiette des cotisations.
      </p>
    </div>

    <div class="formula formula-reminder">
      <p class="formula-title">5️⃣ Frais professionnels</p>
      <div class="formula-content">
        <p style="text-align:center;">
          Deux méthodes :
        </p>
        <ul class="centered-list bullets">
          <li>remboursement au réel (justificatifs)</li>
          <li>remboursement forfaitaire</li>
        </ul>
        <p style="text-align:center; margin-top:10px;">
          Barèmes officiels URSSAF :
          <br>
          <a href="https://www.urssaf.fr/portail/home/employeur/calculer-les-cotisations/frais-professionnels.html"
             target="_blank" rel="noreferrer">
            https://www.urssaf.fr/portail/home/employeur/calculer-les-cotisations/frais-professionnels.html
          </a>
        </p>
        <p style="text-align:center; margin-top:10px;">
          ⚠️ Sans justificatif → réintégration en salaire possible.
        </p>
      </div>
    </div>

    <div class="formula formula-reminder">
      <p class="formula-title">6️⃣ Événements exceptionnels</p>
      <div class="formula-content">
        <ul class="centered-list bullets">
          <li>Entrée en cours de mois</li>
          <li>Sortie en cours de mois</li>
          <li>Acompte</li>
          <li>Saisie sur salaire</li>
        </ul>
      </div>
    </div>

    <div class="formula formula-reminder">
      <p class="formula-title">🔹 Proratisation</p>
      <p class="formula-content">
        Source synthèse :
        <br>
        <a href="https://www.service-public.fr/professionnels-entreprises/vosdroits/F2308"
           target="_blank" rel="noreferrer">
          https://www.service-public.fr/professionnels-entreprises/vosdroits/F2308
        </a>
        <br><br>
        👉 Le salaire est proratisé selon le temps réellement travaillé.
      </p>
    </div>

    <h3>Identifier les sources des variables</h3>

    <div class="formula formula-formula">
      <p class="formula-title">🔹 Outils de gestion du temps</p>
      <div class="formula-content">
        <ul class="centered-list bullets">
          <li>Badgeuse</li>
          <li>GTA</li>
          <li>Planning numérique</li>
        </ul>
        <p style="text-align:center; margin-top:10px;">
          ⚠️ Toujours validation managériale obligatoire.
        </p>
      </div>
    </div>

    <div class="formula formula-formula">
      <p class="formula-title">🔹 Acteurs internes</p>
      <div class="formula-content">
        <ul class="centered-list bullets">
          <li>Manager → valide heures sup / primes</li>
          <li>Salarié → fournit justificatifs</li>
          <li>RH → contrats / avenants</li>
        </ul>
      </div>
    </div>

    <div class="formula formula-formula">
      <p class="formula-title">🔹 Organismes externes</p>
      <div class="formula-content">
        <ul class="centered-list bullets">
          <li>CPAM → IJSS</li>
          <li>Prévoyance → complément</li>
          <li>URSSAF</li>
          <li>Caisses spécifiques (BTP, retraite…)</li>
        </ul>
      </div>
    </div>

    <h3>Collecter et contrôler</h3>

    <p style="text-align:center;">
      Trois principes :
    </p>

    <ul class="centered-list bullets">
      <li><b>Anticiper</b> : calendrier de clôture.</li>
      <li><b>Traçabilité</b> : chaque variable doit être justifiable.</li>
      <li><b>Exhaustivité</b> : aucune catégorie oubliée.</li>
    </ul>

    <div class="formula formula-reminder">
      <p class="formula-title">🔹 Types de contrôle</p>
      <div class="formula-content">
        <p style="text-align:center;"><b>✔️ Cohérence</b></p>
        <ul class="centered-list bullets">
          <li>Heures négatives ?</li>
          <li>Prime sans validation ?</li>
        </ul>

        <p style="text-align:center; margin-top:12px;"><b>✔️ Conformité</b></p>
        <p style="text-align:center;">
          Respect : Code du travail / Convention collective / Contrat
        </p>

        <p style="text-align:center; margin-top:12px;"><b>✔️ Anomalies</b></p>
        <ul class="centered-list bullets">
          <li>Doublons</li>
          <li>Montants incohérents</li>
          <li>Erreur d’assiette</li>
        </ul>
      </div>
    </div>

    <h3>Intégrer les variables</h3>

    <p style="text-align:center;">
      Deux méthodes :
    </p>

    <div class="formula formula-formula">
      <p class="formula-title">🔹 Saisie manuelle</p>
      <div class="formula-content">
        <p style="text-align:center;">+ contrôle précis</p>
        <p style="text-align:center;">– chronophage</p>
      </div>
    </div>

    <div class="formula formula-formula">
      <p class="formula-title">🔹 Import automatique</p>
      <div class="formula-content">
        <p style="text-align:center;">+ gain de temps</p>
        <p style="text-align:center;">– risque paramétrage</p>
      </div>
    </div>

    <div class="formula formula-reminder">
      <p class="formula-title">🔹 Vérifications finales</p>
      <div class="formula-content">
        <ul class="centered-list bullets">
          <li>Assiettes correctes</li>
          <li>Plafond sécurité sociale respecté</li>
          <li>PAS correct</li>
          <li>Taux cohérents</li>
          <li>Proratisation correcte</li>
        </ul>
      </div>
    </div>

    <div class="formula formula-formula">
      <p class="formula-title">📌 Base légale DSN</p>
      <p class="formula-content">
        Article <b>L133-5-3</b> Code de la sécurité sociale :
        <br>
        <a href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000037364214"
           target="_blank" rel="noreferrer">
          https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000037364214
        </a>
        <br><br>
        Site officiel :
        <br>
        <a href="https://www.net-entreprises.fr"
           target="_blank" rel="noreferrer">
          https://www.net-entreprises.fr
        </a>
      </p>
    </div>

    <h3>Méthode examen</h3>

    <div class="formula formula-example">
      <p class="formula-title">Situation</p>
      <div class="formula-content">
        <ul class="centered-list bullets">
          <li>Heures sup non validées</li>
          <li>Arrêt maladie reçu tard</li>
          <li>Prime orale</li>
          <li>Badgeuse avec heures négatives</li>
          <li>Note de frais sans justificatif</li>
          <li>Entrée le 15 / sortie le 22</li>
        </ul>
      </div>
    </div>

    <div class="formula formula-formula">
      <p class="formula-title">Ordre logique</p>
      <div class="formula-content">
        <ul class="centered-list bullets">
          <li>Sauvegarde dossier paie</li>
          <li>Validation écrite heures sup</li>
          <li>Validation écrite prime</li>
          <li>Correction badgeuse</li>
          <li>Demande justificatif note de frais</li>
          <li>Vérification arrêt maladie</li>
          <li>Calcul proratisation</li>
        </ul>
      </div>
    </div>

    <div class="formula formula-reminder">
      <p class="formula-title">🎯 Conclusion</p>
      <p class="formula-content">
        Les variables de paie constituent :
      </p>
      <ul class="centered-list bullets">
        <li>✔️ le cœur opérationnel de la paie</li>
        <li>✔️ la principale zone de risque</li>
        <li>✔️ la clé d’une paie sécurisée</li>
      </ul>
    </div>
  `,
};
