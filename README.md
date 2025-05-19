# OCPR13-WealthHealth

Faites passer une librairie jQuery vers React

## Résumé

La récente migration s’est concentrée sur la rationalisation des ressources frontend, l’optimisation du chargement des ressources et l’affinage du pipeline de rendu sur trois pages clés (Accueil/index, Tableau de données sans entrées, Tableau de données avec 100 entrées). Le résultat est une expérience nettement plus réactive – les temps de peinture réduits de moitié sur bureau, le temps de chargement diminué de près de 50 % sur mobile, les scripts bloquants éliminés sur bureau, et la stabilité de la mise en page maintenue à un score parfait. Ces gains se traduisent par une performance perçue plus rapide pour les utilisateurs finaux, un risque de rebond réduit (particulièrement sur les vues gourmandes en données) et une base plus solide pour les futures évolutions.

---

## Améliorations globales du score de performance

| Page                      | Appareil | Ancien score | Nouveau score | Δ Points |
| ------------------------- | -------- | -----------: | ------------: | -------: |
| **Index (Accueil)**       | Bureau   |           99 |           100 |       +1 |
|                           | Mobile   |           83 |            97 |      +14 |
| **Tableau — 0 entrées**   | Bureau   |          100 |           100 |        0 |
|                           | Mobile   |           91 |            97 |       +6 |
| **Tableau — 100 entrées** | Bureau   |          100 |           100 |        0 |
|                           | Mobile   |           83 |            92 |       +9 |

---

## Analyse par catégorie

### Page d’accueil

#### Bureau

_Classé du plus grand au plus faible % d’amélioration_

- **Temps de blocage total :** 11 ms → 0 ms (−11 ms, **réduction de 100 %**)
- **Changement cumulatif de mise en page :** 0.0023 → 0 (−0.0023, **réduction de 100 %**)
- **Temps d’interactivité :** 775 ms → 327 ms (−448 ms, **58 % plus rapide**)
- **Peinture du plus grand contenu :** 745 ms → 327 ms (−418 ms, **56 % plus rapide**)
- **Peinture du premier contenu :** 714 ms → 327 ms (−387 ms, **54 % plus rapide**)
- **Indice de vitesse :** 714 ms → 328 ms (−386 ms, **54 %**)
- **Score de performance :** 99 → 100 (+1 pt, **1 %**)

#### Mobile

_Classé du plus grand au plus faible % d’amélioration_

- **Temps de blocage total :** 238 ms → 45 ms (−193 ms, **81 % plus rapide**)
- **Temps d’interactivité :** 3,23 s → 1,66 s (−1,57 s, **49 % plus rapide**)
- **Peinture du plus grand contenu :** 3,00 s → 1,55 s (−1,45 s, **48 % plus rapide**)
- **Peinture du premier contenu :** 2,89 s → 1,53 s (−1,36 s, **47 % plus rapide**)
- **Score de performance :** 83 → 97 (+14 pt, **17 %**)
- **Indice de vitesse :** 4,39 s → 3,94 s (−0,45 s, **10 %**)
- **Changement cumulatif de mise en page :** 0 → 0 (inchangé)

---

### Tableau — page de 0 entrées

#### Bureau

_Triés du plus grand au plus faible % d’amélioration_

- **Temps total de blocage :** 20 ms → 0 ms (−20 ms, réduction de **100 %**)
- **Temps jusqu’à l’interactivité :** 0,64 s → 0,37 s (−0,27 s, **42 %** plus rapide)
- **Plus grand rendu de contenu :** 0,61 s → 0,37 s (−0,23 s, **39 %** plus rapide)
- **Premier rendu de contenu :** 0,56 s → 0,37 s (−0,19 s, **34 %** plus rapide)
- **Indice de vitesse :** 0,56 s → 0,37 s (−0,19 s, **34 %** plus rapide)
- **Score de performance :** 100 → 100 (aucun changement)
- **Déplacement cumulatif de mise en page :** 0 → 0 (inchangé)

#### Mobile

_Triés du plus grand au plus faible % d’amélioration_

