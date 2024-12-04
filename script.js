function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')

  /* pegar a tag da imagem */
  const img = document.querySelector('#profile img')
  /*Substituir a imagem */
  if (html.classList.contains('light')) {
    img.setAttribute('src', './assets/fotolight.jpg')
    alt.setAttribute('alt', 'Testando o desafio de mayke')
  } else {
    img.setAttribute('src', './assets/98432802.jpg')
    alt.setAttribute('alt', 'Foto de Lucas Emanuel em frente ao computador')
  }
}
