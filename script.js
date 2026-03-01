* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
}

body {
    background: #f4f6f8;
    color: #333;
}

header {
    background: linear-gradient(45deg, #007bff, #00c6ff);
    color: white;
    text-align: center;
    padding: 40px 20px;
}

nav {
    background: #222;
    text-align: center;
    padding: 10px;
}

nav a {
    color: white;
    margin: 0 15px;
    text-decoration: none;
    font-weight: bold;
}

nav a:hover {
    color: #00c6ff;
}

section {
    padding: 40px 20px;
    max-width: 900px;
    margin: auto;
}

h2 {
    margin-bottom: 20px;
    color: #007bff;
}

ul {
    list-style-type: square;
    padding-left: 20px;
}

.card {
    background: white;
    padding: 20px;
    margin-bottom: 20px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    border-radius: 8px;
    transition: transform 0.3s ease;
}

.card:hover {
    transform: scale(1.05);
}

footer {
    text-align: center;
    background: #222;
    color: white;
    padding: 15px;
}
