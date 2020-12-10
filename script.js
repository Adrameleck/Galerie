console.log("JAVASCRIPT LOADED");


var listeImages = document.getElementById("images");
for(let i = 0; i < 5 ; i++){
    var image1 = document.createElement("img");
    image1.setAttribute("class", "image");
    image1.setAttribute("src", 'D:\\Guillaume\\Travail Ynov\\M2\\Web_Mobile\\exo1\\resources\\0.jpg');
    listeImages.append(image1);
}
