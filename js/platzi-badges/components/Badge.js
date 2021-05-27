export default class Badge extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.render();
  }

  getTemplate() {
    const template = document.createElement("template");
    template.innerHTML = `
        <article class="Badge">
        <header class="Badge__header">
            <img src="../images/badge-header.svg" alt="Logo de la conferencia" />
        </header>
        <section>
            <div class="Badge__section-name">
                <img class="Badge__avatar" src={avatarUrl} alt="Avatar" />
                <h1>${this.dataset.firstName} <br></br> {lastName}</h1>
            </div>
            <div class="Badge__section-info">
                <h3>{jobTitle}</h3>
                <div>@{twitter}</div>
            </div>

        </section>
        <footer class="Badge__footer">
            #plaziconf
        </footer>
    </article>
    ${this.getStyles()}
    `;
    return template;
  }
  getStyles() {
    return `
                <style>
                .Badge {
                    background: #FFFFFF;
                    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.10);
                    border-radius: 8px 8px 8px 8px;
                    overflow: hidden;
                  }
                  
                  .Badge__header {
                    padding: 0.5rem 0;
                    height: 80px;
                    background: #1B1B25;
                    display: flex;
                    justify-content: center;
                  }
                  
                  .Badge__section-name {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 1rem 0;
                  }
                  
                  .Badge__section-info {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    padding: 0.5rem 0;
                    background: #F4F4F7;
                  }
                
                  .Badge__section-info h3{
                    text-align: center;
                  }
                  
                  
                  .Badge__avatar {
                    border-radius: 50%;
                    margin-right: 1rem;
                    width: 120px;
                    height: 120px;
                  }
                  
                  .Badge__footer {
                    height: 54px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    color: #98CA3F;
                    font-weight: bold;
                    font-style: italic;
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
  }
}

window.customElements.define("wc-badge", Badge);
