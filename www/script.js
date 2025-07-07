 let resultado = document.getElementById('resul');

 let enviar = document.getElementById('enviar');






    
 enviar.addEventListener('touchstart', () => {

    let mensaje = document.getElementById('mensaje').value;
    
    fetch('/enviar',{
        
        method: 'POST',
        headers: {'Content-Type': 'text/plain'},
        body: mensaje
        
        
    }).then(res => res.text()).then(res => {
        
        
        
        resultado.innerText = res;
        mensaje = '';
        
        
        
    });
    
     

});