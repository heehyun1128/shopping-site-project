window.addEventListener("load",function(){
    let login_btn = document.querySelector("#login")
    let register_btn = document.querySelector("#register")
    let form = document.querySelector(".form")
    let register_form = document.querySelector(".register")
    let login_form = document.querySelector(".login")

    const username = document.querySelector("#username")
    const email = document.querySelector("#email")
    const pwd = document.querySelector("#pwd")
    const pwdCon = document.querySelector("#pwd-confirm")
    const formInfo = document.querySelector(".form-info")

    let usernameArea = document.querySelector(".username-area")
    let emailArea = document.querySelector(".email-area")
    let pwdArea = document.querySelector(".pwd-area")
    let pwdConArea = document.querySelector(".pwdCon-area")

    let usernameInput = usernameArea.querySelector("input")
    let emailInput = emailArea.querySelector("input")
    let pwdInput = pwdArea.querySelector("input")
    let pwdConInput = pwdConArea.querySelector("input")

    let pwdBox = pwdArea.querySelector(".pwd-box")
    let eye = pwdBox.querySelector("img")

    let pwdConBox = pwdConArea.querySelector(".pwdCon-box")
    let eyeCon = pwdConBox.querySelector("img")

    let flag = 0
    let viewPassword = function(){
        if(flag===0){
            this.parentNode.previousElementSibling.type="text"
            this.src="images/eye-open.png"
            flag=1
        }else{
            this.parentNode.previousElementSibling.type="password"
            this.src="images/eye-close.png"
            flag=0
        }
    }
    eye.addEventListener("click",viewPassword)
    eyeCon.addEventListener("click",viewPassword)

    

    


    usernameInput.addEventListener("blur",function(){
        if(this.value.length===0){
            setError(usernameArea,"Username cannot be blank.")
        }else if(this.value.length<6 || this.length.value>16){
            setError(usernameArea,"Username must be between 6 to 16 digits long.")
        }else{
            setSuccess(usernameArea)
        }
    })

    emailInput.addEventListener("blur",function(){
        if(this.value.length===0){
            setError(emailArea,"Email cannot be blank.")
        }else if(!validateEmail(this.value)){
            setError(emailArea,"Email is not valid.")

        }else{
            setSuccess(emailArea)
        }
    })


    pwdInput.addEventListener("blur",function(){
        if(this.value.length===0){
            setError(pwdArea,"Password cannot be blank.")
        }else{
            setSuccess(pwdArea)
        }
    })

    pwdConInput.addEventListener("blur",function(){
        if (this.value===""){
            setError(pwdConArea,"Password confirmation cannot be blank.")
        }else if(this.value.length===0 || Number(pwdInput.value)!==Number(this.value)){
            setError(pwdConArea,"Password confirmation does not match password.")
        }else{
            setSuccess(pwdConArea)
        }
    })
    



    register_btn.addEventListener("click",()=>{
        form.style.transform = "translateX(95%)"
        register_form.classList.remove("hidden")
        login_form.classList.add("hidden")
    })

    login_btn.addEventListener("click",()=>{
        form.style.transform = "translateX(0%)"
        login_form.classList.remove("hidden")
        register_form.classList.add("hidden")
    })

    formInfo.addEventListener("submit",e=>{
        e.preventDefault()
        checkInputs()
    })

    function checkInputs(){

        const usernameValue = username.value.trim()
        const emailValue = email.value.trim()
        const pwdValue = pwd.value.trim()
        const pwdConValue = pwdCon.value.trim()

        if(usernameValue === ""){
            setError(usernameArea,"Username cannot be blank.")
        }else{
            setSuccess(usernameArea)
        }

        if(emailValue === ""){
            setError(emailArea,"Email cannot be blank.")
        }else if(!validateEmail(emailValue)){
            setError(emailArea,"Email is not valid.")

        }else{
            setSuccess(emailArea)
        }

        if (pwdValue===""){
            setError(pwdArea,"Password cannot be blank.")
        }else{
            setSuccess(pwdArea)
        }

        if (pwdConValue===""){
            setError(pwdConArea,"Password confirmation cannot be blank.")
        }else if(pwdValue!==pwdConValue){
            setError(pwdConArea,"Password confirmation does not match password.")
        }else{
            setSuccess(pwdConArea)
        }
    }

    function setError(inputArea,errorMsg){
        const i = inputArea.querySelector("i")
        i.style.display = "none"
        const small = inputArea.querySelector("small")
        small.innerText = errorMsg
        small.style.color="red"
        small.style.display="block"

    }

    function setSuccess(inputArea){
        const small = inputArea.querySelector("small")
        small.innerText = ""
        small.style.display="none"
        const i = inputArea.querySelector("i")
        i.style.display = "block"
    }

    function validateEmail (email) {
        return /^[A-Za-z0-9]+([_\.][A-Za-z0-9]+)*@([A-Za-z0-9\-]+\.)+[A-Za-z]{2,6}$/.test(email);
      }




    //dropdown highlight
    let highlight = document.querySelector(".dropdown_highlight")

    let navbar = document.querySelector(".navbar")
    let nav = document.querySelector(".nav")
    let dt = nav.querySelectorAll(".dt")
    let dd = nav.querySelectorAll(".dd")
    let navitems = document.querySelector(".navitems")
    let dropdownlist = nav.querySelector(".dropdownlist")


    //show dropdown list
    for (let i = 0; i < dt.length; i++) {

        dt[i].addEventListener("mouseenter", function () {
            
            highlight.style.width = dt[i].offsetWidth + "px"
            highlight.style.display = "block"
            animate(highlight, this.offsetLeft)

            for (let i = 0; i < dd.length; i++) {
                if (dd[i].style.display = "block") {
                    dd[i].style.display = "none"
                }

            }
            dd[i].style.display = "block"
            dd[i].style.left = i * dt[i].offsetWidth + "px"
        })

        nav.addEventListener("mouseleave", function () {
            highlight.style.display = "none"
            dd[i].style.display = "none"

        })

        // navitems.addEventListener("mouseenter", function () {

        //     highlight.style.width = "143px";
        //     highlight.style.display = "block"
        //     animate(highlight, this.offsetLeft)
        // })

    }
      
})