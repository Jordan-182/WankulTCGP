# WANKUL API

Ce dossier a pour but de servir d'API pour les cartes **WANKUL**.

---

## 📁 Structure du projet

Chaque **sous-dossier** contient les **images** de l'ensemble des cartes de chaque **saison**.

Les fichiers `.json` font office de **base de données** et contiennent chaque carte sous forme d'objet, afin de permettre leur exploitation côté **frontend**.

---

## 🧾 Format d'une carte dans la base `.json`

Chaque carte est représentée par un **objet** avec la structure suivante :

| Propriété     | Type               | Description                                                                         |
| ------------- | ------------------ | ----------------------------------------------------------------------------------- |
| `id`          | `number`           | Identifiant unique de la carte                                                      |
| `name`        | `string`           | Nom de la carte                                                                     |
| `img`         | `string`           | Chemin vers l'image à utiliser dans la source                                       |
| `season`      | `number`           | Numéro de la saison (de 1 à 3)                                                      |
| `set`         | `string`           | Nom du set (`Origins`, `Campus`, `Battle`)                                          |
| `cardNumber`  | `number`           | Numéro de la carte dans le set                                                      |
| `clan`        | `string`           | Effigie de la carte (`Laink`, `Terracid`, `Guest`, `Random`, `Gagnant ticket d'or`) |
| `rarity`      | `string`           | Rareté de la carte (`Commune`, `Rare`, `Légendaire`, etc.)                          |
| `dropRate`    | `number`           | Taux de drop de la carte sur 100                                                    |
| `holo`        | `boolean`          | Indique si la carte est **holographique**                                           |
| `isPossessed` | `boolean`          | Indique si la carte a déjà été obtenue par l'utilisateur                            |
| `quote`       | `string` ou `null` | Citation associée (principalement pour les cartes personnages)                      |

---
