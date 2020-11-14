import server from '../src';
const app = server();

app.get('/recipes',(req, res, next) => {
  next('error', 404);
}, (req, res) => {
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

app.listen(3000, () => {
  console.log('Server running on 3000');
});
