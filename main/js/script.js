function menu__open(){
document.getElementById("phone__menu-id").style.width="100%";
document.getElementById("phone__menu-id-body").style.overflow="hidden";
}

function menu__close(){
document.getElementById("phone__menu-id").style.width="0";
document.getElementById("phone__menu-id-body").style.overflow="visible";
}

function popup__open(){
document.getElementById("popup-id").style.opacity="1";
document.getElementById("popup-id").style.zIndex="1000";
document.getElementById("phone__menu-id-body").style.overflow="hidden";
}

function popup__close(){
document.getElementById("popup-id").style.opacity="0";
document.getElementById("popup-id").style.zIndex="-1";
document.getElementById("phone__menu-id-body").style.overflow="visible";
}
