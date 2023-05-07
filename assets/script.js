//declaration du tableau slides avec en contenu les differentes images et le texte qui s'affiche par dessus//

const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
//selection element image class banner-img //
//chemin des images, slides index 0 pour la premiere image//

const imageBanner = document.querySelector(".banner-img");
imageBanner.src = "assets/images/slideshow/" + slides[0].image;

//AJOUT DES EVENEMENT SUR LES FLECHES //

//selection de l'element//
const arrowRight = document.querySelector(".arrow_right");
const arrowLeft = document.querySelector(".arrow_left");


arrowLeft.addEventListener("click", () => {
	console.log("click gauche");
});

arrowRight.addEventListener("click", () => {
	console.log("click droit");
});


//AJOUT POINTS///

//selection de l'element//

const bullet = document.querySelector(".dots");

let count = 0;



//Boucle nombre de points, +1 ajouter tant que sa valeur est inferieur à la taile du slider//
//creation des div//
//ajouts des div à l'interrieur du parent//
for (let i = 0; i < slides.length; i++) {
	let elements = document.createElement("div");
	elements.classList.add("dot");
	bullet.appendChild(elements);
	//ajout du points rempli//
	if (i == count) elements.classList.add("dot_selected");
}



//changement des images au click//


//variable pour chercher l'element qui gere le texte sur les images//

const text = document.getElementById("banner").querySelector("p");

//click gauche//
//quand la variable count correspond à la taille du slides -1 , on retire -1 à la valeur de la variable count permet un retour en arriere grace au clic//
arrowLeft.addEventListener("click", function () {
	count = count - 1;

	//condition qui permet d'avoir le defilement infini//
	//si count est inferieur a 0 alors on revien a la 3 eme valeur du tableau de slide (donc 4eme image)//
	if (count < 0) {
		count = 3;

	}


	imageBanner.src = "assets/images/slideshow/" + slides[count].image;
	text.innerHTML = slides[count].tagLine;

	//on appelle la fonction qui permet de changer le point rempli en fonction de l'avancement dans le slide//
	changeSelectedDot();
});

//click droit//
//quand count est egale a la longueur du slides + 1 , dernier index du slides , on lui rajoute +1 pour chaque click//

arrowRight.addEventListener("click", function () {
	count = count + 1;
	//condition qui permet d'avoir le defilement infini//
	//si count est superieur ou egale a 4 , alors on revien à la premiere image du tableau de slide//
	if (count >= 4) {
		count = 0;
	}


	imageBanner.src = "assets/images/slideshow/" + slides[count].image;
	text.innerHTML = slides[count].tagLine;

	//appel de la fonction changeSelectedDot //

	changeSelectedDot();
});

//fonction qui permet d'utiliser le point rempli au deroulement du slide//

//declaration d'une variable qui permet de recuperer les div .dot//
//boucle pour indiquer quand retirer ou ajouter le point rempli//
//condition si i est egale au nombre dans le compteur count alors la div .dot prend la class .dot_selected (point rempli)//
function changeSelectedDot() {
	let dotsList = document.querySelectorAll(".dot");

	for (let i = 0; i < dotsList.length; i++) {
		dotsList[i].classList.remove("dot_selected");

		if (i == count) dotsList[i].classList.add("dot_selected");
	}
}

