const toggle = document.querySelector(".toggle");
const quit = document.querySelector(".quit");
const sidebar = document.querySelector(".sidebar");

toggle.addEventListener("click", function (){
    sidebar.classList.toggle('show-sidebar');

});

quit.addEventListener("click", function(){
    sidebar.classList.remove('show-sidebar');
});