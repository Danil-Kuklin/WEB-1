const dlg_body = document.getElementsByClassName('dlg_body');
const open_dlg = document.getElementById('open_dlg');
const full_modal = document.getElementById('my_modal');
const eyes = document.querySelector('.eyes');
const inputpswd = document.querySelector('#pswd');
const error = document.querySelector('#error1')
const error2 = document.querySelector('#error2')
const sub = document.getElementById('sub')
const form = document.querySelector('#dlg_form')
// const formElem = document.getElementById('dlg_form');



document.getElementById("open_dlg").addEventListener("click", function(){
    document.getElementById("my_modal").classList.add("open")
});

document.getElementById("close_dlg").addEventListener("click", function(){
    document.getElementById("my_modal").classList.remove("open")
});

full_modal.addEventListener('click', (e) => {
	if(e.target.id === "my_modal" && e.target.id != "open_dlg") {
        document.getElementById("my_modal").classList.remove("open")
    }
})

eyes.addEventListener('pointerdown', ()=> {
    inputpswd.setAttribute('type', 'text');
})

eyes.addEventListener('pointerup', ()=> {
    inputpswd.setAttribute('type', 'password');
})


mail.onblur = function() {
    if (!mail.value.includes('@')) {
      mail.classList.add('invalid');
      error.innerHTML = 'Пожалуйста, введите правильный email.'
    }
  };
  
 mail.onfocus = function() {
    if (this.classList.contains('invalid')) {
      this.classList.remove('invalid');
      error.innerHTML = "";
    }
}; 

pswd.onblur = function() {
    if(pswd.value.length < 6) {
        pswd.classList.add('invalid');
        error2.innerHTML = 'Минимальная длина паролья: 6';
    }
};

pswd.onfocus = function() {
    if (this.classList.contains('invalid')) {
      this.classList.remove('invalid');
      error2.innerHTML = "";
    }
};

const formElem = document.getElementById('dlg_form');
formElem.addEventListener('submit', (e) => {
    e.preventDefault();
    let t = 1;
    if(!pswd.validity.valid || !mail.validity.valid){
        t = 0;
    }
    else{
        t = 1;
    }
    if(t == 1){
        const data = new FormData(formElem);
        const mail = data.get('email');
        const pass = data.get('password');
        console.log(mail, pass);
    }
})


