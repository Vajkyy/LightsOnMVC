import LightOnModell from "../modell/LightOnModell.js"
import JatekTer from "../view/JatekTer.js"

export default class LightOnController {
  constructor() {
    this.loModel = new LightOnModell(3)
    let lista = this.loModel.getLista()
    this.szuloElem = $(".tartalom")
    this.jatekTer = new JatekTer(lista, this.szuloElem)
    this.kapcsolEsemeny()
    this.ujrainditasGomb()
  }

  kapcsolEsemeny() {
    $(window).on("kapcsol", (event) => {
      this.loModel.szomszedokKapcsolasa(event.detail)
      let lista = this.loModel.getLista()
      this.jatekTer.init(lista)
    })
  }

  ujrainditasGomb() {
    $("#ujrakezd").on("click", () => {
      this.loModel.ujJatek()
      let lista = this.loModel.getLista()
      this.jatekTer.init(lista)
    })
  }
}
