paragraphs = document.getElementsByTagName('a');

var confiaveis = ['.globo.','.estadao.','glo.bo','.e-farsas.','.jusbrasil.','folha.','.sensacionalista.', '.ceticismopolitico.', '.correiodopoder.', 
					'.criticapolitica.', '.diariodobrasil.', '.folhadopovo.', '.folhapolitica.','.gazetasocial.', '.implicante.', '.jornalivre.', 
					'.pensabrasil.', '.wikipedia.','.oantagonista.']
var naoconfiaveis = ['.oantagonista.','.sensacionalista.','.fake.','.ceticismopolitico.','.correiodopoder.','.criticapolitica.','.globo.', 
						'.estadao.', '.folha.uol.', '.gazetadopovo.', '.uol.', '.veja.abril.', '.r7.', '.exame.abril.', '.edition.cnn.', 
						'.epoca.globo.', '.terra.', '.band.uol.']
var i=0
var j=0
var conflen = confiaveis.length;
var unconflen = naoconfiaveis.length;

setInterval(oneSecondFunction, 1000);
	
	
function oneSecondFunction() {
        
    var arr = [], l = document.links;

    for(var i=0; i<l.length; i++) {
        arr.push(l[i].href);
    
        //l[i].style['background-color'] = '#FF00FF';
    }
    var k=0;
    for (k=0;k<arr.length; k++){
        for (i =0 ; i<conflen;i++){ 
              if (arr[k].indexOf(confiaveis[i]) !== -1){
                  l[k].style['background-color'] = 'rgba(0,255,0,0.5)';
              }
         }
         i=0
         for (i =0 ; i<unconflen;i++){
             if (arr[k].indexOf(naoconfiaveis[i]) !== -1){
                 l[k].style['background-color'] = 'rgba(255,0,0,0.5)';

              }
         }
     }
}
