// state

let userName;

function main() {
    const answer = prompt('Ange ditt namn');
    userName = answer;
    prepareStory();
}

function prepareStory( {
    alert('Välokmmen' + userName + 'blabalbla');

    const answer = prompt('where do you want to go, to the livingroom or the kitchen? write "livingroom" eller "kitchen"');

    if (answer === "vardagsrummet") {
        enterLivingRoom();
    } else if (answer === "köket") {
        enterKitchen();
    } else {
        alert('Please enter either livingroom or kitchen');
        prepareStory();
    }
}

function enterLivingroom( {
    const choice = prompt('Tell me, how old are uou');
    presentStuffInLivingRoom(choice);
}

function presentStuffinLivingRoom(choice) {
    alert(choice);
}