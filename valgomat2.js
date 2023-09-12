const questions = [
    {question: 'Utepils på Torgallmenningen bør bli et fast tilbud', 
     heltuenig: {Sp: 5, Ap: 5, H: 0, V: 0, R: 5},
     littuenig: {Sp: 3, Ap: 3, H: 1, V: 1, R: 3},
     littenig: {Sp: 1, Ap: 1, H: 3, V: 3, R: 1},
     heltenig: {Sp: 0, Ap: 0, H: 5, V: 5, R: 0}
    },
    {question: 'Ungdomsskoleelever i Bergen skal få gratis skolemåltider', 
    heltuenig: {Sp: 0, Ap: 0, H: 5, V: 4, R: 0},
    littuenig: {Sp: 1, Ap: 1, H: 3, V: 5, R: 1},
    littenig: {Sp: 3, Ap: 3, H: 1, V: 2, R: 3},
    heltenig: {Sp: 5, Ap: 5, H: 0, V: 1, R: 5}
    },
    {question: 'Bergensskolen bør ha mobilforbud', 
    heltuenig: {Sp: 0, Ap: 5, H: 4, V: 4, R: 4},
    littuenig: {Sp: 1, Ap: 3, H: 5, V: 5, R: 5},
    littenig: {Sp: 3, Ap: 1, H: 2, V: 2, R: 2},
    heltenig: {Sp: 5, Ap: 0, H: 0, V: 0, R: 0}
    },
    {question: 'Skolefritidsordningen bør bli helt gratis i Bergen', 
    heltuenig: {Sp: 0, Ap: 0, H: 4, V: 4, R: 0},
    littuenig: {Sp: 2, Ap: 1, H: 5, V: 5, R: 1},
    littenig: {Sp: 5, Ap: 3, H: 2, V: 2, R: 3},
    heltenig: {Sp: 4, Ap: 5, H: 0, V: 0, R: 5}
    },
    {question: 'Det bør bli færre parkeringsplasser i sentrum', 
    heltuenig: {Sp: 5, Ap: 0, H: 5, V: 0, R: 0},
    littuenig: {Sp: 3, Ap: 2, H: 3, V: 1, R: 1},
    littenig: {Sp: 1, Ap: 5, H: 1, V: 3, R: 3},
    heltenig: {Sp: 0, Ap: 4, H: 0, V: 5, R: 5}
    },
    {question: 'Norge må slutte å lete etter olje og gass', 
    heltuenig: {Sp: 5, Ap: 5, H: 5, V: 0, R: 0},
    littuenig: {Sp: 3, Ap: 3, H: 3, V: 1, R: 1},
    littenig: {Sp: 1, Ap: 1, H: 1, V: 3, R: 3},
    heltenig: {Sp: 0, Ap: 0, H: 0, V: 5, R: 5}
    },
    {question: 'Norsk politi må ha lov å ransake deg for å finne ut om du har narkotika til eget bruk', 
    heltuenig: {Sp: 0, Ap: 0, H: 5, V: 5, R: 5},
    littuenig: {Sp: 1, Ap: 2, H: 3, V: 3, R: 3},
    littenig: {Sp: 3, Ap: 5, H: 1, V: 1, R: 1},
    heltenig: {Sp: 5, Ap: 4, H: 0, V: 0, R: 0}
    },
    {question: 'Bergen må prioritere å få tilbudet «Rask psykisk helsehjelp» på plass i alle bydelene', 
    heltuenig: {Sp: 0, Ap: 0, H: 0, V: 0, R: 0},
    littuenig: {Sp: 1, Ap: 1, H: 1, V: 2, R: 1},
    littenig: {Sp: 3, Ap: 3, H: 3, V: 5, R: 3},
    heltenig: {Sp: 5, Ap: 5, H: 5, V: 4, R: 5}
    },
    {question: 'Mer areal i Bergen kommune må bli satt av til å bygge boliger', 
    heltuenig: {Sp: 0, Ap: 0, H: 0, V: 4, R: 5},
    littuenig: {Sp: 2, Ap: 2, H: 1, V: 5, R: 3},
    littenig: {Sp: 5, Ap: 5, H: 3, V: 2, R: 1},
    heltenig: {Sp: 4, Ap: 4, H: 5, V: 0, R: 0}
    },
    {question: 'Det bør bli omkamp for å hindre at bybanen går forbi Bryggen', 
    heltuenig: {Sp: 0, Ap: 5, H: 5, V: 5, R: 5},
    littuenig: {Sp: 1, Ap: 3, H: 3, V: 3, R: 3},
    littenig: {Sp: 3, Ap: 1, H: 1, V: 1, R: 1},
    heltenig: {Sp: 5, Ap: 0, H: 0, V: 0, R: 0}
    },
]


let partyScores = {
    Sp: 0,
    Ap: 0,
    H: 0,
    V: 0,
    R: 0,
}

const questionT = document.getElementById('question')
const btnNext = document.getElementById('btnNext')
const rbAnswer = document.getElementById('answer')

btnNext.addEventListener('click', nextQuestion)

let qidx = 0
questionT.innerHTML = questions[qidx].question

function nextQuestion() {
    let radioChecked = document.querySelector('input[name="answer"]:checked')
    
    if (radioChecked) {
        calculateResult(qidx, radioChecked.value)
        qidx++
        if (qidx < questions.length){
            questionT.innerHTML = questions[qidx].question
            radioChecked.checked = false
        }
        else {
            //
        }
    }

}

function calculateResult(qidx, chosen) {
    console.log(qidx, chosen)

    let partyChoices = questions[qidx][chosen]
    console.log(partyChoices)

    for (let party in partyChoices){
        partyScores[party] += partyChoices[party]
    }
    console.log(partyScores)
}

