function toggle_mode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/assets/avatar-light.png")
    img.setAttribute("alt", "foto do João com oculos e com efeito claro")
  } else {
    img.setAttribute("src", "./assets/assets/avatar.png")
    img.setAttribute("alt", "foto do João sem oculos e com efeito escuro")
  }
}

