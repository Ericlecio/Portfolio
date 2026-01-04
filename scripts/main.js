// --- DADOS DO PORTFÓLIO ---

// 1. Tecnologias
const techs = [
  { name: "python", label: "Python", type: "plain" },
  { name: "java", label: "Java", type: "plain" },
  { name: "javascript", label: "JavaScript", type: "plain" },
  { name: "html5", label: "HTML5", type: "plain" },
  { name: "css3", label: "CSS3", type: "plain" },
  { name: "vuejs", label: "Vue.js", type: "plain" },
  { name: "react", label: "React", type: "original" },
  { name: "tailwindcss", label: "Tailwind", type: "original" },
  { name: "bootstrap", label: "Bootstrap", type: "plain" },
  { name: "spring", label: "Spring Boot", type: "original" },
  { name: "django", label: "Django", type: "plain" },
  { name: "flask", label: "Flask", type: "original" },
  { name: "firebase", label: "Firebase", type: "plain" },
  { name: "mysql", label: "MySQL", type: "plain" },
  { name: "postgresql", label: "PostgreSQL", type: "plain" },
  { name: "oracle", label: "Oracle", type: "original" },
  { name: "pandas", label: "Pandas", type: "original" },
  { name: "numpy", label: "NumPy", type: "original" },
  { name: "tensorflow", label: "IA / TensorFlow", type: "original" },
];

// 2. Projetos
const projects = [
  {
    name: "StudyFlow",
    description:
      "Plataforma de educação adaptativa com IA Generativa (Gemini). Cria trilhas de estudo infinitas e personalizadas. Arquitetura Fullstack Serverless.",
    technologies: ["Vue.js", "Node.js", "AI Gemini", "Firebase"],
    link: "https://github.com/Ericlecio/StudyFlow",
    image: "./assets/images/projects/StudyFlow.png",
  },
  {
    name: "Sistema de Recomendação (PSO)",
    description:
      "Sistema inteligente de priorização utilizando algoritmo de Otimização por Enxame de Partículas (PSO). Solução completa com API FastAPI e Dashboard.",
    technologies: ["Python", "AI / PSO", "FastAPI", "Streamlit"],
    link: "https://github.com/Ericlecio/Sistema-priorizacao-recomendacao-pso",
    image: "./assets/images/projects/Sistema Inteligente de Priorização.png",
  },
  {
    name: "Nexus Saúde",
    description:
      "Sistema de agendamento médico com sincronização em tempo real. Foco em reatividade e gestão de clínicas via Firebase.",
    technologies: ["Vue.js", "Firebase", "NoSQL"],
    link: "https://github.com/Ericlecio/Nexus-Saude-Firebase",
    image: "./assets/images/projects/NexusSaude.png",
  },
  {
    name: "CIMAS - Visão Computacional",
    description:
      "Detecção automatizada de ausência de vegetação em barragens para análise de risco estrutural utilizando modelo YOLO (Deep Learning).",
    technologies: ["Python", "YOLO", "Computer Vision", "Flask"],
    link: "https://github.com/Ericlecio/CIMAS_Constructions_Patologies_1",
    image: "./assets/images/projects/CIMAS_Constructions_Patologies_1.png",
  },
  {
    name: "Mundo Pet",
    description:
      "Aplicação web robusta para gestão de Pet Shops. Controle de serviços e consultas com backend estruturado em Java.",
    technologies: ["Java", "MySQL", "Backend"],
    link: "https://github.com/Ericlecio/Mundo_Pet",
    image: "./assets/images/projects/Mundo Pet.png",
  },
];

