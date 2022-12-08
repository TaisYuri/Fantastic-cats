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

// verifique se as imagens possuem o atributo alt
const imagens = document.querySelectorAll('img');
imagens.forEach( item => {
    const possuiAtr = item.hasAttribute('alt');
    console.log(possuiAtr)
})


// ---------------------------------------------------------------------
//captura tamanhos
const lista = document.querySelector('.list-animals');

const height = lista.scrollHeight // height + scroll
const height2 = lista.offsetHeight // height + scroll
const left = lista.offsetLeft // distancia da esquerda para inicio

const rect = lista.getBoundingClientRect();  //coordenada com valores de width, height e posição (left, right)

console.log(window.innerWidth)  //tamanho da janela
console.log(window.outerHeight) //soma a barra de endereço
console.log(window.scrollY)  //distancia total do scroll vertical

const small = window.matchMedia('(max-width: 600px)');


// ONLOAD renderiza apenas após o carregamento da pagina [ por padrão o js executa mais rapido do que a montagem da pagina]
window.onload = function(){
  const imagens = document.querySelectorAll('img')
  let somaWidth = 0;
  imagens.forEach( (image) => {
    somaWidth += somaWidth + image.offsetWidth
  })
  console.log('soma', somaWidth)
}

// se o tamanho da pagina for menor que 600px, deve-se adicionar classe "menu-mobile"
const browserSmall = window.matchMedia('(max-width: 600px)').matches  //retorna boolean

if (browserSmall){
  const menu = document.querySelector('.menu');
  menu.classList.add('menu-mobile')
}