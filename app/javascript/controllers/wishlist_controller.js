import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["icon", "text"];

  updateWishlistStatus(e) {
    e.preventDefault();
    const isUserLoggedIn = this.element.dataset.userLoggedIn;
    if (isUserLoggedIn === "false") {
      document.querySelector(".js-login").click();
      return;
    }

    if (this.element.dataset.status === "false") {
      const propertyId = this.element.dataset.propertyId;
      const userId = this.element.dataset.userId;
      this.addPropertyToWishlist(propertyId, userId);
    } else {
      const wishlistId = this.element.dataset.wishlistId;
      this.removePropertyFromWishlist(wishlistId);
    }
  }

  addPropertyToWishlist(propertyId, userId) {
    const params = {
      property_id: propertyId,
      user_id: userId,
    };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    };

    fetch("/api/wishlists", options)
      .then((response) => {
        if (!response.ok) {
          console.log(response.status);
        }
        return response.json();
      })
      .then((data) => {
        this.element.dataset.wishlistId = data.id;
        this.iconTarget.classList.remove("fill-none");
        this.iconTarget.classList.add("fill-primary");
        this.element.dataset.status = "true";

        if (this.textTarget) {
          this.textTarget.innerText = "Saved";
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }

  removePropertyFromWishlist(wishlistId) {
    fetch("/api/wishlists/" + wishlistId, {
      method: "DELETE",
    })
      .then((response) => {
        this.element.dataset.wishlistId = "";
        this.iconTarget.classList.remove("fill-primary");
        this.iconTarget.classList.add("fill-none");
        this.element.dataset.status = "false";

        if (this.textTarget) {
          this.textTarget.innerText = "Save";
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }
}
