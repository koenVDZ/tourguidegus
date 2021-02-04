class CurrentYear {
  constructor() {
    document.getElementById("site-footer__date").innerHTML = 'Copyright \u00A9' + new Date().getFullYear() + 'Tour Guide Gus. All rights reserved.'
  }
}
export default CurrentYear