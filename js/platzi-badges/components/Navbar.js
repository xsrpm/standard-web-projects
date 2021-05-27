export default class Navbar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.render();
    //implementation
  }

  getTemplate() {
    const template = document.createElement("template");
    template.innerHTML = `
        <header class="Navbar">
        <nav class="container-fluid">
          <a class="Navbar__brand" href="/">
            <img class="Navbar__brand-logo" src="../images/logo.svg" alt="Logo" />
            <span class="font-weight-light">Platzi</span>
            <span class="font-weight-bold">Conf</span>
          </a>
        </nav>
      </header>
            ${this.getStyles()}
        `;
    return template;
  }

  getStyles() {
    return `
            <style>
              .Navbar {
                width: 100%;
                padding: 0.5rem 0;
                background-color: #1C3643;
              }
              
              .Navbar__brand {
                color: #ffffff;
                text-decoration: none;
                display: flex;
                align-items: center;
              }
              
              .Navbar__brand:hover {
                color: #ffffff;
                text-decoration: none;
              }
              
              .Navbar__brand-logo {
                margin-right: 0.5rem;
              }
            </style>
        `;
  }
  render() {
    this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
  }
}

window.customElements.define("wc-navbar", Navbar);