let express = require('express');
let app = express();
let path = require('path');
let { createClient } = require('@supabase/supabase-js') ;


app.use(express.static(path.join(__dirname+'/www'),{index:'index.html'}));

app.use(express.text({type:'text/plain'}))


let url = 'https://gnaqwcyeeqqkqwxcxbcg.supabase.co';

let key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImduYXF3Y3llZXFxa3F3eGN4YmNnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE4NTcyOTksImV4cCI6MjA2NzQzMzI5OX0.hvw2ACL-3a7EGvFH1XRvlYu77IGSjB1uOvY94nJXu28';



let cliente = createClient(url,key);






app.post('/enviar', (req,res) => {
    
    let mensaje = req.body;
    
    
    cliente.from('datos').insert([{
        
       id: 333,
       texto: mensaje 
        
        
    }]).then(resp => {
        
        
        if (!resp.error) {
            
            res.send('Enviado correctamente');
            
            
        } else {
            
            res.send('no se pudo enviar');
            
        }
        
        
    });
    
    
    
});



// si voy a escribir escuchando y me llama mucho la atencion algo que tenva que ver con una plabara que empieze por esc escribire esa palabra en vez de escuchando.

app.listen(3000,'0.0.0.0' ,() => {
    
    
    console.log('escuchando puerto:3000')
    
    
});

 
 
