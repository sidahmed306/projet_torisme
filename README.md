# Mauritania Tours - Site Web de Tourisme

## Structure du Projet

```
projet_tourisme/
├── public/
│   └── images/          # Dossier pour les images (à ajouter)
├── src/
│   ├── components/
│   │   └── ui/
│   │       └── button.tsx      # Composant Button
│   ├── pages/
│   │   └── home.tsx            # Page principale
│   ├── App.tsx                 # Configuration du routeur
│   ├── main.tsx                # Point d'entrée React
│   └── index.css               # Styles avec Tailwind
├── index.html                  # HTML principal
├── package.json                # Dépendances
├── vite.config.ts              # Configuration Vite
├── tailwind.config.js          # Configuration Tailwind
├── postcss.config.js           # Configuration PostCSS
└── tsconfig.json               # Configuration TypeScript
```

## Installation et Exécution

### Installer les dépendances
```bash
npm install
```

### Lancer le serveur de développement
```bash
npm run dev
```

Le site sera disponible sur : http://localhost:5173

### Construire pour la production
```bash
npm run build
```

## Technologies Utilisées

- **React 18** - Bibliothèque UI
- **TypeScript** - Typage statique
- **Vite** - Build tool rapide
- **Tailwind CSS** - Framework CSS
- **Wouter** - Router léger
- **Lucide React** - Icônes
- **Framer Motion** - Animations

## Pages et Fonctionnalités

### Page d'Accueil
- **Navbar** - Navigation fixe avec menu mobile
- **Hero Section** - Section principale avec CTA WhatsApp
- **Tours** - Grille des expeditions (Iron Ore Train, Terjit Oasis, etc.)
- **Why Us** - Avantages (Sécurité, Expertise locale, Logistique)
- **Itinerary** - Itinéraire détaillé du train minerai de fer
- **Notes** - Informations importantes (quoi apporter, fitness, visa)
- **Gallery** - Galerie photos
- **Contact** - Section CTA avec lien WhatsApp
- **Footer** - Pied de page

## Personnalisation

### Couleurs (dans src/index.css)
- `--background`: Couleur de fond (sable)
- `--primary`: Couleur principale (terracotta)
- `--secondary`: Couleur secondaire (or des dunes)
- `--accent`: Couleur d'accent (ocre)

### Numéro WhatsApp
Modifiez le numéro dans `src/pages/home.tsx`:
```typescript
const WHATSAPP_NUMBER = "22227575716";
```

### Images
Ajoutez vos images dans le dossier `public/images/`:
- `iron-ore-train.png` - Image hero
- `hero-dunes.png` - Dunes du Sahara
- `terjit-oasis.png` - Oasis de Terjit
- `ancient-ksour.png` - Ksour anciens
- `coastal-camps.png` - Camps côtiers
- `richat-structure.png` - Structure de Richat
- `gallery-1.png` à `gallery-6.png` - Images de la galerie

## Notes Importantes

1. Les erreurs TypeScript disparaîtront après l'installation des dépendances avec `npm install`
2. Le serveur de développement supporte le hot-reload (modifications en temps réel)
3. Pour la production, utilisez `npm run build` pour optimiser le site

## Support

Pour toute question ou problème, n'hésitez pas à demander de l'aide !
# projet_torisme
