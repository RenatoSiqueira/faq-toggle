// FAQ Toggle - JavaScript básico
// Este arquivo contém a lógica para o funcionamento do FAQ toggle

document.addEventListener('DOMContentLoaded', function () {
  // Seleciona todos os botões de toggle
  const toggleButtons = document.querySelectorAll('.toggle-btn');

  // Adiciona event listener para cada botão
  toggleButtons.forEach(button => {
    button.addEventListener('click', function () {
      // Encontra o item FAQ pai
      const faqItem = this.closest('.faq-item');
      const faqAnswer = faqItem.querySelector('.faq-answer');

      // Toggle da classe active
      faqAnswer.classList.toggle('active');

      // Muda o texto do botão
      if (faqAnswer.classList.contains('active')) {
        this.textContent = '-';
      } else {
        this.textContent = '+';
      }
    });
  });
});

// Função para adicionar nova FAQ (será implementada quando o formulário estiver pronto)
function adicionarNovaFAQ(pergunta, resposta) {
  // TODO: Implementar lógica para adicionar nova FAQ
  console.log('Nova FAQ será adicionada:', pergunta, resposta);
}
