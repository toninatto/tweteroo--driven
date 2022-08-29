import express from 'express';
import cors from 'cors';

const app = express();

const usuarios = [];
const tweets = [];

app.use(cors());
app.use(express.json());

app.post('/sign-up', (req, res) => {
    const novoUsuario = {
        username: req.body.username,
        avatar: req.body.avatar
    }
    usuarios.push(novoUsuario);

    res.send('OK')
});

app.post('/tweets', (req, res) => {
    
    const usuario = usuarios.find(value => value.username === req.body.username);    
    
    const novoTweet = {
        username: req.body.username,
        avatar: usuario.avatar,      
        tweet: req.body.tweet
    }
    tweets.push(novoTweet);

    res.send('OK')
});

app.get('/tweets', (req, res) => {

    if (tweets.length <= 10) {
        const novaLista = [...tweets].reverse();
        res.send(
            novaLista
        )
    } else {
        const novaLista = [...tweets].slice(-10).reverse();
        res.send (
            novaLista
        )
    }    
});

app.get('/', (req, res) => {res.send(console.log("Hellos"))});


app.listen(5000, () => console.log('listening on port 5000'));