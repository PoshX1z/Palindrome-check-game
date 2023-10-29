const txtInput = document.querySelector(".inputs input");
let checkBtn = document.querySelector(".inputs button");
let infoTxt = document.querySelector(".info-txt")
let filterInput;


checkBtn.addEventListener("click", () => {
    //Split input character, reversing them and joining into single words
    let reverseInput = filterInput.split("").reverse().join("");
    infoTxt.style.display = "block";
    if(reverseInput != filterInput){
        return infoTxt.innerHTML = `No, <span>${txtInput.value}</span> is not a palindrome`
    }else{
        infoTxt.innerHTML =  `Yes, <span>${txtInput.value}</span> is a palindrome`
    }
})

txtInput.addEventListener("keyup", () => {
    //Removing spaces & special character
    filterInput = txtInput.value.replace(/[^A-Z0-9]/ig, ""); //replace all of wrong value with "" (nothing)
    if(filterInput) {
        return checkBtn.classList.add("active");
    }else{      
    checkBtn.classList.remove("active");
    infoTxt.style.display = "none";
}
 });



 