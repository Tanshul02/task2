const questions = {
    easy: [
        { question: "What does HTML stand for?", options: ["Hyperlinks and Text Markup Language", "Hyper Text Markup Language", "Home Tool Markup Language", "Hyper Tool Multi Language"], answer: 1 },
        { question: "What does CSS stand for?", options: ["Creative Style Sheets", "Cascading Style Sheets", "Colorful Style Sheets", "Computer Style Sheets"], answer: 1 },
        { question: "Which tag is used to define the largest heading?", options: ["<heading>", "<h6>", "<h1>", "<header>"], answer: 2 },
        { question: "Which of these is used to style a web page?", options: ["HTML", "CSS", "JavaScript", "PHP"], answer: 1 },
        { question: "Which HTML element is used to insert a line break?", options: ["<lb>", "<break>", "<br>", "<ln>"], answer: 2 },
        { question: "What does JS stand for?", options: ["Java Script", "JavaScript", "Just Script", "Join Script"], answer: 1 },
        { question: "Which attribute is used in HTML to link an external CSS file?", options: ["link", "src", "href", "css"], answer: 2 },
        { question: "What is the correct syntax for a comment in HTML?", options: ["// Comment", "<!-- Comment -->", "# Comment", "/* Comment */"], answer: 1 },
        { question: "What is the default file extension for HTML files?", options: [".html", ".css", ".js", ".htm"], answer: 0 },
        { question: "Which tag is used to create an ordered list?", options: ["<ul>", "<ol>", "<list>", "<order>"], answer: 1 }
    ],
    moderate: [
        { question: "Which HTML tag is used to define an internal style sheet?", options: ["<style>", "<css>", "<script>", "<link>"], answer: 0 },
        { question: "What CSS property controls the text size?", options: ["font-style", "text-size", "font-size", "text-style"], answer: 2 },
        { question: "Which property is used to align text to the center in CSS?", options: ["text-align", "align", "center-align", "justify"], answer: 0 },
        { question: "Which tag is used for inserting an image in HTML?", options: ["<img>", "<image>", "<src>", "<picture>"], answer: 0 },
        { question: "What is the purpose of the <head> tag in HTML?", options: ["Contains content for the page", "Defines the main content", "Holds metadata and links", "Creates a footer"], answer: 2 },
        { question: "Which CSS property adds space between elements?", options: ["padding", "spacing", "margin", "border"], answer: 2 },
        { question: "How do you make text bold in HTML?", options: ["<strong>", "<b>", "<bold>", "<text-bold>"], answer: 1 },
        { question: "Which attribute specifies the language of an HTML document?", options: ["lang", "xml", "doctype", "language"], answer: 0 },
        { question: "Which tag is used to create a hyperlink in HTML?", options: ["<a>", "<link>", "<href>", "<url>"], answer: 0 },
        { question: "Which HTML attribute is used to define inline styles?", options: ["style", "class", "id", "link"], answer: 0 }
    ],
    difficult: [
        { question: "Which CSS property is used to change the text color of an element?", options: ["color", "font-color", "text-color", "background-color"], answer: 0 },
        { question: "What does DOM stand for in web development?", options: ["Document Object Model", "Data Object Model", "Document Order Model", "Data Object Module"], answer: 0 },
        { question: "Which is the correct format for linking an external JavaScript file?", options: ["<script href='file.js'>", "<script src='file.js'>", "<link rel='script' src='file.js'>", "<script file='file.js'>"], answer: 1 },
        { question: "What CSS property is used to create a flexible layout?", options: ["flex", "display", "float", "position"], answer: 1 },
        { question: "In JavaScript, which keyword is used to define a variable?", options: ["let", "var", "const", "All of these"], answer: 3 },
        { question: "Which HTML element is used to include JavaScript code directly on a page?", options: ["<js>", "<javascript>", "<code>", "<script>"], answer: 3 },
        { question: "What is the use of the 'alt' attribute in the <img> tag?", options: ["To provide alternative text", "To define image size", "To set image alignment", "To link to another page"], answer: 0 },
        { question: "Which CSS property defines the space between content and border?", options: ["padding", "spacing", "margin", "border-width"], answer: 0 },
        { question: "Which of these is a CSS preprocessor?", options: ["Sass", "Bootstrap", "JavaScript", "JQuery"], answer: 0 },
        { question: "What does JSON stand for?", options: ["JavaScript Online Notation", "JavaScript Object Notation", "Java Standard Object Notation", "JavaScript Only"], answer: 1 }
    ]
};

let currentQuestion = 0;
let score = 0;
let selectedLevel = '';

function startQuiz(level) {
    selectedLevel = level;
    currentQuestion = 0;
    score = 0;
    document.getElementById('sectionQuizContainer').style.display = 'block';
    document.getElementById('sectionResult').style.display = 'none';
    showQuestion();
}

function showQuestion() {
    const questionData = questions[selectedLevel][currentQuestion];
    document.getElementById('sectionQuestion').innerText = questionData.question;
    const answers = document.getElementById('sectionAnswers');
    answers.innerHTML = '';
    questionData.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.innerText = option;
        button.onclick = () => checkAnswer(index);
        answers.appendChild(button);
    });
}

function checkAnswer(selected) {
    if (selected === questions[selectedLevel][currentQuestion].answer) {
        score++;
    }
    nextQuestion();
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions[selectedLevel].length) {
        showQuestion();
    } else {
        document.getElementById('sectionQuizContainer').style.display = 'none';
        document.getElementById('sectionResult').style.display = 'block';
        document.getElementById('sectionScore').innerText = score;
    }
}

function resetQuiz() {
    document.getElementById('sectionQuizContainer').style.display = 'none';
    document.getElementById('sectionResult').style.display = 'none';
}
