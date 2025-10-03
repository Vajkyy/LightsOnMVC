import Lampa from "./Lampa.js"

export default class JatekTer {
  #lista
  #taroloElem

  constructor(lista, taroloElem) {
    this.#lista = lista
    this.#taroloElem = taroloElem
    this.#taroloElem.empty()
    this.kiir()
  }

  kiir() {
    this.#lista.forEach((elem, index) => {
      new Lampa(elem, index, this.#taroloElem)
    })
  }

  init(lista) {
    this.#lista = lista
    this.#taroloElem.empty()
    this.kiir()
  }
}
