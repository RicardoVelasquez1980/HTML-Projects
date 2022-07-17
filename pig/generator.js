
const ideas = new Map([
    // Key, Value#####
    // In This Case I Am Making The Key An Int So I Can Specify A Value Using Randomization#####
    [0, "Calculator"],
    [1, "Portfolio"],
    [2, "Resume"],
    [3, "Tribute Page"],
    [4, "Survey"],
    [5, "Restaurant Website"],
    [6, "Photography Website"],
    [7, "Product Display Website"],
    [8, "Technical Documentation"],
    [9, "Blog"],
    [10, "Journal"],
    [11, "Dictionary"]

]);

function generate(){
    let ideaEle = document.getElementById("idea");
    // Gets The Child ELEMENT Of The Parent Element#####
    let child = ideaEle.firstElementChild;

    child.innerHTML = ideas.get(randInt(ideas.size));

}

// The Max Int Is Excluded#####
function randInt(max){
    return Math.floor(Math.random() * max);

}