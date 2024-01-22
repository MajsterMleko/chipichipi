var score = 0;
        function funkcja(){
                score++;
                document.getElementById('wynik');
                wynik.innerHTML = "Kliknięcia: " + score;
        }

        function play(){
            var audio = document.getElementById("audio");
            audio.play();
        }