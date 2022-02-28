// Create a class called pokemon with a constructer that takes in a name, type, and attack
// Create a method for this class that console logs that the pokemon used its attack ex: "Pickachu, used Thunderbolt"
// Instantiate 2 new pokemon then use the attack method for both of them.
// You can upload a zip file of this code or push it to a github repo

class Pokemon {
  //initializing the class
  constructor(name, type, attack) {
    this.name = name;
    this.type = type;
    this.attack = attack;
  }
  //creating method pokemonAttack that will console log a random element from attacks
  pokemonAttack() {
    let attacks = ["thunder", "thunderbolt", "tackle", "quick-attack"];
    let attackSelection = attacks[Math.floor(Math.random() * attacks.length)]; //returns random element from attacks array
    console.log(this.name, "used", attackSelection + "!");
  }
}

//Instantiating new Pokemon
const pickachu = new Pokemon("Pickachu");
const luxray = new Pokemon("Luxray");
const electabuzz = new Pokemon("Electabuzz");

//calling the construtor of class Pokemon
pickachu.pokemonAttack();
luxray.pokemonAttack();
electabuzz.pokemonAttack();
