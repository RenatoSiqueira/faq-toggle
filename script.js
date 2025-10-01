// FAQ Toggle - JavaScript com funcionalidades avançadas
// Este arquivo contém a lógica para o funcionamento do FAQ toggle

document.addEventListener('DOMContentLoaded', function () {
  initializeFAQToggle();
});

function initializeFAQToggle() {
  // Seleciona todos os itens FAQ
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    initializeSingleFAQ(item);
  });
}

function toggleFAQ(faqItem, faqAnswer, toggleBtn, faqQuestion) {
  const isActive = faqAnswer.classList.contains('active');
  const isAccordionMode = document.body.classList.contains('accordion-mode');
  
  // Fechar outras FAQs se estiver no modo acordeão
  if (!isActive && isAccordionMode) {
    const allFAQs = document.querySelectorAll('.faq-item');
    allFAQs.forEach(item => {
      if (item !== faqItem) {
        const otherAnswer = item.querySelector('.faq-answer');
        const otherBtn = item.querySelector('.toggle-btn');
        const otherQuestion = item.querySelector('.faq-question');
        
        otherAnswer.classList.remove('active');
        otherBtn.textContent = '+';
        otherQuestion.classList.remove('active');
        otherQuestion.setAttribute('aria-expanded', 'false');
      }
    });
  }
  
  // Toggle do FAQ atual
  if (isActive) {
    // Fechar
    faqAnswer.classList.remove('active');
    toggleBtn.textContent = '+';
    faqQuestion.classList.remove('active');
    faqQuestion.setAttribute('aria-expanded', 'false');
  } else {
    // Abrir
    faqAnswer.classList.add('active');
    toggleBtn.textContent = '−';
    faqQuestion.classList.add('active');
    faqQuestion.setAttribute('aria-expanded', 'true');
    
    // Scroll suave para o item se necessário
    setTimeout(() => {
      if (faqItem.getBoundingClientRect().top < 0) {
        faqItem.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 300);
  }
}

// Função para adicionar nova FAQ (será implementada quando o formulário estiver pronto)
function adicionarNovaFAQ(pergunta, resposta) {
  const faqList = document.querySelector('.faq-list');
  
  // Criar novo item FAQ
  const faqItem = document.createElement('div');
  faqItem.className = 'faq-item';
  
  faqItem.innerHTML = `
    <div class="faq-question">
      <h3>${pergunta}</h3>
      <button class="toggle-btn" aria-label="Expandir resposta">+</button>
    </div>
    <div class="faq-answer">
      <p>${resposta}</p>
    </div>
  `;
  
  // Adicionar à lista
  faqList.appendChild(faqItem);
  
  // Inicializar funcionalidade para o novo item
  initializeSingleFAQ(faqItem);
  
  console.log('Nova FAQ adicionada:', pergunta, resposta);
}

function initializeSingleFAQ(faqItem) {
  const question = faqItem.querySelector('.faq-question');
  const answer = faqItem.querySelector('.faq-answer');
  const toggleBtn = faqItem.querySelector('.toggle-btn');

  // Adiciona event listener
  question.addEventListener('click', function() {
    toggleFAQ(faqItem, answer, toggleBtn, question);
  });

  // Adiciona atributos de acessibilidade
  question.setAttribute('aria-expanded', 'false');
  question.setAttribute('role', 'button');
  question.setAttribute('tabindex', '0');
  
  // Suporte para navegação por teclado
  question.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleFAQ(faqItem, answer, toggleBtn, question);
    }
  });
}

// Função para habilitar/desabilitar comportamento de acordeão
function toggleAccordionMode() {
  const body = document.body;
  body.classList.toggle('accordion-mode');
  
  const isAccordionMode = body.classList.contains('accordion-mode');
  console.log('Modo acordeão:', isAccordionMode ? 'Ativado' : 'Desativado');
  
  return isAccordionMode;
}
