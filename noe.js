var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(nom, couleur) {
        this.nom = nom;
        this.couleur = couleur;
        this.photographier();
        this.nourrir();
    }
    Animal.prototype.photographier = function () {
        console.log(this.nom + " => C'est dans la boite");
    };
    Animal.prototype.nourrir = function () {
        if (this.couleur === "noir")
            console.log("mange");
    };
    return Animal;
}());
var Mammifere = /** @class */ (function (_super) {
    __extends(Mammifere, _super);
    function Mammifere(nom, couleur, race) {
        var _this = _super.call(this, nom, couleur) || this;
        _this.race = race;
        _this.pattes = 4;
        return _this;
    }
    return Mammifere;
}(Animal));
var Chat = /** @class */ (function (_super) {
    __extends(Chat, _super);
    function Chat(nom, couleur, race) {
        var _this = _super.call(this, nom, couleur, race) || this;
        _this.miauler();
        return _this;
    }
    Chat.prototype.miauler = function () {
        console.log(this.nom + " dit : Rahouuuuuu !");
    };
    return Chat;
}(Mammifere));
var Chien = /** @class */ (function (_super) {
    __extends(Chien, _super);
    function Chien(nom, couleur, race) {
        var _this = _super.call(this, nom, couleur, race) || this;
        _this.abboyer();
        return _this;
    }
    Chien.prototype.abboyer = function () {
        console.log(this.nom + " dit : Waf Waf !");
    };
    return Chien;
}(Mammifere));
var Poisson = /** @class */ (function (_super) {
    __extends(Poisson, _super);
    function Poisson(nom, couleur) {
        var _this = _super.call(this, nom, couleur) || this;
        _this.nager();
        return _this;
    }
    Poisson.prototype.nager = function () {
        console.log(this.nom + " fait : Plouf");
    };
    return Poisson;
}(Animal));
var Oiseau = /** @class */ (function (_super) {
    __extends(Oiseau, _super);
    function Oiseau(nom, couleur) {
        var _this = _super.call(this, nom, couleur) || this;
        _this.voler();
        return _this;
    }
    Oiseau.prototype.voler = function () {
        console.log(this.nom + " chante : Cui cui");
    };
    return Oiseau;
}(Animal));
var grosseBouffe = new Chat("Grosse Bouffe", "noir", "européen");
var grosSac = new Chat("Gros Sac", "roux", "chartreux");
var feiniasse = new Chien("Feiniasse", "noir", "terre-neuve");
var sacAPuces = new Chien("Sac à puces", "marron", "moon moon");
var piaf = new Oiseau("Piaf", "multicolor");
var titi = new Oiseau("Titi", "noir");
var magicarpe = new Poisson("Magicarpe", "gris");
var willy = new Poisson("Willy", "bleu");
var chenipan = new Animal("Chenipan", "vert");
