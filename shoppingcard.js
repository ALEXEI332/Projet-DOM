
// fonctions pour evenements d'ajout,dimunition,suppression et like dans le panier //


var box = document.getElementsByClassName("card");

for (let i = 0; i < box.length; i++) {
    let nombre = box[i].children[1].children[3].children[1];
    let btnplus = box[i].children[1].children[3].children[0];
    let btnmoins = box[i].children[1].children[3].children[2];
    let amount = box[i].children[1].children[2];



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

    document.querySelectorAll(".fa-trash-alt").forEach((elem) => {
        let uprix = parseInt(elem.parentElement.previousElementSibling.previousElementSibling.innerText);
        qty = elem.parentElement.previousElementSibling.firstElementChild.nextElementSibling.innerText;

        elem.addEventListener("click", () => {
            elem.parentElement.previousElementSibling.firstElementChild.nextElementSibling.innerText = 0;
            elem.parentElement.previousElementSibling.previousElementSibling.innerText = uprix + " $";
            qty = 0; totalPrice(elem);
        })
    })

    // fonction de "like" et "dislike"

    document.querySelectorAll(".fa-heart").forEach((elem) => {
        elem.style.color = 'black';
        elem.addEventListener("click", () => {
            if (elem.style.color == 'black') {
                elem.style.color = 'blueviolet';
            } else {
                elem.style.color = 'black';
            }
        });
    });
}


// Prix total panier

var price = document.querySelectorAll(".unit-price");


let plusAll = document.querySelectorAll(".fa-plus-circle");
let minusAll = document.querySelectorAll(".fa-minus-circle");

plusAll.forEach((plus) => { plus.addEventListener("click", totalPrice) });
minusAll.forEach((minus) => { minus.addEventListener("click", totalPrice) });

function totalPrice() {
    let total = 0;
    price.forEach((elem) => {
        let qt = elem.nextElementSibling.firstElementChild.nextElementSibling.innerText;
        if (qt == 0) {
            document.querySelector(".total").innerText = total + " $";
        }
        if (qt >= 1) {
            elem.nextElementSibling.nextElementSibling.firstElementChild.addEventListener("click", () => {
                document.querySelector(".total").innerText = total - (qt * parseInt(elem.innerText)) + " $";
            })
        }
        let unitprice = parseInt(elem.innerText);
        if (qt >= 1) {
            total += unitprice;
            document.querySelector(".total").innerText = total + " $";

        }
    })
}
















