const txtInput = document.querySelector(".form input"),
infoTxt = document.querySelector(".info-txt"),
checkBtn = document.querySelector(".check-btn");
let filterInput;

//create reverseInput function to reverse text and check if statement that true or not, If true it will show text...    ,a to recieve the infoTxt
const reverseInput = (a) => {
    let reverseText = filterInput.split("").reverse().join("");
    if(reverseText != filterInput) {
        a.innerHTML = `No "<span>${txtInput.value}</span>" is not a palindrome!`
    } else{a.innerHTML = `Yes <span>"${txtInput.value}"</span> is a palindrome!`}
}

//Input eventListener
txtInput.addEventListener("keyup", () =>{
    filterInput = txtInput.value.toLowerCase().replace(/[^A-Z0-9]/ig, ""); 
    //the value that has been filter to have no special character
    if(!filterInput) {infoTxt.innerHTML = "Special character doesn't allow"
    checkBtn.classList.add("disable")} //if input has a special character, show warning text and the button is disable
    else{
        checkBtn.classList.remove("disable") 
    }
    

}
)
checkBtn.addEventListener("click", () => reverseInput(infoTxt))