- **Temps total de blocage :** 159 ms → 90 ms (−69 ms, **43 %** plus rapide)
- **Plus grand rendu de contenu :** 2,40 s → 1,61 s (−0,79 s, **33 %** plus rapide)
- **Premier rendu de contenu :** 2,27 s → 1,61 s (−0,66 s, **29 %** plus rapide)
- **Temps jusqu’à l’interactivité :** 2,53 s → 1,93 s (−0,60 s, **24 %** plus rapide)
- **Indice de vitesse :** 4,20 s → 3,79 s (−0,41 s, **10 %** plus rapide)
- **Score de performance :** 91 → 97 (+ 6 pt, **7 %** de gain)
- **Déplacement cumulatif de mise en page :** 0 → 0 (inchangé)

---

### Tableau — page de 100 entrées

#### Bureau

_Triés du plus grand au plus faible % d’amélioration_

- **Déplacement cumulatif de mise en page :** 0,0002 → 0 (−0,0002, réduction de **100 %**)
- **Temps total de blocage :** 49 ms → 1,5 ms (−47,5 ms, réduction de **97 %**)
- **Plus grand rendu de contenu :** 0,62 s → 0,37 s (−0,25 s, **41 %** plus rapide)
- **Indice de vitesse :** 0,61 s → 0,39 s (−0,21 s, **35 %** plus rapide)
- **Premier rendu de contenu :** 0,56 s → 0,37 s (−0,19 s, **35 %** plus rapide)
- **Temps jusqu’à l’interactivité :** 0,68 s → 0,47 s (−0,21 s, **31 %** plus rapide)
- **Score de performance :** 100 → 100 (aucun changement)

#### Mobile

_Triés du plus grand au plus faible % d’amélioration_

- **Temps total de blocage :** 0,43 s → 0,26 s (−0,17 s, **39 %** plus rapide)
- **Plus grand rendu de contenu :** 2,42 s → 1,57 s (−0,85 s, **35 %** plus rapide)
- **Premier rendu de contenu :** 2,16 s → 1,49 s (−0,67 s, **31 %** plus rapide)
- **Temps jusqu’à l’interactivité :** 2,69 s → 2,07 s (−0,62 s, **23 %** plus rapide)
- **Score de performance :** 83 → 92 (+ 9 pt, **11 %** de gain)
- **Indice de vitesse :** 4,08 s → 3,91 s (−0,17 s, **4 %** plus rapide)
- **Déplacement cumulatif de mise en page :** 0 → 0 (inchangé)

---

## Conclusions

- **Succès remarquables :**
  - Sur **bureau**, les métriques de peinture (FCP, LCP, Speed Index) s’affichent désormais en moins de **0,4 s** sur toutes les pages, même avec 100 lignes, tandis que le temps de blocage est quasiment éliminé.
  - Sur **mobile**, FCP/LCP sont réduits de **30 % à 50 %**, avec un affichage complet des tableaux en moins de **1,6 s**, améliorant la perception de la rapidité et l’interactivité.

---

## Summary

The recent migration focused on streamlining frontend assets, optimizing resource loading, and refining the rendering pipeline across three core pages (Home/index, Data Table with 0 entries, Data Table with 100 entries). The result is a markedly snappier experience—paint times halved on desktop, load time cut by nearly 50% on mobile, blocking scripts eliminated on desktop, and layout stability retained at perfect scores. These gains translate into faster perceived performance for end users, reduced bounce risk (especially on data-heavy views), and a stronger foundation for future feature roll-outs.

---

## Overall Performance Score Improvements

| Page                    | Device  | Old Score | New Score | Δ Points |
| ----------------------- | ------- | --------: | --------: | -------: |
| **Index (Home)**        | Desktop |        99 |       100 |       +1 |
|                         | Mobile  |        83 |        97 |      +14 |
| **Table — 0 entries**   | Desktop |       100 |       100 |        0 |
|                         | Mobile  |        91 |        97 |       +6 |
| **Table — 100 entries** | Desktop |       100 |       100 |        0 |
|                         | Mobile  |        83 |        92 |       +9 |

---

## Category-by-Category Analysis

### Index (Home) Page

#### Desktop

_Sorted from greatest to least % improvement_

- **Total Blocking Time:** 11 ms → 0 ms (−11 ms, **100%** reduction)
- **Cumulative Layout Shift:** 0.0023 → 0 (−0.0023, **100%** reduction)
- **Time to Interactive:** 775 ms → 327 ms (−448 ms, **58%** faster)
- **Largest Contentful Paint:** 745 ms → 327 ms (−418 ms, **56%** faster)
- **First Contentful Paint:** 714 ms → 327 ms (−387 ms, **54%** faster)
- **Speed Index:** 714 ms → 328 ms (−386 ms, **54%** faster)
- **Performance Score:** 99 → 100 (+1 pt, **1%** uplift)

