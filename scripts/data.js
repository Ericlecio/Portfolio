const selectedRepos = [
  {
    name: "data-analysis-and-forecasting",
    techs: ["html5", "css3", "javascript", "nodejs", "mongodb"],
  },
  {
    name: "delivery-app",
    techs: ["javascript", "react"],
  },
  {
    name: "mvp-front-end",
    techs: ["html5", "css3", "javascript"],
  },
  {
    name: "say-hello",
    techs: ["html5", "css3", "javascript", "nodejs", "mongodb"],
  },
];

const techs = [
  {
    name: "html5",
    description:
      "HTML5 é a última versão da linguagem de marcação HTML utilizada para criar e estruturar páginas na web, suportando novos recursos multimídia.",
  },
  {
    name: "css3",
    description:
      "CSS3 é a última versão da linguagem de estilo utilizada para estilizar páginas na web, permitindo mais controle e recursos visuais avançados.",
  },
  {
    name: "javascript",
    description:
      "JavaScript é uma linguagem de programação usada para criar e controlar comportamentos interativos em páginas da web e aplicativos.",
  },
  {
    name: "jquery",
    description:
      "jQuery é uma biblioteca JavaScript popular usada para simplificar a manipulação de elementos HTML, animações, eventos e interações do usuário.",
  },
  {
    name: "bootstrap",
    description:
      "Bootstrap é um framework front-end popular usado para criar sites responsivos e móveis, fornecendo uma estrutura de design pré-construída e personalizável.",
  },
  {
    name: "nodejs",
    description:
      "Node.js é uma plataforma de desenvolvimento de aplicativos baseada em JavaScript usada para criar aplicativos de servidor escaláveis e de alta performance.",
  },
  {
    name: "mysql",
    description:
      "MySQL é um sistema de gerenciamento de banco de dados relacional de código aberto, usado para armazenar e gerenciar dados de aplicativos de negócios.",
  },
  {
    name: "react",
    description:
      "React é uma biblioteca JavaScript popular usada para criar interfaces de usuário interativas e reutilizáveis, permitindo uma renderização eficiente.",
  },
];

// No seu script "data.js" ou onde você adiciona dados dos projetos
const projectsData = [
  {
    name: "Projeto 1",
    description: "Descrição do Projeto 1.",
    image: "assets/images/projects/delivery-app.webp",
    link: "LINK_DO_PROJETO_1_NO_GITHUB",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    name: "Projeto 2",
    description: "Descrição do Projeto 2.",
    image: "assets/images/projects/delivery-app.webp",
    link: "LINK_DO_PROJETO_2_NO_GITHUB",
    technologies: ["React", "Node.js", "Express"],
  },
  // Adicione mais projetos conforme necessário
];

// No seu script "interface.js" ou onde você manipula a interface
const projectList = document.getElementById("project-list");

projectsData.forEach((project) => {
  const projectItem = document.createElement("div");
  projectItem.classList.add("project-item");

  const projectImage = document.createElement("img");
  projectImage.src = project.image;
  projectImage.alt = project.name; // Adicione um atributo alt para acessibilidade
  projectItem.appendChild(projectImage);

  const projectName = document.createElement("h3");
  projectName.textContent = project.name;
  projectItem.appendChild(projectName);

  const projectDescription = document.createElement("p");
  projectDescription.textContent = project.description;
  projectItem.appendChild(projectDescription);

  // Adiciona seção para as tecnologias
  const technologiesSection = document.createElement("div");
  technologiesSection.classList.add("technologies-section");
  projectItem.appendChild(technologiesSection);

  // Adiciona imagens das tecnologias
  project.technologies.forEach((technology) => {
    const technologyImage = document.createElement("img");
    technologyImage.src = `URL_DA_IMAGEM_DA_TECNOLOGIA_${technology}`; // Substitua pelo caminho real da imagem
    technologyImage.alt = technology;
    technologiesSection.appendChild(technologyImage);
  });

  const projectLink = document.createElement("a");
  projectLink.href = project.link;
  projectLink.textContent = "Ver no GitHub";
  projectItem.appendChild(projectLink);

  projectList.appendChild(projectItem);
});
