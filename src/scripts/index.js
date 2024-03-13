document.addEventListener('DOMContentLoaded', () => {
    // Identifica a URL atual
    const urlAtual = window.location.href;
  
    // Seleciona os itens do menu
    const sobreMimItem = document.querySelector('#about a');
    const projetosItem = document.querySelector('#projects a');
  
    // Por padrão, assume que estamos na página "Sobre Mim"
    sobreMimItem.classList.add('active');
  
    // Verifica se a URL atual corresponde à página "Projetos"
    if (urlAtual.includes('projects.html')) {
      // Remove a classe 'active' do item "Sobre Mim"
      sobreMimItem.classList.remove('active');
      // Adiciona a classe 'active' ao item "Projetos"
      projetosItem.classList.add('active');
    }
  });
  