let gk = [
    {
        question: "What is the capital of India?",
        options: ["Mumbai", "New Delhi", "Kolkata", "Chennai"],
        answer: 1
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Venus", "Mars", "Jupiter"],
        answer: 2
    },
    {
        question: "Who wrote the National Anthem of India?",
        options: ["Mahatma Gandhi", "Rabindranath Tagore", "Jawaharlal Nehru", "Subhash Chandra Bose"],
        answer: 1
    },
    {
        question: "Which is the largest ocean?",
        options: ["Atlantic", "Indian", "Arctic", "Pacific"],
        answer: 3
    },
    {
        question: "How many continents are there?",
        options: ["5", "6", "7", "8"],
        answer: 2
    },
    {
        question: "Which gas do plants absorb?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        answer: 1
    },
    {
        question: "Who is known as the Father of Computers?",
        options: ["Alan Turing", "Charles Babbage", "Bill Gates", "Steve Jobs"],
        answer: 1
    },
    {
        question: "Which is the national animal of India?",
        options: ["Lion", "Elephant", "Tiger", "Leopard"],
        answer: 2
    },
    {
        question: "What is H2O?",
        options: ["Hydrogen", "Oxygen", "Salt", "Water"],
        answer: 3
    },
    {
        question: "Which year did India get independence?",
        options: ["1945", "1946", "1947", "1948"],
        answer: 2
    }
];

let i = 0;
let score = 0;

function show() {
    document.getElementById("q").innerText = gk[i].question;
    document.getElementById("o1").innerText = gk[i].options[0];
    document.getElementById("o2").innerText = gk[i].options[1];
    document.getElementById("o3").innerText = gk[i].options[2];
    document.getElementById("o4").innerText = gk[i].options[3];
}

function ans(userChoice) {
    if (userChoice === gk[i].answer) {
        score++;
    }

    i++;

    if (i < gk.length) {
        show();
    } else {
        document.getElementById("q").style.display = "none";
        document.getElementById("o1").style.display = "none";
        document.getElementById("o2").style.display = "none";
        document.getElementById("o3").style.display = "none";
        document.getElementById("o4").style.display = "none";

        document.getElementById("result").innerText =
            "Your Score: " + score + " / " + gk.length;
        
        document.getElementById("restart-btn").style.display = "block";
    }
}

function restartQuiz() {
    i = 0;
    score = 0;
    
    document.getElementById("q").style.display = "block";
    document.getElementById("o1").style.display = "block";
    document.getElementById("o2").style.display = "block";
    document.getElementById("o3").style.display = "block";
    document.getElementById("o4").style.display = "block";
    
    document.getElementById("result").innerText = "";
    document.getElementById("restart-btn").style.display = "none";
    
    show();
}

show();