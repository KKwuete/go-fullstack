const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb+srv://Lacervel:marzou@go-fullstack.xlayt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    { useNewUrlParser: true,
        useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));



app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(bodyParser.json());

app.post('/api/stuff', ((req, res, next) => {
    console.log(req.body);
    res.status(201).json({
        message: 'Objet crée'
    })
}))

app.use('/api/stuff', ((req, res, next) => {

    const stuff = [{
        _id: 'kezoakeoza',
        title: '1er objet',
        description: 'Infos du 1er objet',
        imageUrl: '',
        price: 1500,
        userId: 'DZZAD'
    },
        {
            _id: 'kze',
            title: '3eme objet',
            description: 'Infos du 3eme objet',
            imageUrl: '',
            price: 88000,
            userId: 'ezaeD'
        },
        {
            _id: 'koolllldddq',
            title: '2eme objet',
            description: 'Infos du 2eme objet',
            imageUrl: '',
            price: 750,
            userId: 'Djkeezoap'
        },
    ];
    res.status(200).json(stuff);
}))


module.exports = app;