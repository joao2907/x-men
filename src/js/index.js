/*

1º
O que precisamos fazer? - quando passar o mouse em cima do personagem na lista temos
que adicionar a borda azul de seleção na imagem pequena do personagem e mostrar a
imagem, o nome e o texto grande do personagem que está selecionado

  OBJETIVO 1 - quando passar o mouse em cima do personagem na listagem, devemos
  selecioná-lo
    passo 1 - pegar os personagens no JS pra poder verificar quando o usuário
    passar o mouse em cima de um deles
    passo 2 - adicionar a classe selecionado no personagem que o usuário passar o
    cursor do mouse
    passo 3 - verificar se já exista um personagem selecionado, se sim, devemos
    remover a seleção dele

  OBJETIVO 2 - quando passar o mouse em cima do personagem na listagem, trocar a
  imagem, o nome e a descrição do personagem grande

    passo 1 - pegar o elemento do personagem grande pra adicionar as informações
    nele

    passo 2 - alterar a imagem do personagem grande

    passo 3 - alterar o nome do personagem grande

    passo 4 - alterar a descrição do personagem grande

*/

// Retorna uma lista de elementos presentes no documento HTML que possuam a classe 'personagem'(Pode ser passado como parâmetro uma classe, uma tag)
const personagens = document.querySelectorAll('.personagem');

// Recebe como primeiro parâmetro o evento que será escutado, por segundo o que deve ocorrer após o evento ser escutado. (esse método só pode ser usado em um elemento que não seja uma lista)
// No 'for each' primeiro é passado uma variável que representa cada elemento da lista
personagens.forEach(personagem => {
    personagem.addEventListener('mouseenter', () => {

      // Se a largura do site que a pessoa está abrindo for menor que 450(no celular)
      if (window.innerWidth < 450) {
        window.scrollTo({top: 0, behavior: 'smooth'});// fazer uma rolagem até o topo da tela de forma suave
      }

      // Verificar se já exista um personagem selecionado, se sim, devemos remover a seleção dele
      removerSelecaoDoPersonagem();
      
      // Adicionar classe 'selecionado' no elemento 'li'
      personagem.classList.add('selecionado');
      
      // Alterar imagem referente ao personagem selecionado
      alterarImagemPersonagemSelecionado(personagem);

      // Alterar nome referente ao personagem selecionado
      alterarNomePersonagemSelecionado(personagem);

      // Alterar descrição referente ao personagem selecionado
      alterarDescricaoPersonagem(personagem);
    })
});

function alterarDescricaoPersonagem(personagem) {
  
  const descricaoPersonagem = document.getElementById('descricao-personagem');
  descricaoPersonagem.innerHTML = personagem.getAttribute('data-description');
}

function alterarNomePersonagemSelecionado(personagem) {

  const nomePersonagem = document.getElementById('nome-personagem');
  nomePersonagem.innerHTML = personagem.getAttribute('data-name');
}

function alterarImagemPersonagemSelecionado(personagem) {

  const imagemPersonagemGrande = document.querySelector('.personagem-grande');
  const idPersonagem = personagem.attributes.id.value;
  imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;
}

function removerSelecaoDoPersonagem() {

  const personagemSelecionado = document.querySelector('.selecionado');
  personagemSelecionado.classList.remove('selecionado');
}