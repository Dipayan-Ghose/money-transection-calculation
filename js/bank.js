document.getElementById('btnEP').addEventListener('click',function(){
    const getEmail=document.getElementById('email');
    const emailValue=getEmail.value;

    const getPass=document.getElementById('pass');
    const passValue=getPass.value;

    if(emailValue==='ghosedipayen@gmail.com' && passValue==='125262'){
        location. replace("homePage.html");
        // console.log('valid User');
    }
    else{
        console.log('Invalid User');
    }
})