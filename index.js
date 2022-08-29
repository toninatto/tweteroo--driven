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
        
    const novoTweet = {
        username: req.body.username,              
        tweet: req.body.tweet
    }
    tweets.push(novoTweet);

    res.send('OK')
});

app.get('/tweets', (req, res) => {

    let novosTweets=[];

    for(let i = tweets.length - 1; i > tweets.length -11 && i >=0 ; i--) {
        const addAvatar =usuarios.find(usuario => tweets[i].username == usuario.username)
        const avatar = addAvatar.avatar;
        novosTweets=[...novosTweets, {
            username: tweets[i].username,
            avatar: avatar,
            tweet: tweets[i].tweet
        }]
    }
    res.send(novosTweets)    
});

app.listen(5000, () => console.log('listening on port 5000'));