const menu = document.getElementsByClassName('wrapper-dropdown')[0];
function dropMenu() {
    this.classList.toggle('active');
}
menu.onclick = dropMenu;