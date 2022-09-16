
function revealSecret(){
    let secret = document.getElementById("secret");
    let visibility = secret.style.visibility;
    console.log(visibility);

    if (visibility !== "visible"){
        secret.style.visibility = "visible";

    } else {
        secret.style.visibility = "hidden";

    }
}