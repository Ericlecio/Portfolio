// ==========================================
// DADOS DO PORTFÓLIO
// ==========================================

// Tecnologias organizadas na ordem para o grid de 2 colunas
const techGroups = [
  {
    category: "Linguagens",
    items: [
      { name: "java", label: "Java", type: "plain" },
      { name: "python", label: "Python", type: "plain" },
      { name: "kotlin", label: "Kotlin", type: "plain" },
      { name: "javascript", label: "JavaScript", type: "plain" },
    ],
  },
  {
    category: "Backend & Cloud",
    items: [
      { name: "spring", label: "Spring Boot", type: "plain" },
      { name: "django", label: "Django", type: "plain" },
      { name: "flask", label: "Flask", type: "original" },
      { name: "docker", label: "Docker", type: "plain" },
      { name: "amazonwebservices", label: "AWS", type: "original" },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "vuejs", label: "Vue.js", type: "plain" },
      { name: "react", label: "React", type: "original" },
      { name: "html5", label: "HTML5", type: "plain" },
      { name: "css3", label: "CSS3", type: "plain" },
    ],
  },
  {
    category: "Bancos de Dados",
    items: [
      { name: "postgresql", label: "PostgreSQL", type: "plain" },
      { name: "mysql", label: "MySQL", type: "plain" },
    ],
  },
];

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

const publications = [
  {
    title:
      "Extração de Notícias sobre Segurança Pública para Desenvolvimento de Corpora",
    event: "CSBC 2025 - VI Workshop WICS",
    date: "Julho 2025",
    description:
      "Coleta e análise de 65.000 artigos via web scraping para criar um corpus linguístico focado em segurança pública no Nordeste.",
    link: "#",
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

const timeline = [
  {
    period: "2021 - 2023",
    title: "Início & Monitorias (IFPE)",
    description:
      "Ingresso na área de tecnologia e atuação como <strong>Monitor de Desenvolvimento Web</strong> auxiliando turmas de técnico em informática.",
    subitems: [
      "<strong>2022:</strong> Monitor de Web I (HTML/CSS) - Orientação de projetos práticos.",
      "<strong>2023:</strong> Monitor de Web Avançado - Suporte em Frameworks e JavaScript.",
      "<strong>LabIFMaker:</strong> Bolsista voluntário em modelagem 2D e corte a laser.",
    ],
    highlight: false,
  },
  {
    period: "Jul 2023 - Dez 2025",
    title: "Bolsista de Iniciação Tecnológica | Machine Learning (GEDAI/UFAL)",
    description:
      "Atuação no grupo de pesquisa GEDAI focada na modelagem de pipelines completos e inteligência artificial.",
    subitems: [
      "Coletei e processei mais de <strong>500 mil registros</strong> de redes sociais para treinamento de modelos de ML.",
      "Desenvolvi o <strong>Pulse Security</strong>, registrado no INPI, integrando NLP, classificação de risco e dashboards analíticos.",
      "Modelei pipeline completo: coleta → limpeza → estruturação em JSON → treinamento de modelos.",
      "Implementei algoritmos de <strong>Visão Computacional</strong> para análise de imagens de VANTs.",
    ],
    highlight: false,
  },
  {
    period: "Jun 2024 - Dez 2024",
    title: "Pesquisador de Iniciação Tecnológica (GEDAI/UFAL)",
    description:
      "Pesquisa e desenvolvimento de soluções com foco na <strong>Indústria 4.0</strong>.",
    subitems: [
      "Desenvolvi softwares para otimização de processos em contextos de Automação Industrial e Indústria 4.0.",
      "Implementei ferramentas para gestão de sistemas dinâmicos e processos gerenciais.",
    ],
    highlight: false,
  },
  {
    period: "Mar 2025 - Atual",
    title: "Backend & Data Engineer (SIAPESQ)",
    description:
      "Atuação no Sistema de IA em Pesquisa Ambiental. Responsável por construir a base e o fluxo de processamento de dados.",
    subitems: [
      "Responsável por coletar e processar dados ambientais utilizando <strong>Python</strong>.",
      "Construo pipelines de dados geoespaciais, uso <strong>QGIS</strong> para processamento, containerizo com <strong>Docker</strong> e armazeno na <strong>AWS</strong>.",
      "Estruturo toda a base de dados para alimentar modelos de Machine Learning.",
    ],
    highlight: false,
  },
  {
    period: "Mai 2025 - Jul 2025",
    title: "Residência Técnica em QA (Softex Pernambuco)",
    description:
      "Especialização prática em Qualidade de Software atuando em todas as etapas do ciclo de vida: planejamento, execução e entrega final com <strong>CI/CD</strong>.",
    subitems: [
      "Automatizei cenários de teste utilizando BDD com <strong>Cucumber</strong> e <strong>Behave</strong> em projetos reais.",
      "Gestionei bugs e planejamento de testes com <strong>JIRA</strong>, aplicando boas práticas de Page Objects.",
    ],
    highlight: false,
  },
  {
    period: "DEZ / 2025",
    title: "Graduado em ADS 🎓",
    description:
      "Conclusão do curso Superior de Tecnologia em <strong>Análise e Desenvolvimento de Sistemas</strong> pelo IFPE Campus Palmares.",
    subitems: [
      "Formatura com Láurea Acadêmica e TCC em Otimização por Enxame de Partículas (PSO).",
    ],
    highlight: false,
  },
  {
    period: "2026 - Atual",
    title: "Mestrado em Ciência da Computação (CIn-UFPE)",
    description:
      "Pesquisa acadêmica e desenvolvimento de soluções baseadas em Large Language Models (LLMs) e mineração de dados na web.",
    subitems: [
      "<strong>Backend:</strong> Arquitetura e desenvolvimento contínuo em Java.",
      "<strong>Pesquisa:</strong> Detecção de ameaças e tratamento de exceções com apoio de IA Generativa.",
    ],
    highlight: false,
  },
];

// ==========================================
// LÓGICA DO SISTEMA
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
  AOS.init({ duration: 800, once: true });
  renderTechs();
  renderProjects();
  renderPublications();
  renderTimeline();
  handleScroll();
});

