import { bolsa } from './object.js';
import { necessaire } from './object.js';
import { estojo } from './object.js';
import { mala } from './object.js';
import { carteira } from './object.js';
import { termica } from './object.js';
import { mochila } from './object.js';
import { portaBloco } from './object.js';
import { diversos } from './object.js';


import { controlForProducts } from './mockup.js';
import { containerBtnPartProduct } from './mockup.js';
import { btnPartProduct } from './mockup.js';


import { containerBtnColors } from './editColorsMockup.js';
import { btnColor } from './editColorsMockup.js';


//importa a função do mockup
import { showMockup } from './mockup.js'

// Mapeamento de IDs para as listas importadas
const productCategories = {
    bolsa,
    necessaire,
    estojo,
    mala,
    carteira,
    termica,
    mochila,
    portaBloco,
    diversos
};

//referencia as categorias
const domCategory = document.querySelectorAll('.category');

//referencia o container dos produtos
export const containerForMain = document.querySelector('#containerForMain');

//cria um container para os produtos da categoria
const containerMockup =  document.createElement('div');
containerMockup.classList.add('container-mockup');

//cria o card com a imagem do produto
const cardProdduct = document.createElement('div');
cardProdduct.classList = 'list-products';

//referencia o container das informações dos produtos
const containerDetailsForProduct = document.querySelector('#containerDetailsForProduct');

//cria o título do produto
const titleProduct = document.createElement('h2');
titleProduct.classList.add('title-product')

//cria as medidas do produto
const measuresProdcut = document.createElement('p');
measuresProdcut.classList.add('measures-prodcut')

//cria as informações do produto
const infoProdcut = document.createElement('p');
infoProdcut.classList.add('info-producut');

//cria botão para editar
const btnOpenMockup = document.createElement('button');
btnOpenMockup.textContent = 'Ediatar produto'
btnOpenMockup.classList.add('btn-open-mockup');


let btnCategory = '';

export function showProductCategory (id) {
    // Verifica se o ID passado existe no mapeamento
    if (id in productCategories) {
        // Acessa a lista de produtos com base no ID
        const productList = productCategories[id];

        //armazena a quantidade de filhos do productlist
        const quantidadeFilhos = cardProdduct.childElementCount;
    
        // compara a quantidade de filhos do cardProduct com productList
        if (quantidadeFilhos >= productList.length) {
            console.log('iniciou')

            //category
            cardProdduct.innerHTML = '';
            containerMockup.innerHTML = '';
            containerDetailsForProduct.innerHTML = '';
            containerForMain.innerHTML = '';

            //mockup

            containerBtnPartProduct.innerHTML = '';
            controlForProducts.innerHTML = '';
            console.log(btnPartProduct)
            console.log(controlForProducts)

            //edutColorsMockup
            containerBtnColors.innerHTML = '';

        }else{
            
            for(let i = 0; i < productList.length; i++){
    
                //cria a img do prododuto
                const cardImg = document.createElement('img');
                cardImg.classList.add('list-product-img');
                cardImg.id = productList[i].nome
                cardImg.src = productList[i].card
            
                //if ()

                //inclui a imagem no card
                cardProdduct.appendChild(cardImg);
            
                //inclui o card no containerMockup
                containerMockup.appendChild(cardProdduct);

                //inclui o container mockup no containerForMain
                containerForMain.appendChild(containerMockup);

                //cria o título, medidas, descrição e e btn para abrir mockup
                cardImg.addEventListener('click' , () => {

                    titleProduct.textContent = cardImg.id;
                    measuresProdcut.textContent = productList[i].medidas;
                    infoProdcut.textContent = productList[i].info

                    containerDetailsForProduct.appendChild(titleProduct);
                    containerDetailsForProduct.appendChild(measuresProdcut);
                    containerDetailsForProduct.appendChild(infoProdcut);
                    containerDetailsForProduct.appendChild(btnOpenMockup);

                    //adiciona um ouvinte de click e passa o id do respectivo mockup
                    btnOpenMockup.addEventListener ('click' , () => {

                        showMockup(
                            productList[i].ajuste,
                            productList[i].corpo,
                            productList[i].bolso,
                            productList[i].alca,
                            productList[i].ziper,
                            productList[i].vivo,
                            productList[i].tampa,
                            productList[i].debrum,
                            productList[i].base,
                        );
                    })
                });
            }
        }
    }
}

// itera sobre os botões de categoria e adiciona um ouvinte de click para a função ShowProdctCategory
for (let i = 0; i < domCategory.length; i++) {

    btnCategory = domCategory[i]
    btnCategory.addEventListener('click' , function () {
        //captura o id do elemento da vez no laço
        let capturaId = this.id;
        showProductCategory(capturaId)
    })
}


