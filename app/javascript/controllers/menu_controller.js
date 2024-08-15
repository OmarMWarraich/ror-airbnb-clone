import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="menu"
export default class extends Controller {
  static targets = ["iconOpen", "iconClose"];

  connect() {
    this.menuElement = document.querySelector("[data-menu-target='menu']");
    this.toggleMenu(false); // Initially hide the menu
  }

  toggle(e) {
    e.preventDefault();
    const isOpen = this.menuElement.classList.contains("hidden");
    this.toggleMenu(isOpen);
  }

  toggleMenu(isOpen) {
    this.menuElement.classList.toggle("hidden", !isOpen);
    this.iconOpenTarget.classList.toggle("hidden", isOpen);
    this.iconCloseTarget.classList.toggle("hidden", !isOpen);
  }
}
