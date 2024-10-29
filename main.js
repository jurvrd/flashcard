    function criaCartao(pergunta, resposta) {
        let conteudo = document.getElementById ('conteudo')
        let cartao = document.createElement ('article')
        cartao.className = 'cartao'
        
        cartao.innerHTML =
        <div class= "cartao--conteudo">
        <div class="cartao--pergunta"><p>Como o Capitão América virou um super soldado?</p> </div>
        <div class="cartao--resposta"><p>Participou de uma experiencia criada pelos militares.</p> </div>
        </div>
        console.log(cartao)

        let respostaEstaVisivel = false

        function viraCartao() {
            respostaEstaVisivel = !respostaEstaVisivel
            cartao.classList. toggle('active',respostaEstaVisivel)
        }
        cartao.addEventListener('click', viraCartao)

        conteudo.appendChild(cartao)
    }
