import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="mobile-menu"
export default class extends Controller {
  connect() {
  }

  show() {
    let menu = document.getElementById('mobile-menu')
    menu.classList.toggle('hidden')
    let menuIcons = document.querySelectorAll('svg.menu-icon')
    menuIcons.forEach(function(menuIcon) {
      menuIcon.classList.toggle('hidden')
    })
  }
}