#### Mobile

_Sorted from greatest to least % improvement_

- **Total Blocking Time:** 238 ms → 45 ms (−193 ms, **81%** faster)
- **Time to Interactive:** 3.23 s → 1.66 s (−1.57 s, **49%** faster)
- **Largest Contentful Paint:** 3.00 s → 1.55 s (−1.45 s, **48%** faster)
- **First Contentful Paint:** 2.89 s → 1.53 s (−1.36 s, **47%** faster)
- **Performance Score:** 83 → 97 (+14 pt, **17%** uplift)
- **Speed Index:** 4.39 s → 3.94 s (−0.45 s, **10%** faster)
- **Cumulative Layout Shift:** 0 → 0 (unchanged)

---

### Table — 0 entries Page

#### Desktop

_Sorted from greatest to least % improvement_

- **Total Blocking Time:** 20 ms → 0 ms (−20 ms, **100%** reduction)
- **Time to Interactive:** 0.64 s → 0.37 s (−0.27 s, **42%** faster)
- **Largest Contentful Paint:** 0.61 s → 0.37 s (−0.23 s, **39%** faster)
- **First Contentful Paint:** 0.56 s → 0.37 s (−0.19 s, **34%** faster)
- **Speed Index:** 0.56 s → 0.37 s (−0.19 s, **34%** faster)
- **Performance Score:** 100 → 100 (no change)
- **Cumulative Layout Shift:** 0 → 0 (unchanged)

#### Mobile

_Sorted from greatest to least % improvement_

- **Total Blocking Time:** 159 ms → 90 ms (−69 ms, **43%** faster)
- **Largest Contentful Paint:** 2.40 s → 1.61 s (−0.79 s, **33%** faster)
- **First Contentful Paint:** 2.27 s → 1.61 s (−0.66 s, **29%** faster)
- **Time to Interactive:** 2.53 s → 1.93 s (−0.60 s, **24%** faster)
- **Speed Index:** 4.20 s → 3.79 s (−0.41 s, **10%** faster)
- **Performance Score:** 91 → 97 (+6 pt, **7%** uplift)
- **Cumulative Layout Shift:** 0 → 0 (unchanged)

---

### Table — 100 entries Page

#### Desktop

_Sorted from greatest to least % improvement_

- **Cumulative Layout Shift:** 0.0002 → 0 (−0.0002, **100%** reduction)
- **Total Blocking Time:** 49 ms → 1.5 ms (−47.5 ms, **97%** reduction)
- **Largest Contentful Paint:** 0.62 s → 0.37 s (−0.25 s, **41%** faster)
- **Speed Index:** 0.61 s → 0.39 s (−0.21 s, **35%** faster)
- **First Contentful Paint:** 0.56 s → 0.37 s (−0.19 s, **35%** faster)
- **Time to Interactive:** 0.68 s → 0.47 s (−0.21 s, **31%** faster)
- **Performance Score:** 100 → 100 (no change)

#### Mobile

_Sorted from greatest to least % improvement_

- **Total Blocking Time:** 0.43 s → 0.26 s (−0.17 s, **39%** faster)
- **Largest Contentful Paint:** 2.42 s → 1.57 s (−0.85 s, **35%** faster)
- **First Contentful Paint:** 2.16 s → 1.49 s (−0.67 s, **31%** faster)
- **Time to Interactive:** 2.69 s → 2.07 s (−0.62 s, **23%** faster)
- **Performance Score:** 83 → 92 (+9 pt, **11%** uplift)
- **Speed Index:** 4.08 s → 3.91 s (−0.17 s, **4%** faster)
- **Cumulative Layout Shift:** 0 → 0 (unchanged)

---

## Conclusions

- **Outstanding Wins:**
  - On **desktop**, paint metrics (FCP, LCP, Speed Index) now render under **0.4 s** across all pages—even with 100 rows—while blocking time has been virtually eliminated.
  - On **mobile**, FCP/LCP are down by **30–50%**, with table-heavy views now loading in under **1.6 s**, improving perceived speed and interaction readiness.
