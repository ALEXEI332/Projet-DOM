/* fonction de recupération panier

const shoppingcard= JSON.parse(localStorage.getItem("products")) || [];



let btnplusshoppingcard= document.querySelector("#bouton");
btnplusshoppingcard.addEventListener("click",()=> {
    let quantity= document.querySelector(".quantity");

    let isInshoppingcard= false;
    if(isInshoppingcard= true){
    shoppingcard.quantity = + shoppingcard.quantity + quantity;
    localStorage.setItem("products",JSON.stringify(shoppingcard));
    } else {shoppingcard.push(products);
        localStorage.setItem("products",JSON.stringify(shoppingcard)); 
    }    
 }
)*/

// fonctions pour evenements d'ajout,dimunition,suppression et like dans le panier //


var box = document.getElementsByClassName("card");

var Totalprice = document.querySelector(".total");

var garbage = document.getElementsByClassName("garbage")


for (let i = 0; i < box.length; i++) {
    let nombre = box[i].children[1].children[3].children[1];
    let btnplus = box[i].children[1].children[3].children[0];
    let btnmoins = box[i].children[1].children[3].children[2];
    let amount = box[i].children[1].children[2];

    let nobuy = garbage[i].children[0];

    let innerprice = parseInt(amount.innerText);
    let qty = parseInt(nombre.innerText);



    //  fonction d'ajout d'éléments 

    btnplus.addEventListener("click", () => {
        nombre.innerText = ++qty;
        amount.innerText = qty * innerprice + ' $';
        Totalprice.innerText = amount.innerText; 
    })

    // fonction de diminution d'éléments

    btnmoins.addEventListener("click", () => {
        
        if (qty >= 0) {
            Totalprice=0 + " $";
    
            nombre.innerText = --qty;amount.innerText -= qty*innerprice + " $";Totalprice.innerText = amount.innerText;
        }
        if (qty >= 1) {
            amount.innerText = qty * innerprice + ' $';
            Totalprice.innerText += amount.innerText;

        }
    })

    // fonction de suppression d'éléments

    nobuy.addEventListener("click", () => {
        nombre.innerText = 0; amount.innerText = innerprice + " $"; qty = 0;

    })
}

// fonction de "like"

document.querySelectorAll(".fa-heart").forEach((elem) => {

    elem.addEventListener("click", () => {
        elem.style.color = 'blueviolet';
    })
}
)






/**fonction d'ajustement de quantité pour chaque article;
var box=document.getElementsByClassName("card");
for(var i in box){
let btplus= document.querySelectorAll(".fa-plus-circle");
let btmoins=document.querySelectorAll(".fa-minus-circle");
let number=document.querySelectorAll(".quantity");
let qtity=parseInt(number.innerText);
    btplus.addEventListener("click",()=> {
        qtity++;
        number.innerText= qtity;
    })
    btmoins.addEventListener("click",()=>{
    qtity--;
    number.innerText=qtity;
})
}**/
