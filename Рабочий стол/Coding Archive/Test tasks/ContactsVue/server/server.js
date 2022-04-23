const express = require('express');
const cors = require('cors');
const fs = require('fs')

const App = express();

App.use(cors());
App.use(express.json());


App.use('/files', express.static(__dirname + '/files'));

App.get('/get_data', (req, res)=>{
    if(fs.existsSync(__dirname + '/files/contacts.json')){
        res.send(fs.readFileSync(__dirname + '/files/contacts.json', 'utf-8'));  
    } else {
        res.send([])
    }
});

App.post('/save_data', (req, res)=>{
    fs.writeFileSync(__dirname + '/files/contacts.json', JSON.stringify(req.body));
    res.send('ok');
});

App.get('/', (req, res) => {
    res.send('ok')
});


App.listen(5000, 'localhost', () => {
    console.log('Server running ....')
});