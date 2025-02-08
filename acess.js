(function() {
  const sitesPermitidos = {
    'https://rikbranding.catalog.yampi.io/': 'chave123',
  };

  const domainAtual = window.location.hostname;
  const chaveInformada = document.currentScript.getAttribute('data-key');
  
  if (sitesPermitidos[domainAtual] === chaveInformada) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://LuisHenriqueSantana.github.io/meu-css-cdn/css/style.min.css';
    document.head.appendChild(link);
  }
})(); 
