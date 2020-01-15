var bookmark = document.querySelector(".opslaan_verhaal");
var nummertje = document.querySelector("#nummertje_opslaan");

 
function vul(){
  bookmark.innerHTML = '<img alt="opslaan bookmark" src="styles/images/bookmark-blauw.png">';
  nummertje.classList.add('visible');

}

bookmark.addEventListener('click', vul);

//bron:
//https://codepen.io/FED_HERK04/pen/dyPPaYP //https://codepen.io/FED_HERK04/pen/wvBBOqN
//les 4 over javascript