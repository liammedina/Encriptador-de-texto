let btnEncriptar = document.querySelector('.btnEncriptar');
let textoEncriptar = document.querySelector('.texto');
let aviso = document.querySelector('.h2ColDer');
let imgUff = document.querySelector('.imgRobot');
let respuesta = document.querySelector('.respuesta');
let contenido = document.querySelector('.conteinerColumDer');
let btnCopiar = document.querySelector('.btnCopiar');

btnEncriptar.addEventListener('click', e=> {
    e.preventDefault();
    let texto = textoEncriptar.value;
    let textNorm = texto.normalize('NFD').replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " " );
    
    if(texto == ''){
        aviso.style.color = '#ffb000';
        aviso.textContent = 'Debe incluir un texto para encriptar';
        imgUff.src = './multimedia/robotUff.png';

        setTimeout(()=>{
            aviso.removeAttribute('style');
        },1500);
    }
    else if(texto !== textNorm){
        aviso.style.color = '#ffb000';
        aviso.textContent = 'El texto no debe tener acentos ni caracteres especiales';
        imgUff.src = './multimedia/robotUff.png';

        setTimeout(()=>{
            aviso.removeAttribute('style');
        },1500);
    }
    else if(texto !== texto.toLowerCase()){
        aviso.style.color = '#ffb000';
        aviso.textContent = 'El texto debe ser todo en minúscula';
        imgUff.src = './multimedia/robotUff.png';

        setTimeout(()=>{
            aviso.removeAttribute('style');
        },1500);
    }
    else{
        texto = texto.replace(/e/mg, 'enter');
        texto = texto.replace(/i/mg, 'imes');
        texto = texto.replace(/a/mg, 'ai');
        texto = texto.replace(/o/mg, 'ober');
        texto = texto.replace(/u/mg, 'ufat');

        texto.innerHTML = texto;
        btnCopiar.style.visibility = 'inherit';
        contenido.remove();
        
        respuesta.style.visibility = 'inherit';
        
        

    } 
})
    




//desencriptar()