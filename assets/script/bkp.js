
// botões principais
const listaBtnMain = document.querySelectorAll('.btnPrincipais')

// referencia o container pai dos dois tipos de botões, principal e secundários
const containerPaiDosBotoes = document.querySelector('#controlePrincipal');

const corpo = document.querySelector('#parteProdutoCorpo')
const detalhe = document.querySelector('#parteProdutoDetalhes')
const tampa = document.querySelector('#parteProdutoTampa')

const objetoNecEv = {
    bolso: 'assets/img/nec-ev-bolso/corpo.png',
    corpo: 'assets/img/nec-ev-bolso/bolso.png',
    ziper: 'assets/img/nec-ev-bolso/ziper.png',
    sombra: 'assets/img/nec-ev-bolso/sombra.png'
}


//----------------------- Cria os botões de cores e atribuem classe -----------------------------

const nomeDasCores = [ 'azul' , 'vermelho' , 'preto' ];
let btnModal = null;
let listaDeBotoes = [];

let modalBtnSecundario = null;
//função recebe como argumento o id da lista listaBtnMain 
function mostraBotao (id) {
    if (modalBtnSecundario){
        modalBtnSecundario.remove();
        modalBtnSecundario = null;
        

    } else {
        modalBtnSecundario = document.createElement('div');
        modalBtnSecundario.classList.add('containerModalBtnSecundario');
        containerPaiDosBotoes.appendChild(modalBtnSecundario);

        function mudacor (idDoElemento) {
            if (id === 'btnCorpo'){
                corpo.classList.add(idDoElemento)
            } else if (id === 'btnDetalhes') {
                detalhe.classList.add(idDoElemento)
            } else if (id === 'btnTampa'){
                tampa.classList.add(idDoElemento)
            }
        }

        // laço para a criação dos botões de cores cores
        for (let i = 0; i < nomeDasCores.length; i++) {
            btnModal = document.createElement('button');
            btnModal.classList.add(`btn${nomeDasCores[i]}`, 'btnSecundario');
            btnModal.id = `btnControle${nomeDasCores[i]}`
            btnModal.textContent = nomeDasCores[i];

            btnModal.addEventListener('click' , function() {
                const corSelecionada = this.id.replace('btnControle', '');
                mudacor (corSelecionada);
            })
            modalBtnSecundario.appendChild(btnModal);
        }

        
        
    }       
}



// Estrutura de laço, enquanto i for menor que o total de itens da listaBtnMain o laço acontece, a cada laço é atribuído ao botão da vez um ouvinte de click.
for (i=0; i < listaBtnMain.length; i++){
    let botao = listaBtnMain[i];
    botao.addEventListener('click' , function() {
        //captura o id do elemento da vez no laço
        let capturaId = this.id;
        //passa-se o id capturado a armazenado como argumento para a função
        mostraBotao (capturaId);
    })
}
