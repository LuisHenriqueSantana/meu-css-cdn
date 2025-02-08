(function () {
  const dominiosPermitidos = [
    "rikbranding.catalog.yampi.io",
    // adicione mais domínios aqui
  ];

  const domainAtual = window.location.hostname;

  // Verifica se o domínio atual é exatamente igual a um dos permitidos
  const dominioPermitido = dominiosPermitidos.some(
    (domain) => domainAtual === domain || domainAtual.endsWith("." + domain)
  );

  if (!dominioPermitido) {
    console.warn("Domínio não autorizado a usar este CSS");
    return;
  }

  // Cria meta tag
  const meta = document.createElement("meta");
  meta.name = "stylesheet";
  meta.content =
    "https://LuisHenriqueSantana.github.io/meu-css-cdn/css/style.min.css";
  document.head.appendChild(meta);

  // Cria link tag
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = meta.content;
  document.head.appendChild(link);
})();
