import { Controller } from "@hotwired/stimulus";
import { toggle } from "el-transition";

// Connects to data-controller="modal"
export default class extends Controller {
  connect() {}

  toggleModal() {
    const modalTriggerId = this.element.dataset.modalTriggerId;
    console.log("modalTriggerId: ", modalTriggerId);
    console.log(
      "wrapper: " + document.getElementById(`modal-${modalTriggerId}-wrapper`)
    );
    toggle(document.getElementById(`modal-${modalTriggerId}-wrapper`));
  }
}
