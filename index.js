

function generatePassword(qty) {
    var length = qty,
        charset = "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,0,1,2,3,4,5,6,7,8,9,!,@,$,(,),/,|,%";
        charset = charset.split(",");
    var retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset[(Math.floor(Math.random() * n))];
    }
    console.log(retVal)   
    return retVal
}

function renderPasswords(){
    var passwordEL = document.querySelectorAll(".password-el");
    for (var i = 0; i < passwordEL.length; i++){
    let numberBox = document.getElementById("number")
    passwordEL[i].innerText = generatePassword(numberBox.value)
    passwordEL[i].value = generatePassword(numberBox.value)
    passwordEL[i].style.color = "#fff"
    copy1.style.display = "block"
    copy2.style.display = "block"
    copy3.style.display = "block"
    copy4.style.display = "block"
    copyPassword1()
    copyPassword2()
    copyPassword3()
    copyPassword4()
}
}

function copyPassword1(){
    
    const copy1 = document.getElementById("copy1")
    const pass1 = document.getElementById("pass1")

    setTimeout(function (){
        
        copy1.addEventListener('click', function(){
         /* Select the text field */
  pass1.select();
  pass1.setSelectionRange(0, 99999); /* For mobile devices */

   /* Copy the text inside the text field */
  navigator.clipboard.writeText(pass1.value);

  /* console log the copied text */
  console.log("Copied the text: " + pass1.value);

    })}, 1000)
}
function copyPassword2(){
    
    const copy2 = document.getElementById("copy2")
    const pass2 = document.getElementById("pass2")

    setTimeout(function (){
        
        copy2.addEventListener('click', function(){
         /* Select the text field */
  pass2.select();
  pass2.setSelectionRange(0, 99999); /* For mobile devices */

   /* Copy the text inside the text field */
  navigator.clipboard.writeText(pass2.value);

  /* console log the copied text */
  console.log("Copied the text: " + pass2.value);

    })}, 1000)
}
function copyPassword3(){
    
    const copy3 = document.getElementById("copy3")
    const pass3 = document.getElementById("pass3")

    setTimeout(function (){
        
        copy3.addEventListener('click', function(){
         /* Select the text field */
  pass3.select();
  pass3.setSelectionRange(0, 99999); /* For mobile devices */

   /* Copy the text inside the text field */
  navigator.clipboard.writeText(pass3.value);

  /* console log the copied text */
  console.log("Copied the text: " + pass3.value);

    })}, 1000)
}
function copyPassword4(){
    
    const copy4 = document.getElementById("copy4")
    const pass4 = document.getElementById("pass4")

    setTimeout(function (){
        
        copy4.addEventListener('click', function(){
         /* Select the text field */
  pass4.select();
  pass4.setSelectionRange(0, 99999); /* For mobile devices */

   /* Copy the text inside the text field */
  navigator.clipboard.writeText(pass4.value);

  /* console log the copied text */
  console.log("Copied the text: " + pass4.value);

    })}, 1000)
}

