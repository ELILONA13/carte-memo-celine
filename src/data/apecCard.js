// ✅ src/data/apecCard.js

export const apecCard = {
    id: "apec",
    group: "referentiel",
    title: "APEC — Cotisation des cadres (2026)",
    content: `

  <p style="text-align:center;">📘 <b>APEC — Cotisation des cadres (2026)</b></p>
  <p style="text-align:center;">Version complète “cours / examen” + pratique paie (fiche Word prête)</p>

  <h3 style="text-align:center;">1️⃣ Définition : c’est quoi l’APEC ?</h3>
  <p style="text-align:center;">
    L’<b>APEC</b> (Association Pour l’Emploi des Cadres) est un organisme paritaire qui accompagne :
  </p>
  <ul class="centered-list bullets">
    <li>les <b>cadres</b> et <b>jeunes diplômés</b> dans leur parcours professionnel,</li>
    <li>les <b>entreprises</b> (recrutement, attractivité, conseil).</li>
  </ul>

  <p style="text-align:center;">
    ✅ En paie, “APEC” désigne surtout la <b>cotisation obligatoire</b> qui finance ce mandat de service public.
  </p>

  <div class="formula formula-reminder">
    <p class="formula-title">🔗 Source officielle APEC (explications + paramètres de la cotisation)</p>
    <p class="formula-content" style="text-align:center;">
      <a href="https://corporate.apec.fr/home/notre-vision/qui-sommes-nous.html" target="_blank" rel="noreferrer">https://corporate.apec.fr/home/notre-vision/qui-sommes-nous.html</a>
    </p>
  </div>

  <h3 style="text-align:center;">2️⃣ Qui est concerné ?</h3>
  <p style="text-align:center;">
    📌 <b>Principe</b> : la cotisation APEC concerne les <b>salariés relevant de la catégorie “cadres”</b> (au sens des textes et des accords applicables).
    <br>
    ➡️ Un <b>non-cadre</b> ne cotise <b>pas</b> à l’APEC (c’est un réflexe de contrôle de bulletin).
  </p>

  <div class="formula formula-warn">
    <p class="formula-title">⚠️ Piège examen / pratique</p>
    <p class="formula-content" style="text-align:center;">
      - Le mot “cadre” sur un organigramme ne suffit pas.<br>
      - C’est la <b>classification / catégorie objective</b> qui compte (statut cadre au sens du régime).<br>
      La page APEC rappelle que la cotisation est due pour les salariés inscrits “au titre 4 et 4 bis” du régime des cadres (référence historique).
    </p>
    <p class="formula-content" style="text-align:center;">
      <a href="https://corporate.apec.fr/home/notre-vision/qui-sommes-nous.html" target="_blank" rel="noreferrer">https://corporate.apec.fr/home/notre-vision/qui-sommes-nous.html</a>
    </p>
  </div>

  <h3 style="text-align:center;">3️⃣ Organisme de recouvrement (réflexe DSN)</h3>
  <p style="text-align:center;">
    ✅ La cotisation APEC est <b>recouvrée en même temps que les cotisations de retraite complémentaire</b>, via les circuits <b>AGIRC-ARRCO</b>
    (déclaration et paiement intégrés au flux retraite/DSN).
    <br>
    👉 C’est pour ça que, dans les logiciels, l’APEC apparaît souvent dans le bloc “AGIRC-ARRCO / cadres”.
  </p>

  <div class="formula formula-reminder">
    <p class="formula-title">🔗 Source officielle APEC</p>
    <p class="formula-content" style="text-align:center;">
      <a href="https://corporate.apec.fr/home/notre-vision/qui-sommes-nous.html" target="_blank" rel="noreferrer">https://corporate.apec.fr/home/notre-vision/qui-sommes-nous.html</a>
    </p>
  </div>

  <h3 style="text-align:center;">4️⃣ Assiette : sur quelle base calcule-t-on l’APEC ?</h3>
  <p style="text-align:center;">
    📌 <b>Assiette = salaire brut soumis</b>, mais <b>plafonné</b>.
  </p>

  <div class="formula formula-reminder">
    <p class="formula-title">✅ Règle officielle</p>
    <p class="formula-content" style="text-align:center;">
      La cotisation est calculée sur le <b>salaire brut limité à 4 fois le plafond de la Sécurité sociale</b>.
    </p>
    <p class="formula-content" style="text-align:center;">
      <a href="https://corporate.apec.fr/home/notre-vision/qui-sommes-nous.html" target="_blank" rel="noreferrer">https://corporate.apec.fr/home/notre-vision/qui-sommes-nous.html</a>
    </p>
  </div>

  <p style="text-align:center;">
    🔎 Traduction paie (mensuelle) :
  </p>
  <ul class="centered-list bullets">
    <li>On raisonne sur une limite mensuelle : <b>4 × PMSS</b>.</li>
    <li>En 2026, la CCI Paris IDF présente la borne “de 0 à 16 020 €” (ce qui correspond à 4 × PMSS 2026).</li>
  </ul>

  <div class="formula formula-reminder">
    <p class="formula-title">🔗 Source tableau 2026 (CCI Paris IDF)</p>
    <p class="formula-content" style="text-align:center;">
      <a href="https://www.entreprises.cci-paris-idf.fr/fiches-pratiques/les-charges-sociales-au-1er-janvier-2026?utm_source=chatgpt.com" target="_blank" rel="noreferrer">https://www.entreprises.cci-paris-idf.fr/fiches-pratiques/les-charges-sociales-au-1er-janvier-2026?utm_source=chatgpt.com</a>
    </p>
  </div>

  <h3 style="text-align:center;">5️⃣ Taux APEC 2026 (obligatoires)</h3>
  <p style="text-align:center;">
    ✅ <b>Taux total : 0,06 %</b><br>
    - <b>Part employeur : 0,036 %</b><br>
    - <b>Part salarié : 0,024 %</b>
  </p>

  <div class="formula formula-reminder">
    <p class="formula-title">🔗 Sources</p>
    <p class="formula-content" style="text-align:center;">
      Source officielle APEC :<br>
      <a href="https://corporate.apec.fr/home/notre-vision/qui-sommes-nous.html" target="_blank" rel="noreferrer">https://corporate.apec.fr/home/notre-vision/qui-sommes-nous.html</a>
      <br><br>
      Source tableau 2026 (CCI Paris IDF) :<br>
      <a href="https://www.entreprises.cci-paris-idf.fr/fiches-pratiques/les-charges-sociales-au-1er-janvier-2026?utm_source=chatgpt.com" target="_blank" rel="noreferrer">https://www.entreprises.cci-paris-idf.fr/fiches-pratiques/les-charges-sociales-au-1er-janvier-2026?utm_source=chatgpt.com</a>
    </p>
  </div>

  <h3 style="text-align:center;">6️⃣ Méthode de calcul (à savoir refaire en examen)</h3>
  <ol class="centered-list">
    <li>Déterminer l’<b>assiette APEC</b> : assiette = brut soumis, <b>plafonné à 4 PMSS</b> (donc, en 2026, <b>plafond mensuel APEC = 16 020 €</b> d’après le tableau CCI).</li>
    <li>Appliquer les taux : salarié = assiette × 0,024 % ; employeur = assiette × 0,036 %.</li>
    <li><b>Arrondir au centime</b> sur les montants de cotisations.</li>
  </ol>

  <div class="formula formula-reminder">
    <p class="formula-title">🔗 Référence plafond 2026 (CCI)</p>
    <p class="formula-content" style="text-align:center;">
      <a href="https://www.entreprises.cci-paris-idf.fr/fiches-pratiques/les-charges-sociales-au-1er-janvier-2026?utm_source=chatgpt.com" target="_blank" rel="noreferrer">https://www.entreprises.cci-paris-idf.fr/fiches-pratiques/les-charges-sociales-au-1er-janvier-2026?utm_source=chatgpt.com</a>
    </p>
  </div>

  <h3 style="text-align:center;">7️⃣ Exemples chiffrés 2026 (arrondis au centime)</h3>

  <div class="formula formula-example">
    <p class="formula-title">✅ Exemple 1 — Cadre à 3 000 € brut (assiette non plafonnée)</p>
    <p class="formula-content" style="text-align:center;">
      - Assiette APEC = 3 000 €<br>
      - Part salarié = 3 000 × 0,024 % = 3 000 × 0,00024 = <b>0,72 €</b><br>
      - Part employeur = 3 000 × 0,036 % = 3 000 × 0,00036 = <b>1,08 €</b><br>
      - Total APEC = <b>1,80 €</b><br><br>
      (Paramètres officiels : taux + plafonnement à 4 PSS) :<br>
      <a href="https://corporate.apec.fr/home/notre-vision/qui-sommes-nous.html" target="_blank" rel="noreferrer">https://corporate.apec.fr/home/notre-vision/qui-sommes-nous.html</a>
    </p>
  </div>

  <div class="formula formula-example">
    <p class="formula-title">✅ Exemple 2 — Cadre à 6 000 € brut (assiette non plafonnée)</p>
    <p class="formula-content" style="text-align:center;">
      - Assiette APEC = 6 000 €<br>
      - Part salarié = 6 000 × 0,00024 = <b>1,44 €</b><br>
      - Part employeur = 6 000 × 0,00036 = <b>2,16 €</b><br>
      - Total APEC = <b>3,60 €</b> :<br>
      <a href="https://corporate.apec.fr/home/notre-vision/qui-sommes-nous.html" target="_blank" rel="noreferrer">https://corporate.apec.fr/home/notre-vision/qui-sommes-nous.html</a>
    </p>
  </div>

  <div class="formula formula-example">
    <p class="formula-title">✅ Exemple 3 — Cadre à 20 000 € brut (assiette plafonnée)</p>
    <p class="formula-content" style="text-align:center;">
      - Plafond mensuel APEC 2026 = <b>16 020 €</b> (tableau CCI) :<br>
      <a href="https://www.entreprises.cci-paris-idf.fr/fiches-pratiques/les-charges-sociales-au-1er-janvier-2026?utm_source=chatgpt.com" target="_blank" rel="noreferrer">https://www.entreprises.cci-paris-idf.fr/fiches-pratiques/les-charges-sociales-au-1er-janvier-2026?utm_source=chatgpt.com</a><br><br>
      - Assiette APEC = min(20 000 ; 16 020) = <b>16 020 €</b><br>
      - Part salarié = 16 020 × 0,00024 = 3,8448 → <b>3,84 €</b><br>
      - Part employeur = 16 020 × 0,00036 = 5,7672 → <b>5,77 €</b><br>
      - Total APEC = <b>9,61 €</b>
    </p>
  </div>

  <h3 style="text-align:center;">8️⃣ “Réflexes logiciel de paie” (contrôles indispensables)</h3>
  <p style="text-align:center;">
    ✅ À vérifier systématiquement sur un bulletin :
  </p>
  <ul class="centered-list bullets">
    <li>Le salarié est-il <b>bien cadre</b> au sens du régime (sinon <b>pas d’APEC</b>) ?</li>
    <li>Le logiciel applique-t-il bien le <b>plafond 4 × PSS</b> (donc plafonnement en paie mensuelle) ?</li>
    <li>Les <b>taux</b> sont-ils à jour : 0,06% (0,036 / 0,024) ?</li>
    <li>Rubrique au bon endroit (bloc retraite/AGIRC-ARRCO) : cohérent avec le recouvrement.</li>
  </ul>

  <div class="formula formula-reminder">
    <p class="formula-title">🔗 Source officielle APEC (règles, plafond, taux)</p>
    <p class="formula-content" style="text-align:center;">
      <a href="https://corporate.apec.fr/home/notre-vision/qui-sommes-nous.html" target="_blank" rel="noreferrer">https://corporate.apec.fr/home/notre-vision/qui-sommes-nous.html</a>
    </p>
  </div>

  <div class="formula formula-warn">
    <p class="formula-title">⚠️ Piège examen</p>
    <p class="formula-content" style="text-align:center;">
      Ne pas confondre <b>AGIRC-ARRCO (retraite complémentaire)</b> et <b>APEC</b> :<br>
      - l’APEC est une <b>cotisation spécifique</b> (cadres),<br>
      - elle n’a pas les mêmes tranches T1/T2 que les cotisations de points (même si elle “vit” dans le même univers DSN/retraite).
    </p>
  </div>

  <h3 style="text-align:center;">9️⃣ Liens officiels à intégrer dans ta fiche (révision + preuves)</h3>
  <ul class="centered-list bullets">
    <li>APEC (source officielle : recouvrement, plafonnement, taux) :
      <a href="https://corporate.apec.fr/home/notre-vision/qui-sommes-nous.html" target="_blank" rel="noreferrer">https://corporate.apec.fr/home/notre-vision/qui-sommes-nous.html</a>
    </li>
    <li>Tableau “charges sociales au 1er janvier 2026” (repère APEC + borne 0 → 16 020 €) :
      <a href="https://www.entreprises.cci-paris-idf.fr/fiches-pratiques/les-charges-sociales-au-1er-janvier-2026?utm_source=chatgpt.com" target="_blank" rel="noreferrer">https://www.entreprises.cci-paris-idf.fr/fiches-pratiques/les-charges-sociales-au-1er-janvier-2026?utm_source=chatgpt.com</a>
    </li>
  </ul>

  <p style="text-align:center;">
    <a href="#/referentiel/agirc-arrco">⬅ Retour “AGIRC-ARRCO”</a>
    <span style="margin:0 10px;">•</span>
    <a href="#/referentiel/cotisations-contributions">⬅ Retour “Cotisations & contributions”</a>
  </p>

  `,
};
