export default class BadgeForm extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.render();
    }

    getTemplate() {
      //const {firstName,lastName,email,jobTitle,twitter} = this.dataset.form
        const template = document.createElement("template");
        template.innerHTML = `
        <section>
        <h1>New Attendant</h1>
        <form onSubmit={this.handleSubmit}>
          <div class="form-group">
            <label>First Name</label>
            <input
              class="form-control"
              type="text"
              name="firstName"
              placeholder="Your firstname"
            />
          </div>
          <div class="form-group">
            <label>Last Name</label>
            <input
              class="form-control"
              type="text"
              name="lastName"
              placeholder="Your lastname"
            />
          </div>
          <div class="form-group">
            <label>Email</label>
            <input
              class="form-control"
              type="email"
              name="email"
              placeholder="Your email"
            />
          </div>
          <div class="form-group">
            <label>Job Title</label>
            <input
              class="form-control"
              type="text"
              name="jobTitle"
              placeholder="Your job title"
            />
          </div>
          <div class="form-group">
            <label>Twitter</label>
            <input
              class="form-control"
              type="text"
              name="twitter"
              placeholder="Your twitter account"
            />
          </div>
          <button onClick={this.handleClick} class="btn btn-primary">Save</button>
        </form>
      </section>
        ${this.getStyles()}
        `;
        return template;
      }
      getStyles() {
        return `
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
        const parent = this.shadowRoot.firstElementChild;
        console.log(this.dataset)
        const handleInput = function(e){
          this.dataset.form= {
          ...this.dataset.form,
          [e.target.name]:e.target.value
          }
          console.log(typeof this.dataset.form)
          console.log(this.dataset.form.firstName)
        }
        Array.from(parent.getElementsByTagName("input")).forEach(element => {
          element.oninput = handleInput
        });
        console.log(parent.getElementsByTagName("input"))
      }

}

window.customElements.define('wc-badgeform', BadgeForm);