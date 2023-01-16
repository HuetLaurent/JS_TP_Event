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

let b = 0;
const titre = document.getElementById("titreInput");
const contenue = document.getElementById("contenueInput");

/*const deleteText = (a) => {
    a.onclick = function () {
        const element1 = document.getElementsByClassName(`titre${b}`);
        element1.remove();
        const element2 = document.getElementsByClassName(`contenue${b}`);
        element2.remove();
        const element3 = document.getElementsByClassName(`btnDelete${b}`);
        element3.remove();
    };
}*/

btnDone.onclick = function () {
    //creation de nouveaux posts
    b++;

    let div1 = document.createElement("div");
    document.body.appendChild(div1);
    div1.setAttribute("id",`div${b}`);

    let titre = document.createElement("h1");
    document.getElementById(`div${b}`).appendChild(titre);
    titre.textContent = titreInput.value;
    titre.classList.add(`titre${b}`);

    let a1 = document.createElement("a");
    document.getElementById("navBar").appendChild(a1);
    a1.textContent = titreInput.value;
    a1.href = `#div${b}`;

    let contenue = document.createElement("p");
    document.getElementById(`div${b}`).appendChild(contenue);
    contenue.textContent = contenueInput.value;
    contenue.classList.add(`contenue${b}`);

    let btnDelete = document.createElement("button");
    document.getElementById(`div${b}`).appendChild(btnDelete);
    btnDelete.textContent = "X";
    btnDelete.setAttribute("id",`btnDelete`);

    //navbar

    //fermeture du fieldset
    if (a == 0) {
        fieldsetAdd.hidden = true;
        a++
    } else if (a != 0) {
        fieldsetAdd.hidden = false;
        a = 0;
    }
}