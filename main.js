document.getElementById("open_dlg").addEventListener("click", function(){
    document.getElementById("my_modal").classList.add("open")
});

document.getElementById("close_dlg").addEventListener("click", function(){
    document.getElementById("my_modal").classList.remove("open")
});

documen.querySelector("#my_modal .dlg_modal").addEventListener('click', event => {
    event._isClickWithInModal = true;
});

document.getElementById("my_modal").addEventListener("click", event => {
    if(event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
});