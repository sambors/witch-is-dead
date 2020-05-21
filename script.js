function createVillage() {
    var choice1;
    var choice2;

    choice1 = Math.floor(Math.random() * 10 ) +1;
    choice2 = Math.floor(Math.random() * 10 ) +1;

    while(choice2==choice1){
        choice2 = Math.floor(Math.random() * 10 ) +1;
    }
    console.log(choice1, choice2);

    var traits = document.getElementById("village-type-list").children;

    for(var i = 0; i<traits.length; i++){
        traits[i].classList.add("inactive");
    }
    
    traits[choice1-1].className="active";
    traits[choice2-1].className="active";
}

function createWitchHunter() {
    var choice = Math.floor(Math.random() * 10 ) +1;

    var traits = document.getElementById("witch-hunter-type-list").children;

    for(var i = 0; i<traits.length; i++){
        traits[i].classList.add("inactive");
    }
    
    traits[choice-1].className="active";
}