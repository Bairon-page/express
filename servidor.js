let express = require('express');
let app = express();
let fs = require('fs');
let {exec} = require('chlid_process');
const cors = require('cors');
app.use(cors({
  origin: '*', // Reemplaza con tu dominio
  methods: ['POST', 'GET']
}));





app.use(express.static(__dirname));
app.use(express.text({type:'text/plain'}));

app.get('/', (req,res) => {
    
    
    res.sendFile(__dirname+'/index.html');
    
    
    
    
    
});

app.get('/pedirar', (req,res) => {
exec('cat archivo.txt',(_,r) => { console.log(r)});


});

app.post('/enviar', (req,res) => {
    
    fs.appendFile(`archivo.txt`,req.body+'\n',(err) => {
        
        if(err) {
            console.log(err)
        } else {
            console.log(`mensaje: (${req.body}), guardado con exito✅`);
            
           
        }
        
        
    });
     
   res.send('enviado');
    
});


app.listen(3000,'0.0.0.0',() => {
    
    
    console.log('escuchando puerto 3000');
    
});
