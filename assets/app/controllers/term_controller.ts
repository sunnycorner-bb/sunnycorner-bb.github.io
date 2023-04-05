import { Controller } from "@hotwired/stimulus"

export default class TermController extends Controller<HTMLFormElement> {
  static targets = [ "button" ]

  declare readonly hasButtonTarget: boolean
  declare readonly buttonTarget: HTMLInputElement

  confirm(ev: { target: HTMLInputElement }) {
    if(!this.hasButtonTarget) {
      return
    }

    if(ev.target.checked) {
      this.buttonTarget.classList.remove('disabled')
    } else {
      this.buttonTarget.classList.add('disabled')
    }
  }
}
