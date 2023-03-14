const openDlg = document.getElementsById('open_dlg');
const closeDlg = document.getElementById('close_dlg');
const Dlg_modal = document.getElementById('dlg_modal');

openDlg.addEventListener('click', function(e){
    e.preventDefault();
    Dlg_modal.classList.add('active');

})

closeDlg.addEventListener('click', () => {
    Dlg_modal.classList.remove('active');
})