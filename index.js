console.log(window.location.href);
var url=window.location.href;
var access_token_str='access_token';
var expires_in_str = '&expires_in';
var token= url.substring(url.indexOf(access_token_str)+access_token_str.length+1, url.indexOf(expires_in_str));
console.log(token);

const copy_button_fn = str => {
  const el = document.createElement('textarea');
  el.value = token;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
  alert("Token copiato, incollalo nel bot Telegram.");
};
window.onload = function(){
    console.log('lol');
    var token_code = document.createElement("CODE");   // Create a <button> element
    token_code.innerHTML = token;                   // Insert text
    token_code.style = 'width:100%;'
    document.body.appendChild(token_code);
    
    var copy_button = document.createElement("HR");   // Create a <button> element
    // copy_button.innerHTML = 'Copia';                   // Insert text
    copy_button.style = 'width:100%;'
    document.body.appendChild(copy_button);

    var copy_button = document.createElement("BUTTON");   // Create a <button> element
    copy_button.innerHTML = 'Copia';                   // Insert text
    copy_button.style = 'width:100%;height:100px;'
    copy_button.onclick=copy_button_fn
    document.body.appendChild(copy_button);
    
};