const grid = document.getElementsByClassName("grid-section");
console.log(grid);

const linkInterno = document.querySelector('[href^="#"]');
console.log(linkInterno);

const imgAnimais = document.querySelectorAll(".list-animals img");
console.log(imgAnimais);

const gridSectionHTML = document.getElementsByClassName("grid-section");
const gridSectionNode = document.querySelectorAll(".grid-section"); //retorna com node que possui muito mais função.

console.log(gridSectionHTML);
console.log(gridSectionNode);

//seleciona todas as imagens que começam com a palavra imagem
const imagem = document.querySelectorAll('img[src^="assets/imagem"]');
console.log(imagem);

//seleciona ultimo p do site
const paragrafos = document.querySelectorAll("p");
console.log(paragrafos[--paragrafos.length]);

//forEach
imgAnimais.forEach(function (item, index, array) {
  console.log(item);
});

// retorna a informação dos Titulos
const titulos = document.getElementsByClassName("title");
const titulosArray = Array.from(titulos);

titulosArray.forEach((item) => console.log(item.innerText));


//trabalhando com classes
const menu = document.querySelector('.menu');

menu.classList; // lista de classes
menu.classList.add('ativo', 'mobile'); // duas classes
menu.classList.remove('ativo');
menu.classList.toggle('ativo'); // adiciona/remove a classe
menu.classList.replace('ativo', 'inativo');

if(menu.classList.contains('ativo')){ //retorna boolean se contem a classe passada
    menu.classList.add('azul');
}