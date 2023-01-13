//Boutton +

const btnAdd = document.getElementById("btnAdd");
const fieldsetAdd = document.getElementById("fieldsetAdd")
const btnDone = document.getElementById("btnDone");

fieldsetAdd.hidden = true;

let a = 1;
    
btnAdd.onclick = function () {
    if (a == 0) {
        fieldsetAdd.hidden = true;
        a++
    } else if (a != 0) {
        fieldsetAdd.hidden = false;
        a = 0;
    }
}

//fieldset du Boutton +

const titre = document.getElementById("titreInput");
const contenue = document.getElementById("contenueInput");

btnDone.onclick = function () {
    //creation de nouveaux posts
    let titre = document.createElement("h1");
    document.body.appendChild(titre);
    titre.textContent = titreInput.value;
    let contenue = document.createElement("p");
    document.body.appendChild(contenue);
    contenue.textContent = contenueInput.value;

    let titreAnchor = document.createElement("a");
    document.body.appendChild("header");
    titreAnchor.textContent = titre.value;

    //fermeture du fieldset
    if (a == 0) {
        fieldsetAdd.hidden = true;
        a++
    } else if (a != 0) {
        fieldsetAdd.hidden = false;
        a = 0;
    }
}