import NavBar from '../components/NavBar.js';
import Badge from "../components/Badge.js";
import BadgeForm from "../components/BadgeForm.js";

export default class BadgeNew extends HTMLElement {
  //avatarUrl:"http://gravatar.com/avatar/6494d6b3f56f54c040647c1c7ae41339"
  form = {
    firstName:'',
    lastName:'',
    email:'',
    jobTitle:'',
    twitter:'',
  }
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.render();
  }

  /*
  handleChange = (e)=>{
      form:{
        ...this.state.form,
        [e.target.name]:e.target.value
      }
  }

  */
  getTemplate() {
    const template = document.createElement("template");
    template.innerHTML = `
        <wc-navbar></wc-navbar>
        <main>
          <section class="BadgeNew__hero">
            <img class="img-fluid" src="../images/badge-header.svg" alt="Logo" />
          </section>
          <section class="container">
            <div class="row">
              <div class="col-6">
                <wc-badge class="wc-badge"></wc-badge>
              </div>
              <div class="col-6">
                <wc-badgeform
                  onChange="{this.handleChange}"
                  formValues="{this.state.form}"
                ></wc-badgeform>
              </div>
            </div>
          </section>
        </main>
        <footer></footer>
            ${this.getStyles()}
        `;
    return template;
  }
  getStyles() {
    return `
            <style>
            .BadgeNew__hero {
                width: 100%;
                padding: 2rem 0;
                background: url('../images/stars.svg'), #1B1B25;
                background-repeat: repeat;
                margin-bottom: 1rem;
                color: #ffffff;
            }
            </style>
            <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
            integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
            crossorigin="anonymous"
          />
        `;
  }
  render() {
    this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    const wcBadge = this.shadowRoot.firstElementChild.getElementsByClassName("wc-badge")
    wcBadge.dataset ={ form: this.form}
  }
}

window.customElements.define("page-badge-new", BadgeNew);