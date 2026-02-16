// src/data/rgduCard.js

export const rgduCard = {
    id: "rgdu",
    group: "referentiel",
    title: "RGDU — Réduction générale (2026)",
    content: `

    <p style="text-align:center;">📘 Réduction Générale Dégressive Unique (RGDU) — 2026</p>
    <p style="text-align:center;">Version pédagogique complète — Examen + Pratique paie</p>
    <p style="text-align:center;">________________________________________</p>

    <div class="formula formula-reminder">
      <p class="formula-title">1️⃣ Qu’est-ce que la RGDU ?</p>
      <p class="formula-content">
        La RGDU est un <b>allègement de cotisations patronales</b>.<br>
        Elle permet à l’employeur de payer moins de cotisations sociales pour les salariés dont la rémunération est proche du SMIC.<br>
        👉 Elle s’applique <b>salarié par salarié</b>.<br>
        👉 Elle se calcule sur la <b>rémunération annuelle brute</b>.
      </p>
    </div>

    <h3>2️⃣ Base légale officielle (liens cliquables)</h3>

    <ul class="centered-list">
      <li><a href="https://entreprendre.service-public.gouv.fr/vosdroits/F24542" target="_blank" rel="noreferrer">Service-Public — Fiche RGDU</a></li>
      <li><a href="https://entreprendre.service-public.gouv.fr/actualites/A18448" target="_blank" rel="noreferrer">Service-Public — Réforme 2026 (formule + paramètres)</a></li>
      <li><a href="https://www.urssaf.fr/accueil/employeur/beneficier-exonerations/reduction-generale-cotisation.html" target="_blank" rel="noreferrer">URSSAF — Réduction générale / RGDU</a></li>
      <li><a href="https://www.urssaf.fr/accueil/actualites/informations-nouvelle-annee.html" target="_blank" rel="noreferrer">URSSAF — Informations nouvelle année (2026)</a></li>
      <li><a href="https://www.legifrance.gouv.fr/codes/id/LEGIARTI000052196854/2026-01-01" target="_blank" rel="noreferrer">Légifrance — CSS D241-7 (formule + plafond 3 SMIC)</a></li>
      <li><a href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000042646153/" target="_blank" rel="noreferrer">Légifrance — CSS L241-13 (principe réduction générale)</a></li>
    </ul>

    <h3>3️⃣ Pourquoi cette réduction existe ?</h3>

    <ul class="centered-list bullets">
      <li>Réduire le coût du travail au niveau du SMIC</li>
      <li>Encourager l’embauche</li>
      <li>Limiter les effets de “trappe à bas salaire”</li>
    </ul>

    <h3>4️⃣ Ce qui change en 2026 (très important)</h3>

    <div class="formula formula-warn">
      <p class="formula-title">🔴 Avant 2026</p>
      <p class="formula-content">
        Il existait :<br>
        • une réduction générale (ancienne formule) jusqu’à 1,6 SMIC<br>
        • un taux réduit maladie sous un seuil<br>
        • un taux réduit allocations familiales sous un seuil
      </p>
    </div>

    <div class="formula formula-reminder">
      <p class="formula-title">🟢 Depuis le 1er janvier 2026</p>
      <p class="formula-content">
        ✔ Le dispositif est renommé <b>RGDU</b><br>
        ✔ Réduction dégressive entre le SMIC et <b>moins de 3 SMIC</b><br>
        ✔ Elle ne s’applique plus à partir d’une rémunération égale à <b>3 SMIC</b><br>
        ✔ Paramètres : <b>Tmin</b>, <b>Tdelta</b>, exposant <b>P = 1,75</b><br>
        Source : <a href="https://entreprendre.service-public.gouv.fr/actualites/A18448" target="_blank" rel="noreferrer">Service-Public — A18448</a>
      </p>
    </div>

    <h3>5️⃣ Comment fonctionne la RGDU ?</h3>

    <div class="formula formula-formula">
      <p class="formula-title">Principe simple</p>
      <p class="formula-content">
        Réduction annuelle = Rémunération annuelle brute × Coefficient
      </p>
      <p class="formula-content">
        👉 Tout repose sur le <b>coefficient</b>.
      </p>
    </div>

    <h3>6️⃣ Logique visuelle de la dégressivité</h3>

    <div class="formula formula-reminder">
      <p class="formula-content">
        Imagine une échelle :<br>
        1 SMIC → réduction maximale<br>
        2 SMIC → réduction moyenne<br>
        2,8 SMIC → réduction faible<br>
        3 SMIC → 0
      </p>
    </div>

    <h3>7️⃣ SMIC de référence 2026</h3>

    <p style="text-align:center;">
      Service-Public indique : <b>SMIC mensuel brut = 1 823,03 €</b><br>
      <a href="https://entreprendre.service-public.gouv.fr/vosdroits/F24542" target="_blank" rel="noreferrer">Source — Service-Public F24542</a>
    </p>

    <div class="formula formula-example">
      <p class="formula-title">Calcul “base 12 mois”</p>
      <p class="formula-content">
        SMIC annuel brut = 1 823,03 × 12 = <b>21 876,36 €</b><br>
        (On voit parfois 21 876,40 € : différence d’arrondis. L’important : rester cohérente.)
      </p>
    </div>

    <h3>✅ Méthode examen (pas à pas)</h3>

    <div class="formula formula-reminder">
      <p class="formula-content">
        1) Convertir en salaire annuel<br>
        2) Calculer le nombre de SMIC<br>
        3) Vérifier l’éligibilité (&lt; 3 SMIC)<br>
        4) Calculer le coefficient C<br>
        5) Calculer la réduction = annuel × C
      </p>
    </div>

    <h3>A) Étape 1 — Passer du mensuel au annuel</h3>

    <div class="formula formula-formula">
      <p class="formula-content">
        Salaire annuel brut = salaire mensuel brut × 12
      </p>
    </div>

    <div class="formula formula-example">
      <p class="formula-content">
        Mensuel = 3 500 €<br>
        Annuel = 3 500 × 12 = <b>42 000 €</b>
      </p>
    </div>

    <h3>B) Étape 2 — Calculer “combien de SMIC”</h3>

    <div class="formula formula-formula">
      <p class="formula-content">
        Nombre de SMIC = Salaire annuel ÷ SMIC annuel
      </p>
    </div>

    <div class="formula formula-example">
      <p class="formula-content">
        42 000 ÷ 21 876,36 ≈ <b>1,92 SMIC</b><br>
        👉 Le salarié est à <b>1,92 SMIC</b>.
      </p>
    </div>

    <h3>C) Étape 3 — Vérifier l’éligibilité (&lt; 3 SMIC)</h3>

    <div class="formula formula-formula">
      <p class="formula-content">
        3 SMIC = 3 × SMIC annuel
      </p>
    </div>

    <div class="formula formula-example">
      <p class="formula-content">
        3 × 21 876,36 = <b>65 629,08 €</b><br>
        42 000 &lt; 65 629,08 → ✅ éligible
      </p>
    </div>

    <h3>D) Étape 4 — Calculer le coefficient C (pas à pas)</h3>

    <p style="text-align:center;">
      Formule officielle : <a href="https://entreprendre.service-public.gouv.fr/actualites/A18448" target="_blank" rel="noreferrer">Service-Public — A18448</a>
    </p>

    <div class="formula formula-formula">
      <p class="formula-content">
        C = Tmin + (Tdelta × [(1/2) × (3 × SMIC annuel / rémunération annuelle − 1)]<sup>P</sup>)
      </p>
      <p class="formula-content">
        Paramètres 2026 : Tmin = <b>0,0200</b> (2%) • P = <b>1,75</b><br>
        Tdelta dépend de la situation FNAL (voir plus bas).
      </p>
    </div>

    <h3>D.2 Pourquoi on fait “− 1” ?</h3>

    <div class="formula formula-reminder">
      <p class="formula-content">
        On calcule d’abord le ratio (3×SMIC / salaire).<br>
        À 3 SMIC, ce ratio vaut 1 → 1 − 1 = 0 → on force l’extinction au plafond.<br>
        👉 Le “−1” sert à ancrer la formule à 0 quand on arrive à 3 SMIC.
      </p>
    </div>

    <h3>D.3 Pourquoi on multiplie par “1/2” ?</h3>

    <div class="formula formula-reminder">
      <p class="formula-content">
        Au SMIC : (3×SMIC / SMIC)=3 → 3−1=2 → 2×1/2=1.<br>
        👉 Le “×1/2” normalise la valeur maximale à 1 (au SMIC).
      </p>
    </div>

    <h3>D.4 Pourquoi la puissance “1,75” ?</h3>

    <div class="formula formula-reminder">
      <p class="formula-content">
        Elle transforme une baisse “en ligne droite” en <b>courbe</b> (dégressivité plus progressive).<br>
        URSSAF confirme : exposant P = 1,75.<br>
        <a href="https://www.urssaf.fr/accueil/actualites/informations-nouvelle-annee.html" target="_blank" rel="noreferrer">Source URSSAF — Informations nouvelle année</a>
      </p>
    </div>

    <h3>E) Exemple chiffré complet</h3>

    <div class="formula formula-example">
      <p class="formula-content">
        Données : SMIC annuel = 21 876,36 € • Salaire annuel = 42 000 €<br><br>
        3×SMIC = 65 629,08 €<br>
        Ratio = 65 629,08 / 42 000 = 1,5626<br>
        Ratio − 1 = 0,5626<br>
        × 1/2 → A = 0,2813<br>
        B = A<sup>1,75</sup> ≈ 0,1087<br>
        C = 0,0200 + (Tdelta × B)<br>
        (exemple courant Tdelta = 0,3781) → C ≈ <b>0,0611</b><br>
        👉 Coefficient arrondi à 4 décimales : <a href="https://entreprendre.service-public.gouv.fr/vosdroits/F24542" target="_blank" rel="noreferrer">Service-Public F24542</a>
      </p>
    </div>

    <h3>F) Étape 5 — Calculer la réduction (montant)</h3>

    <div class="formula formula-example">
      <p class="formula-content">
        Réduction annuelle = 42 000 × 0,0611 = <b>2 566,20 €</b>
      </p>
    </div>

    <h3>8️⃣ Exemples “repères” (pour mémoriser)</h3>

    <div class="formula formula-example">
      <p class="formula-title">Salarié au SMIC (repère maximum)</p>
      <p class="formula-content">
        Si Tdelta = 0,3781 :<br>
        Cmax = 0,0200 + 0,3781 = <b>0,3981</b><br>
        Réduction = 21 876,36 × 0,3981 ≈ <b>8 708,97 €</b>
      </p>
    </div>

    <h3>1️⃣1️⃣ Quelles cotisations sont concernées ?</h3>

    <p style="text-align:center;">
      La réduction s’impute sur des <b>cotisations patronales</b> (logique “allègements généraux”).<br>
      Détails officiels :<br>
      <a href="https://entreprendre.service-public.gouv.fr/vosdroits/F24542" target="_blank" rel="noreferrer">Service-Public F24542</a><br>
      <a href="https://www.urssaf.fr/accueil/employeur/beneficier-exonerations/reduction-generale-cotisation.html" target="_blank" rel="noreferrer">URSSAF — réduction générale</a>
    </p>

    <h3>1️⃣2️⃣ Méthode professionnelle (logiciel de paie)</h3>

    <div class="formula formula-reminder">
      <p class="formula-content">
        En pratique :<br>
        • le logiciel calcule généralement mensuellement (au fil de l’eau)<br>
        • puis régularise pour arriver au résultat annuel<br>
        • applique l’arrondi du coefficient à <b>4 décimales</b><br>
        Source arrondi : <a href="https://entreprendre.service-public.gouv.fr/vosdroits/F24542" target="_blank" rel="noreferrer">Service-Public F24542</a>
      </p>
    </div>

    <h3>1️⃣3️⃣ Comparatif Avant / Après 2026</h3>

    <div class="formula formula-formula">
      <p class="formula-content">
        Avant : seuil principal 1,6 SMIC • plusieurs mécanismes • formule linéaire<br>
        Après 2026 : dégressif jusqu’à &lt; 3 SMIC, nul à 3 SMIC • unifié (RGDU) • formule avec P=1,75<br>
        Source : <a href="https://entreprendre.service-public.gouv.fr/actualites/A18448" target="_blank" rel="noreferrer">Service-Public A18448</a>
      </p>
    </div>

    <h3>1️⃣4️⃣ Pourquoi parfois on parle du FNAL ?</h3>

    <div class="formula formula-reminder">
      <p class="formula-content">
        Ce n’est pas la logique de base : c’est un réglage.<br>
        👉 Tdelta varie selon la situation FNAL, ce qui fait varier légèrement le coefficient maximal.<br><br>
        Service-Public :<br>
        • Tdelta = 0,3781 si FNAL 0,10%<br>
        • Tdelta = 0,3821 si FNAL 0,50%<br>
        <a href="https://entreprendre.service-public.gouv.fr/actualites/A18448" target="_blank" rel="noreferrer">Source — A18448</a><br><br>
        Ce que tu retiens :<br>
        • En exercice : commence avec 0,3781 (cas “classique”)<br>
        • En pro : vérifie le paramétrage de l’entreprise (souvent déjà fait dans le logiciel).
      </p>
    </div>

    <h3>🧾 RGDU appliquée au mois : méthode “cumulée” (sans logiciel)</h3>

<div class="formula formula-reminder">
  <p class="formula-title">Règle fondamentale</p>
  <p class="formula-content">
    La RGDU est <b>annuelle</b>, mais elle est appliquée <b>mensuellement</b> selon une logique <b>cumulée</b>.<br><br>
    👉 Le calcul du mois M se fait toujours sur : <b>les mois échus + le mois en cours de clôture</b> (cumul du 1er janvier jusqu’à fin M).
  </p>
</div>

<div class="formula formula-formula">
  <p class="formula-title">Formule mensuelle à mémoriser</p>
  <p class="formula-content">
    <b>RGDU du mois M</b> = <b>RGDU cumulée fin M</b> − <b>RGDU cumulée fin M−1</b>
  </p>
</div>

<div class="formula formula-warn">
  <p class="formula-title">Attention</p>
  <p class="formula-content">
    ❌ On ne fait pas “réduction annuelle ÷ 12” (sauf cas parfaitement stable, à titre d’approximation).<br>
    ✅ En paie, on raisonne en <b>cumul</b> et on <b>régularise</b> automatiquement.
  </p>
</div>

<h3>📌 Cas complet sur 4 mois (janvier → avril)</h3>

<div class="formula formula-reminder">
  <p class="formula-title">Hypothèses de l’exemple</p>
  <p class="formula-content">
    SMIC mensuel brut 2026 : <b>1 823,03 €</b><br>
    Tmin = <b>0,0200</b> • Tdelta = <b>0,3781</b> • P = <b>1,75</b><br>
    Salaire de base : <b>3 500 €</b><br>
    Mars : <b>brut exceptionnel</b> (prime) = <b>10 000 €</b><br>
    Avril : retour à <b>3 500 €</b>
  </p>
</div>

<h3>✅ Janvier (calcul sur le cumul janvier)</h3>

<div class="formula formula-example">
  <p class="formula-title">Cumuls fin janvier</p>
  <p class="formula-content">
    Brut cumulé = 3 500 €<br>
    SMIC cumulé = 1 823,03 €
  </p>
</div>

<div class="formula formula-example">
  <p class="formula-title">Vérif plafond</p>
  <p class="formula-content">
    3 × SMIC cumulé = 3 × 1 823,03 = <b>5 469,09 €</b><br>
    3 500 &lt; 5 469,09 → ✅ éligible
  </p>
</div>

<div class="formula formula-example">
  <p class="formula-title">Coefficient (sur cumuls)</p>
  <p class="formula-content">
    Ratio = 5 469,09 / 3 500 = <b>1,5626</b><br>
    Ratio − 1 = 0,5626<br>
    × 1/2 → A = 0,2813<br>
    B = A<sup>1,75</sup> ≈ 0,1087<br>
    C = 0,0200 + (0,3781 × 0,1087) ≈ <b>0,0611</b> (arrondi à 4 décimales)
  </p>
</div>

<div class="formula formula-example">
  <p class="formula-title">RGDU janvier</p>
  <p class="formula-content">
    RGDU cumulée fin janvier = 3 500 × 0,0611 = <b>213,85 €</b><br>
    RGDU janvier = <b>213,85 €</b> (pas de soustraction en janvier)
  </p>
</div>

<h3>✅ Février (calcul sur le cumul janvier + février)</h3>

<div class="formula formula-example">
  <p class="formula-title">Cumuls fin février</p>
  <p class="formula-content">
    Brut cumulé = 7 000 €<br>
    SMIC cumulé = 3 646,06 €
  </p>
</div>

<div class="formula formula-example">
  <p class="formula-title">Vérif plafond</p>
  <p class="formula-content">
    3 × SMIC cumulé = 3 × 3 646,06 = <b>10 938,18 €</b><br>
    7 000 &lt; 10 938,18 → ✅ éligible
  </p>
</div>

<div class="formula formula-example">
  <p class="formula-title">Coefficient + RGDU cumulée</p>
  <p class="formula-content">
    (Ici, situation stable → le ratio reste identique → C ≈ <b>0,0611</b>)<br>
    RGDU cumulée fin février = 7 000 × 0,0611 = <b>427,70 €</b>
  </p>
</div>

<div class="formula formula-example">
  <p class="formula-title">RGDU février (différence de cumuls)</p>
  <p class="formula-content">
    RGDU février = 427,70 − 213,85 = <b>213,85 €</b>
  </p>
</div>

<h3>🚨 Mars : dépassement du plafond 3 SMIC en cumul (annulation)</h3>

<div class="formula formula-example">
  <p class="formula-title">Cumuls fin mars</p>
  <p class="formula-content">
    Brut mars (exceptionnel) = <b>10 000 €</b><br>
    Brut cumulé = 3 500 + 3 500 + 10 000 = <b>17 000 €</b><br>
    SMIC cumulé = 1 823,03 × 3 = <b>5 469,09 €</b>
  </p>
</div>

<div class="formula formula-warn">
  <p class="formula-title">Plafond dépassé</p>
  <p class="formula-content">
    3 × SMIC cumulé = 3 × 5 469,09 = <b>16 407,27 €</b><br>
    17 000 ≥ 16 407,27 → ❌ dépassement<br><br>
    👉 Donc <b>RGDU cumulée fin mars = 0 €</b>.
  </p>
</div>

<div class="formula formula-example">
  <p class="formula-title">RGDU mars (régularisation négative)</p>
  <p class="formula-content">
    RGDU mars = RGDU cumulée fin mars − RGDU cumulée fin février<br>
    RGDU mars = 0 − 427,70 = <b>−427,70 €</b><br><br>
    👉 On <b>annule</b> toute la réduction déjà appliquée (janvier + février).<br>
    À fin mars, le compteur est remis à <b>0</b>.
  </p>
</div>

<h3>✅ Avril : retour sous plafond (on repart du cumul réel)</h3>

<div class="formula formula-example">
  <p class="formula-title">Cumuls fin avril + plafond</p>
  <p class="formula-content">
    Brut avril = 3 500 €<br>
    Brut cumulé = 17 000 + 3 500 = <b>20 500 €</b><br><br>
    SMIC cumulé = 1 823,03 × 4 = <b>7 292,12 €</b><br>
    Plafond = 3 × 7 292,12 = <b>21 876,36 €</b><br>
    20 500 &lt; 21 876,36 → ✅ redevient éligible
  </p>
</div>

<div class="formula formula-example">
  <p class="formula-title">Coefficient (sur cumuls fin avril)</p>
  <p class="formula-content">
    Ratio = 21 876,36 / 20 500 = <b>1,0671</b><br>
    Ratio − 1 = 0,0671<br>
    × 1/2 → A = 0,03355<br>
    B = A<sup>1,75</sup> ≈ 0,0026<br>
    C = 0,0200 + (0,3781 × 0,0026) ≈ <b>0,0210</b> (arrondi à 4 décimales)
  </p>
</div>

<div class="formula formula-example">
  <p class="formula-title">RGDU cumulée fin avril + RGDU avril</p>
  <p class="formula-content">
    RGDU cumulée fin avril = 20 500 × 0,0210 = <b>430,50 €</b><br>
    RGDU avril = 430,50 − 0 = <b>430,50 €</b>
  </p>
</div>

<div class="formula formula-reminder">
  <p class="formula-title">Point essentiel à comprendre</p>
  <p class="formula-content">
    En avril, on ne “déduit” pas le négatif de mars.<br>
    Mars a déjà remis la RGDU cumulée à <b>0</b>.<br><br>
    ✅ La règle est toujours : <b>cumul fin M − cumul fin M−1</b>.<br>
    Donc si fin mars = 0 et fin avril = 430,50 → avril = 430,50.
  </p>
</div>

<div class="formula formula-warn">
  <p class="formula-title">Erreur fréquente</p>
  <p class="formula-content">
    ❌ Croire qu’on “compense” un ancien mois négatif.<br>
    ✅ Faux : on applique uniquement la différence entre les <b>deux cumuls</b> successifs.
  </p>
</div>


    <h3>1️⃣5️⃣ Pièges d’examen</h3>

    <div class="formula formula-warn">
      <p class="formula-content">
        ❌ Oublier de calculer le nombre de SMIC<br>
        ❌ Oublier le plafond 3 SMIC (au-dessus = 0)<br>
        ❌ Oublier l’arrondi du coefficient à 4 décimales<br>
        ❌ Mélanger les mécanismes et oublier : Réduction = annuel × coefficient
      </p>
    </div>

    <h3>1️⃣6️⃣ Résumé final</h3>

    <div class="formula formula-reminder">
      <p class="formula-content">
        La RGDU 2026 :<br>
        ✔ allègement patronal<br>
        ✔ maximale au SMIC<br>
        ✔ dégressive jusqu’à &lt; 3 SMIC<br>
        ✔ nulle à 3 SMIC<br>
        ✔ formule : Réduction annuelle = rémunération annuelle × coefficient
      </p>
    </div>

    <h3>Micro-étape : gabarit d’exercice RGDU (recette)</h3>

    <div class="formula formula-formula">
      <p class="formula-content">
        Salaire annuel = mensuel × 12<br>
        SMIC annuel = SMIC mensuel × 12<br>
        Nombre de SMIC = salaire annuel ÷ SMIC annuel<br>
        Si salaire annuel ≥ 3 × SMIC annuel ⇒ RGDU = 0<br><br>
        A = 1/2 × ( (3×SMIC_annuel / salaire_annuel) − 1 )<br>
        B = A<sup>1,75</sup><br>
        C = Tmin + (Tdelta × B) (arrondi C à 4 décimales)<br>
        Réduction = salaire annuel × C (arrondi au centime)
      </p>
    </div>

    <p style="text-align:center;">
      <a href="#/referentiel/dispositifs-transversaux">⬅ Retour “Dispositifs / outils transversaux”</a>
    </p>

  `,
};
