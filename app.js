import express from 'express';
const app = express();
const port = 2000;

// launch the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// returns {"message": "Hello, world!"} as JSON
app.get('/', (req, res) => {
  res.json({"message": "Hello, world!"})
})

// returns [{"name": "name"}, ...] that includes FE Sharing members as JSON
const feMemberList = [
  {"name": "Rayyan"},
  {"name": "Shibu"},
  {"name": "Sensui"},
  {"name": "Ram"},
  {"name": "Atlin"},
  {"name": "Rio"}
]

app.get('/users', (req, res) => {
  res.json(feMemberList)
})

// accepts {"name": <string>} that is an user to add as JSON
// returns {"name": <added user name>} as JSON
app.post('/users', (req, res) => {
  const { name } = req.body;
  
  if (!name || typeof name !== 'string') {
    return res.status(400).json({"error": "Name is required and must be a string"});
  }
  // Return the added user name
  res.json({"name": name});
})


