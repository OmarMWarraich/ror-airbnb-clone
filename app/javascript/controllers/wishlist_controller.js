import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="wishlist"
export default class extends Controller {
  updateWishlistStatus() {
    // Get status if user is logged in
    // if logged-out, redirect to login page, return
    // else continue

    const isUserLoggedIn = this.element.dataset.isUserLoggedIn;
    if (isUserLoggedIn === "false") {
      document.querySelector(".js-login").click();
      return;
    }

    if (this.element.dataset.status === "false") {
      this.element.classList.remove("fill-none");
      this.element.classList.add("fill-primary");
      this.element.dataset.status = "true";
    } else {
      this.element.classList.remove("fill-primary");
      this.element.classList.add("fill-none");
      this.element.dataset.status = "false";
    }
  }
}
