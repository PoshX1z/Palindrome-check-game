const txtInput = document.querySelector(".form input"),
checkBtn = document.querySelector(".form button"),
infoTxt = document.querySelector(".info-txt")
let filterInput; //we create this as a global variable in order to let all functions use

//click button to show
checkBtn.addEventListener("click", () =>{
    //We fetch the real value then processing to check the reverse word
    let reverseInput = filterInput.split("").reverse().join("");

    infoTxt.style.display = "block" //The description show below
    //If the text is not the reverse words, then say it not a palindrome
    if(filterInput != reverseInput){
        return infoTxt.innerHTML = `No, <span>"${txtInput.value}"</span> is not a palindrome!`;
    } return infoTxt.innerHTML = `Yes, <span>"${txtInput.value}"</span> is a palindrome!`;

    
})

//Quarantine the input
txtInput.addEventListener("keyup", () => {
    //create var to filter the text that remove all special character that putting on input
    filterInput = txtInput.value.toLowerCase().replace(/[^A-Z0-9]/ig, "");
    //filterInput now is the real value
    //if it is real value, Then button enable to click but if it not, then button is disable and description not show
    if(filterInput){
        return checkBtn.classList.add("active") //style in css
    } 
    else{
    infoTxt.style.display = "none" 
    checkBtn.classList.remove("active");
}

})