var hora = document.getElementById("horaDoDia");
        var agora = new Date();
        var horario = agora.getHours();
        console.log(horario);
        hora.innerHTML =
          "<p>Agora são <strong>" + horario + " Horas </strong></p>";

        if(horario > 12 && horario < 17){
            var box = document.getElementById("box");
        
            box.style.background = "#e6aa68";
            document.body.style.background = "#ECE4B7";
            document.body.style.color = "black";
            
            document.getElementById("img").src = "imgs/img2.jpg"

        } else if(horario > 17){
            var box = document.getElementById("box");
        
            box.style.background = "#AAAAAA";
            document.body.style.background = "#071013";
            document.body.style.color = "whitesmoke";
            
            document.getElementById("img").src = "imgs/img3.jpg"
        } else {
            var box = document.getElementById("box");
        
            box.style.background = "#B5BEC6";
            document.body.style.background = "#C7DBE6";
            document.body.style.color = "#071108";
            document.getElementById("img").src = "imgs/img.jpg"

        }