function renderTechs() {
  const container = document.getElementById("skills-container");
  if (!container) return;
  container.innerHTML = "";

  techGroups.forEach((group) => {
    const groupDiv = document.createElement("div");
    groupDiv.className = "skill-group";
    groupDiv.setAttribute("data-aos", "fade-up");

    const title = document.createElement("h3");
    title.className = "skill-group-title";
    title.innerText = group.category;
    groupDiv.appendChild(title);

    const gridDiv = document.createElement("div");
    gridDiv.className = "skills-grid";

    group.items.forEach((tech) => {
      const card = document.createElement("div");
      card.className = "skill-card";

      let iconClass = `devicon-${tech.name}-${tech.type} colored`;
      if (tech.name === "flask") iconClass = `devicon-flask-original`;
      if (tech.name === "amazonwebservices")
        iconClass = `devicon-amazonwebservices-original colored`;

      card.innerHTML = `
        <i class="${iconClass}"></i>
        <p>${tech.label}</p>
      `;
      gridDiv.appendChild(card);
    });

    groupDiv.appendChild(gridDiv);
    container.appendChild(groupDiv);
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
        onerror="this.onerror=null; this.parentNode.innerHTML='<div class=\\'project-img\\' style=\\'background: linear-gradient(135deg, #1c2533, #2972dd);\\'></div>'"
      >
    `;

    div.innerHTML = `
      ${imgHTML}
      <div class="project-content">
        <h3>${project.name}</h3>
        <div class="tech-tags">
          ${project.technologies.map((t) => `<span class="tech-tag">${t}</span>`).join("")}
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

function renderTimeline() {
  const container = document.getElementById("timeline-grid");
  if (!container) return;

  timeline.forEach((item) => {
    const div = document.createElement("div");
    div.className = `timeline-item ${item.highlight ? "highlight-item" : ""}`;

    let subitemsHTML = "";
    if (item.subitems && item.subitems.length > 0) {
      const lis = item.subitems.map((sub) => `<li>${sub}</li>`).join("");
      subitemsHTML = `<ul class="timeline-sublist">${lis}</ul>`;
    }

    div.innerHTML = `
      <div class="timeline-content">
        <span class="year">${item.period}</span>
        <h3>${item.title}</h3>
        <p>${item.description}</p>
        ${subitemsHTML}
      </div>
    `;
    container.appendChild(div);
  });
}

// ==========================================
// FUNÇÕES DE INTERFACE
// ==========================================

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
