// ✅ src/data/defiscalisationHsHcCard.js

export const defiscalisationHsHcCard = {
    id: "defiscalisation-hs-hc",
    group: "referentiel",
    title: "Défiscalisation des heures supplémentaires & complémentaires (HS/HC) + CSG/CRDS non déductible",
    content: `

  <p style="text-align:center;"><b>📘 LA DÉFISCALISATION DES HEURES SUPPLÉMENTAIRES (HS) ET DES HEURES COMPLÉMENTAIRES (HC) — + CSG/CRDS “100% non déductible”</b></p>
  <p style="text-align:center;"><b>(Version complète — cours / examen + pratique paie)</b></p>

  <div class="formula formula-reminder">
    <p class="formula-title">🎯 Objectif</p>
    <p class="formula-content">
      Comprendre le cumul <b>réduction de cotisations salariales</b> + <b>exonération fiscale</b> des HS/HC,
      et maîtriser le point “examen” : <b>CSG sur HS/HC exonérées = 100% non déductible</b> (ligne spécifique sur bulletin).
    </p>
  </div>

  <h3>1️⃣ Contexte : quels “avantages” pour les HS/HC ?</h3>
  <p style="text-align:center;">
    Les heures supplémentaires (temps plein) et les heures complémentaires (temps partiel) peuvent bénéficier
    <b>de deux régimes de faveur cumulables</b> :
  </p>

  <div class="formula formula-reminder">
    <p class="formula-title">A) ✅ Réduction de cotisations salariales (régime social)</p>
    <p class="formula-content">
      Il existe une <b>réduction de cotisations salariales</b> sur la rémunération des HS/HC, dans la limite des cotisations dues.
      <br><br>
      Base juridique : <b>article L.241-17 du Code de la sécurité sociale</b> (Légifrance) :
      <br>
      <a href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000037947458" target="_blank" rel="noreferrer">https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000037947458</a>
      <br><br>
      Présentation officielle (URSSAF) :
      <br>
      <a href="https://www.urssaf.fr/accueil/employeur/beneficier-exonerations/exonerations-heures/reduction-cotisations-salariales.html" target="_blank" rel="noreferrer">https://www.urssaf.fr/accueil/employeur/beneficier-exonerations/exonerations-heures/reduction-cotisations-salariales.html</a>
      <br><br>
      Présentation officielle (BOSS) :
      <br>
      <a href="https://boss.gouv.fr/accueil/exonerations/exonerations-heures-supplementai.html" target="_blank" rel="noreferrer">https://boss.gouv.fr/accueil/exonerations/exonerations-heures-supplementai.html</a>
      <br><br>
      📌 <b>Taux maximal souvent retenu en paie : 11,31%</b> (on le retrouve dans les cours car il correspond à la somme des cotisations salariales “ciblées”
      par le dispositif quand la rémunération est dans le régime général, sous le plafond, etc.).
      <br>
      ➡️ <b>Réflexe examen / pro</b> : le taux “max” peut être un repère, mais en pratique on applique la règle du texte
      (réduction dans la limite des cotisations effectivement dues).
    </p>
  </div>

  <div class="formula formula-reminder">
    <p class="formula-title">B) ✅ Exonération d’impôt sur le revenu (régime fiscal)</p>
    <p class="formula-content">
      Les rémunérations des HS/HC sont <b>exonérées d’impôt sur le revenu</b> <b>dans la limite annuelle de 7 500 €</b> (en <b>rémunération nette imposable</b>).
      <br><br>
      Base juridique : <b>article 81 quater du Code général des impôts</b> (Légifrance) :
      <br>
      <a href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000046195916" target="_blank" rel="noreferrer">https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000046195916</a>
      <br><br>
      Explication officielle Service-Public :
      <br>
      <a href="https://www.service-public.gouv.fr/particuliers/vosdroits/F2617" target="_blank" rel="noreferrer">https://www.service-public.gouv.fr/particuliers/vosdroits/F2617</a>
      <br><br>
      ✅ <b>Conséquence-clé (très “examen”)</b> :
      <br>
      Le <b>net imposable</b> n’est plus basé “uniquement” sur le brut total : on vient <b>retirer</b> (dans la limite annuelle)
      la part correspondant aux HS/HC exonérées.
    </p>
  </div>

  <h3>2️⃣ Problème technique : que devient la CSG “déductible” sur ces HS/HC exonérées ?</h3>

  <div class="formula formula-reminder">
    <p class="formula-title">A) Rappel : CSG/CRDS en temps normal (sur rémunérations d’activité)</p>
    <p class="formula-content">
      Sur une rémunération d’activité, la CSG/CRDS est calculée <b>après abattement de 1,75%</b> (soit base = <b>98,25%</b>).
      <br><br>
      - <b>CSG déductible</b> : <b>6,80%</b> (normalement “non imposable”, car déduite du revenu imposable)
      <br>
      - <b>CSG non déductible</b> : <b>2,40%</b> (imposable)
      <br>
      - <b>CRDS</b> : <b>0,50%</b> (imposable)
      <br><br>
      ➡️ Total CSG/CRDS = <b>9,70%</b> sur base <b>98,25%</b>.
    </p>
  </div>

  <div class="formula formula-reminder">
    <p class="formula-title">B) Réponse officielle : CSG sur HS/HC exonérées = 100% non déductible</p>
    <p class="formula-content">
      La question a été tranchée par l’administration via l’instruction/circulaire :
      <br><br>
      📌 <b>Instruction interministérielle DSS/5B/2019/71 du 29 mars 2019</b> (BO Santé – PDF officiel) :
      <br>
      <a href="https://sante.gouv.fr/fichiers/bo/2019/19-04/ste_20190004_0000_0054.pdf" target="_blank" rel="noreferrer">https://sante.gouv.fr/fichiers/bo/2019/19-04/ste_20190004_0000_0054.pdf</a>
      <br><br>
      👉 Principe à retenir (formulation “cours”) :
      <br>
      - La <b>CSG assise sur les HS/HC exonérées d’impôt sur le revenu</b> est <b>intégralement non déductible</b> du revenu imposable.
    </p>
  </div>

  <div class="formula formula-reminder">
    <p class="formula-title">C) Pourquoi ? (logique examen)</p>
    <p class="formula-content">
      L’idée est de <b>ne pas “sur-avantager”</b> :
      <br>
      - Les HS/HC sont déjà <b>favorisées socialement</b> (réduction de cotisations salariales)
      <br>
      - et <b>favorisées fiscalement</b> (exonération IR)
      <br><br>
      ➡️ Donc la part de CSG qui aurait été “déductible” (6,80%) devient <b>non déductible</b> sur les HS/HC exonérées.
    </p>
  </div>

  <h3>3️⃣ Conséquence pratique sur le bulletin : la ligne CSG/CRDS “revenu non imposable”</h3>

  <div class="formula formula-reminder">
    <p class="formula-title">✅ Règle pratique</p>
    <p class="formula-content">
      Pour isoler correctement le net imposable, on crée (selon logiciel) une ligne spécifique :
      <br><br>
      ➡️ <b>“CSG/CRDS sur revenu non imposable”</b>
      <br>
      - <b>Assiette</b> : rémunération HS/HC éligible × <b>98,25%</b>
      <br>
      - <b>Taux</b> : <b>9,70%</b> (2,40% + 0,50% + <b>6,80% rebasculé en non déductible</b>)
      <br><br>
      ➡️ Cela permet que le <b>net imposable</b> final soit cohérent : on retire fiscalement les HS/HC,
      mais on neutralise la déductibilité de CSG sur cette part.
    </p>
  </div>

  <div class="formula formula-warn">
    <p class="formula-title">⚠️ Piège examen (très fréquent)</p>
    <p class="formula-content">
      On croit souvent que “CSG déductible reste déductible”.
      <br>
      ✅ Faux <b>sur la part HS/HC exonérée</b> : elle devient <b>100% non déductible</b>.
    </p>
  </div>

  <h3>4️⃣ Champ : quelles heures sont concernées / exclues ?</h3>

  <div class="formula formula-reminder">
    <p class="formula-title">A) Concernées</p>
    <p class="formula-content">
      - <b>Heures supplémentaires</b> : salariés à temps plein (au-delà de la durée légale ou conventionnelle).
      <br>
      - <b>Heures complémentaires</b> : salariés à temps partiel (au-delà de la durée contractuelle, dans les limites légales/contractuelles).
    </p>
  </div>

  <div class="formula formula-warn">
    <p class="formula-title">B) Exclues (à connaître)</p>
    <p class="formula-content">
      La réduction et l’exonération fiscale ne s’appliquent <b>que</b> aux heures qualifiées HS/HC.
      <br>
      ➡️ Ne pas confondre avec des heures payées “au taux normal” ou des indemnités qui ne sont pas des HS/HC
      (exemples typiques donnés en cours : astreintes, temps de transport indemnisé à taux normal, etc.).
      <br>
      ✅ <b>Réflexe paie</b> : toujours identifier la nature de la ligne (HS 25%, HS 50%, HC, etc.) avant d’appliquer le régime.
    </p>
  </div>

  <h3>5️⃣ Exemple chiffré (arrondi au centime) — logique “bulletin”</h3>
  <p style="text-align:center;">
    <b>Données (exemple de cours)</b> :
  </p>
  <ul class="centered-list bullets">
    <li>Entreprise : effectif 6 (info de contexte)</li>
    <li>Salarié non-cadre temps plein, taux horaire = <b>20,00 €</b></li>
    <li>Heures : <b>10 HS à 25%</b>, <b>3 HS à 50%</b>, <b>4 heures à taux normal</b> (non éligibles)</li>
    <li>PAS : 5,90% (info de contexte)</li>
    <li>On applique les taux “en vigueur en mai 2025” (info de contexte)</li>
  </ul>

  <div class="formula formula-example">
    <p class="formula-title">1) Calcul de la rémunération HS éligible</p>
    <p class="formula-content">
      - HS 25% : 10 × 20,00 × 1,25 = <b>250,00 €</b>
      <br>
      - HS 50% : 3 × 20,00 × 1,50 = <b>90,00 €</b>
      <br>
      ➡️ Total HS éligibles = <b>340,00 €</b>
      <br>
      - Heures à taux normal : <b>exclues</b> du dispositif.
    </p>
  </div>

  <div class="formula formula-example">
    <p class="formula-title">2) Assiette CSG/CRDS spécifique “revenu non imposable”</p>
    <p class="formula-content">
      - Base CSG/CRDS = 340,00 × 98,25%
      <br>
      = 340,00 × 0,9825
      <br>
      = <b>334,05 €</b> (arrondi au centime)
    </p>
  </div>

  <div class="formula formula-example">
    <p class="formula-title">3) Montant de la ligne “CSG/CRDS sur revenu non imposable”</p>
    <p class="formula-content">
      - 334,05 × 9,70%
      <br>
      = 334,05 × 0,097
      <br>
      = <b>32,40 €</b> (arrondi au centime)
      <br><br>
      ✅ Sur le bulletin, tu dois donc retrouver une ligne de type :
      <br>
      - <b>CSG/CRDS sur revenu non imposable</b> : base <b>334,05</b> ; taux <b>9,70%</b> ; montant <b>32,40</b>.
    </p>
  </div>

  <h3>6️⃣ La limite annuelle de 7 500 € : comment calculer le “net imposable” des HS/HC exonérées ?</h3>

  <div class="formula formula-reminder">
    <p class="formula-title">A) Règle officielle : plafond = 7 500 € en net imposable</p>
    <p class="formula-content">
      Source Service-Public :
      <br>
      <a href="https://www.service-public.gouv.fr/particuliers/vosdroits/F2617" target="_blank" rel="noreferrer">https://www.service-public.gouv.fr/particuliers/vosdroits/F2617</a>
      <br><br>
      Base fiscale : article 81 quater CGI (Légifrance) :
      <br>
      <a href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000046195916" target="_blank" rel="noreferrer">https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000046195916</a>
    </p>
  </div>

  <div class="formula formula-formula">
    <p class="formula-title">B) Formule “DGFIP / pratique cours” pour le net imposable exonéré</p>
    <p class="formula-content">
      Montant net imposable HS/HC exonérées = Montant brut des heures supplémentaires et complémentaires exonérées − (montant brut des heures supplémentaires et complémentaires exonérées × 98,25 % × 6,8 %).
      <br><br>
      (Ici on retire la CSG “théoriquement déductible” 6,80% — car elle ne doit pas réduire le net imposable sur cette part : elle est rendue non déductible, donc on neutralise l’effet.)
    </p>
  </div>

  <div class="formula formula-example">
    <p class="formula-title">C) Application chiffrée (avec tes montants)</p>
    <p class="formula-content">
      - Brut HS/HC exonérées : <b>340,00 €</b>
      <br>
      - CSG “théoriquement déductible” : 340,00 × 98,25% × 6,80%
      <br>
      = 340,00 × 0,9825 × 0,068
      <br>
      = 340,00 × 0,06681
      <br>
      = <b>22,72 €</b> (arrondi)
      <br><br>
      ➡️ Net imposable des HS/HC exonérées :
      <br>
      340,00 − 22,72 = <b>317,28 €</b>
      <br><br>
      ✅ <b>Ce montant (317,28 €)</b> est celui à <b>cumuler sur l’année</b> pour vérifier qu’on ne dépasse pas <b>7 500,00 €</b>.
    </p>
  </div>

  <div class="formula formula-warn">
    <p class="formula-title">⚠️ Piège examen “plafond”</p>
    <p class="formula-content">
      - Le plafond <b>7 500 €</b> est un plafond <b>annuel</b> : on doit <b>suivre un cumul</b>.
      <br>
      - <b>Au-delà</b> : les HS/HC deviennent <b>imposables</b> “comme du salaire normal” pour la fraction excédentaire,
      et la CSG au taux 6,80% retrouve sa logique habituelle (déductibilité “classique” sur la partie imposable).
    </p>
  </div>

  <h3>7️⃣ À apprendre “par cœur” (synthèse examen)</h3>

  <div class="formula formula-reminder">
    <p class="formula-title">✅ Les 4 phrases qui tombent en contrôle</p>
    <p class="formula-content">
      1) HS/HC : <b>réduction de cotisations salariales</b> (base CSS L241-17).
      <br>
      2) HS/HC : <b>exonération IR</b> <b>dans la limite annuelle de 7 500 € net imposable</b> (CGI 81 quater).
      <br>
      3) Sur la part exonérée : <b>CSG = 100% non déductible</b> (instruction DSS/5B/2019/71).
      <br>
      4) Bulletin : création d’une ligne <b>CSG/CRDS sur revenu non imposable</b> (base HS/HC × 98,25% ; taux 9,70%).
    </p>
  </div>

  <h3>8️⃣ Liens officiels à intégrer (Word / révision)</h3>

  <div class="formula formula-reminder">
    <p class="formula-title">🔗 Liens</p>
    <p class="formula-content">
      - Légifrance — CSS art. L241-17 :
      <br>
      <a href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000037947458" target="_blank" rel="noreferrer">https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000037947458</a>
      <br><br>
      - Légifrance — CGI art. 81 quater :
      <br>
      <a href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000046195916" target="_blank" rel="noreferrer">https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000046195916</a>
      <br><br>
      - Service-Public — HS/HC exonérées IR (plafond 7 500 €) :
      <br>
      <a href="https://www.service-public.gouv.fr/particuliers/vosdroits/F2617" target="_blank" rel="noreferrer">https://www.service-public.gouv.fr/particuliers/vosdroits/F2617</a>
      <br><br>
      - URSSAF — réduction de cotisations salariales HS/HC :
      <br>
      <a href="https://www.urssaf.fr/accueil/employeur/beneficier-exonerations/exonerations-heures/reduction-cotisations-salariales.html" target="_blank" rel="noreferrer">https://www.urssaf.fr/accueil/employeur/beneficier-exonerations/exonerations-heures/reduction-cotisations-salariales.html</a>
      <br><br>
      - BOSS — exonérations heures supplémentaires :
      <br>
      <a href="https://boss.gouv.fr/accueil/exonerations/exonerations-heures-supplementai.html" target="_blank" rel="noreferrer">https://boss.gouv.fr/accueil/exonerations/exonerations-heures-supplementai.html</a>
      <br><br>
      - Instruction DSS/5B/2019/71 du 29 mars 2019 (PDF BO Santé) :
      <br>
      <a href="https://sante.gouv.fr/fichiers/bo/2019/19-04/ste_20190004_0000_0054.pdf" target="_blank" rel="noreferrer">https://sante.gouv.fr/fichiers/bo/2019/19-04/ste_20190004_0000_0054.pdf</a>
    </p>
  </div>

  `,
};
