

function show_hide(question){
    // Getting the id of the answer related to the question
    var answer_id = question.id.replace("q", "a");
    // gettting the answer object using the answer_id
    var answer = document.getElementById(answer_id);
    // toggling show/hide of answer upon question click
    // if (answer.style.display == "block"){
    //     answer.style.display = "none"
    //     question.style.backgroundColor = "white"
    //     question.style.color = "#5e366e"
    // }
    // else {
    //     answer.style.display = "block"
    //     question.style.backgroundColor = "#5e366e"
    //     question.style.color = "#fefaff"
        
    // }

    answer.classList.toggle("hide");
    answer.classList.toggle("show");

    
}

