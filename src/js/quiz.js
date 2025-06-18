document.addEventListener('DOMContentLoaded', function() {
    // Perguntas e respostas
    const quizData = [
        {
            question: "Qual é a principal causa de enchentes urbanas?",
            options: [
                "Chuvas intensas prolongadas",
                "Falta de sistemas de drenagem adequados",
                "Assoreamento de rios e córregos",
                "Todas as alternativas anteriores"
            ],
            answer: 3,
            explanation: "As enchentes urbanas são causadas por uma combinação de fatores, incluindo chuvas intensas, sistemas de drenagem inadequados e assoreamento de corpos d'água."
        },
        {
            question: "O que NÃO deve ser feito durante uma enchente?",
            options: [
                "Desligar a energia elétrica da casa",
                "Caminhar pela água corrente",
                "Subir para locais elevados",
                "Seguir para abrigos indicados pela defesa civil"
            ],
            answer: 1,
            explanation: "Caminhar pela água corrente durante enchentes é perigoso, pois 15 cm de água em movimento já podem derrubar uma pessoa."
        },
        {
            question: "Qual destes materiais deve compor um kit de emergência para enchentes?",
            options: [
                "Documentos importantes em saco plástico",
                "Lanterna e pilhas extras",
                "Remédios essenciais",
                "Todos os itens acima"
            ],
            answer: 3,
            explanation: "Um kit de emergência para enchentes deve incluir documentos protegidos, fontes de luz e medicamentos essenciais, entre outros itens importantes."
        },
        {
            question: "Qual medida ajuda a PREVENIR enchentes?",
            options: [
                "Desmatamento de áreas verdes",
                "Impermeabilização do solo com asfalto",
                "Manutenção de sistemas de drenagem",
                "Construção em áreas de várzea"
            ],
            answer: 2,
            explanation: "A manutenção regular de sistemas de drenagem é fundamental para prevenir enchentes, enquanto as outras opções podem agravar o problema."
        },
        {
            question: "O que significa o termo 'assoreamento' relacionado a enchentes?",
            options: [
                "Acúmulo de sedimentos no fundo de rios",
                "Transbordamento de rios e córregos",
                "Construção de barragens",
                "Poluição das águas por lixo"
            ],
            answer: 0,
            explanation: "Assoreamento é o acúmulo de terra, areia e outros sedimentos no fundo de rios, reduzindo sua capacidade de vazão e aumentando o risco de enchentes."
        },
        {
            question: "Qual órgão emite alertas de enchentes no Brasil?",
            options: [
                "INMET (Instituto Nacional de Meteorologia)",
                "CEMADEN (Centro Nacional de Monitoramento e Alertas de Desastres Naturais)",
                "Defesa Civil Municipal",
                "Todos os órgãos acima"
            ],
            answer: 3,
            explanation: "No Brasil, vários órgãos emitem alertas de enchentes em diferentes níveis, incluindo o CEMADEN, INMET e as Defesas Civis locais."
        },
        {
            question: "O que são 'áreas de várzea'?",
            options: [
                "Áreas naturalmente alagáveis próximas a rios",
                "Terrenos elevados seguros contra enchentes",
                "Regiões desérticas",
                "Áreas industriais"
            ],
            answer: 0,
            explanation: "Áreas de várzea são terrenos planos próximos a rios que naturalmente alagam em períodos de chuva intensa, devendo ser evitadas para construções."
        },
        {
            question: "Qual é o risco principal de enchentes para a saúde pública?",
            options: [
                "Proliferação de doenças transmitidas pela água contaminada",
                "Queda na qualidade do ar",
                "Aumento de casos de desidratação",
                "Exposição excessiva ao sol"
            ],
            answer: 0,
            explanation: "Enchentes aumentam o risco de doenças como leptospirose, hepatite A e gastroenterites devido à água contaminada com esgoto e resíduos."
        },
        {
            question: "O que fazer se o carro ficar preso em uma enchente?",
            options: [
                "Permanecer dentro do veículo",
                "Sair imediatamente e buscar terreno mais alto",
                "Tentar ligar o carro para sair",
                "Abrir todas as janelas"
            ],
            answer: 1,
            explanation: "Se a água estiver subindo rapidamente, o correto é abandonar o veículo e buscar terreno mais alto, pois carros podem ser arrastados por pouca água."
        },
        {
            question: "Qual porcentagem da população mundial vive em áreas com risco de enchentes?",
            options: [
                "Cerca de 10%",
                "Cerca de 25%",
                "Cerca de 50%",
                "Cerca de 75%"
            ],
            answer: 1,
            explanation: "Estudos indicam que aproximadamente 25% da população global vive em áreas com algum risco de inundações, número que vem aumentando com as mudanças climáticas."
        }
    ];

    // Elementos do DOM
    const quizIntro = document.getElementById('quiz-intro');
    const quizForm = document.getElementById('quiz-form');
    const quizResults = document.getElementById('quiz-results');
    const questionContainer = document.querySelector('.question-container');
    const resultMessage = document.getElementById('result-message');
    const answersContainer = document.getElementById('answers-container');
    const startBtn = document.getElementById('start-quiz');
    const restartBtn = document.getElementById('restart-quiz');
    
    let userAnswers = [];
    
    // Iniciar quiz
    startBtn.addEventListener('click', startQuiz);
    restartBtn.addEventListener('click', startQuiz);
    
    // Mostrar perguntas
    function displayQuestions() {
        questionContainer.innerHTML = '';
        
        quizData.forEach((question, index) => {
            const questionElement = document.createElement('div');
            questionElement.classList.add('question');
            
            questionElement.innerHTML = `
                <h3>${index + 1}. ${question.question}</h3>
                <div class="options">
                    ${question.options.map((option, i) => `
                        <label class="option">
                            <input type="radio" name="question${index}" value="${i}">
                            <span class="radio-custom"></span>
                            <span class="option-text">${option}</span>
                        </label>
                    `).join('')}
                </div>
            `;
            
            questionContainer.appendChild(questionElement);
        });
    }
    
    // Iniciar quiz
    function startQuiz() {
        userAnswers = [];
        quizIntro.classList.remove('active');
        quizForm.classList.add('active');
        quizResults.classList.remove('active');
        displayQuestions();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    // Enviar respostas
    quizForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Coletar respostas
        quizData.forEach((question, index) => {
            const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
            userAnswers.push(selectedOption ? parseInt(selectedOption.value) : null);
        });
        
        // Calcular pontuação
        const score = userAnswers.reduce((acc, answer, index) => {
            return acc + (answer === quizData[index].answer ? 1 : 0);
        }, 0);
        
        // Mostrar resultados
        showResults(score);
    });
    
    // Mostrar resultados
    function showResults(score) {
        quizForm.classList.remove('active');
        quizResults.classList.add('active');
        
        // Mensagem baseada na pontuação
        let message;
        if (score === quizData.length) {
            message = 'Parabéns! Você acertou todas as perguntas! 🎉';
        } else if (score >= quizData.length * 0.7) {
            message = `Bom trabalho! Você acertou ${score} de ${quizData.length} perguntas.`;
        } else if (score >= quizData.length * 0.4) {
            message = `Você acertou ${score} de ${quizData.length}. Continue aprendendo sobre enchentes!`;
        } else {
            message = `Você acertou ${score} de ${quizData.length}. Recomendamos aprender mais sobre prevenção de enchentes.`;
        }
        
        resultMessage.textContent = message;
        
        // Mostrar respostas
        answersContainer.innerHTML = '';
        quizData.forEach((question, index) => {
            const answerElement = document.createElement('div');
            answerElement.classList.add('answer');
            
            const isCorrect = userAnswers[index] === question.answer;
            const userAnswerText = userAnswers[index] !== null ? 
                question.options[userAnswers[index]] : 'Não respondida';
            
            answerElement.innerHTML = `
                <div class="answer-question">
                    <strong>${index + 1}. ${question.question}</strong>
                    <span class="answer-status ${isCorrect ? 'correct' : 'incorrect'}">
                        ${isCorrect ? '✓' : '✗'}
                    </span>
                </div>
                <div class="answer-details">
                    <p><strong>Sua resposta:</strong> ${userAnswerText}</p>
                    <p><strong>Resposta correta:</strong> ${question.options[question.answer]}</p>
                    <p class="explanation">${question.explanation}</p>
                </div>
            `;
            
            answersContainer.appendChild(answerElement);
        });
        
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
});