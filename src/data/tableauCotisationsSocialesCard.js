// src/data/tableauCotisationsSocialesCard.js

export const tableauCotisationsSocialesCard = {
    id: "tableau-cotisations-sociales",
    group: "referentiel",
    title: "Tableau des cotisations sociales (à jour) — 2026",
    content: `

  <p style="text-align:center;"><b>📄 Tableau des cotisations sociales (à jour) — 2026</b></p>

  <div class="formula formula-reminder">
    <p class="formula-title">📌 Lecture</p>
    <p class="formula-content">
      Tableau “type” pour repérer rapidement <b>l’organisme</b>, <b>l’assiette</b>, et les <b>taux 2026</b>.
      <br>
      Les lignes <b>“variable”</b> dépendent de la situation (taux AT/MP, versement mobilité, contrats prévoyance/mutuelle, etc.).
    </p>
  </div>

  <div class="formula formula-warn">
    <p class="formula-title">⚠️ Vigilance 2026</p>
    <p class="formula-content">
      Depuis le <b>01/01/2026</b>, la réduction générale devient la <b>RGDU</b> (nouvelle formule + nouveaux paramètres).
      <br>
      Les anciens <b>taux réduits</b> (maladie / allocations familiales) ne sont plus présentés comme lignes standard du tableau (sauf cas d’exonérations spécifiques).
    </p>
  </div>

  <div class="landscape-fullbleed">
    <div class="recap-table-wrap">
      <table class="recap-table recap-table-compact" style="min-width:1400px; table-layout:fixed;">

        <colgroup>
          <col style="width:150px;">
          <col style="width:170px;">
          <col style="width:170px;">
          <col style="width:85px;">
          <col style="width:320px;">
          <col style="width:320px;">
          <col style="width:95px;">
          <col style="width:115px;">
          <col style="width:190px;">
        </colgroup>

        <thead>
          <tr>
            <th style="background:#b38b00; color:#000;">Organisme collecteur</th>
            <th style="background:#b38b00; color:#000;">Employeurs concernés</th>
            <th style="background:#b38b00; color:#000;">Statuts salariés concernés</th>
            <th style="background:#b38b00; color:#000;">Effectif</th>
            <th style="background:#b38b00; color:#000;">Cotisations</th>
            <th style="background:#b38b00; color:#000;">Base de cotisations</th>
            <th style="background:#b38b00; color:#000;">Taux salarial</th>
            <th style="background:#b38b00; color:#000;">Taux patronal</th>
            <th style="background:#b38b00; color:#000;">RGDU : paramètre / taux patronal “pris en compte”</th>
          </tr>
        </thead>

        <tbody>

          <!-- URSSAF - Santé / solidarité -->
          <tr>
            <td>URSSAF</td>
            <td>Tous</td>
            <td>Tous</td>
            <td>—</td>
            <td><span style="color:#dc2626; font-weight:900;">Assurance maladie, maternité, invalidité, décès</span></td>
            <td>Salaire brut</td>
            <td>—</td>
            <td>13,00 %</td>
            <td><b>13,00 %</b></td>
          </tr>

          <tr>
            <td>URSSAF</td>
            <td>Tous</td>
            <td>Tous</td>
            <td>—</td>
            <td><span style="color:#dc2626; font-weight:900;">Contribution solidarité autonomie</span></td>
            <td>Salaire brut</td>
            <td>—</td>
            <td>0,30 %</td>
            <td><b>0,30 %</b></td>
          </tr>

          <!-- URSSAF - Vieillesse -->
          <tr>
            <td>URSSAF</td>
            <td>Tous</td>
            <td>Tous</td>
            <td>—</td>
            <td><span style="color:#dc2626; font-weight:900;">Assurance vieillesse déplafonnée</span></td>
            <td>Salaire brut (total)</td>
            <td>0,40 %</td>
            <td>2,11 %</td>
            <td><b>2,11 %</b></td>
          </tr>

          <tr>
            <td>URSSAF</td>
            <td>Tous</td>
            <td>Tous</td>
            <td>—</td>
            <td><span style="color:#dc2626; font-weight:900;">Assurance vieillesse plafonnée</span></td>
            <td>Tranche A (salaire limité à 1 PMSS)</td>
            <td>6,90 %</td>
            <td>8,55 %</td>
            <td><b>8,55 %</b></td>
          </tr>

          <!-- URSSAF - Famille -->
          <tr>
            <td>URSSAF</td>
            <td>Tous</td>
            <td>Tous</td>
            <td>—</td>
            <td><span style="color:#dc2626; font-weight:900;">Allocations familiales</span></td>
            <td>Salaire brut</td>
            <td>—</td>
            <td>5,25 %</td>
            <td><b>5,25 %</b></td>
          </tr>

          <!-- URSSAF - Contributions diverses -->
          <tr>
            <td>URSSAF</td>
            <td>Tous</td>
            <td>Tous</td>
            <td>—</td>
            <td><span style="color:#dc2626; font-weight:900;">Contribution au dialogue social</span></td>
            <td>Salaire brut</td>
            <td>—</td>
            <td>0,016 %</td>
            <td>—</td>
          </tr>

          <tr>
            <td>URSSAF</td>
            <td>Tous</td>
            <td>Tous</td>
            <td>—</td>
            <td><span style="color:#dc2626; font-weight:900;">Accidents du travail / MP</span></td>
            <td>Salaire brut</td>
            <td>—</td>
            <td>Variable</td>
            <td><b>Variable</b></td>
          </tr>

          <tr>
            <td>URSSAF</td>
            <td>Tous</td>
            <td>Tous</td>
            <td>&lt; 50</td>
            <td><span style="color:#dc2626; font-weight:900;">FNAL</span></td>
            <td>Tranche A (salaire limité à 1 PMSS)</td>
            <td>—</td>
            <td>0,10 %</td>
            <td><b>0,10 %</b></td>
          </tr>

          <tr>
            <td>URSSAF</td>
            <td>Tous</td>
            <td>Tous</td>
            <td>50 et +</td>
            <td><span style="color:#dc2626; font-weight:900;">FNAL</span></td>
            <td>Salaire brut</td>
            <td>—</td>
            <td>0,50 %</td>
            <td><b>0,50 %</b></td>
          </tr>

          <tr>
            <td>URSSAF</td>
            <td>Tous</td>
            <td>Tous</td>
            <td>11 et + (si assujetti)</td>
            <td><span style="color:#dc2626; font-weight:900;">Versement mobilité</span></td>
            <td>Salaire brut</td>
            <td>—</td>
            <td>Variable</td>
            <td>—</td>
          </tr>

          <!-- CSG/CRDS -->
          <tr>
            <td>URSSAF</td>
            <td>Tous</td>
            <td>Tous</td>
            <td>—</td>
            <td><span style="color:#dc2626; font-weight:900;">CSG non déductible (imposable)</span></td>
            <td>98,25 % du brut (limite 4 PSS) + part patronale prévoyance/mutuelle (selon règles)</td>
            <td>2,40 %</td>
            <td>—</td>
            <td>—</td>
          </tr>

          <tr>
            <td>URSSAF</td>
            <td>Tous</td>
            <td>Tous</td>
            <td>—</td>
            <td><span style="color:#dc2626; font-weight:900;">CSG déductible (non imposable)</span></td>
            <td>98,25 % du brut (limite 4 PSS) + part patronale prévoyance/mutuelle (selon règles)</td>
            <td>6,80 %</td>
            <td>—</td>
            <td>—</td>
          </tr>

          <tr>
            <td>URSSAF</td>
            <td>Tous</td>
            <td>Tous</td>
            <td>—</td>
            <td><span style="color:#dc2626; font-weight:900;">CRDS</span></td>
            <td>98,25 % du brut (limite 4 PSS) + part patronale prévoyance/mutuelle (selon règles)</td>
            <td>0,50 %</td>
            <td>—</td>
            <td>—</td>
          </tr>

          <!-- Chômage / AGS -->
          <tr>
            <td>URSSAF</td>
            <td>Tous</td>
            <td>Tous</td>
            <td>—</td>
            <td><span style="color:#dc2626; font-weight:900;">Contribution assurance chômage</span></td>
            <td>Salaire brut (limite 4 PSS)</td>
            <td>—</td>
            <td>4,00 %</td>
            <td><b>4,00 %</b></td>
          </tr>

          <tr>
            <td>URSSAF</td>
            <td>Tous</td>
            <td>Tous</td>
            <td>—</td>
            <td><span style="color:#dc2626; font-weight:900;">Cotisation AGS</span></td>
            <td>Salaire brut (limite 4 PSS)</td>
            <td>—</td>
            <td>0,25 %</td>
            <td>—</td>
          </tr>

          <!-- AGIRC-ARRCO (taux 2026 officiels) -->
          <tr>
            <td>Agirc-Arrco</td>
            <td>Tous</td>
            <td>Tous</td>
            <td>—</td>
            <td><span style="color:#dc2626; font-weight:900;">Retraite complémentaire T1</span></td>
            <td>T1</td>
            <td>3,15 %</td>
            <td>4,72 %</td>
            <td><b>4,72 %</b> (part IRC)</td>
          </tr>

          <tr>
            <td>Agirc-Arrco</td>
            <td>Tous</td>
            <td>Tous</td>
            <td>—</td>
            <td><span style="color:#dc2626; font-weight:900;">Retraite complémentaire T2</span></td>
            <td>T2</td>
            <td>8,64 %</td>
            <td>12,95 %</td>
            <td><b>12,95 %</b> (part IRC)</td>
          </tr>

          <tr>
            <td>Agirc-Arrco</td>
            <td>Tous</td>
            <td>Tous</td>
            <td>—</td>
            <td><span style="color:#dc2626; font-weight:900;">CEG T1</span></td>
            <td>T1</td>
            <td>0,86 %</td>
            <td>1,29 %</td>
            <td><b>1,29 %</b> (part IRC)</td>
          </tr>

          <tr>
            <td>Agirc-Arrco</td>
            <td>Tous</td>
            <td>Tous</td>
            <td>—</td>
            <td><span style="color:#dc2626; font-weight:900;">CEG T2</span></td>
            <td>T2</td>
            <td>1,08 %</td>
            <td>1,62 %</td>
            <td><b>1,62 %</b> (part IRC)</td>
          </tr>

          <tr>
            <td>Agirc-Arrco</td>
            <td>Tous</td>
            <td>Tous</td>
            <td>—</td>
            <td><span style="color:#dc2626; font-weight:900;">CET (si rémunération &gt; T1)</span></td>
            <td>T1 + T2 (si rémunération &gt; T1)</td>
            <td>0,14 %</td>
            <td>0,21 %</td>
            <td><b>0,21 %</b> (part IRC)</td>
          </tr>

          <tr>
            <td>Agirc-Arrco / APEC</td>
            <td>Tous</td>
            <td>Cadres</td>
            <td>—</td>
            <td><span style="color:#dc2626; font-weight:900;">APEC</span></td>
            <td>Salaire brut (limite 4 PSS)</td>
            <td>0,024 %</td>
            <td>0,036 %</td>
            <td>—</td>
          </tr>

          <!-- Formation / apprentissage / construction -->
          <tr>
            <td>URSSAF (CUFPA)</td>
            <td>Tous</td>
            <td>Tous</td>
            <td>&lt; 11</td>
            <td><span style="color:#dc2626; font-weight:900;">Contribution formation professionnelle</span></td>
            <td>Salaire brut</td>
            <td>—</td>
            <td>0,55 %</td>
            <td>—</td>
          </tr>

          <tr>
            <td>URSSAF (CUFPA)</td>
            <td>Tous</td>
            <td>Tous</td>
            <td>11 et +</td>
            <td><span style="color:#dc2626; font-weight:900;">Contribution formation professionnelle</span></td>
            <td>Salaire brut</td>
            <td>—</td>
            <td>1,00 %</td>
            <td>—</td>
          </tr>

          <tr>
            <td>URSSAF (CUFPA)</td>
            <td>Tous</td>
            <td>Tous</td>
            <td>—</td>
            <td><span style="color:#dc2626; font-weight:900;">Taxe d’apprentissage</span></td>
            <td>Salaire brut</td>
            <td>—</td>
            <td>0,68 %</td>
            <td>—</td>
          </tr>

          <tr>
            <td>URSSAF (CUFPA)</td>
            <td>Alsace-Moselle</td>
            <td>Tous</td>
            <td>—</td>
            <td><span style="color:#dc2626; font-weight:900;">Taxe d’apprentissage (Alsace-Moselle)</span></td>
            <td>Salaire brut</td>
            <td>—</td>
            <td>0,44 %</td>
            <td>—</td>
          </tr>

          <tr>
            <td>URSSAF / PEEC</td>
            <td>Tous</td>
            <td>Tous</td>
            <td>50 et +</td>
            <td><span style="color:#dc2626; font-weight:900;">Participation construction (PEEC)</span></td>
            <td>Salaire brut</td>
            <td>—</td>
            <td>0,45 %</td>
            <td>—</td>
          </tr>

          <!-- RGDU : paramètres “taux” (Tmin / Tdelta) -->
          <tr>
            <td>URSSAF / Agirc-Arrco</td>
            <td>Éligibles RGDU</td>
            <td>Tous</td>
            <td>&lt; 50</td>
            <td><span style="color:#dc2626; font-weight:900;">RGDU — Réduction Générale Dégressive Unique</span></td>
            <td>Coefficient RGDU (formule 2026)</td>
            <td>—</td>
            <td>—</td>
            <td>
              <b>Tmin = 0,0200</b> • <b>Tdelta = 0,3781</b> • <b>Plafond coef = 0,3981</b>
              <br>
              <span style="opacity:0.85;">Plafond IRC : 6,01 % (0,0601)</span>
            </td>
          </tr>

          <tr>
            <td>URSSAF / Agirc-Arrco</td>
            <td>Éligibles RGDU</td>
            <td>Tous</td>
            <td>50 et +</td>
            <td><span style="color:#dc2626; font-weight:900;">RGDU — Réduction Générale Dégressive Unique</span></td>
            <td>Coefficient RGDU (formule 2026)</td>
            <td>—</td>
            <td>—</td>
            <td>
              <b>Tmin = 0,0200</b> • <b>Tdelta = 0,3821</b> • <b>Plafond coef = 0,4021</b>
              <br>
              <span style="opacity:0.85;">Plafond IRC : 6,01 % (0,0601)</span>
            </td>
          </tr>

          <!-- Autres allègements / réductions (repère) -->
          <tr>
            <td>URSSAF / Agirc-Arrco</td>
            <td>Éligibles</td>
            <td>Tous</td>
            <td>&lt; 250</td>
            <td><span style="color:#dc2626; font-weight:900;">Déduction TEPA sur les heures supplémentaires</span></td>
            <td>Nombre d’heures supplémentaires</td>
            <td>—</td>
            <td>—</td>
            <td><b>1,50 €</b> ou <b>0,50 €</b> (selon entreprise)</td>
          </tr>

          <tr>
            <td>URSSAF</td>
            <td>Éligibles</td>
            <td>Tous</td>
            <td>—</td>
            <td><span style="color:#dc2626; font-weight:900;">Réduction cotisations salariales HS / HC</span></td>
            <td>Montant des HS/HC</td>
            <td><b>11,31 %</b></td>
            <td>—</td>
            <td>—</td>
          </tr>

        </tbody>
      </table>
    </div>
  </div>

  <div class="formula formula-reminder">
    <p class="formula-title">🔗 Source supplémentaire (URSSAF)</p>
    <p class="formula-content" style="text-align:center;">
      <a href="https://www.urssaf.fr/accueil/outils-documentation/taux-baremes/taux-cotisations-secteur-prive.html" target="_blank" rel="noreferrer">
        https://www.urssaf.fr/accueil/outils-documentation/taux-baremes/taux-cotisations-secteur-prive.html
      </a>
    </p>
  </div>

  <p style="text-align:center;">
    <a href="#/referentiel/bases-calcul-cotisations">⬅ Retour “Bases de calcul”</a>
  </p>

  `,
};
