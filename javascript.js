let quiz = document.querySelectorAll('.option');
let printval=document.getElementById('print')
quiz.forEach((val) => {
    val.addEventListener('click', ()=> {
        let isCorrect = val.value === 'true';
        if (isCorrect) {
            val.classList.add('correct');
            printval.innerHTML='<p> You Have Selected Correct Answer</p>'
        } 
        else {
            val.classList.add('incorrect');
            printval.innerHTML='<p> You Have Selected Wrong Answer</p>'
            
        }
        quiz.forEach((valued)=> {
                valued.disabled = true;
            });
        });
    });