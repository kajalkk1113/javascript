    const quotes = [
        "In the middle of every difficulty lies opportunity.— Albert Einstein",
        "It does not matter how slowly you go as long as you do not stop.— Confucius",
        "The only way to do great work is to love what you do.— Steve Jobs",
        "Success is not final, failure is not fatal: It is the courage to continue that counts.— Winston Churchill",
        "Believe you can and you're halfway there.— Theodore Roosevelt",
        "Your time is limited, so don't waste it living someone else's life.— Steve Jobs",
        "The best way to predict the future is to invent it.— Alan Kay",
        "You miss 100% of the shots you don't take.— Wayne Gretzky",
        "I have not failed. I've just found 10,000 ways that won't work.— Thomas A. Edison",
        "The only limit to our realization of tomorrow is our doubts of today.— Franklin D. Roosevelt",
        "Do what you can, with what you have, where you are.— Theodore Roosevelt"
    ];

    const quoteText = document.getElementById("quote");
const button = document.getElementById("new-quote");

button.addEventListener("click", function () {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteText.textContent = quotes[randomIndex];
});



