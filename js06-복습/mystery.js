let randomNum = Math.floor(Math.random() * 100 +1);

function work(){
    let userinput = document.getElementById('userinput').value;
    let hint = document.getElementById('hint');
    let retry = document.getElementById('retry');

    if(userinput == randomNum){
       alert("정답입니다! 좀 하는걸?");
       retry.style.display = "block";
    } else if(userinput > randomNum){
        hint.textContent = "이거보단 낮아요. retry!"
    } else if(userinput < randomNum){
        hint.textContent = "이거보단 높아요. rerty!"
    } 
    }
    
