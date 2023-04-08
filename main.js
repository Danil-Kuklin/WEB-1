const dlg_body = document.getElementsByClassName('dlg_body');
const open_dlg = document.getElementById('open_dlg');
const full_modal = document.getElementById('my_modal');
const eyes = document.querySelector('.eyes');
const inputpswd = document.querySelector('#pswd');
const error = document.querySelector('#error')

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

// eyes.onfocus = (e) => inputpswd.type = 'text';
// eyes.onblure = (e) => inputpswd.type = 'password';
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