export const navLinks = [
  { name: 'Home', id: 'home' },
  { name: 'A propos', id: 'about' },
  { name: 'Mon parcours', id: 'career' },
  { name: 'Compétences', id: 'skills' },
  { name: 'Projets', id: 'projects' },
  { name: 'Contact', id: 'contact' },
];

export const skillsSections = [
  {
    title: 'Front-End',
    elems: [
      { name: 'HTML5', iconSrc: '/logos/icons8-html-50.webp' },
      { name: 'CSS3', iconSrc: '/logos/icons8-css3-50.webp' },
      { name: 'SASS', iconSrc: '/logos/icons8-sass-50.webp' },
      { name: 'JavaScript', iconSrc: '/logos/icons8-javascript-50.webp' },
      { name: 'Typescript', iconSrc: '/logos/icons8-typescript-50.webp' },
      { name: 'React', iconSrc: '/logos/icons8-react-48.webp' },
      { name: 'Next.js', iconSrc: '/logos/icons8-nextjs-48.webp' },
      { name: 'Redux', iconSrc: '/logos/icons8-redux-50.webp' },
      { name: 'Bootstrap', iconSrc: '/logos/icons8-bootstrap-50.webp' },
    ],
  },
  {
    title: 'Back-End',
    elems: [
      { name: 'Node.js', iconSrc: '/logos/icons8-node-js-48.webp' },
      { name: 'Express', iconSrc: '/logos/icons8-express-js-48.webp' },
      { name: 'SQL', iconSrc: '/logos/icons8-sql-50.webp' },
      {
        name: 'PostgreSQL',
        iconSrc: '/logos/icons8-postgresql-50.webp',
      },
      {
        name: 'Sequelize',
        iconSrc: '/logos/sequelize_icon_132004.webp',
      },
      { name: 'API Rest', iconSrc: '/logos/icons8-api-64.webp' },
      {
        name: 'Programmation Orientée Objet',
        iconSrc: '/logos/icons8-object-oriented-programming-32.webp',
      },
      { name: 'MVC', iconSrc: '/logos/icons8-backend-50.webp' },
    ],
  },
  {
    title: 'Outils & Environnement',
    elems: [
      {
        name: 'VS Code',
        iconSrc: '/logos/icons8-visual-studio-50.webp',
      },
      { name: 'Git', iconSrc: '/logos/icons8-git-50.webp' },
      { name: 'GitHub', iconSrc: '/logos/icons8-github-64.webp' },
      { name: 'SCRUM', iconSrc: '/logos/icons8-scrum-64.webp' },
      { name: 'Trello', iconSrc: '/logos/icons8-trello-50.webp' },
    ],
  },
  {
    title: 'Soft Skills',
    elems: [
      {
        name: 'Autonomie',
        iconSrc: '/logos/flaticon-empowerment.webp',
      },
      {
        name: 'Esprit Logique',
        iconSrc: '/logos/icons8-logic-50.webp',
      },
      {
        name: 'Organisation',
        iconSrc: '/logos/flaticon-clipboard.webp',
      },
      { name: 'Curiosité', iconSrc: '/logos/flaticon-question.webp' },
      { name: 'Écoute active', iconSrc: '/logos/flaticon-voice.webp' },
    ],
  },
];

export const projects = [
  {
    title: `O'Journey`,
    description: `Application d'organisation de voyage interactive.`,
    link: 'https://o-journey.vercel.app/',
    imageSrc: '/images/ojourney.webp',
    tags: [
      'React',
      'Redux',
      'Typescript',
      'Node.js',
      'Express',
      'postgreSQL',
      'API REST',
    ],
  },
  {
    title: 'ToDo List Next.js',
    description: 'Projet personnel de ToDo List utilisant Next.js et Prisma.',
    link: 'https://github.com/ElisabethFjr/todoapp-nextjs',
    imageSrc: '/images/todoapp.webp',
    tags: ['Next.js', 'Prisma', 'postgreSQL', 'Typescript', 'SCSS'],
  },
  {
    title: 'Elden Ring Bosses',
    description: `Projet personnel Next.js avec l'API open source Elden Ring.`,
    link: 'https://github.com/ElisabethFjr/elden-ring-bosses',
    imageSrc: '/images/eldenring.webp',
    tags: ['Next.js', 'Javascript', 'Typescript', 'SCSS', 'API'],
  },
  {
    title: 'Hunt Showdown Arsenal',
    description: 'Projet personnel sur le jeu vidéo Hunt Showdown (Crytek).',
    link: 'https://github.com/ElisabethFjr/Hunt-Showdown-Arsenal',
    imageSrc: '/images/hunt.webp',
    tags: ['Vanilla JS', 'EJS', 'Node.js', 'Express', 'postgreSQL'],
  },
  {
    title: 'Mon Portfolio',
    description: `Projet personnel réalisé avec Next.js.`,
    link: 'https://github.com/ElisabethFjr/Portfolio-nextJS',
    imageSrc: '/images/portfolio.webp',
    tags: ['Next.js', 'Typescript', 'SCSS', 'Nodemailer'],
  },
];
