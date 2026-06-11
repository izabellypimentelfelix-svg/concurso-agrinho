* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background: #f4f8f4;
    color: #333;
    line-height: 1.6;
}

header {
    background: linear-gradient(135deg, #2e7d32, #4caf50);
    color: white;
    text-align: center;
    padding: 50px 20px;
}

header h1 {
    font-size: 3rem;
}

nav {
    background: #1b5e20;
}

nav ul {
    list-style: none;
    display: flex;
    justify-content: center;
}

nav li {
    margin: 15px;
}

nav a {
    text-decoration: none;
    color: white;
    font-weight: bold;
}

nav a:hover {
    color: #c8e6c9;
}

section {
    padding: 60px 10%;
}

section h2 {
    text-align: center;
    margin-bottom: 30px;
    color: #2e7d32;
}

.cards {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
}

.card {
    background: white;
    width: 300px;
    padding: 25px;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    transition: 0.3s;
}

.card:hover {
    transform: translateY(-8px);
}

.card h3 {
    margin-bottom: 10px;
    color: #388e3c;
}

form {
    max-width: 500px;
    margin: auto;
}

input,
textarea {
    width: 100%;
    padding: 12px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 8px;
}

textarea {
    resize: none;
    height: 120px;
}

button {
    width: 100%;
    padding: 12px;
    border: none;
    background: #4caf50;
    color: white;
    font-size: 1rem;
    border-radius: 8px;
    cursor: pointer;
}

button:hover {
    background: #2e7d32;
}

#resposta {
    text-align: center;
    margin-top: 15px;
    color: #2e7d32;
    font-weight: bold;
}

footer {
    background: #1b5e20;
    color: white;
    text-align: center;
    padding: 20px;
    margin-top: 30px;
}

@media (max-width: 768px) {
    nav ul {
        flex-direction: column;
        text-align: center;
    }

    .card {
        width: 100%;
    }
}
