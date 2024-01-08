const toggleBtn = document.querySelector('.navbar_bt');
const menu = document.querySelector('.navbar_menu');

toggleBtn.addEventListener('click',()=> {
    menu.classList.toggle('active');

})