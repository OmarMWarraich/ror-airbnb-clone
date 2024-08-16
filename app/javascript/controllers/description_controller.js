import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="description"
export default class extends Controller {
  connect() {}

  toggleDescriptionModal() {
    document.getElementById("description").click();
  }
}
