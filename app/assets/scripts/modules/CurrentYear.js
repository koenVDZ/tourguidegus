class CurrentYear {
  constructor() {
    document.getElementById("site-footer__date").innerHTML =
      "Copyright &copy" +
      new Date().getFullYear() +
      "Tour Guide Gus. All rights reserved.";
  }
}
export default CurrentYear;
