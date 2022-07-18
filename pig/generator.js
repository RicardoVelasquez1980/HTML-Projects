
const ideas = [
    "Calculator",
    "Portfolio",
    "Resume",
    "Tribute Page",
    "Survey",
    "Restaurant Website",
    "Photography Website",
    "Product Display Website",
    "Technical Documentation",
    "Blog",
    "Journal",
    "Dictionary",
    "Animation",
    "Cards",
    "Instagram Post",

];

function generate(){
    let ideaEle = document.getElementById("idea");
    // Gets The Child ELEMENT Of The Parent Element#####
    let child = ideaEle.firstElementChild;

    child.innerHTML = ideas[randInt(ideas.length)];

}

// The Max Int Is Excluded#####
function randInt(max){
    return Math.floor(Math.random() * max);

}