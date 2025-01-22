// const nom_sorcier = prompt("Comment te nommes-tu, sorcier ? 🧙‍♂️");
// console.log("Le sorcier se nomme :" + nom_sorcier + " ! 🎉");

const store_name = "Boutique des sorciers";
let potion_stock = 13;
let sage_potion = 4;

const store = true;
if (!store){
    console.log("La "+ store_name +" est fermée, revenez plus tard Aventurier ! 😴")
}
else {
    console.log("Bienvenue dans la"+ store_name +" Aventurier ! 🎉");
    
    
}

if (store === true){
    console.log("Bienvenue dans mon humble boutique Aventurier. Que veux-tu savoir ? 🤔");
    console.log("- 1. Le nom de la boutique");
    console.log("- 2. Le nom du Sorcier");
    console.log("- 3. Le prix d'un potion de soin");
    console.log("- 4. La quantité d'une potion de soin");
    let choice = prompt("Choisir une réponse : 1, 2, 3 ou 4 ? ")
}
