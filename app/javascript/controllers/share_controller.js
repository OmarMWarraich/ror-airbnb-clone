import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="share"
export default class extends Controller {
  connect() {}

  toggleShareModal() {
    document.getElementById("share").click();
  }
}
