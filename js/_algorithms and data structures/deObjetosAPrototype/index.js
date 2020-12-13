//1 .- Con objetos individuales
/*
const bobby = {
    nombre:"bobby",
    edad:7,
    ladrar:function(){
        console.log(this.nombre+" ladra y tiene: "+this.edad+" años")
    }
}

bobby.ladrar()

const raffo = {
    nombre:"raffo",
    edad:3,
    ladrar:function(){
        console.log(this.nombre+" ladra y tiene: "+this.edad+" años")
    }
}

raffo.ladrar()
*/

//2.- Haciendo binding de una función a los objetos creados 
//reduce la repetición de codigo y la redeclaración del metodo pero agrega algo de complejidad

/*
const dogMethods = {
    ladrar : function () {
        console.log(this.nombre+" ladra y tiene: "+this.edad+" años")
    }
}

const bobby = {
    nombre:"bobby",
    edad:7
}
bobby.ladrar = dogMethods.ladrar.bind(bobby)
bobby.ladrar()

const raffo = {
    nombre:"raffo",
    edad:3
}
raffo.ladrar = dogMethods.ladrar.bind(raffo)
raffo.ladrar()
*/

// 3- Aislando el código en una funcion que construya los objetos 
//Mas ordenado pero se crea un metodo repetido en cada objeto
/*
function Dog(nombre,edad){
    const dog = {
        nombre:nombre,
        edad:edad
    }
    dog.ladrar = function () {
        console.log(this.nombre+" ladra y tiene: "+this.edad+" años")
    }
    return dog
}

const bobby = Dog("bobby",7)
const raffo = Dog("raffo",3)
bobby.ladrar()
raffo.ladrar()
*/
//4.- Aislando el código en una funcion que construya los objetos, pero evitando repetir la declaración del metodo 
//
/*
const dogMethods = {
    ladrar : function () {
        console.log(this.nombre+" ladra y tiene: "+this.edad+" años")
    }
}

function Dog(nombre,edad){
    const dog = {
        nombre:nombre,
        edad:edad
    }
    dog.ladrar = dogMethods.ladrar
    return dog
}

const bobby = Dog("bobby",7)
const raffo = Dog("raffo",3)
bobby.ladrar()
raffo.ladrar()
console.log(bobby)
*/

//5.- Usando Object.create
//Usando la herencia prototipal en lugar de agregar los metodos al objeto se agregan a su prototipo
//el objeto creado tendra una propiedad __proto__  (standard de facto) que hará referencia a su prototipo dogMethods que tendrá sus metodos.

/*
const dogMethods = {
    ladrar : function () {
        console.log(this.nombre+" ladra y tiene: "+this.edad+" años")
    }
}

function Dog(nombre,edad){
    const dog = Object.create(dogMethods)
    dog.nombre = nombre
    dog.edad = edad
    return dog
}

const bobby = Dog("bobby",7)
const raffo = Dog("raffo",3)
bobby.ladrar()
raffo.ladrar()
console.log(bobby)
console.log(bobby.__proto__)
*/

//6.- Object create y prototype para agregar metodos
//mas ordenado
/*
function Dog(nombre,edad){
    const dog = Object.create(Dog.prototype)
    dog.nombre = nombre
    dog.edad = edad
    return dog
}

Dog.prototype.ladrar = function(){
    console.log(this.nombre+" ladra y tiene: "+this.edad+" años")
}

const bobby = Dog("bobby",7)
const raffo = Dog("raffo",3)
bobby.ladrar()
raffo.ladrar()
console.log(bobby)
console.log(bobby.__proto__)
*/
//7.- New (sugar syntax y reemplazo de Object.create) y this
//ya no hace falta retornar el objeto y se usa this, dentro de la función
function Dog(nombre,edad){
    this.nombre = nombre
    this.edad = edad
}
Dog.prototype.ladrar = function(){
    console.log(this.nombre+" ladra y tiene: "+this.edad+" años")
}

const bobby = new Dog("bobby",7)
const raffo = new Dog("raffo",3)
bobby.ladrar()
raffo.ladrar()
console.log(bobby)
console.log(bobby.__proto__)
