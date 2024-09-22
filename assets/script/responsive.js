import { getDOM } from "./index.js";
export { menuMobile }

function menuMobile(){
  getDOM('menu', '.menu-top_mobile').addEventListener("click", ()=>{
    getDOM('nav', '.nav-menu').classList.toggle('menu-top-mobile_none')
    menu()
  })
  function menu(){
    const arrayClass =  [... getDOM('menu', '.menu-top_mobile').classList]
    if( getDOM('nav', '.nav-menu').classList !== 'menu-top-mobile_none' ){
      bloqueiaScroll('hidden')
      getDOM('nav', '.redes').classList.toggle('menu-top-mobile_none')
      classMenu('fa-bars', 'fa-x')
    }
    if(arrayClass.includes('fa-x')){
      bloqueiaScroll('')
      classMenu('fa-x', 'fa-bars')
    }
  }
  function classMenu(removeClass, addClass){
    getDOM('iconMenu', '.menu-top_mobile').classList.remove(removeClass)
    getDOM('iconMenu', '.menu-top_mobile').classList.add(addClass)
  }
  function bloqueiaScroll(scroll){
    document.body.style.overflow = scroll
  }
}
