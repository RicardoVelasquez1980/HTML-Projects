
function revealSecret(){
    let secret = document.getElementById("secret");
    let visibility = secret.style.visibility;

    secret.style.visibility = (visibility !== "visible") ? "visible" : "hidden";

}