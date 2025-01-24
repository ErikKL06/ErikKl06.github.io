window.onload = function() {
    send(15);
}

async function send(highscore) {
    try {
        console.log('Sending highscore:', highscore);
        const response = await fetch("http://localhost/api/setHighscore.php", {
            method: "POST",
            body: JSON.stringify({ highscore: highscore }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });
        console.log('Response status:', response.status);
        const data = await response.json();
        console.log('Response data:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}

