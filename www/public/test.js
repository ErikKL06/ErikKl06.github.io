

send(5)

async function send(highscore) {
    fetch("http://localhost/api/getHighscore.php", {
        method: "POST",
        body: JSON.stringify({
            highscore: highscore,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      });
    
}