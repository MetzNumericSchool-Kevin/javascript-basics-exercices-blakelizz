// const nom_sorcier = prompt("Comment te nommes-tu, sorcier ? 🧙‍♂️");
// console.log("Le sorcier se nomme :" + nom_sorcier + " ! 🎉");

/*----  Définition de variables*/

const store_name = "La boutique des sorciers";
let sage_pot_stock = 13;
let sage_potion = 4;

const store = true;

/* ----  Affichage conditionnel */

if (!store){
    console.log(store_name +" est fermée, revenez plus tard Aventurier ! 😴")
}
else {
    console.log("Bienvenue dans "+ store_name +" Aventurier ! 🎉");
}

/*----  Affichage conditionnel avec switch*/

console.log("Bienvenue dans mon humble boutique Aventurier. Que veux-tu savoir ? 🤔");
console.log("- 1. Le nom de la boutique");
console.log("- 2. Le nom du Sorcier");
console.log("- 3. Le prix d'une potion de soin");
console.log("- 4. La quantité d'une potion de soin");

// let choice = prompt("Choisir une réponse : 1, 2, 3 ou 4 ? ");

// switch (choice) {
//     case '1' :
//         console.log("Le nom de la boutique est : La boutique des sorciers ");
//         break;
//     case '2' :
//         console.log("Ton nom est : " + nom_sorcier);
//         break;
//     case '3' :
//         console.log("Une potion de soin coûte :" + sage_potion);
//         break;
//     case'4' :
//         console.log("Le stock d'une potion de soin est : " + sage_pot_stock);
//         break;
//     default: 
//         console.log("Désolé, la valeur entrée n'est pas prise en compte")
// }

/*----  Calcul du prix total d'une commande de potion*/

let quantite = prompt("Entrer une quantité de potion de soin : ")
let quantite_calcule = sage_potion * quantite

console.log("Prix de "+ quantite +" potions de soins : " + quantite_calcule + " 🪙 mon cher Aventurier. 💸`")

/*---   Bourse de l'Aventurier 💰*/

let player_coin = 20;

if (player_coin >= quantite_calcule) {
    console.log("Achat réussi ! Tu as acheté " + quantite +" de potion ");
    player_coin_solde = player_coin - quantite_calcule;
    sage_pot_stock_solde = sage_pot_stock - quantite;
}

else{
    console.log("Achat refusé ! Tu n'as pas assez d'argent. Reviens quand tu auras l'argent !");
}

console.log("Ton solde est de : " + player_coin_solde + " 🪙 ");
console.log("Le stock de potion est de : " + sage_pot_stock_solde);

/*---  Liste des potions*/

let pot_liste = [" Soin", " Bouclier", " Réanimation"];

console.log("Liste des potions  : " + pot_liste)

/*---  Affichage des potions*/

console.log(pot_liste[0]);
/*Afficher la dernière potion*/

pot_liste.forEach(function(liste_potion){
    console.log(liste_potion);
});

/*---   Ajout d'une nouvelle potion*/

pot_liste.push("Endurance");
console.log(pot_liste);

/*---   Finaly, nope.*/

pot_liste.pop()
console.log(pot_liste);

/*---  Rangeons les informations de la potion de soin dans un objet 🧹*/

const sage = {
    name:"Sage" ,
    price: sage_potion,
    stock: sage_pot_stock_solde,
};

const shield = {
    name:"Bouclier" ,
    price: 5,
    stock: 5,
};

const rea = {
    name:"Réanimation" ,
    price: 10,
    stock: 11,
};

console.log(sage);

/*---  Affichons les informations de la potion*/

console.log(sage.name);

console.log(sage['price']);

/*---   C'est l'heure de faire l'inventaire...*/

const inventaire ={
    sage: {
        name: "Sage",
        price: sage_potion,
        stock: sage_pot_stock_solde
    }
};

console.log(inventaire);

/*---  Aventurier, regarde tout ce que je vends !*/

for (const i in inventaire) {
    console.log(`${i} : ${inventaire[i]}`);
}