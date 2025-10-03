export default class LightOnModell {
  #lista = []
  #meret

  constructor(meret = 3) {
    this.#meret = meret
    this.#lista = []
    for (let i = 0; i < meret * meret; i++) {
      this.#lista.push(Math.random() < 0.5) 
    }
  }

  getLista() {
    return this.#lista
  }

  ujJatek() {
    this.#lista = []
    for (let i = 0; i < this.#meret * this.#meret; i++) {
      this.#lista.push(Math.random() < 0.5)
    }
  }

  szomszedokKapcsolasa(id) {
    const sor = Math.floor(id / this.#meret)
    const oszlop = id % this.#meret
    const iranyok = [
      [0, 0],
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1]
    ]
    iranyok.forEach(([dx, dy]) => {
      const ujSor = sor + dx
      const ujOszlop = oszlop + dy
      if (
        ujSor >= 0 &&
        ujSor < this.#meret &&
        ujOszlop >= 0 &&
        ujOszlop < this.#meret
      ) {
        const index = ujSor * this.#meret + ujOszlop
        this.#lista[index] = !this.#lista[index]
      }
    })
  }
}
