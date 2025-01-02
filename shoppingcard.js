
// fonctions pour evenements d'ajout,dimunition,suppression et like dans le panier //


var box = document.getElementsByClassName("card");

var garbage = document.getElementsByClassName("garbage");


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
        qty++;
        nombre.innerText = qty;
        amount.innerText = qty * innerprice + ' $';

    }

    )

    // fonction de diminution d'éléments

    btnmoins.addEventListener("click", () => {

        if (qty > 0) {
            qty--;
            nombre.innerText = qty;
        }
        if (qty >= 1) {
            amount.innerText = innerprice + " $";
            amount.innerText = qty * innerprice + " $";


        }
    })

    // fonction de suppression d'éléments

    nobuy.addEventListener("click", () => {
        nombre.innerText = 0; amount.innerText = innerprice + " $"; qty = 0;

    })
}

// fonction de "like" et "dislike"

document.querySelectorAll(".fa-heart").forEach((elem) => {

    elem.addEventListener("click", () => {
        if (elem.style.color == 'black') {
            elem.style.color = 'blueviolet';
        } else {
            elem.style.color = 'black';
        }
    })
})


// Prix total panier

var price = document.querySelectorAll(".unit-price");
var qtity = document.querySelectorAll(".quantity");


let plusAll = document.querySelectorAll(".fa-plus-circle");
let minusAll = document.querySelectorAll(".fa-minus-circle");

plusAll.forEach((plus) => { plus.addEventListener("click", totalPrice) });
minusAll.forEach((minus) => { minus.addEventListener("click", totalPrice) });

function totalPrice() {
    let total = 0;
    price.forEach((elem) => {
        let unitprice = parseInt(elem.innerText);
        if (elem.nextElementSibling.firstElementChild.nextElementSibling.innerText >= 1) {
            total += unitprice;
            document.querySelector(".total").innerText = total + " $";
        }
    });
}


function priceTotal() {
    let total=0;
    price.forEach((elt)=>{
        let uprice= parseInt(elt.innerText);
        if(elt.nextElementSibling.firstElementChild.nextElementSibling.innerText=0){
            total+;
            document.querySelector(".total").innerText= 0 + " $";
        }else{
            total+=uprice;
            document.querySelector(".toatl").innerText= total + " $";
        }
    })

}













