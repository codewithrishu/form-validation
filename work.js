const form = document.getElementById("form")
const userName = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")
const password2 = document.getElementById("password2")


//show error function
function showerror(input,message) {
     
    
    input.parentElement.classList.add('error')
   var small = input.parentElement.querySelector("small").innerText = message

}
//show success
function showsucces (input) {
     input.parentElement.classList.add('success')
  
}

//check email is valid
function checkEmail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim())){
             showsucces(input)
    }
    else{
         showerror(input,"Email is not valid")
    }
}

//check passwords match
function passwordMatch(input,input2) {
    if(input.value === input2.value){
        showsucces(input2)
    }
    else{
       showerror(input2,`Passwords does not match`)
    }
}

//checkvalidity
function checkvalid(inputarr) {
    inputarr.forEach((input) => {

       if(input.value.trim() === ''){
            showerror(input,`${getField(input)} is required`)
       } 
       else{
           showsucces(input)
       }
        
    });
    
}

//check length
function checklength(input,min,max) {

    if(input.value.length < min){
        showerror(input,`${getField(input)} must be atleast ${min} chararacter`)
    }
    else if(input.value.length > max){
         showerror(input,`${getField(input)} must not be more than ${max} chararacter`)
    }
    else{
         showsucces(input)
    }
}

//making first character of error msg capital
function getField(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1)
    
}

//event-listerners
form.addEventListener("submit",(e)=>{
    
        e.preventDefault()

        checkvalid([userName,email,password,password2])
        checkEmail(email)
        checklength(userName,3,20)
        checklength(password,6,25)
        passwordMatch(password,password2)
       
    
})