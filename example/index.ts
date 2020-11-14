
import server from '../src';
const app = server();

app.get('/recipes', (req, res, next) => {
  // throw new Error('commp')
  next();
}, (req, res, next) => {
  // throw new Error('commp')
  next();
}, (req, res) => {
  console.log('still comes to execute?')
  try {
  throw new Error('haba');
  } catch(e) {
    console.log(e);
    res.statusCode = 400;
    res.send(e.message)
  }

  // res.json(['recipes on grades']);
});

app.get('/recipes/:id', (req, res) => {
  console.log('not here?', req.params)
  res.json(req.query);
});

app.post('/recipes', (req, res) => {
  res.json(['req.params']);
});

app.put('/recipes/:id', (req, res) => {
  res.send('hey');
});

app.delete('/recipes', (req, res) => {
  res.send(req.body);
});

app.post('/recipes/:id/rating', (req, res) => {
  res.send(req.body);
});

app.listen(4000, () => {
  console.log('Server running on 4000');
});
