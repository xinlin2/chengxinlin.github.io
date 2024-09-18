
function updateGreeting() {
    const currentHour = new Date().getHours();
    let greeting = "Hello";

    if (currentHour >= 5 && currentHour < 12) {
        greeting = "Good Morning";
    } else if (currentHour >= 12 && currentHour < 18) {
        greeting = "Good Afternoon";
    } else {
        greeting = "Good Evening";
    }

    document.getElementById('greeting').innerText = greeting + ", Welcome to my website!";
    document.getElementById('greeting').style.color = "blue";
    document.getElementById('greeting').style.textAlign = "center";
}

window.addEventListener('load', function() {
    // First function to be executed on load
    updateGreeting();
    displayRandomQuote();
});

function toggleTheme() {
    document.body.classList.toggle('dark-theme');
}

const quotes = [
    "The best way to get started is to quit talking and begin doing.",
    "Success is not the key to happiness. Happiness is the key to success.",
    "Don’t wait for opportunity. Create it.",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau",
    "Don’t limit yourself. You can go as far as your mind lets you. - Mary Kay Ash",
    "Dream big and dare to fail. - Norman Vaughan",
    "Opportunities don't happen, you create them. - Chris Grosser",
    "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
    "Act as if what you do makes a difference. It does. - William James",
    "You miss 100% of the shots you don’t take. - Wayne Gretzky"
];

function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').innerText = quotes[randomIndex];
}



