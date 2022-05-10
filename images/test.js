let corps=document.querySelector('#corps');
corps.style.backgroundColor ="#f0f0f0";
$( "input" ).toggle(function() {
    return corps.style.backgroundColor ="#000000";
    
  }, function() {
    return corps.style.backgroundColor ="#f0f0f0";

  });