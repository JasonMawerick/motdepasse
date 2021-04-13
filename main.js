const input = document.getElementById("input") ;    
const display = document.getElementById("display") ;    
console.log('coucou');
document.getElementById('checkbox').addEventListener('click', function() {
if (input.type == 'password') {
    input.type = 'text' ; 
    display.innerHTML = 'hide' ; 
}else{
    input.type = 'password';
    display.innerHTML = 'show';
}
 
})