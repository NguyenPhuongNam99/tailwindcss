const topMenu = document.getElementById('tqd-top-menu');
const toggleMenuIcon = document.getElementById('tqd-toggle-top-menu-icon');


document.addEventListener('click', (e) => {
   if(toggleMenuIcon.contains(e.target)){
        //click to toggle menu icon
        
        topMenu.classList.toggle('hidden')
        topMenu.classList.toggle('tqd-topmenu-expanded')

   }else {
        //click outside

        if(topMenu.classList.contains('tqd-topmenu-expanded')){
            topMenu.classList.remove('tqd-topmenu-expanded');
            topMenu.classList.add('hidden')
        }

   }
})