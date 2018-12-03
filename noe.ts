class Animal {
    nom :string;
    couleur :string;
    
    constructor(nom :string, couleur :string) {
        this.nom = nom;
        this.couleur = couleur;
        this.photographier();
        this.nourrir();
    }
    photographier() :void {
        console.log(this.nom + " => C'est dans la boite");
    }
    nourrir() :void {
        if(this.couleur === "noir")
            console.log("mange");
    }
}
class Mammifere extends Animal {
    race :string;
    pattes :number;

    constructor(nom :string, couleur :string, race :string) {
        super(nom, couleur);
        this.race = race;
        this.pattes = 4;
    }
}
class Chat extends Mammifere {
    constructor(nom :string, couleur :string, race :string) {
        super(nom, couleur, race); 
        this.miauler();
    }
   
    miauler() {
        console.log(this.nom + " dit : Rahouuuuuu !");
    }
}
class Chien extends Mammifere {
    constructor(nom :string, couleur :string, race :string) {
        super(nom, couleur, race); 
        this.abboyer();
    }

    abboyer() :void {
        console.log(this.nom + " dit : Waf Waf !");
    }
}
class Poisson extends Animal {
    constructor(nom :string, couleur :string) {
        super(nom, couleur); 
        this.nager();
    }

    nager() :void {
        console.log(this.nom + " fait : Plouf");
    }
}
class Oiseau extends Animal {
    constructor(nom :string, couleur :string) {
        super(nom, couleur); 
        this.voler();
    }

    voler() :void {
        console.log(this.nom + " chante : Cui cui");
    }
}


let grosseBouffe = new Chat("Grosse Bouffe", "noir", "européen");
let grosSac = new Chat("Gros Sac", "roux", "chartreux");
let feiniasse = new Chien("Feiniasse", "noir", "terre-neuve");
let sacAPuces = new Chien("Sac à puces", "marron", "moon moon");
let piaf = new Oiseau("Piaf", "multicolor");
let titi = new Oiseau("Titi", "noir");
let magicarpe = new Poisson("Magicarpe", "gris")
let willy = new Poisson("Willy", "bleu");
let chenipan = new Animal("Chenipan", "vert");