// 3. Publicações (Novo)
const publications = [
  {
    title:
      "Extração de Notícias sobre Segurança Pública para Desenvolvimento de Corpora",
    event: "CSBC 2025 - VI Workshop WICS",
    date: "Julho 2025",
    description:
      "Coleta e análise de 65.000 artigos via web scraping para criar um corpus linguístico focado em segurança pública no Nordeste.",
    link: "#", // Coloque o link do PDF ou DOI se tiver
  },
  {
    title: "Dermatoscópio Acessível com IA",
    event: "Latinoware 2025 - Latin.Science",
    date: "Outubro 2025",
    description:
      "Desenvolvimento de dispositivo de baixo custo com impressão 3D e IA para diagnóstico precoce de lesões cutâneas.",
    link: "#",
  },
  {
    title: "Inclusão via Cultura Maker e Tecnologias Assistivas",
    event: "Latinoware 2025 - Latin.Science",
    date: "Outubro 2025",
    description:
      "Projeto de criação de materiais pedagógicos personalizados para crianças com TEA e TDAH usando corte a laser e impressão 3D.",
    link: "#",
  },
  {
    title: "Robótica Educacional além da Competição",
    event: "Latinoware 2025 - Latin.Science",
    date: "Outubro 2025",
    description:
      "Ressignificação de um robô sumô como ferramenta pedagógica interdisciplinar para o ensino de Física e Programação.",
    link: "#",
  },
];

// --- LÓGICA DO SISTEMA ---

document.addEventListener("DOMContentLoaded", () => {
  AOS.init({ duration: 800, once: true });
  renderTechs();
  renderProjects();
  renderPublications(); // Nova função chamada aqui
  handleScroll();
});

function renderTechs() {
  const container = document.getElementById("skills-grid");
  if (!container) return;
  container.innerHTML = "";

  techs.forEach((tech) => {
    const div = document.createElement("div");
    div.className = "skill-card";
    div.setAttribute("data-aos", "fade-up");

    let iconClass = `devicon-${tech.name}-${tech.type} colored`;
    if (tech.name === "flask") iconClass = `devicon-flask-original`;

    div.innerHTML = `
            <i class="${iconClass}"></i>
            <p>${tech.label}</p>
        `;
    container.appendChild(div);
  });
}

function renderProjects() {
  const container = document.getElementById("project-list");
  if (!container) return;

  projects.forEach((project) => {
    const div = document.createElement("div");
    div.className = "project-card";
    div.setAttribute("data-aos", "fade-up");

    const imgHTML = `
            <img 
                src="${project.image}" 
                alt="${project.name}" 
                class="project-img" 
                onerror="this.onerror=null; this.parentNode.innerHTML='<div class=\'project-img\' style=\'background: linear-gradient(135deg, #1c2533, #2972dd);\'></div>'"
            >
        `;

    div.innerHTML = `
            ${imgHTML}
            <div class="project-content">
                <h3>${project.name}</h3>
                <div class="tech-tags">
                    ${project.technologies
                      .map((t) => `<span class="tech-tag">${t}</span>`)
                      .join("")}
                </div>
                <p>${project.description}</p>
                <a href="${project.link}" target="_blank" class="project-link">
                    Ver no GitHub <i class="devicon-github-original"></i>
                </a>
            </div>
        `;
    container.appendChild(div);
  });
}

// Nova Função de Renderização de Publicações
function renderPublications() {
  const container = document.getElementById("publications-grid");
  if (!container) return;

  publications.forEach((pub) => {
    const div = document.createElement("div");
    div.className = "pub-card";
    div.setAttribute("data-aos", "fade-up");

    div.innerHTML = `
            <div class="pub-header">
                <span class="pub-date">${pub.date}</span>
                <span class="pub-event">${pub.event}</span>
            </div>
            <h3>${pub.title}</h3>
            <p>${pub.description}</p>
            <div class="pub-icon">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="#2972dd"><path d="M320-240h320v-80H320v80Zm0-160h320v-80H320v80ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z"/></svg>
                <span>Artigo Publicado</span>
            </div>
        `;
    container.appendChild(div);
  });
}

function toggleMenu() {
  const overlay = document.getElementById("mobile-menu-overlay");
  if (overlay) overlay.classList.toggle("active");
}

function handleScroll() {
  const navbar = document.getElementById("navbar");
  const btnTop = document.getElementById("btn-top");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) navbar.classList.add("scrolled");
    else navbar.classList.remove("scrolled");

    if (window.scrollY > 300) btnTop.classList.remove("btn-top-hide");
    else btnTop.classList.add("btn-top-hide");
  });
}

function topFunction() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
