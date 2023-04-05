import { Controller } from "@hotwired/stimulus"

export default class ReminderController extends Controller<HTMLDivElement> {
  close() {
    this.element.style.display = 'none'
  }
}
