class PantallaDemo extends HTMLElement{
    constructor(){
        super()
        this.attachShadow({mode:"open"})
        this.render()
        console.log("Creado")
    }
    static get observedAttributes(){
        return ["title"]
    }
    attributeChangedCallback(name,oldValue,newValue){
        if(oldValue!==newValue){
            console.log(`${name}'s value has been changed from ${oldValue} to ${newValue}`);
            this.shadowRoot.getElementById(name).innerText=newValue
        }
    }
    getTemplate(){
        const template = document.createElement("template")
        template.innerHTML = `
            <section>
                <h2><slot></slot></h2>
                <div>
                    <p><slot name="parrafo"></slot></p>
                    <p><slot name="parrafo2"></slot></p>
                    <p id="title"></p>
                </div>
            </section>
            ${this.getStyles()}
        `
        return template
    }
    getStyles(){
        return `
            <style>
                h2 {
                    color: red
                }
                p{
                    color:blue
                }
            </style>
        `
    }
    render(){
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true))
    }
    connectedCallback(){
        //this.render()
        console.log("Conectado")
    }

}

customElements.define('pantalla-demo',PantallaDemo)