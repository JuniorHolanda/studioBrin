
//importa o container dos produtos
import { containerForMain } from "./category.js";
import { createBtnColor } from "./editColorsMockup.js";

//cria o container para as imagens do mockup
const containerMockup = document.createElement('div');
containerMockup.classList.add('container-mockup' , 'container-btn-product-part');

//referencia o container para os botões de controle
export const controlForProducts = document.querySelector('#controlForProducts');

//cria o container para os botões de edição do corpo
export const containerBtnPartProduct = document.createElement('div');
containerBtnPartProduct.classList.add('btn-party-edit');

//cria uma variavel do tipo null para ser modificada na iteração futura
export let btnPartProduct = '';

//passa dinâmicamente os caminhos das imagens para as partes do produto e mostra no containerMain
export function showMockup (ajuste , corpo , bolso , alca , ziper , vivo , tampa , debrum , base) {

    // adiciona todos os parâmetros, inclusive os vazios recebidos numa lista com as partes dos produtos
    const listMockupPart = [ ajuste , corpo , bolso , alca , ziper , vivo , tampa , debrum , base ];
    
    // verifica se o container principal possui algum filho, a condição sempre será verdadeira
    if (containerForMain.childElementCount > 0) {
            //limpa o container para adicionar os novos elementos
            containerForMain.innerHTML = '';
            console.log('teste de execução')
    }

    if (btnPartProduct !== '')
        {
            btnPartProduct = ''
            containerBtnPartProduct.innerHTML = '';
            controlForProducts.innerHTML = '';
        }
    
        for (let i = 0; i < listMockupPart.length ; i++) {


            //verifica se o listMockup é diferente de vazio(FILTRA OS QUE POSSUEM VALORES) e se controlForProduct está vazio
            if (listMockupPart[i] !== '') {
                
                const imgMockup = document.createElement('img');//cria um elemento do tipo img para receber a imagem passada pela lista
                imgMockup.src = listMockupPart[i];//informa um caminho para a imagem recebido da lista
                imgMockup.classList.add('img-mockup');// adiciona uma classe ao elemento imagem
                containerMockup.appendChild(imgMockup);//adiciona a imagem como filho do container mockup
                containerForMain.appendChild(containerMockup);// adiciona o container mockup como filho do container principal
                
                // CHAT GPT - Extrai apenas o nome da parte do produto do caminho do arquivo 
                const fileName = listMockupPart[i].split('/').pop().split('.')[0];
                
                //verifica se o listMockup é diferente de ajuste (BARRA O  QUE POSSUE COMO VALOR, AJUSTE) 
                if( listMockupPart[i] !== ajuste && controlForProducts.childElementCount == 0){
                    
                    btnPartProduct = document.createElement('button');// muda o valor de btnProduct de null para um botão
                    btnPartProduct.classList.add('btn-party')// adiciona classe ao botão
                    btnPartProduct.textContent = fileName; // adiciona o nome do botão com a parte extraída e adicionada ao fileName, nome da parte do produto
                    containerBtnPartProduct.appendChild(btnPartProduct)// adiciona o botão ao container de botões de partes do produto
                    btnPartProduct.addEventListener('click' , () => createBtnColor (fileName)); //adiciona um ouvinte ao botão que chama a função que cria os botões de cores com o argumento o nome da parte
                } // fecha o if
            } // fecha o if
        } // fecha o for
        controlForProducts.appendChild(containerBtnPartProduct); // adiciona o container de botões container de controle do produto
    }//fecha função