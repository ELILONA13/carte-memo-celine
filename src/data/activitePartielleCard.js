// src/data/activitePartielleCard.js

export const activitePartielleCard = {
    id: "activite-partielle",
    group: "main",
    title: "Activité partielle (régime général — 2024)",
    content: `
    <div class="formula formula-reminder">
      <p class="formula-title">🧠 Définition (réflexe examen)</p>
      <p class="formula-content">
        L’<b>activité partielle</b> (ex “chômage partiel”) permet à l’employeur de <b>réduire</b> ou <b>suspendre</b>
        temporairement l’activité, en maintenant une partie de la rémunération du salarié,
        avec <b>prise en charge partielle par l’État</b>.
        <br><br>
        📌 Encadrement : <b>L.5122-1 et suivants</b> + <b>R.5122-1 et suivants</b> du Code du travail.
      </p>
    </div>

    <h3>1) Cas de recours (légaux)</h3>
    <ul class="centered-list bullets">
      <li><b>Difficultés économiques</b> (perte de marché, hausse coûts…)</li>
      <li><b>Difficultés d’approvisionnement</b> (matières premières / énergie)</li>
      <li><b>Sinistre</b> ou <b>intempéries</b> exceptionnelles</li>
      <li><b>Transformation / restructuration / modernisation</b> de l’entreprise</li>
      <li>Toute autre <b>circonstance de caractère exceptionnel</b></li>
    </ul>

    <div class="formula formula-warn">
      <p class="formula-title">⚠️ Vigilance</p>
      <p class="formula-content">
        L’activité partielle correspond soit à une <b>diminution de l’horaire</b>,
        soit à une <b>fermeture temporaire totale ou partielle</b>.
      </p>
    </div>

    <h3>2) Salariés concernés</h3>
    <ul class="centered-list bullets">
      <li>Salariés <b>temps plein</b> ✅</li>
      <li>Salariés <b>temps partiel</b> ✅</li>
      <li>Salariés en <b>forfait jours</b> ✅ (conversion obligatoire)</li>
      <li><b>Salariés protégés</b> : activité partielle <b>uniquement avec leur accord</b></li>
    </ul>

    <div class="formula formula-formula">
      <p class="formula-title">🧮 Conversion forfait jours → heures</p>
      <p class="formula-content">
        • 1/2 journée non travaillée = <b>3 h 30</b><br>
        • 1 journée non travaillée = <b>7 h</b><br>
        • 1 semaine non travaillée = <b>35 h</b>
      </p>
    </div>

    <h3>3) Indemnisation du salarié (indemnité d’activité partielle)</h3>
    <p style="text-align:center;">
      Pendant l’activité partielle, le salarié perçoit une indemnité versée par l’employeur :
      <b>60 % du salaire brut de référence</b>.
    </p>

    <div class="formula formula-formula">
      <p class="formula-title">🧮 Formule</p>
      <p class="formula-content">
        <b>Indemnité AP brute</b> = Heures chômées × (Taux horaire brut de référence × <b>60 %</b>)
      </p>
    </div>

    <div class="formula formula-warn">
      <p class="formula-title">⚠️ Plafond (2024)</p>
      <p class="formula-content">
        Salaire horaire pris en compte plafonné à <b>4,5 × SMIC horaire</b>.<br>
        Donc indemnité max = <b>31,46 € / heure</b> chômée.
      </p>
    </div>

    <h3>4) Aide de l’État à l’employeur (allocation)</h3>
    <p style="text-align:center;">
      L’employeur perçoit une allocation pour compenser les indemnités versées :
      <b>36 % du salaire brut de référence</b>.
    </p>

    <div class="formula formula-reminder">
      <p class="formula-title">📌 Bornes (2024)</p>
      <p class="formula-content">
        • Allocation <b>min</b> : <b>8,30 €</b> / heure<br>
        • Allocation <b>max</b> : <b>18,87 €</b> / heure
      </p>
    </div>

    <h3>5) Rémunération Mensuelle Minimale (RMM) — garantie</h3>
    <p style="text-align:center;">
      Si la rémunération diminue avec l’activité partielle, le salarié a droit à une <b>RMM</b>.
      Si le total perçu est inférieur → l’employeur verse une <b>allocation de garantie minimale</b>.
    </p>

    <div class="formula formula-formula">
      <p class="formula-title">🧮 RMM (temps plein — 01/01/2024)</p>
      <p class="formula-content">
        RMM = (SMIC horaire × 151,67) − (SMIC horaire × 151,67 × <b>20,84 %</b>)<br>
        = (11,65 × 151,67) − (11,65 × 151,67 × 20,84 %) = <b>1 398,69 €</b><br>
        Soit <b>9,22 € / heure</b>.
      </p>
    </div>

    <div class="formula formula-formula">
      <p class="formula-title">🧮 Allocation de garantie minimale</p>
      <p class="formula-content">
        Si (Net activité + Indemnité AP) &lt; RMM →<br>
        <b>Garantie minimale</b> = RMM − (Net activité + Indemnité AP)
      </p>
    </div>

    <h3>6) Régime social & fiscal (à retenir)</h3>
    <ul class="centered-list bullets">
      <li>Indemnité AP = <b>revenu de remplacement</b></li>
      <li>✅ <b>Imposable</b></li>
      <li>❌ <b>Exonérée de cotisations sociales</b></li>
      <li>✅ Soumise à <b>CSG-CRDS 6,70 %</b> (avec abattement d’assiette <b>1,75 %</b>)</li>
    </ul>

    <div class="formula formula-reminder">
      <p class="formula-title">🧠 Taux CSG-CRDS sur indemnité AP</p>
      <p class="formula-content">
        • CSG déductible : <b>3,80 %</b><br>
        • CSG non déductible : <b>2,40 %</b><br>
        • CRDS : <b>0,50 %</b><br>
        ➜ Total : <b>6,70 %</b> (assiette abattue de <b>1,75 %</b>)
      </p>
    </div>

    <h3>7) EXEMPLES CHIFFRÉS (pas à pas)</h3>

    <div class="formula formula-example">
      <p class="formula-title">✅ Exemple 1 — Calcul indemnité AP (SMIC)</p>
      <p class="formula-content">
        Données : SMIC horaire = <b>11,65 €</b> ; heures chômées = <b>60 h</b><br><br>
        Étape 1 : taux horaire × 60 % = 11,65 × 0,60 = <b>6,99 €</b><br>
        Étape 2 : indemnité AP = 60 × 6,99 = <b>419,40 €</b>
      </p>
    </div>

    <div class="formula formula-example">
      <p class="formula-title">✅ Exemple 2 — Garantie minimale (RMM)</p>
      <p class="formula-content">
        Données (examen) : Net activité = <b>799,25 €</b> ; indemnité AP = <b>419,40 €</b><br>
        Total perçu = 799,25 + 419,40 = <b>1 218,65 €</b><br><br>
        RMM (2024) = <b>1 398,69 €</b><br>
        Garantie minimale = 1 398,69 − 1 218,65 = <b>180,04 €</b><br><br>
        ➜ Net final visé = <b>1 398,69 €</b>
      </p>
    </div>

    <div class="formula formula-example">
      <p class="formula-title">✅ Exemple 3 — CSG-CRDS sur indemnité (méthode)</p>
      <p class="formula-content">
        Données : indemnité AP brute = <b>970,20 €</b><br>
        Assiette abattue = 970,20 × (1 − 1,75 %) = 970,20 × 0,9825 = <b>953,22 €</b><br><br>
        CSG (6,20 %) = 953,22 × 0,062 = <b>59,10 €</b><br>
        CRDS (0,50 %) = 953,22 × 0,005 = <b>4,77 €</b><br>
        Indemnité nette (hors écrêtement) = 970,20 − (59,10 + 4,77) = <b>906,33 €</b>
      </p>
    </div>

    <h3>8) Réflexes EXAMEN (très notant)</h3>
    <div class="formula formula-reminder">
      <p class="formula-title">🎯 Check-list rapide</p>
      <p class="formula-content">
        1) Calculer l’indemnité AP (60 %)<br>
        2) Vérifier le plafond (4,5 × SMIC → 31,46 €/h max)<br>
        3) Comparer (Net activité + indemnité) à la <b>RMM</b><br>
        4) Si besoin : verser la <b>garantie minimale</b><br>
        5) Appliquer CSG-CRDS (assiette abattue 1,75 %) si non écrêtée
      </p>
    </div>
  `,
};
