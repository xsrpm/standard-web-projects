export default class Home extends HTMLElement {
  constructor() {
    super();
    //this.attachShadow({ mode: "open" });
    this.render();
  }

  connectedCallback() {
    //implementation
  }

  disconnectedCallback() {
    //implementation
  }

  attributeChangedCallback(name, oldVal, newVal) {
    //implementation
  }

  adoptedCallback() {
    //implementation
  }

  getTemplate() {
    const template = document.createElement("template");
    template.innerHTML = `
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha512-MoRNloxbStBcD8z3M/2BmnT+rg4IsMxPkXaGh2zD6LGNNFE80W3onsAhRcMAMrSoyWL9xD7Ert0men7vR8LUZg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            <wc-navbar></wc-navbar>
            <main class="Home">
                <div className="container">
                    <div class="row">
                    <div class="Home__col col-12 col-md-4">
                        <img
                        src="../images/platziconf-logo.svg"
                        alt="Platzi Conf Logo"
                        class="img-fluid mb-2"
                        />
                        <h1>PRINT YOUR BADGES</h1>
                        <Link class="btn btn-primary" to="/badges">
                        Start Now
                        </Link>
                    </div>
                    <div class="Home__col d-none d-md-block col-md-8">
                        <img
                        src="../images/astronauts.svg"
                        alt="Astronauts"
                        class="img-fluid p-4"
                        />
                    </div>
                    </div>
                </div>
            </main>
            ${this.getStyles()}
            `;
    return template;
  }

  getStyles() {
    return `<style>
            .Home {
              width: 100%;
              min-height: calc(100vh - 60px);
              background: url('../images/stars.svg'), #1B1B25;
              background-repeat: repeat;
              color: #ffffff;       
              display: flex;
              align-items: center;
            }
            
            .Home__col {
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
            }
            
            @media screen and (min-width: 768px) {
              .Home__col {
                align-items: flex-start;
              }
            }
            </style>
            `;
  }
  render() {
    //this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    this.appendChild(this.getTemplate().content.cloneNode(true));
  }
}

window.customElements.define("wc-home", Home);
