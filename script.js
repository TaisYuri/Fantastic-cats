function handleEvent(event) {
  if (event.key === "a") {
    document.body.classList.add("azul"); //adiciona classe AZUL ao clicar na tecla A do teclado
  }
  if (event.key === "f") {
    document.body.classList.remove("azul");
  }
  if (event.key === "t") {
    document.documentElement.classList.toggle("textoMaior"); //adiciona ou remove classe que aumenta a letra em todo o site.
  }
}

window.addEventListener("keydown", handleEvent);

// -------------------------------------------
const linksInternos = document.querySelectorAll('a[href^="#"]');

function handleClickLinks(event) {
  linksInternos.forEach((link) => {
    link.classList.remove("ativo"); //remove classe de todos os links
  });
  event.currentTarget.classList.add("ativo"); //adiciona classe apenas no selecionado.
}

linksInternos.forEach((links) => {
  links.addEventListener("click", handleClickLinks);
});

//--------------- NAVEGAÇÃO PELO CLICK NAS IMAGENS.
function initTabNav() {
  const tabmenu = document.querySelectorAll(".js-tabmenu li");
  const tabcontent = document.querySelectorAll(".js-tabcontent section");

  if (tabmenu.length && tabcontent.length) {
    tabcontent[0].classList.add("active");
    function activeTab(index) {
      tabcontent.forEach((section) => {
        section.classList.remove("active");
      });

      tabcontent[index].classList.add("active");
    }

    tabmenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => activeTab(index));
    });
  }
}

initTabNav();

//--------------- ACCORDION FAQ
function initAccordion(){
  const accordionList = document.querySelectorAll('.js-accordion dt');

  function activeAccordion(){
    this.classList.toggle('active')
    this.nextElementSibling.classList.toggle('active')
  }

  accordionList.forEach( item => {
    item.addEventListener('click', activeAccordion)
  })
}
initAccordion();