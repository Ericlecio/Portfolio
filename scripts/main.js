// --- DADOS DO PORTFÓLIO ---

// 1. Tecnologias
// 'type: plain' geralmente funciona melhor em fundos escuros para ícones que seriam pretos (ex: Flask, Django)
const techs = [
  // Linguagens
  { name: "python", label: "Python", type: "plain" },
  { name: "java", label: "Java", type: "plain" },
  { name: "javascript", label: "JavaScript", type: "plain" },

  // Frontend
  { name: "html5", label: "HTML5", type: "plain" },
  { name: "css3", label: "CSS3", type: "plain" },
  { name: "vuejs", label: "Vue.js", type: "plain" },
  { name: "react", label: "React", type: "original" },
  { name: "tailwindcss", label: "Tailwind", type: "original" },
  { name: "bootstrap", label: "Bootstrap", type: "plain" },

  // Backend & Cloud
  { name: "spring", label: "Spring Boot", type: "original" },
  { name: "django", label: "Django", type: "plain" }, // 'plain' para ficar branco/visível
  { name: "flask", label: "Flask", type: "original" }, // 'original' do flask é preto, mas o css inverte se necessário, ou use 'plain'
  { name: "firebase", label: "Firebase", type: "plain" },

  // Dados & IA
  { name: "mysql", label: "MySQL", type: "plain" },
  { name: "postgresql", label: "PostgreSQL", type: "plain" },
  { name: "oracle", label: "Oracle", type: "original" },
  { name: "pandas", label: "Pandas", type: "original" },
  { name: "numpy", label: "NumPy", type: "original" },
  { name: "tensorflow", label: "IA / TensorFlow", type: "original" },
];

// 2. Projetos (Caminhos exatos conforme sua pasta 'projects')
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

// --- LÓGICA DO SISTEMA ---

document.addEventListener("DOMContentLoaded", () => {
  // Inicializa Animações (AOS)
  AOS.init({ duration: 800, once: true });

  // Renderiza conteúdos
  renderTechs();
  renderProjects();

  // Ativa eventos de scroll
  handleScroll();
});

// Renderiza a grade de ícones de tecnologia
function renderTechs() {
  const container = document.getElementById("skills-grid");
  if (!container) return;

  container.innerHTML = ""; // Limpa antes de renderizar

  techs.forEach((tech) => {
    const div = document.createElement("div");
    div.className = "skill-card";
    div.setAttribute("data-aos", "fade-up");

    // Monta a classe do ícone usando o tipo definido (original ou plain)
    // Adiciona 'colored' para garantir as cores da marca
    // Para Flask e Django no modo dark, as vezes é necessário remover o 'colored' se for plain,
    // mas vamos testar assim primeiro. Se o Flask ficar invisível, mude type para 'plain-wordmark'
    let iconClass = `devicon-${tech.name}-${tech.type} colored`;

    // Correção específica para Flask se ele estiver sumindo (o original é preto)
    if (tech.name === "flask") {
      iconClass = `devicon-flask-original`; // Flask original geralmente é preto, o CSS do site deve inverter a cor ou usar fundo branco no card
    }

    div.innerHTML = `
            <i class="${iconClass}"></i>
            <p>${tech.label}</p>
        `;
    container.appendChild(div);
  });
}

// Renderiza os cards de projeto
function renderProjects() {
  const container = document.getElementById("project-list");
  if (!container) return;

  projects.forEach((project) => {
    const div = document.createElement("div");
    div.className = "project-card";
    div.setAttribute("data-aos", "fade-up");

    // Tag de imagem com tratamento de erro
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

// Abre/Fecha menu mobile
function toggleMenu() {
  const overlay = document.getElementById("mobile-menu-overlay");
  if (overlay) {
    overlay.classList.toggle("active");
  }
}

// Gerencia scroll (Navbar transparente/sólida e botão topo)
function handleScroll() {
  const navbar = document.getElementById("navbar");
  const btnTop = document.getElementById("btn-top");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }

    if (window.scrollY > 300) {
      btnTop.classList.remove("btn-top-hide");
    } else {
      btnTop.classList.add("btn-top-hide");
    }
  });
}

// Função para voltar ao topo suavemente
function topFunction() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
