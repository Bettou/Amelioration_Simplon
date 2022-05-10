
let corps=document.querySelector('#corps');
let boutton=document.querySelector('input');
corps.style.backgroundColor ="#f0f0f0";
function changeColor() {
    if (boutton) {
       return corps.style.backgroundColor ="#000000";
    } else{
        return corps.style.backgroundColor ="#f0f0f0";
    }  
    } 
