const express = require('express');
const app = express();
app.use(express.json());
app.post('/user', (req, res) => {
  const user = req.body;
  // Missing error handling if user is not provided or is invalid
  console.log(user.name); //Error if user object or user.name is missing
  res.send('User created');
});
app.listen(3000, () => console.log('Server listening on port 3000'));