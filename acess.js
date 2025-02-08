(function() {
  const dominiosPermitidos = [
https://rikbranding.catalog.yampi.io/
  ];

  const domainAtual = window.location.hostname;
  
  if (dominiosPermitidos.includes(domainAtual)) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://LuisHenriqueSantana.github.io/meu-css-cdn/css/style.min.css';
    document.head.appendChild(link);
  }
})();
