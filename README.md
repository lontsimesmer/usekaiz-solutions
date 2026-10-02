# Usekaiz — Plateforme d'Agents IA pour l'Immobilier

> Le logiciel d'IA n°1 pour les agents et mandataires immobiliers en France.
> Automatisez la prospection, la pige, la qualification et la prise de rendez-vous 24h/24.

🔗 **Déploiement en ligne :** [https://usekaiz-solutions.vibepreview.app/](https://usekaiz-solutions.vibepreview.app/)

---

## 📋 Présentation

**Usekaiz** est une plateforme SaaS qui déploie une équipe d'**agents IA spécialisés** pour les professionnels de l'immobilier. Chaque agent prend en charge une mission critique de l'agence — prospection, qualification de leads, prise de rendez-vous, suivi client, pige, négociation et reporting — afin de transformer chaque opportunité en transaction.

Ce dépôt contient la refonte / reproduction du site vitrine officiel [usekaiz.com](https://usekaiz.com/), conçue pour présenter la plateforme, ses agents, ses résultats et son accompagnement de déploiement.

---

## 🎯 Objectif & Mission

L'objectif de la plateforme est clair : faire de l'agence immobilière qui l'utilise **la plus réactive du marché**.

- **Ne laisser passer aucun acquéreur ni vendeur** grâce à une réponse IA en quelques secondes, 24h/24 et 7j/7.
- **Gagner du temps** en automatisant les tâches répétitives et chronophages (qualification, relances, prises de RDV).
- **Augmenter le taux de conversion** en traitant chaque lead à chaud, au moment exact où il manifeste son intérêt.
- **Humaniser l'automatisation** : l'IA gère l'opérationnel, l'humain garde la décision et la relation.

---

## 🧠 La plateforme

### Les 7 Agents IA

La plateforme s'appuie sur une équipe d'agents IA modulaires, chacun dédié à une étape du parcours immobilier :

1. **Agent Pige** — Détecte et qualifie les nouvelles annonces en continu.
2. **Agent Prospection** — Génère et envoie des campagnes de prospection ciblées.
3. **Agent Qualification** — Qualifie les leads entrants par dialogue naturel (chat, WhatsApp, téléphone).
4. **Agent Prise de RDV** — Planifie automatiquement les rendez-vous selon l'agenda de l'agence.
5. **Agent Suivi** — Relance et accompagne les prospects tout au long du parcours.
6. **Agent Négociation** — Aide à la construction et au suivi des offres.
7. **Agent Reporting** — Produit les indicateurs de performance et le cockpit de pilotage.

### Cockpit & Tableau de bord

Un tableau de bord interactif centralise les indicateurs clés : leads traités, temps gagné, taux d'ouverture, courbe d'activité et derniers leads qualifiés en temps réel.

### Déploiement & Accompagnement

Le déploiement est **progressif sur 3 semaines**, avec accompagnement humain inclus :

- **Semaine 1** — Audit, configuration et connexion des sources de leads.
- **Semaine 2** — Activation des agents IA et tests en conditions réelles.
- **Semaine 3** — Optimisation, formation de l'équipe et mise en production.

---

## 📊 Résultats clés

| Indicateur | Performance |
| --- | --- |
| Leads traités par mois | **15 000+** |
| Temps gagné par jour | **3h30** |
| Taux d'ouverture des messages | **98 %** |
| Disponibilité des agents IA | **24h/24, 7j/7** |

---

## 🛠️ Stack technique

- **Framework full-stack :** TanStack Start (React 19, SSR/SSG)
- **Build tool :** Vite 8
- **Styling :** Tailwind CSS v4 (design tokens `oklch`, thème clair/sombre)
- **Composants UI :** Radix UI + shadcn/ui
- **Animations :** Framer Motion / tw-animate-css
- **Visualisation :** Recharts
- **Runtime serveur :** Cloudflare Workers (Edge, `nodejs_compat`)
- **Intégrations :** Calendrier & CRM via les API de plateforme (prise de RDV, suivi des leads)

---

## 🚀 Démarrage

Prérequis : Node.js et npm (ou bun).

```sh
git clone <this-repository-url>
cd <repository-name>
npm install
npm run dev
```

L'application est ensuite accessible sur le serveur de développement local.

---

## 🌐 Déploiement

Le site est déployé et accessible publiquement à l'adresse suivante :

**👉 [https://usekaiz-solutions.vibepreview.app/](https://usekaiz-solutions.vibepreview.app/)**

---

## 📁 Structure du projet

```
src/
├── components/        # Sections de la page (Hero, Agents, Dashboard, FAQ, etc.)
├── data/              # Données des agents IA et contenus éditoriaux
├── lib/               # Utilitaires & helpers
├── hooks/             # Hooks React réutilisables
├── routes/            # Routes TanStack Start (index, __root)
└── styles.css         # Design tokens & thème global
```

---

## 📝 Licence & Mentions

Ce projet est une reproduction du site vitrine [usekaiz.com](https://usekaiz.com/) réalisée à des fins de démonstration. Les marques, contenus éditoriaux et visuels appartiennent à leurs propriétaires respectifs.
