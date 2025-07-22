function validate(e) {
    e.preventDefault();
    const email=document.getElementById('email').value;
    const pass = document.getElementById('password').value;
    const age = document.getElementById('age').value;
    const msgBox = document.getElementById('messege').value;
    let messege='';
    if(email === ''){
     messege='please enter your email';
     msgBox.style.color='red'
    } else if (pass === '') {
        messege = 'please enter your password';
        msgBox.style.color = 'red'
    } else if (age === '') {
        messege = 'age must be between 12 and 50';
        msgBox.style.color = 'red';
    }
    else{
        messege='Login Successful.';
        msgBox.style.color = 'green';
    }
    msgBox.innerText=messege;
}