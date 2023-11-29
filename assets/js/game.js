const allVideos = [
    'assets/video/2AVBtype1.mp4', 'assets/video/2AVBtype2.mp4', 'assets/video/3AVBlock.mp4',
    'assets/video/acceJunctional.mp4', 'assets/video/acceleratedIVR.mp4', 'assets/video/atrialFlutter.mp4',
    'assets/video/atrilFibrillationn.mp4', 'assets/video/idioventricular.mp4', 'assets/video/junctionalRhythm.mp4',
    'assets/video/junctionalTachy.mp4', 'assets/video/NSRwithAVB.mp4', 'assets/video/pacedAtrial.mp4',
    'assets/video/pacedVentricular.mp4', 'assets/video/sinusArrythmia.mp4', 'assets/video/sinusBradi.mp4',
    'assets/video/sinusTachy.mp4', 'assets/video/synusRythm.mp4',
    'assets/video/Vfibrillation.mp4', 'assets/video/VTach.mp4', 'assets/video/wanderingPacemaker.mp4'
    // Agrega las demás rutas de videos aquí
];

const manualQuestions = [
    { video: 'assets/video/2AVBtype1.mp4', options: ['Sinus Exit Block', '2° AVB Type I', 'Junctional Rhythm'], correctOption: 1 },
    { video: 'assets/video/2AVBtype2.mp4', options: ['2° AVB Type II', 'Accel Junctional', '2° AVB Type I'], correctOption: 0 },
    { video: 'assets/video/3AVBlock.mp4', options: ['3° AV Block', 'Sinus Arrest', 'Wandering Pacemaker'], correctOption: 0 },
    { video: 'assets/video/acceJunctional.mp4', options: ['NSR with PAC', 'Sinus Rhythm', 'Accel Junctional'], correctOption: 2 },
    { video: 'assets/video/acceleratedIVR.mp4', options: ['Sinus Arrhythmia', 'Accelerated IVR', 'Paced Ventricular'], correctOption: 1 },
    { video: 'assets/video/atrialFlutter.mp4', options: ['Atrial Flutter', 'SVT', 'Sinus Rhythm'], correctOption: 0 },
    { video: 'assets/video/atrilFibrillationn.mp4', options: ['NSR with 1° AVB', 'Atrial Fibrillation', 'Sinus Tachycardia'], correctOption: 1 },
    { video: 'assets/video/idioventricular.mp4', options: ['3° AV Block', '2° AVB 2:1', 'Idioventricular'], correctOption: 2 },
    { video: 'assets/video/junctionalRhythm.mp4', options: ['2° AVB 2:1', 'Junctional Rhythm', 'Idioventricular'], correctOption: 1 },
    { video: 'assets/video/junctionalTachy.mp4', options: ['Junctional Tachy', 'Sinus Tachycardia', 'NSR with PJC'], correctOption: 0 },
    { video: 'assets/video/NSRwithAVB.mp4', options: ['NSR with 1° AVB', 'NSR with PJC', 'Accel Junctional'], correctOption: 0 },
    { video: 'assets/video/pacedAtrial.mp4', options: ['Paced ventricular', 'Paced atrial', '2° AVB Type II'], correctOption: 1 },
    { video: 'assets/video/pacedVentricular.mp4', options: ['Paced atrial', 'Accelerated IVR', 'Paced Ventricular'], correctOption: 2 },
    { video: 'assets/video/sinusArrythmia.mp4', options: ['Sinus Arrhythmia', 'Sinus Tachycardia', 'Wandering Pacemaker'], correctOption: 0 },
    { video: 'assets/video/sinusBradi.mp4', options: ['Sinus Rhythm', 'Sinus Bradycardia', 'Sinus Arrest'], correctOption: 1 },
    { video: 'assets/video/sinusTachy.mp4', options: ['Atrial Fibrillation', 'Junctional Tachy', 'Sinus Tachycardia'], correctOption: 2 },
    { video: 'assets/video/synusRythm.mp4', options: ['Sinus Rhythm', 'Sinus Bradycardia', 'NSR with 1°AVB'], correctOption: 0 },
    { video: 'assets/video/Vfibrillation.mp4', options: ['Ventricular Tachycardia', 'Ventricular Fibrillation', 'Atrial Fibrillation'], correctOption: 1 },
    { video: 'assets/video/VTach.mp4', options: ['Ventricular Fibrillation', 'Supraventricular Tachycardia', 'Ventricular Tachycardia'], correctOption: 2 },
    { video: 'assets/video/wanderingPacemaker.mp4', options: ['Wandering Pacemaker', 'Sinus Exit Block', 'NSR with PJC'], correctOption: 0 }
    // Agrega las demás preguntas con sus opciones y opciones correctas aquí
];

let questions = []; // Lista de preguntas seleccionadas aleatoriamente
let currentQuestionIndex = 0;
let score = 0;

// Función para seleccionar aleatoriamente 10 videos de la lista completa
function selectRandomVideos() {
    const shuffledVideos = allVideos.sort(() => Math.random() - 0.5);
    questions = shuffledVideos.slice(0, 10).map(video => {
        const manualQuestion = manualQuestions.find(q => q.video === video);
        return {
            video,
            options: manualQuestion ? manualQuestion.options : ['Opción 1', 'Opción 2', 'Opción 3'],
            correctOption: manualQuestion ? manualQuestion.correctOption : 0
        };
    });
}

function loadQuestion() {
    const question = questions[currentQuestionIndex];
    const heartVideo = document.getElementById('heart-video');
    const options = document.querySelectorAll('.option');

    heartVideo.src = question.video;

    options.forEach((option, index) => {
        option.textContent = question.options[index];
    });
}



function checkAnswer(selectedOption) {
    const question = questions[currentQuestionIndex];

    if (selectedOption.textContent === question.options[question.correctOption]) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        endGame();
    }

    updateScore();
}

function updateScore() {
    document.getElementById('score').textContent = score;
}

function endGame() {
    alert('Juego terminado. Puntaje final: ' + score);
    location.reload();
}




// Inicia el juego seleccionando aleatoriamente 10 videos
selectRandomVideos();
loadQuestion();
