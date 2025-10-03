export default class Lampa {
  #ertek
  #index
  #szuloElem
  lampaElem

  constructor(ertek, index, szuloElem) {
    this.#ertek = ertek
    this.#index = index
    this.#szuloElem = szuloElem
    this.megjelenit()
    this.esemenyKezelo()
  }

  megjelenit() {
    this.#szuloElem.append(`<div class="lampa"></div>`)
    this.lampaElem = this.#szuloElem.children(".lampa:last")
    this.setSzin(this.#ertek)
  }

  setSzin(ertek) {
    this.lampaElem.removeClass("fel le")
    if (ertek) {
      this.lampaElem.addClass("fel")
    } else {
      this.lampaElem.addClass("le")
    }
  }

  esemenyKezelo() {
    this.lampaElem.on("click", () => {
      const e = new CustomEvent("kapcsol", { detail: this.#index })
      window.dispatchEvent(e)
    })
  }
}
