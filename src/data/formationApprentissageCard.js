// src/data/formationApprentissageCard.js

export const formationApprentissageCard = {
    id: "formation-apprentissage",
    group: "referentiel",
    title: "Formation professionnelle & apprentissage — CUFPA / TA / CSA (2026)",
    content: `

  <p style="text-align:center;"><b>📘 Les contributions de la formation professionnelle et de l’apprentissage — 2026</b></p>
  <p style="text-align:center;">(Version complète “cours / examen” + pratique paie / DSN)</p>

  <div class="formula formula-reminder">
    <p class="formula-title">🎯 Objectif</p>
    <p class="formula-content">
      Comprendre et savoir expliquer <b>qui paie</b>, <b>à qui</b>, <b>comment</b> (DSN/URSSAF),
      puis appliquer les règles “pro” : <b>CUFPA</b> (CFP + TA), <b>CPF-CDD</b>, <b>CSA</b>,
      et le <b>calendrier mensuel/annuel</b> (pièges examen).
    </p>
  </div>

  <h3>0️⃣ Introduction pédagogique : comprendre “qui paie ? à qui ? comment ?”</h3>

  <p style="text-align:center;"><b>✅ Qui paie ?</b></p>
  <p style="text-align:center;">
    👉 <b>C’est l’employeur</b> qui paie ces contributions. Ce sont des <b>contributions patronales</b>
    (elles ne sont pas retenues sur le salaire du salarié).
  </p>

  <p style="text-align:center;"><b>✅ À qui c’est payé ?</b></p>
  <p style="text-align:center;">
    👉 <b>À l’URSSAF via la DSN</b> (Déclaration Sociale Nominative).
    Concrètement : le logiciel calcule → la DSN déclare → l’URSSAF recouvre (prélève/encaisse).
  </p>

  <div class="formula formula-reminder">
    <p class="formula-title">🔗 Pages officielles utiles (vue d’ensemble)</p>
    <p class="formula-content">
      URSSAF — Contributions à la formation professionnelle (CFP et CPF-CDD) :
      <a href="https://www.urssaf.fr/accueil/employeur/cotisations/liste-cotisations/formation-professionnelle.html" target="_blank" rel="noreferrer">https://www.urssaf.fr/accueil/employeur/cotisations/liste-cotisations/formation-professionnelle.html</a><br/>
      URSSAF — Taxe d’apprentissage & CSA :
      <a href="https://www.urssaf.fr/accueil/employeur/cotisations/liste-cotisations/taxe-apprentissage-csa.html" target="_blank" rel="noreferrer">https://www.urssaf.fr/accueil/employeur/cotisations/liste-cotisations/taxe-apprentissage-csa.html</a><br/>
      BOSS (référence juridique / doctrine) — Contributions formation pro & apprentissage :
      <a href="https://boss.gouv.fr/portail/accueil/regles-dassujettissement/formationpro-apprentissage.html" target="_blank" rel="noreferrer">https://boss.gouv.fr/portail/accueil/regles-dassujettissement/formationpro-apprentissage.html</a>
    </p>
  </div>

  <p style="text-align:center;"><b>✅ Et après, l’argent va où ?</b></p>
  <ul class="centered-list bullets">
    <li><b>CFP</b> : finance la formation professionnelle continue (salariés + demandeurs d’emploi) via les circuits nationaux (France compétences/OPCO).</li>
    <li><b>Taxe d’apprentissage (TA)</b> : finance l’apprentissage (part principale) et, hors Alsace-Moselle, certaines formations initiales (solde), avec affectation du solde via <b>SOLTéA</b>.</li>
    <li><b>CSA</b> : “bonus/malus alternance” pour les grandes entreprises qui n’emploient pas assez d’alternants.</li>
  </ul>

  <div class="formula formula-reminder">
    <p class="formula-title">🔗 Pages Service-Public (détails)</p>
    <p class="formula-content">
      CFP : <a href="https://entreprendre.service-public.gouv.fr/vosdroits/F22570" target="_blank" rel="noreferrer">https://entreprendre.service-public.gouv.fr/vosdroits/F22570</a><br/>
      TA : <a href="https://entreprendre.service-public.gouv.fr/vosdroits/F22574" target="_blank" rel="noreferrer">https://entreprendre.service-public.gouv.fr/vosdroits/F22574</a><br/>
      CSA : <a href="https://entreprendre.service-public.gouv.fr/vosdroits/F39189" target="_blank" rel="noreferrer">https://entreprendre.service-public.gouv.fr/vosdroits/F39189</a>
    </p>
  </div>

  <div class="formula formula-warn">
    <p class="formula-title">⚠️ Point clé “pro” : codes DSN / CTP (pas “cotées à 1000”)</p>
    <p class="formula-content">
      En DSN, l’identification se fait via des <b>codes déclaratifs / CTP</b> (URSSAF/Net-entreprises),
      pas via un “code 1000” universel (qui vient souvent d’un paramétrage logiciel interne).<br/>
      Tables URSSAF (CTP) :
      <a href="https://www.urssaf.fr/accueil/outils-documentation/outils/tables-reference-CTP.html" target="_blank" rel="noreferrer">https://www.urssaf.fr/accueil/outils-documentation/outils/tables-reference-CTP.html</a>
    </p>
  </div>

  <h3>1️⃣ Les contributions de la formation professionnelle et de l’apprentissage</h3>

  <p style="text-align:center;">
    Les employeurs concourent au développement de la formation professionnelle et de l'apprentissage par le financement direct des actions de formation
    de leurs salariés ainsi que par le versement de différentes contributions :
  </p>

  <ul class="centered-list bullets">
    <li><b>La Contribution Unique à la Formation Professionnelle et à l'Alternance (CUFPA)</b>, composée de la <b>Contribution à la Formation Professionnelle (CFP)</b> et de la <b>Taxe d’Apprentissage (TA)</b>.</li>
    <li><b>La Contribution Supplémentaire à l'Apprentissage (CSA)</b></li>
    <li><b>La contribution dédiée au financement du Compte Personnel de Formation pour les titulaires d'un Contrat à Durée Déterminée (contribution au CPF-CDD)</b>.</li>
  </ul>

  <div class="formula formula-reminder">
    <p class="formula-title">🔗 Référence d’ensemble (BOSS)</p>
    <p class="formula-content">
      <a href="https://boss.gouv.fr/portail/accueil/regles-dassujettissement/formationpro-apprentissage.html" target="_blank" rel="noreferrer">https://boss.gouv.fr/portail/accueil/regles-dassujettissement/formationpro-apprentissage.html</a>
    </p>
  </div>

  <h3>2️⃣ La Contribution Unique à la Formation Professionnelle et à l’Alternance (CUFPA)</h3>

  <p style="text-align:center;"><b>2.1. Entreprises concernées par la CUFPA : principes</b></p>

  <p style="text-align:center;">Les entreprises concernées par la CUFPA doivent répondre à ces triple conditions :</p>
  <ul class="centered-list bullets">
    <li>Être soumis au droit français</li>
    <li>Payer un impôt sur les sociétés ou sur le revenu</li>
    <li>Avoir au minimum un salarié</li>
  </ul>

  <p style="text-align:center;">Les structures concernées par cette CUFPA sont les suivantes :</p>
  <ul class="centered-list bullets">
    <li>Établissements de droit privé</li>
    <li>Établissements publics à caractère industriel ou commercial</li>
    <li>Associations</li>
    <li>Sociétés d’économie mixte</li>
    <li>Régies départementales ou communales avec une personnalité morale exerçant une activité industrielle ou commerciale</li>
  </ul>

  <div class="formula formula-reminder">
    <p class="formula-title">🔗 Références officielles</p>
    <p class="formula-content">
      CFP : <a href="https://entreprendre.service-public.gouv.fr/vosdroits/F22570" target="_blank" rel="noreferrer">https://entreprendre.service-public.gouv.fr/vosdroits/F22570</a><br/>
      TA : <a href="https://entreprendre.service-public.gouv.fr/vosdroits/F22574" target="_blank" rel="noreferrer">https://entreprendre.service-public.gouv.fr/vosdroits/F22574</a>
    </p>
  </div>

  <p style="text-align:center;"><b>2.2. Exonérations / cas d’exclusion (à manier avec prudence en examen)</b></p>

  <p style="text-align:center;">Toutefois, l’entreprise peut être exonérée (selon situations prévues par les textes et conditions exactes indiquées dans les pages officielles) si :</p>
  <ul class="centered-list bullets">
    <li>L’entreprise emploie un ou plusieurs apprentis et remplit les conditions d’exonération mensuelle de taxe d’apprentissage (voir § 5)</li>
    <li>L’entreprise est une personne morale qui a pour objectif exclusif l’enseignement</li>
    <li>L’entreprise est une société civile de moyens dont l’activité n’est pas commerciale</li>
  </ul>

  <p style="text-align:center;">
    Pour vérifier les conditions exactes :
    <a href="https://entreprendre.service-public.gouv.fr/vosdroits/F22574" target="_blank" rel="noreferrer">https://entreprendre.service-public.gouv.fr/vosdroits/F22574</a>
  </p>

  <div class="formula formula-warn">
    <p class="formula-title">⚠️ Attention (point fondamental)</p>
    <p class="formula-content">
      La <b>CUFPA</b> regroupe : <b>CFP</b> + <b>Taxe d’Apprentissage (TA)</b>.<br/>
      Ces contributions sont <b>recouvrées via la DSN</b> : une grande partie <b>mensuellement</b>,
      et certaines composantes ont des <b>régularisations / déclarations annuelles</b> (voir tableau calendrier § 6).<br/>
      Source officielle “échéances DSN” :
      <a href="https://www.net-entreprises.fr/dsn-csa-et-solde-de-la-taxe-dapprentissage-les-echeances-declaratives/" target="_blank" rel="noreferrer">https://www.net-entreprises.fr/dsn-csa-et-solde-de-la-taxe-dapprentissage-les-echeances-declaratives/</a>
    </p>
  </div>

  <p style="text-align:center;"><b>Remarque (bulletin de paie)</b></p>
  <p style="text-align:center;">
    Sur le bulletin détaillé, les cotisations sont souvent subdivisées (CFP, TA part principale, TA solde…).
    C’est la raison pour laquelle on détaille les contributions rattachées au CUFPA, même si le recouvrement se fait via la DSN.
  </p>

  <h3>3️⃣ La Contribution à la Formation Professionnelle (CFP)</h3>

  <p style="text-align:center;"><b>3.1. Définition</b></p>
  <p style="text-align:center;">
    Les employeurs, par le versement d'une cotisation spécifique, participent au financement et au développement de la formation professionnelle continue
    de ses salariés, mais également des demandeurs d'emploi.
  </p>

  <div class="formula formula-reminder">
    <p class="formula-title">🔗 Référence officielle</p>
    <p class="formula-content">
      <a href="https://entreprendre.service-public.gouv.fr/vosdroits/F22570" target="_blank" rel="noreferrer">https://entreprendre.service-public.gouv.fr/vosdroits/F22570</a>
    </p>
  </div>

  <p style="text-align:center;"><b>3.2. À qui est versée la CFP ?</b></p>
  <p style="text-align:center;">
    L'entreprise verse cette cotisation à l'URSSAF (recouvrement via DSN).<br/>
    URSSAF :
    <a href="https://www.urssaf.fr/accueil/employeur/cotisations/liste-cotisations/formation-professionnelle.html" target="_blank" rel="noreferrer">https://www.urssaf.fr/accueil/employeur/cotisations/liste-cotisations/formation-professionnelle.html</a>
  </p>

  <p style="text-align:center;"><b>3.3. Base de calcul (assiette)</b></p>
  <p style="text-align:center;">
    Le montant du versement est calculé sur le total des rémunérations brutes des salariés de l'entreprise (logique “masse salariale” dans les conditions prévues par les textes).
  </p>

  <div class="formula formula-reminder">
    <p class="formula-title">🔗 Référence BOSS</p>
    <p class="formula-content">
      <a href="https://boss.gouv.fr/portail/accueil/regles-dassujettissement/formationpro-apprentissage.html" target="_blank" rel="noreferrer">https://boss.gouv.fr/portail/accueil/regles-dassujettissement/formationpro-apprentissage.html</a>
    </p>
  </div>

  <p style="text-align:center;"><b>3.4. Taux (repères examen)</b></p>
  <p style="text-align:center;">
    Le montant des rémunérations brutes est à multiplier par un taux. Les taux et cas particuliers sont décrits dans les sources officielles (effectif, secteur…).<br/>
    Référence officielle (CFP) :
    <a href="https://entreprendre.service-public.gouv.fr/vosdroits/F22570" target="_blank" rel="noreferrer">https://entreprendre.service-public.gouv.fr/vosdroits/F22570</a>
  </p>

  <div class="formula formula-warn">
    <p class="formula-title">📌 Repère très important (seuil 11 salariés)</p>
    <p class="formula-content">
      Franchissement du seuil de 11 salariés : règle des <b>5 années consécutives</b> depuis 2020 (voir page officielle).<br/>
      <a href="https://entreprendre.service-public.gouv.fr/vosdroits/F22570" target="_blank" rel="noreferrer">https://entreprendre.service-public.gouv.fr/vosdroits/F22570</a>
    </p>
  </div>

  <div class="formula formula-warn">
    <p class="formula-title">⚠️ Attention (correction indispensable — piège de cours)</p>
    <p class="formula-content">
      Ton texte mentionne : « Le montant total versé supporte la TVA au taux de 20 % ».<br/>
      ➡️ En pratique paie/URSSAF : les contributions recouvrées par l’URSSAF (CFP, CPF-CDD, TA/CSA) ne se paient pas “avec une TVA ajoutée” à l’URSSAF.<br/>
      Référence URSSAF (guide) :
      <a href="https://www.urssaf.fr/files/live/sites/urssaffr/files/outils-documentation/guides/Guide-CFPTA.pdf" target="_blank" rel="noreferrer">https://www.urssaf.fr/files/live/sites/urssaffr/files/outils-documentation/guides/Guide-CFPTA.pdf</a><br/>
      À ne pas confondre avec la TVA applicable à certaines prestations de formation facturées (autre sujet).
    </p>
  </div>

  <h3>4️⃣ Contribution CPF-CDD</h3>

  <p style="text-align:center;"><b>4.1. Principe</b></p>
  <p style="text-align:center;">
    En cas d'emploi de salariés en CDD, une contribution CPF-CDD est due. Elle s'élève à <b>1 % de la masse salariale</b> des CDD concernés.
  </p>

  <div class="formula formula-reminder">
    <p class="formula-title">🔗 Référence officielle</p>
    <p class="formula-content">
      <a href="https://entreprendre.service-public.gouv.fr/vosdroits/F22570" target="_blank" rel="noreferrer">https://entreprendre.service-public.gouv.fr/vosdroits/F22570</a>
    </p>
  </div>

  <p style="text-align:center;"><b>4.2. CDD exclus (à mémoriser)</b></p>
  <p style="text-align:center;">Les CDD suivants ne donnent pas lieu au versement de la contribution spécifique à la formation :</p>
  <ul class="centered-list bullets">
    <li>Contrat d'accompagnement dans l'emploi</li>
    <li>Contrat d'apprentissage</li>
    <li>Contrat de professionnalisation</li>
    <li>Contrats conclus avec un travailleur saisonnier</li>
  </ul>

  <p style="text-align:center;"><b>Remarque (paiement)</b></p>
  <p style="text-align:center;">
    La contribution CPF-CDD est payée <b>mensuellement</b> auprès de l’URSSAF via DSN.<br/>
    URSSAF :
    <a href="https://www.urssaf.fr/accueil/employeur/cotisations/liste-cotisations/formation-professionnelle.html" target="_blank" rel="noreferrer">https://www.urssaf.fr/accueil/employeur/cotisations/liste-cotisations/formation-professionnelle.html</a>
  </p>

  <h3>5️⃣ La taxe d'apprentissage et la contribution supplémentaire à l'apprentissage</h3>

  <p style="text-align:center;"><b>5.1. La taxe d'apprentissage (TA) — définition pédagogique</b></p>
  <p style="text-align:center;">
    La taxe d'apprentissage est un <b>impôt</b>, dû par les entreprises afin de financer l'apprentissage ainsi que les formations technologiques et professionnelles.
  </p>

  <div class="formula formula-reminder">
    <p class="formula-title">🔗 Référence officielle</p>
    <p class="formula-content">
      <a href="https://entreprendre.service-public.gouv.fr/vosdroits/F22574" target="_blank" rel="noreferrer">https://entreprendre.service-public.gouv.fr/vosdroits/F22574</a>
    </p>
  </div>

  <p style="text-align:center;"><b>5.2. Qui est concerné ?</b></p>
  <p style="text-align:center;">
    Il est dû par toutes les entreprises soumises à l'impôt sur le revenu ou sur les sociétés, selon les règles et exceptions détaillées sur la page officielle :<br/>
    <a href="https://entreprendre.service-public.gouv.fr/vosdroits/F22574" target="_blank" rel="noreferrer">https://entreprendre.service-public.gouv.fr/vosdroits/F22574</a>
  </p>

  <p style="text-align:center;"><b>5.3. Exonérations (à vérifier sur la page officielle)</b></p>
  <p style="text-align:center;">Sont notamment exonérées dans certains cas :</p>
  <ul class="centered-list bullets">
    <li>Les entreprises employant au moins un apprenti et dont la base d'imposition (ensemble des rémunérations) ne dépasse pas <b>6 fois le SMIC mensuel</b> (seuil chiffré actualisé sur la page officielle).</li>
    <li>Les personnes morales ayant pour objet exclusif l'enseignement.</li>
    <li>Les Sociétés Civiles de Moyens (SCM), sous conditions, lorsque leur activité est non commerciale.</li>
    <li>Certains groupements d’employeurs agricoles (selon conditions).</li>
  </ul>

  <p style="text-align:center;">
    Référence officielle :
    <a href="https://entreprendre.service-public.gouv.fr/vosdroits/F22574" target="_blank" rel="noreferrer">https://entreprendre.service-public.gouv.fr/vosdroits/F22574</a>
  </p>

  <p style="text-align:center;"><b>5.4. Taux de la TA (repère examen)</b></p>
  <p style="text-align:center;">
    Le taux de la taxe d'apprentissage est de :<br/>
    - <b>0,68 %</b> (cas général)<br/>
    - <b>0,44 % en Alsace-Moselle</b> (57, 67, 68)
  </p>

  <p style="text-align:center;">
    Référence officielle :
    <a href="https://entreprendre.service-public.gouv.fr/vosdroits/F22574" target="_blank" rel="noreferrer">https://entreprendre.service-public.gouv.fr/vosdroits/F22574</a>
  </p>

  <p style="text-align:center;"><b>5.5. Mensuel vs annuel (TA)</b></p>
  <ul class="centered-list bullets">
    <li>La taxe d'apprentissage est versée à l’URSSAF <b>de façon mensuelle</b> pour la <b>part principale</b> (recouvrement mensuel via DSN).</li>
    <li><b>Attention</b> : le <b>solde</b> de la taxe d'apprentissage est déclaré <b>annuellement</b> sur la DSN du mois d’avril.</li>
  </ul>

  <div class="formula formula-reminder">
    <p class="formula-title">🔗 Références (échéances et solde)</p>
    <p class="formula-content">
      Net-entreprises (échéances) :
      <a href="https://www.net-entreprises.fr/dsn-csa-et-solde-de-la-taxe-dapprentissage-les-echeances-declaratives/" target="_blank" rel="noreferrer">https://www.net-entreprises.fr/dsn-csa-et-solde-de-la-taxe-dapprentissage-les-echeances-declaratives/</a><br/>
      Service-Public (TA) :
      <a href="https://entreprendre.service-public.gouv.fr/vosdroits/F22574" target="_blank" rel="noreferrer">https://entreprendre.service-public.gouv.fr/vosdroits/F22574</a><br/>
      Net-entreprises (TA et solde) :
      <a href="https://net-entreprises.custhelp.com/app/answers/detail_dsn/a_id/2504/~/taxe-d%E2%80%99apprentissage-%28ta%29-et-son-solde" target="_blank" rel="noreferrer">https://net-entreprises.custhelp.com/app/answers/detail_dsn/a_id/2504/~/taxe-d%E2%80%99apprentissage-%28ta%29-et-son-solde</a>
    </p>
  </div>

  <p style="text-align:center;"><b>5.6. Contribution Supplémentaire à l'Apprentissage (CSA)</b></p>

  <p style="text-align:center;"><b>A) Quand est-elle due ?</b></p>
  <p style="text-align:center;">
    Lorsque l'effectif de l'entreprise est de <b>250 salariés et plus</b>, la CSA est due par les entreprises qui emploient <b>moins de 5 % d’alternants</b>
    par rapport à leur effectif annuel moyen.
  </p>

  <p style="text-align:center;">Les alternants pris en compte comprennent notamment :</p>
  <ul class="centered-list bullets">
    <li>Salariés en contrat de professionnalisation ou d'apprentissage</li>
    <li>Salariés embauchés en CDI pendant l'année suivant la date de fin du contrat de professionnalisation ou d'apprentissage</li>
    <li>Salariés bénéficiant d’une Convention Industrielle de Formation par la Recherche (CIFRE)</li>
  </ul>

  <p style="text-align:center;">
    Référence officielle :
    <a href="https://entreprendre.service-public.gouv.fr/vosdroits/F39189" target="_blank" rel="noreferrer">https://entreprendre.service-public.gouv.fr/vosdroits/F39189</a>
  </p>

  <p style="text-align:center;"><b>B) Assiette</b></p>
  <p style="text-align:center;">
    La CSA est calculée également sur la somme des rémunérations brutes annuelles (Masse salariale : MS).
  </p>

  <p style="text-align:center;">
    Référence officielle :
    <a href="https://entreprendre.service-public.gouv.fr/vosdroits/F39189" target="_blank" rel="noreferrer">https://entreprendre.service-public.gouv.fr/vosdroits/F39189</a>
  </p>

  <p style="text-align:center;"><b>C) Taux (tableau examen)</b></p>
  <p style="text-align:center;">
    Le taux varie en fonction du nombre d'alternants employés par l'entreprise par rapport à son effectif global.
  </p>

  <p style="text-align:center;">
    Référence officielle :
    <a href="https://entreprendre.service-public.gouv.fr/vosdroits/F39189" target="_blank" rel="noreferrer">https://entreprendre.service-public.gouv.fr/vosdroits/F39189</a>
  </p>

  <div class="formula formula-formula">
    <p class="formula-title">📊 Contribution Supplémentaire à l'Apprentissage (CSA) — tableau examen</p>

    <table class="memo-table">
      <thead>
        <tr>
          <th>Contribution Supplémentaire à l'Apprentissage (CSA)</th>
          <th>Effectif alternants</th>
          <th>Effectif entreprise 250 et +</th>
          <th>Effectif entreprise 2 000 et +</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td>X &lt; 1 %</td>
          <td>0,4 % de la MS</td>
          <td>0,6 % de la MS</td>
        </tr>
        <tr>
          <td></td>
          <td>1 % ⩽ X &lt; 2 %</td>
          <td>0,2 % de la MS</td>
          <td>0,2 % de la MS</td>
        </tr>
        <tr>
          <td></td>
          <td>2 % ⩽ X &lt; 3 %</td>
          <td>0,1 % de la MS</td>
          <td>0,1 % de la MS</td>
        </tr>
        <tr>
          <td></td>
          <td>3 % ⩽ X &lt; 5 %</td>
          <td>0,05 % de la MS</td>
          <td>0,05 % de la MS</td>
        </tr>
        <tr>
          <td></td>
          <td>X ≥ 5 %</td>
          <td>Exonéré</td>
          <td>Exonéré</td>
        </tr>
      </tbody>
    </table>

    <p class="formula-content">
      ⚠️ Alsace-Moselle : taux spécifiques (voir tableau officiel) :
      <a href="https://entreprendre.service-public.gouv.fr/vosdroits/F39189" target="_blank" rel="noreferrer">https://entreprendre.service-public.gouv.fr/vosdroits/F39189</a>
    </p>
  </div>

  <h3>6️⃣ 📅 Calendrier DSN — CUFPA / Taxe d’apprentissage / CSA (mémo examen)</h3>

  <p style="text-align:center;"><b>✅ Idée simple à retenir</b></p>
  <ul class="centered-list bullets">
    <li><b>Mensuel = “au fil de l’eau”</b> (dans la DSN de chaque mois)</li>
    <li><b>Annuel = “rendez-vous 1 fois/an”</b> (DSN de mars ou d’avril selon la contribution)</li>
  </ul>

  <div class="formula formula-reminder">
    <p class="formula-title">🔗 Source officielle “échéances DSN”</p>
    <p class="formula-content">
      <a href="https://www.net-entreprises.fr/dsn-csa-et-solde-de-la-taxe-dapprentissage-les-echeances-declaratives/" target="_blank" rel="noreferrer">https://www.net-entreprises.fr/dsn-csa-et-solde-de-la-taxe-dapprentissage-les-echeances-declaratives/</a>
    </p>
  </div>

  <div class="formula formula-formula">
    <p class="formula-title">✅ Tableau récapitulatif (Mensuel vs Annuel)</p>

    <table class="memo-table">
      <thead>
        <tr>
          <th>Contribution</th>
          <th>Fréquence</th>
          <th>Quand est-ce déclaré ?</th>
          <th>Quand est-ce payé ?</th>
          <th>À retenir</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><b>CFP (Contribution à la formation professionnelle)</b></td>
          <td><b>Mensuelle</b></td>
          <td><b>DSN mensuelle</b></td>
          <td>Avec l’échéance URSSAF (5 ou 15)</td>
          <td>Fait partie de la <b>CUFPA</b></td>
        </tr>
        <tr>
          <td><b>CPF-CDD (1%)</b> (si CDD concernés)</td>
          <td><b>Mensuelle</b></td>
          <td><b>DSN mensuelle</b></td>
          <td>Avec l’échéance URSSAF (5 ou 15)</td>
          <td>Uniquement sur les CDD concernés</td>
        </tr>
        <tr>
          <td><b>Taxe d’apprentissage – part principale</b> (0,59% hors Alsace-Moselle / 0,44% Alsace-Moselle)</td>
          <td><b>Mensuelle</b></td>
          <td><b>DSN mensuelle</b></td>
          <td>Avec l’échéance URSSAF (5 ou 15)</td>
          <td>La TA “au fil de l’eau”</td>
        </tr>
        <tr>
          <td><b>Taxe d’apprentissage – solde</b> (0,09% <b>uniquement hors Alsace-Moselle</b>)</td>
          <td><b>Annuelle</b></td>
          <td><b>DSN d’avril (N+1)</b></td>
          <td><b>Mai (N+1)</b></td>
          <td>Le <b>solde</b> n’est <b>pas mensuel</b></td>
        </tr>
        <tr>
          <td><b>CSA</b> (si entreprise ≥ 250 et alternants &lt; 5%)</td>
          <td><b>Annuelle</b></td>
          <td><b>DSN de mars (N)</b> au titre de N-1</td>
          <td><b>Avril (N)</b></td>
          <td>“bonus/malus alternance”</td>
        </tr>
      </tbody>
    </table>

    <p class="formula-content">
      (Repères détaillés et exemples d’échéances : Net-entreprises + actus Service-Public)<br/>
      Net-entreprises :
      <a href="https://www.net-entreprises.fr/dsn-csa-et-solde-de-la-taxe-dapprentissage-les-echeances-declaratives/" target="_blank" rel="noreferrer">https://www.net-entreprises.fr/dsn-csa-et-solde-de-la-taxe-dapprentissage-les-echeances-declaratives/</a><br/>
      Solde TA :
      <a href="https://entreprendre.service-public.gouv.fr/actualites/A18179" target="_blank" rel="noreferrer">https://entreprendre.service-public.gouv.fr/actualites/A18179</a><br/>
      CSA :
      <a href="https://entreprendre.service-public.gouv.fr/actualites/A18180" target="_blank" rel="noreferrer">https://entreprendre.service-public.gouv.fr/actualites/A18180</a>
    </p>
  </div>

  <h3>7️⃣ Pièges “application pratique / examen” (à apprendre)</h3>

  <div class="formula formula-warn">
    <p class="formula-title">⚠️ Piège n°1 — “TA = annuel ?”</p>
    <p class="formula-content">
      ❌ Faux : <b>TA part principale = mensuel</b> ; ✅ <b>Solde TA = annuel</b> (DSN d’avril, paiement en mai).<br/>
      Sources :<br/>
      <a href="https://www.net-entreprises.fr/dsn-csa-et-solde-de-la-taxe-dapprentissage-les-echeances-declaratives/" target="_blank" rel="noreferrer">https://www.net-entreprises.fr/dsn-csa-et-solde-de-la-taxe-dapprentissage-les-echeances-declaratives/</a><br/>
      <a href="https://entreprendre.service-public.gouv.fr/vosdroits/F22574" target="_blank" rel="noreferrer">https://entreprendre.service-public.gouv.fr/vosdroits/F22574</a>
    </p>
  </div>

  <div class="formula formula-warn">
    <p class="formula-title">⚠️ Piège n°2 — Alsace-Moselle</p>
    <p class="formula-content">
      En Alsace-Moselle (57/67/68) : TA = <b>0,44%</b> et <b>pas de solde</b> (donc pas de 0,09% annuel).<br/>
      <a href="https://entreprendre.service-public.gouv.fr/vosdroits/F22574" target="_blank" rel="noreferrer">https://entreprendre.service-public.gouv.fr/vosdroits/F22574</a>
    </p>
  </div>

  <div class="formula formula-warn">
    <p class="formula-title">⚠️ Piège n°3 — CSA = toujours due ?</p>
    <p class="formula-content">
      ❌ Non : CSA uniquement si <b>≥ 250 salariés</b> ET <b>taux d’alternants &lt; 5%</b> (avec règles d’exonération détaillées).<br/>
      <a href="https://entreprendre.service-public.gouv.fr/vosdroits/F39189" target="_blank" rel="noreferrer">https://entreprendre.service-public.gouv.fr/vosdroits/F39189</a>
    </p>
  </div>

  <div class="formula formula-warn">
    <p class="formula-title">⚠️ Piège n°4 — Seuil 11 salariés CFP</p>
    <p class="formula-content">
      Depuis 2020, le passage à 11 salariés et plus se déclenche après <b>5 années consécutives</b> de dépassement (page officielle).<br/>
      <a href="https://entreprendre.service-public.gouv.fr/vosdroits/F22570" target="_blank" rel="noreferrer">https://entreprendre.service-public.gouv.fr/vosdroits/F22570</a>
    </p>
  </div>

  <div class="formula formula-warn">
    <p class="formula-title">⚠️ Piège n°5 — Exonération “apprenti + 6× SMIC”</p>
    <p class="formula-content">
      C’est une exonération <b>mensuelle</b> de TA sous conditions ; le montant “6× SMIC mensuel” est <b>actualisé</b> sur la page officielle (ne pas figer un vieux chiffre).<br/>
      <a href="https://entreprendre.service-public.gouv.fr/vosdroits/F22574" target="_blank" rel="noreferrer">https://entreprendre.service-public.gouv.fr/vosdroits/F22574</a>
    </p>
  </div>

  <div class="formula formula-warn">
    <p class="formula-title">⚠️ Piège n°6 — Confusion “codes 1000”</p>
    <p class="formula-content">
      En paie, la DSN utilise des <b>codes déclaratifs/CTP</b> (URSSAF/Net-entreprises). “1000” est souvent un code <b>interne logiciel</b>.<br/>
      Tables URSSAF (CTP) :
      <a href="https://www.urssaf.fr/accueil/outils-documentation/outils/tables-reference-CTP.html" target="_blank" rel="noreferrer">https://www.urssaf.fr/accueil/outils-documentation/outils/tables-reference-CTP.html</a>
    </p>
  </div>

  <div class="formula formula-warn">
    <p class="formula-title">⚠️ Piège n°7 — TVA (erreur fréquente)</p>
    <p class="formula-content">
      Les contributions URSSAF (CFP / CPF-CDD / TA / CSA) <b>ne se paient pas avec une TVA ajoutée</b> à l’URSSAF.<br/>
      Référence URSSAF (guide) :
      <a href="https://www.urssaf.fr/files/live/sites/urssaffr/files/outils-documentation/guides/Guide-CFPTA.pdf" target="_blank" rel="noreferrer">https://www.urssaf.fr/files/live/sites/urssaffr/files/outils-documentation/guides/Guide-CFPTA.pdf</a>
    </p>
  </div>

  <div class="formula formula-reminder">
    <p class="formula-title">↩️ Navigation</p>
    <p class="formula-content" style="text-align:center;">
      <a href="#/referentiel/contributions-annuelles">⬅ Retour “Contributions patronales annuelles”</a>
      <span style="margin:0 10px;">•</span>
      <a href="#/referentiel-cotisations">🏠 Référentiel</a>
    </p>
  </div>

  `,
};
