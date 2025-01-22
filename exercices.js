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
    player_coin_solde = player_coin - quantite_calcule
    console.log("Ton solde est de : " + player_coin_solde + " 🪙 ")
}
else{
    console.log("Achat refusé ! Tu n'as pas assez d'argent. Reviens quand tu auras l'argent !")
}
