# Gestion centralisée pour le Suivi et l’Évaluation des Formations.

## Description

Ce projet est une application de gestion des formations, centrée sur l’évaluation et le suivi des Formations au sein de la Division Forage de Sonatrach. Il permet aux administrateurs de créer, modifier et gérer des questionnaires, et aux utilisateurs de répondre aux questions de manière simple et intuitive.&#x20;

## Technologies utilisées

- **Frontend :** React.js
- **Backend :** node.js / Express.js
- **Base de données :** MySQL

## Installation et exécution

### Prérequis

- Node.js (et npm) installés
- MySQL configuré (XAMPP recommandé)

### Étapes de déploiement

1. **Préparation de l'adresse de l’appareil hôte :**

   Changer l’adresse IP dans le fichier ".env" dans le dossier "front" pour correspondre à l’adresse IP de la machine hôte (le serveur).
2. **Preparation du frontend**
   ```bash
   cd front
   npm install
   npm run build
   ```
3. **Preparation du backend**
   ```bash
   cd back
   npm install
   ```
4. Mettre le dossier "dist" du dossier "front" dans le dossier "back".
5. **Preparation de la base de données :**

   Importer le fichier "form-eval.sql" fourni dans le dossier "front" 
6. **Lancement du projet :**
   ```bash
   cd back
   node server.js
   ```
