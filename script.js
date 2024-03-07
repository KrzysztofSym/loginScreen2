const inBtn = document.querySelector('.in');
const upBtn = document.querySelector('.up');
const signIn = document.querySelector('.sign-in');
const signUp = document.querySelector('.sign-up');

inBtn.addEventListener('click', ()=> {
    upBtn.classList.remove('active');
    signUp.classList.remove('active');
    inBtn.classList.add('active');
    signIn.classList.add('active');
})

upBtn.addEventListener('click', ()=> {
    inBtn.classList.remove('active');
    upBtn.classList.add('active');
    signIn.classList.remove('active');
    signUp.classList.add('active');
    
})