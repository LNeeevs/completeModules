//class
class Animal{
    constructor(kind,sound){
        this.kind = kind;
        this.sound = sound;
    }
    testAnimal(answer){
        this.test_animal = answer;
        (this.test_animal) ? alert(`You find the animal >> ${this.kind}`) : alert(`You don't find any animals here like ${this.test_animal}`);
    }
}

class SuperAnimals{
    constructor(...values){
        this.values = values.map(values => values);
    }
    getAnimals(){
        console.log(`${this.values}`);
    }
    searchAnimal(inputResult){
        for(let y=0; y<this.values.length; y++){
            (this.values[y] == inputResult) ? console.log(`You find the secret animal! >> ${this.values[y]}`) : false
        }
    }
}

const giraffa = new Animal('Giraffa','Fuin');
const rhino = new Animal('Rhinoceront','Tchenhen');
const turkey = new Animal('Turkey','Gluglu');

const animais = new SuperAnimals('Bird','Cat','Dog','Fish');
animais.getAnimals();

animais.searchAnimal(prompt('Animal:'));

//try and catch
const retornando = async () => {
    try{
        let a = await fetch('https://willianjusten.com.br/search.json');
        let b = await a.json();
        let c = await b.map(b => b);

        console.log(c);
    }
    catch(errorMsg){
        console.error(errorMsg);
    }
}

//promise
const promised = new Promise((resolve,reject) => {
    (true) ? resolve(10*100) : reject(10/100);
});

promised 
    .then((data) => console.log(data))
    .catch((erro) => console.log(erro))


//importando
const Thing = require('ramda');

let arr1 = ['Hello '];
let arr2 = ['World'];

let arr3 = Thing.concat(arr1,arr2);
console.log(arr3);

//criando elemento na tela
window.onload = () => {
    const telaPrincipal = document.querySelector('#app');
    const displayPrincipal = document.createElement('div');
    displayPrincipal.setAttribute('class','container-fluid');
    displayPrincipal.setAttribute('style','padding:300px 0px;background-color:#d4d4d4');
    telaPrincipal.appendChild(displayPrincipal);
}

console.log('Worms')