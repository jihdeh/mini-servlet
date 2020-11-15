import Server from '../src';

const {Servlets: app, Server: Core} = Server()

app.get('/recipes', (_req: any, _res: any, next: () => void) => {
  // throw new Error('commp')
  next();
}, (_req: any, _res: any, next: () => void) => {
  // throw new Error('commp')
  next();
}, (_req: any, res: { statusCode: number; send: (arg0: any) => void; }) => {
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

app.get('/recipes/:id', (req: { params: any; query: any; }, res: { json: (arg0: any) => void; }) => {
  console.log('not here?', req.params)
  res.json(req.query);
});

app.post('/recipes', (_req: any, res: { json: (arg0: string[]) => void; }) => {
  res.json(['req.params']);
});

app.put('/recipes/:id', (_req: any, res: { send: (arg0: string) => void; }) => {
  res.send('hey');
});

app.delete('/recipes', (req: { body: any; }, res: { send: (arg0: any) => void; }) => {
  res.send(req.body);
});

app.post('/recipes/:id/rating', (req: { body: any; }, res: { send: (arg0: any) => void; }) => {
  res.send(req.body);
});

app.listen(4000, () => {
  console.log('Server running on 4000');
});

export = Core