// src/data/forfaitSocialCard.js

export const forfaitSocialCard = {
    id: "forfait-social",
    group: "referentiel",
    title: "Forfait social — 2026 (0 % / 10 % / 16 % / 20 %)",
    content: `

  <p style="text-align:center;">📘 LE FORFAIT SOCIAL — VERSION OFFICIELLE CONSOLIDÉE 2026</p>
  <p style="text-align:center;">(0 % – 10 % – 16 % – 20 %)</p>
  <p style="text-align:center;">Version complète — Examen + Pratique paie</p>

  <h3>1️⃣ Définition générale du forfait social</h3>

  <div class="formula formula-reminder">
    <p class="formula-content">Le forfait social est une contribution patronale.</p>
    <p class="formula-content">Il est exclusivement dû par l’employeur.</p>
    <p class="formula-content">Il ne constitue pas une retenue salariale.</p>
    <p class="formula-content">Il s’applique sur certaines sommes :</p>
    <ul class="centered-list bullets">
      <li>• qui constituent un gain ou un avantage pour le salarié,</li>
      <li>• mais qui ne sont pas intégrées dans le salaire brut soumis aux cotisations de Sécurité sociale,</li>
      <li>• et qui sont en principe soumises à la CSG/CRDS.</li>
    </ul>
  </div>

  <div class="formula formula-reminder">
    <p class="formula-content">📖 Référence officielle URSSAF :</p>
    <p class="formula-content">
      <a href="https://www.urssaf.fr/portail/home/employeur/calculer-les-cotisations/la-base-de-calcul/forfait-social.html" target="_blank" rel="noreferrer">
        https://www.urssaf.fr/portail/home/employeur/calculer-les-cotisations/la-base-de-calcul/forfait-social.html
      </a>
    </p>
    <p class="formula-content">📖 Service Public – Forfait social :</p>
    <p class="formula-content">
      <a href="https://entreprendre.service-public.gouv.fr/vosdroits/F31532" target="_blank" rel="noreferrer">
        https://entreprendre.service-public.gouv.fr/vosdroits/F31532
      </a>
    </p>
  </div>

  <h3>2️⃣ Base légale officielle</h3>

  <div class="formula formula-reminder">
    <p class="formula-content">📖 Code de la sécurité sociale – Article L137-15</p>
    <p class="formula-content">
      <a href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000047452686" target="_blank" rel="noreferrer">
        https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000047452686
      </a>
    </p>
    <p class="formula-content">📖 Code de la sécurité sociale – Articles L137-15 à L137-17</p>
    <p class="formula-content">
      <a href="https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006073189/LEGISCTA000019946240/" target="_blank" rel="noreferrer">
        https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006073189/LEGISCTA000019946240/
      </a>
    </p>
  </div>

  <p style="text-align:center;">Ces articles définissent :</p>
  <ul class="centered-list bullets">
    <li>• le principe du forfait social,</li>
    <li>• les sommes concernées,</li>
    <li>• les taux applicables,</li>
    <li>• les exonérations.</li>
  </ul>

  <h3>3️⃣ Logique d’assujettissement (méthode examen)</h3>

  <div class="formula formula-reminder">
    <p class="formula-content">Pour savoir si une somme est soumise au forfait social :</p>
    <p class="formula-content">Étape 1 : identifier la nature de la somme</p>
    <p class="formula-content">Exemples :</p>
    <ul class="centered-list bullets">
      <li>• intéressement</li>
      <li>• participation</li>
      <li>• abondement employeur</li>
      <li>• versement unilatéral sur plan d’épargne</li>
      <li>• certains éléments spécifiques visés par la loi</li>
    </ul>
    <p class="formula-content">Étape 2 : vérifier l’effectif de l’entreprise</p>
    <p class="formula-content">Depuis la réforme issue de la loi PACTE :</p>
  </div>

  <div class="formula formula-reminder">
    <p class="formula-content">📖 Ministère du Travail – Suppression du forfait social :</p>
    <p class="formula-content">
      <a href="https://travail-emploi.gouv.fr/questions-reponses-la-suppression-du-forfait-social" target="_blank" rel="noreferrer">
        https://travail-emploi.gouv.fr/questions-reponses-la-suppression-du-forfait-social
      </a>
    </p>
  </div>

  <div class="formula formula-example">
  <p class="formula-title">Tableau synthèse</p>

  <div
    style="
      display: grid;
      grid-template-columns: repeat(4, max-content);
      gap: 10px 22px;
      justify-content: center;
      align-items: center;
      text-align: center;
    "
  >
    <div><b>Effectif</b></div>
    <div><b>Intéressement</b></div>
    <div><b>Participation</b></div>
    <div><b>Abondement</b></div>

    <div>&lt; 50 salariés</div>
    <div>0 %</div>
    <div>0 %</div>
    <div>0 %</div>

    <div>50 à 249</div>
    <div>0 %</div>
    <div>20 % (sauf taux réduit)</div>
    <div>20 % (sauf taux réduit)</div>

    <div>≥ 250</div>
    <div>20 %</div>
    <div>20 %</div>
    <div>20 %</div>
  </div>
</div>


  <div class="formula formula-warn">
    <p class="formula-content">⚠️ Piège classique : oublier de vérifier l’effectif.</p>
  </div>

  <h3>4️⃣ Les différents taux applicables</h3>

  <p style="text-align:center;">🔹 A) Taux de droit commun : 20 %</p>
  <p style="text-align:center;">C’est le taux par défaut.</p>

  <div class="formula formula-reminder">
    <p class="formula-content">📖 Service Public :</p>
    <p class="formula-content">
      <a href="https://entreprendre.service-public.gouv.fr/vosdroits/F31532" target="_blank" rel="noreferrer">
        https://entreprendre.service-public.gouv.fr/vosdroits/F31532
      </a>
    </p>
  </div>

  <p style="text-align:center;">Il s’applique notamment :</p>
  <ul class="centered-list bullets">
    <li>• à la participation (dans les entreprises concernées),</li>
    <li>• aux abondements classiques,</li>
    <li>• aux versements ne remplissant pas les conditions des taux réduits.</li>
  </ul>

  <div class="formula formula-example">
    <p class="formula-title">Exemple</p>
    <p class="formula-content">Participation attribuée : 800 €</p>
    <p class="formula-content">Forfait social = 800 × 20 %</p>
    <p class="formula-content">= 160,00 €</p>
    <p class="formula-content">Charge employeur : 160,00 €</p>
  </div>

  <p style="text-align:center;">🔹 B) Taux réduit de 16 % — PERECO sous conditions</p>

  <div class="formula formula-reminder">
    <p class="formula-content">📘 Définition du PERECO</p>
    <p class="formula-content">PERECO = Plan d’Épargne Retraite d’Entreprise Collectif</p>
    <p class="formula-content">Il permet aux salariés de constituer une épargne retraite en entreprise.</p>
    <p class="formula-content">L’épargne est en principe bloquée jusqu’à l’âge de la retraite</p>
    <p class="formula-content">(sauf cas de déblocage anticipé prévus par la loi).</p>
  </div>

  <div class="formula formula-reminder">
    <p class="formula-content">📖 Code du travail – Plan d’épargne retraite d’entreprise collectif :</p>
    <p class="formula-content">
      <a href="https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006072050/LEGISCTA000038830463/" target="_blank" rel="noreferrer">
        https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006072050/LEGISCTA000038830463/
      </a>
    </p>
    <p class="formula-content">📖 Service Public :</p>
    <p class="formula-content">
      <a href="https://entreprendre.service-public.gouv.fr/vosdroits/F35100" target="_blank" rel="noreferrer">
        https://entreprendre.service-public.gouv.fr/vosdroits/F35100
      </a>
    </p>
  </div>

  <p style="text-align:center;">Qui peut verser ?</p>
  <ul class="centered-list bullets">
    <li>• Le salarié</li>
    <li>• L’employeur (abondement)</li>
    <li>• L’entreprise peut faire un versement unilatéral</li>
  </ul>

  <div class="formula formula-reminder">
  <p class="formula-title">Différence PEE / PERECO</p>

  <div
    style="
      display: grid;
      grid-template-columns: repeat(2, max-content);
      gap: 10px 40px;
      justify-content: center;
      align-items: center;
      text-align: center;
    "
  >
    <div><b>PEE</b></div>
    <div><b>PERECO</b></div>

    <div>Épargne moyen terme</div>
    <div>Épargne retraite</div>

    <div>Blocage 5 ans</div>
    <div>Blocage jusqu’à retraite</div>

    <div>Objectif placement</div>
    <div>Objectif retraite</div>
  </div>
</div>


  <p style="text-align:center;">Conditions pour bénéficier du taux 16 %</p>
  <p style="text-align:center;">Le plan doit notamment :</p>
  <ul class="centered-list bullets">
    <li>• prévoir une gestion pilotée,</li>
    <li>• inclure un investissement orienté vers le financement des PME/ETI (fonds intégrant des titres éligibles type PEA-PME).</li>
  </ul>

  <div class="formula formula-reminder">
    <p class="formula-content">Base juridique :</p>
    <p class="formula-content">
      <a href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000047452686" target="_blank" rel="noreferrer">
        https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000047452686
      </a>
    </p>
  </div>

  <div class="formula formula-example">
    <p class="formula-title">Exemple</p>
    <p class="formula-content">Abondement PERECO : 500 €</p>
    <p class="formula-content">Forfait social = 500 × 16 %</p>
    <p class="formula-content">= 80,00 €</p>
  </div>

  <p style="text-align:center;">🔹 C) Taux de 10 % — Actionnariat salarié</p>

  <div class="formula formula-reminder">
    <p class="formula-content">Ce taux s’applique lorsque l’abondement employeur permet l’acquisition de titres de l’entreprise par les salariés.</p>
    <p class="formula-content">📖 Ministère de l’Économie :</p>
    <p class="formula-content">
      <a href="https://www.economie.gouv.fr/entreprises/gerer-ses-ressources-humaines-et-ses-salaries/le-forfait-social-quelle-part-la-charge-de-lemployeur" target="_blank" rel="noreferrer">
        https://www.economie.gouv.fr/entreprises/gerer-ses-ressources-humaines-et-ses-salaries/le-forfait-social-quelle-part-la-charge-de-lemployeur
      </a>
    </p>
  </div>

  <div class="formula formula-example">
    <p class="formula-content">Exemple :</p>
    <p class="formula-content">Abondement = 300 €</p>
    <p class="formula-content">Forfait social = 300 × 10 %</p>
    <p class="formula-content">= 30,00 €</p>
  </div>

  <p style="text-align:center;">🔹 D) Cas à 0 %</p>
  <p style="text-align:center;">Moins de 50 salariés :</p>
  <ul class="centered-list bullets">
    <li>• pas de forfait social sur intéressement</li>
    <li>• pas de forfait social sur participation</li>
    <li>• pas de forfait social sur abondement</li>
  </ul>

  <div class="formula formula-reminder">
    <p class="formula-content">Source :</p>
    <p class="formula-content">
      <a href="https://travail-emploi.gouv.fr/questions-reponses-la-suppression-du-forfait-social" target="_blank" rel="noreferrer">
        https://travail-emploi.gouv.fr/questions-reponses-la-suppression-du-forfait-social
      </a>
    </p>
  </div>

  <h3>5️⃣ Rappel important : forfait social à 8 %</h3>

  <div class="formula formula-warn">
    <p class="formula-content">⚠️ Ne pas confondre.</p>
    <p class="formula-content">Le forfait social à 8 % concerne certaines contributions patronales de prévoyance complémentaire.</p>
    <p class="formula-content">Il ne s’applique pas :</p>
    <ul class="centered-list bullets">
      <li>• à l’intéressement,</li>
      <li>• à la participation,</li>
      <li>• aux abondements,</li>
      <li>• au PERECO.</li>
    </ul>
    <p class="formula-content">Base légale :</p>
    <p class="formula-content">
      <a href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000047452686" target="_blank" rel="noreferrer">
        https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000047452686
      </a>
    </p>
  </div>

  <h3>6️⃣ Méthode complète de calcul</h3>

  <p style="text-align:center;">Formule :</p>
  <div class="formula formula-formula">
    <p class="formula-content">Forfait social = Assiette × Taux applicable</p>
  </div>

  <p style="text-align:center;">L’assiette correspond au montant brut de la somme concernée.</p>
  <p style="text-align:center;">Le forfait social :</p>
  <ul class="centered-list bullets">
    <li>• est une charge patronale,</li>
    <li>• apparaît dans les cotisations patronales,</li>
    <li>• est recouvré par l’URSSAF via DSN.</li>
  </ul>

  <h3>7️⃣ Cas pratique comparatif complet</h3>

  <div class="formula formula-example">
    <p class="formula-content">Entreprise : 120 salariés</p>
    <p class="formula-content">Intéressement : 1 000 € → 0 % → 0 €</p>
    <p class="formula-content">Participation : 900 € → 20 % → 180 €</p>
    <p class="formula-content">Abondement PERECO conforme : 500 € → 16 % → 80 €</p>
    <p class="formula-content">Abondement actions : 300 € → 10 % → 30 €</p>
    <p class="formula-content">Total forfait social dû :</p>
    <p class="formula-content">180 + 80 + 30 = 290,00 €</p>
  </div>

  <h3>8️⃣ Pièges examen</h3>

  <div class="formula formula-warn">
    <ul class="centered-list bullets">
      <li>• Oublier l’effectif</li>
      <li>• Appliquer 20 % sans vérifier les conditions du PERECO</li>
      <li>• Confondre 8 % et 10 %</li>
      <li>• Confondre abondement classique et abondement actionnariat</li>
    </ul>
  </div>

  <p style="text-align:center;">
    <a href="#/referentiel/urssaf">⬅ Retour “URSSAF”</a>
  </p>

  `,
};
