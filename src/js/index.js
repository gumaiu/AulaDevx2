// selecionar personagens

const personagens = document.querySelectorAll('.personagem');

// adicionar classe do personagens selecionado

personagens.forEach((personagem) => { 
    personagem.addEventListener('mouseenter', () => {

        if(window.innerHeight < 450) {
            window.scrollTo({top: 0, behavior: 'smooth'});
        }    

        const personagemSelecionado = document.querySelector('.selecionado');
        personagemSelecionado.classList.remove('selecionado');

        personagem.classList.add('selecionado');

        const imagemPersonagemGrande = document.querySelector('.personagem-grande');

        const idPersonagem = personagem.attributes.id.valeu;
        imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.PNG`;
        
        const nomePersonagem = document.getElementById('nome-personagem');
        nomePersonagem.innerText = personagem.getAttribute('data-name');

        const descricaoPersonagem = document.getElementById('descricao-personagem');
        descricaoPersonagem.innerText = personagem.getAttribute('data-descricao');
    })
})

