var i = 0;
var j = 0;
var res = "";

function jeux_result() {
    var elem = document.getElementById("nbr").value;
    var rand = Math.floor(Math.random() * 10);
    if (rand >= elem) {
        res = "Vous avez perdu";
    } else {
        res = "Vous avez gagné";
    }
    if (res == "Vous avez perdu") {
        j += 1;

    } else if (res == "Vous avez gagné") {
        i += 1;
    }
    document.getElementById("result").innerHTML = "the result : " + res;
    document.getElementById("num").innerHTML = "random Number = " + rand;
    document.getElementById("mon_scors").innerHTML = "my score = " + i;
    document.getElementById("ordi_scors").innerHTML = "computer score = " + j;

}

var my_sum = 0;
var cmp_sum = 0;


function jeux_somme() {

    var my_nb = Math.floor(Math.random() * 12);
    var cmp_nb = Math.floor(Math.random() * 12);

    my_sum = my_sum + my_nb;
    cmp_sum = cmp_sum + cmp_nb;

    if (my_sum < 21) {
        if (my_sum > cmp_sum) {
            res = "Vous avez gagné";
        } else if (my_sum < cmp_sum && cmp_sum < 21) {
            res = "Vous avez perdu";
        } else if (my_sum < cmp_sum && cmp_sum > 21) {
            res = "Vous avez gagné";
        }

    } else {
        res = "Vous avez perdu";
    }
    
    function aff() {
        var div = document.getElementById("ordi_som");
        if (div.style.display === "none") {
            div.style.display = "block";

        } 
    }
    document.getElementById("mon_num").innerHTML = "my nbr = " + my_nb;
    document.getElementById("ordi_num").innerHTML = "cmp nbr = " + cmp_nb;
    document.getElementById("ma_som").innerHTML = "my sum = " + my_sum;
    document.getElementById("ordi_som").innerHTML = "cmp sum = " + cmp_sum;
    document.getElementById("ordi_som").innerHTML = "cmp sum = " + cmp_sum;
    document.getElementById("resultat").innerHTML = "resultat = " + res;


}
