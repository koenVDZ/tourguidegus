class Modal {
  constructor() {
    this.injectHTML();
    this.modal = document.querySelector(".modal");
    this.closeIcon = document.querySelector(".modal__close");
    this.events();
  }

  events() {
    // listen for close click
    this.closeIcon.addEventListener("click", () => this.closeTheModal());

    // pushes any key
    document.addEventListener("keyup", (e) => this.keyPressHandler(e));
  }

  keyPressHandler(e) {
    if (e.keyCode == 27) {
      this.closeTheModal();
    }
  }

  openTheModal() {
    this.modal.classList.add("modal--is-visible");
  }

  closeTheModal() {
    this.modal.classList.remove("modal--is-visible");
  }

  injectHTML() {
    document.body.insertAdjacentHTML(
      "beforeend",
      `
    <div class="modal">
    <div class="modal__inner">
      <h2 class="section-title section-title--blue section-title--less-margin"><img src="assets/images/icons/mail.svg" class="section-title__icon"> Get in <strong>Touch</strong></h2>
      <div class="wrapper wrapper--narrow">
        <p class="modal__description">You can get in touch with me through different channels, please choose the one which suits you most, I will get back to you as soon as I can.</p>
      </div>
      <div class="social-icons">
        <a href="https://www.facebook.com/augusto.guimaraes.71" target="_blank" class="social-icons__icon-box"><i class="social-icons__icon fab fab fa-facebook-f"></i></a>
        <a href="https://www.tripadvisor.com/Attraction_Review-g303506-d4976222-Reviews-TourGuideGus-Rio_de_Janeiro_State_of_Rio_de_Janeiro.html" target="_blank" class="social-icons__icon-box"><i class="social-icons__icon fab fab fa-tripadvisor"></i></a>
        <a href="https://www.instagram.com/augusto.guimaraes.71/?hl=en" target="_blank" class="social-icons__icon-box"><i class="social-icons__icon fab fab fa-instagram"></i></a>
        <a href="https://wa.me/5521976601175" target="_blank" class="social-icons__icon-box"><i class="social-icons__icon fab fab fa-whatsapp"></i></a>
      </div>
    </div>
    <div class="modal__close">X</div>
  </div>
    `
    );
  }
}

export default Modal;
