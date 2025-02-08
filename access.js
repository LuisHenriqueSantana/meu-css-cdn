(function () {
  const dominiosPermitidos = [
    "https://rikbranding.catalog.yampi.io/",
    "yampi.me",
    "lojaintegrada.com.br",
    // adicione mais domínios aqui
  ];

  if (
    dominiosPermitidos.some((domain) =>
      window.location.hostname.includes(domain)
    )
  ) {
    document.write(
      '<meta name="stylesheet" content="https://LuisHenriqueSantana.github.io/meu-css-cdn/csss/style.min.css">' +
      '<script>' +
      'const styleUrl = document.querySelector(\'meta[name="stylesheet"]\').content;' +
      'const link = document.createElement(\'link\');' +
      'link.rel = "stylesheet";' +
      'link.href = styleUrl;' +
      'document.head.appendChild(link);' +
      '</script>'
    );
  }
})();