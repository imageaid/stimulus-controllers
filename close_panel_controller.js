import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="close-panel"
export default class extends Controller {
  static values = { dom: String }

  connect() {
  }

  toggle() {
    let review = document.getElementById(this.domValue)
    review.classList.toggle('hidden')
  }
}
