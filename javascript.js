var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
var img3 = document.getElementById("img3");
var img4 = document.getElementById("img4");
var img5 = document.getElementById("img5");
const img = [img1, img2, img3, img4, img5];
var icon1 = document.getElementById("icon1");
var icon2 = document.getElementById("icon2");
var icon3 = document.getElementById("icon3");
var icon4 = document.getElementById("icon4");
var icon5 = document.getElementById("icon5");
const icon = [icon1, icon2, icon3, icon4, icon5];
var imgres = document.getElementById("imgres");
var namares = document.getElementById("namares");
var iconres = document.getElementById("iconres");
var nama = ["Julio Cancarito Mintarogo", "Joseph Bagas P", "Karendhika Argiansyah", "Kindi Alfitrandy", "Mareta Fauziah"];
var imgslid = ["img1.JPG", "img2.JPG", "img3.JPG", "img4.JPG", "img5.JPG"];

function nextSlide() {
    if (count != 4) {
        img[count].style.border = "rgb(150,150,150) 10px solid";
        img[count].style.width = "0px";
        img[count].style.opacity = 0.8;
        icon[count].style.width = "20px";
        img[count+1].style.border = "rgb(252, 188, 60) 10px solid";
        img[count+1].style.width = "150px";
        img[count+1].style.opacity = 1;
        icon[count+1].style.width = "170px";
        document.querySelector("#icon"+countp+" h3").style.display = "none";
        document.querySelector("#icon"+countp+" p").style.display = "none";
        document.querySelector("#icon"+countpul+" h3").style.display = "inline-block";
        document.querySelector("#icon"+countpul+" p").style.display = "inline-block";
        if (count != 3) {
            img[count+2].style.border = "rgb(150,150,150) 10px solid";
            img[count+2].style.opacity = 0.8;
        }
        if (count != 0) {
            img[count-1].style.border = "rgb(202, 202, 202) 10px solid";
            img[count-1].style.opacity = 0.5;
        }
        count = count + 1;
        countp = countp + 1;
        countpul = countpul + 1;
    }
}

function prevSlide() {
    if (count != 0) {
        img[count].style.border = "rgb(150,150,150) 10px solid";
        img[count].style.width = "0px";
        img[count].style.opacity = 0.8;
        icon[count].style.width = "20px";
        img[count-1].style.border = "rgb(252, 188, 60) 10px solid";
        img[count-1].style.width = "150px";
        img[count-1].style.opacity = 1;
        icon[count-1].style.width = "170px";
        document.querySelector("#icon"+countp+" h3").style.display = "none";
        document.querySelector("#icon"+countp+" p").style.display = "none";
        document.querySelector("#icon"+count+" h3").style.display = "inline-block";
        document.querySelector("#icon"+count+" p").style.display = "inline-block";
        if (count != 1) {
            img[count-2].style.border = "rgb(150,150,150) 10px solid";
            img[count-2].style.opacity = 0.8;
        }
        if (count != 4) {
            img[count+1].style.border = "rgb(202, 202, 202) 10px solid";
            img[count+1].style.opacity = 0.5;
        }
        count = count - 1;
        countp = countp - 1;
        countpul = countpul - 1;
    }

}

function Slideres() {
	var i = Math.abs(countres % 5);
    imgres.style.backgroundImage = "url(res/"+imgslid[i];
    namares.innerText = nama[i];
}

function nav() {
    if (navc == 0) {
        document.querySelector(".header-list").style.display = "block";
        navc = 1
    } else if (y.matches) {
        document.querySelector(".header-list").style.display = "none";
        navc = 0
    } else {

    }
}

function restore() {
    if (x.matches) {
        document.querySelector(".header-list").style.display = "block";
    }
}

var x = window.matchMedia("(min-width: 1000px)");
var y = window.matchMedia("(max-width: 1000px)");
window.addEventListener("resize", restore);