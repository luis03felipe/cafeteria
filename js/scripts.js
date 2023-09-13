let navbar = document.querySelector(".navbar")

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active")
  formBusca.classList.remove("active")
  itemCarrinho.classList.remove("active")
}

let formBusca = document.querySelector(".form-busca")

document.querySelector("#search-btn").onclick = () => {
  formBusca.classList.toggle("active")
  navbar.classList.remove("active")
  itemCarrinho.classList.remove("active")
}

let itemCarrinho = document.querySelector(".item-carrinho-container")

document.querySelector("#cart-btn").onclick = () => {
  itemCarrinho.classList.toggle("active")
  navbar.classList.remove("active")
  formBusca.classList.remove("active")
}

window.onscroll = () => {
  navbar.classList.remove("active")
  formBusca.classList.remove("active")
  itemCarrinho.classList.remove("active")
}
