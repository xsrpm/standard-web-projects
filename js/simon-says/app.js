const celeste = document.getElementById("celeste");
const violeta = document.getElementById("violeta");
const naranja = document.getElementById("naranja");
const verde = document.getElementById("verde");
const btnEmpezar = document.getElementById("btnEmpezar");
const ULTIMO_NIVEL = 2;

class Juego {
  constructor() {
    this.colores = {
      celeste,
      violeta,
      naranja,
      verde,
    };
    this.siguienteNivel = () => {
      this.subnivel = 0;
      this.iluminarSecuencia();
      this.agregarEventosClick();
    };
    this.elegirColor = (ev) => {
      const nombreColor = ev.target.dataset.color;
      const numeroColor = this.tranformarColorANumero(nombreColor);
      this.iluminarColor(nombreColor);
      if (numeroColor === this.secuencia[this.subnivel]) {
        this.subnivel++;
        if (this.subnivel === this.nivel) {
          this.nivel++;
          this.eliminarEventosClick();
          if (this.nivel === ULTIMO_NIVEL + 1) {
            this.ganoElJuego();
          } else {
            setTimeout(this.siguienteNivel, 1500);
          }
        }
      } else {
        this.perdioElJuego();
      }
    };
    btnEmpezar.classList.toggle("hide");
    this.nivel = 1;
    this.generarSecuencia();
    setTimeout(this.siguienteNivel, 500);
  }

  generarSecuencia() {
    this.secuencia = new Array(ULTIMO_NIVEL)
      .fill(0)
      .map((n) => Math.floor(Math.random() * 4));
  }

  tranformarNumeroAColor(numero) {
    switch (numero) {
      case 0:
        return "celeste";
      case 1:
        return "violeta";
      case 2:
        return "naranja";
      case 3:
        return "verde";
    }
  }

  tranformarColorANumero(color) {
    switch (color) {
      case "celeste":
        return 0;
      case "violeta":
        return 1;
      case "naranja":
        return 2;
      case "verde":
        return 3;
    }
  }

  iluminarSecuencia() {
    for (let i = 0; i < this.nivel; i++) {
      const color = this.tranformarNumeroAColor(this.secuencia[i]);
      setTimeout(() => this.iluminarColor(color), 1000 * i);
    }
  }

  iluminarColor(color) {
    this.colores[color].classList.add("light");
    setTimeout(() => this.apagarColor(color), 350);
  }

  apagarColor(color) {
    this.colores[color].classList.remove("light");
  }

  agregarEventosClick() {
    Object.values(this.colores).forEach((el) => {
      el.addEventListener("click", this.elegirColor);
    });
  }

  eliminarEventosClick() {
    Object.values(this.colores).forEach((el) => {
      el.removeEventListener("click", this.elegirColor);
    });
  }

  ganoElJuego() {
    swal("Simon says", "Felicitaciones, ganaste el juego!", "success").then(() =>
        btnEmpezar.classList.toggle("hide")
    );
  }

  perdioElJuego() {
    swal("Simon says", "Lo lamentamos, perdiste :(", "error").then(() => {
      this.eliminarEventosClick();
      btnEmpezar.classList.toggle("hide")
    });
  }
}

function empezarJuego() {
  window.juego = new Juego();
}
