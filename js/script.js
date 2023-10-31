function verificarSituacaoEstoque(quantidade)
{
    let quantidadeProduto = Number(quantidade);

    if (quantidadeProduto < 100){
        return "<span class='vermelho'>Comprar</span>";
    }
    else
    {
        return "Regular";
    }
}

/* Código sem bloco de execução é executado imediatamente */

const linhasProdutos = document.querySelectorAll('.linha-produto');


for (let i = 0; i < linhasProdutos.length; i++) {
    
    const localQuantidade = linhasProdutos[i].children[2];
    const localSituacao = linhasProdutos[i].children[4];

    localSituacao.innerHTML = verificarSituacaoEstoque(localQuantidade.textContent)
    
}

const btnNovo = document.querySelector(".btnNovo");
const tela = document.querySelector(".areaNovoProduto");
const bloqueio  = document.querySelector(".block");

function ClicouBotaoAdicionar(event)
{
	event.preventDefault();

	tela.classList.remove("escondido");
	bloqueio.classList.remove("escondido");
}

btnNovo.addEventListener("click", ClicouBotaoAdicionar);

const bntSalvar = document.querySelector(".botaoSalvar")
bntSalvar.addEventListener('click', adicionarNovoProduto);

function adicionarNovoProduto(event)
{
    event.preventDefault

    let nome = txtNome.value;
    let quantidade = txtQtd.value;
    let valor =  txtValor.value;

    if( nome == "")
    {
        console.log("Nome inválido!!");
        return;
    }
    else
    {
        console.log(nome)
    }

    if( quantidade == "")
    {
        console.log("Quantidade Inválida!!");
        return;
    }
    else
    {
        console.log(quantidade)
    }

    /*float converte para número
    quantidade = parseFloat(quantidade);
    */

    
    if( valor == "")
    {
        console.log("Valor inválido!!");
        return;
    }
    else
    {
        console.log(valor)
    }
}