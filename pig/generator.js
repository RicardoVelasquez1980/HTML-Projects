
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
    "Product Display Card",
    "Expenses Chart",
    "Interactive Rating",
    "Generators",
    "NFT Preview Card",
    "Order Summary",
    "Tip Calculator",
    "Profile Card",
    "Artcile Preview",
    "Sign-Up Form",
    "Frontend Mentor Challenges",
    "Wikipedia Page"

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