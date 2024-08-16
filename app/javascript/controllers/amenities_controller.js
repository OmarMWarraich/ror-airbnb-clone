import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="amenities"
export default class extends Controller {
  connect() {}

  toggleAmenitiesModal() {
    document.getElementById("amenities").click();
  }
}
