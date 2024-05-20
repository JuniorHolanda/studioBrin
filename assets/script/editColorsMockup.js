import { controlForProducts } from "./mockup.js";

export let btnColor = '';

const listBtnColor = ['vermelho' , 'royal' , 'amarelo' , 'roxo' , 'preto']; 
export const containerBtnColors = document.createElement('div');
containerBtnColors.classList.add('container-btn-colors')

export function createBtnColor (imagem) {
    const listImgPart = document.querySelectorAll('.img-mockup');

    // iteração sobre a lista com as partes do produto
    function changeColorPartProduct (color) {
        //itera sobre a lista com partes do produto, captura seu .src em uma variável e compara se dentro dele está incluso o imagem
        for (let i = 0; i < listImgPart.length; i++){
            const nameProduct = listImgPart[i].src // atribui a nameProduct o .src de cada item do listImgParty
            
            // verifica se dentro do nameProduct tem o nome do produto passado como parâmetro
            if (nameProduct.includes(imagem)){
                listImgPart[i].classList.add(`color-part-${color}`)
            } // fim do if
        } // fim do for
    } //fim da função changeColorPartProduct


    if (btnColor !== '') {
        btnColor.innerHTML = '';
        containerBtnColors.innerHTML = ''
        console.log(btnColor)
        console.log('esvaziou o btnColor')
    }

    // itera sobre o listBtnColor e cria os botões de cores
    for (let i = 0; i < listBtnColor.length; i++){
        btnColor = document.createElement('button');
        btnColor.textContent = listBtnColor[i];
        btnColor.classList.add(`btn-color-${listBtnColor[i]}` , 'btn-color');
        containerBtnColors.appendChild(btnColor);
        btnColor.addEventListener('click' , () => changeColorPartProduct (listBtnColor[i]));
    }

    controlForProducts.appendChild(containerBtnColors);
}

