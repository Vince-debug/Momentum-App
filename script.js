document.addEventListener('DOMContentLoaded', () => {
    updateTime();
    displayRandomQuote();
    changeBackgroundImage();
    setInterval(updateTime, 1000);
});

const quotes = [
    "The only way to do great work is to love what you do.",
    "Life is what happens when you're busy making other plans.",
    "Success is not the key to happiness. Happiness is the key to success.",
    "Believe you can and you're halfway there."
];

function updateTime() {
    const timeDisplay = document.getElementById('time');
    const now = new Date();
    timeDisplay.textContent = now.toLocaleTimeString();

    changeBackgroundImage();
}

function displayGreeting() {
    const name = document.getElementById('nameInput').value;
    const greeting = `Hello, ${name}!`;
    document.getElementById('greeting').textContent = greeting;
}

function displayFocus() {
    const focus = document.getElementById('focusInput').value;
    document.getElementById('focusDisplay').textContent = `Today's focus: ${focus}`;
}

function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').textContent = quotes[randomIndex];
}

function addNewQuote() {
    const newQuote = document.getElementById('newQuoteInput').value;
    if (newQuote) {
        quotes.push(newQuote);
        displayRandomQuote();
        document.getElementById('newQuoteInput').value = '';
    }
}

function addTodo() {
    const todoInput = document.getElementById('todoInput').value;
    if (todoInput) {
        const todoList = document.getElementById('todoList');
        const li = document.createElement('li');
        li.textContent = todoInput;
        todoList.appendChild(li);
        document.getElementById('todoInput').value = '';
    }
}

function changeBackgroundImage() {
    const hours = new Date().getHours();
    const body = document.body;

    if (hours >= 6 && hours < 12) {
        body.style.backgroundImage = "url('morning.jpg')";
    } else if (hours >= 12 && hours < 18) {
        body.style.backgroundImage = "url('afternoon.jpg')";
    } else if (hours >= 18 && hours < 21) {
        body.style.backgroundImage = "url('evening.jpg')";
    } else {
        body.style.backgroundImage = "url('night.jpg')";
    }
}
