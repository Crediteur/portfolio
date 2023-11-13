// string paths to images and icons
const PROJ_PATH = "/projects/";
const ICON_PATH = "/icons/";

export const projects = [
  {
    name: "AI Summarizer",
    desc: "A web app that summarizes text using AI.",
    tags: ["React", "Tailwind"],
    url: "https://github.com/Crediteur/react-projects/tree/main/AI-summarizer-web",
    image: PROJ_PATH + "ai_summarizer2.png",
  },
  {
    name: "Doted",
    desc: "A social media platform for sharing thoughts and ideas.",
    tags: ["Svelte", "Tailwind", "SQL"],
    url: "https://github.com/Crediteur/Doted-webapp",
    image: PROJ_PATH + "doted_app.png",
  },
  {
    name: "Tech News",
    desc: "A news website that presents articles in a modern style.",
    tags: ["HTML", "CSS"],
    url: "https://crediteur.github.io/tech-news-website/",
    image: PROJ_PATH + "tech_news_app.png",
  },
  {
    name: "Audio Mixer",
    desc: "A desktop app that allows you to mix and play music.",
    tags: ["C++", "JUCE"],
    url: "https://github.com/Crediteur/JUCE_DJPlayer",
    image: PROJ_PATH + "dj_mixer.png",
  },
  {
    name: "Supercharger Locator",
    desc: "A web app that allows you to find Tesla superchargers.",
    tags: ["Google Cloud", "JavaScript"],
    url: "https://github.com/Crediteur/Tesla-Supercharger-Finder",
    image: PROJ_PATH + "supercharger_app.png",
  },
  {
    name: "Music Visualizer",
    desc: "A web app that visualizes music.",
    tags: ["JavaScript"],
    url: "https://crediteur.github.io/Music_Visualizer/",
    image: PROJ_PATH + "music_vis.png",
  },
  {
    name: "Dino Game",
    desc: "A web app that allows you to play a simple side-scrolling platformer game.",
    tags: ["JavaScript"],
    url: "https://crediteur.github.io/Green_Dinos_Big_Adventure/",
    image: PROJ_PATH + "dino_game.png",
  },
  {
    name: "Jupyter Notebooks",
    desc: "A collection of data science and machine learning notebooks.",
    tags: ["Python", "TensorFlow"],
    url: "https://github.com/Crediteur/Jupyter-Notebooks",
    image: PROJ_PATH + "jupyter_cell.png",
  },
];

export const skills = [
  {
    name: "Web",
    items: [
      { name: "TypeScript", icon: ICON_PATH + "typescript.svg" },
      { name: "React", icon: ICON_PATH + "react.svg" },
      { name: "Tailwind", icon: ICON_PATH + "tailwindcss.svg" },
      { name: "C++", icon: ICON_PATH + "cplusplus.svg" },
    ],
  },
  {
    name: "Systems",
    items: [
      { name: "Python", icon: ICON_PATH + "python.svg" },
      { name: "Node", icon: ICON_PATH + "nodedotjs.svg" },
      { name: "MongoDB", icon: ICON_PATH + "mongodb.svg" },
      { name: "C#", icon: ICON_PATH + "csharp.svg" },
    ],
  },
  {
    name: "Data",
    items: [
      { name: "JavaScript", icon: ICON_PATH + "javascript.svg" },
      { name: "TensorFlow", icon: ICON_PATH + "tensorflow.svg" },
      { name: "Svelte", icon: ICON_PATH + "svelte.svg" },
      { name: "Astro", icon: ICON_PATH + "astro.svg" },
    ],
  },
];

export const links = [
  {
    name: "GitHub",
    url: "https://github.com/Crediteur",
    icon: ICON_PATH + "github.svg",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/tony-yang-498781235/",
    icon: ICON_PATH + "linkedin.svg",
  },
  {
    name: "Twitter",
    url: "",
    icon: ICON_PATH + "twitter.svg",
  },
  {
    name: "Email",
    url: "mailto:tonyyang_2@hotmail.com",
    icon: ICON_PATH + "gmail.svg",
  },
];
