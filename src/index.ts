import express from 'express';

const app = express();
//const getYear = (date: Date): string => `${date.getFullYear()}`;
app.get('/', (req, res) => {
  // const year = getYear(new Date());
  res.send(`Hello World !`);
});
app.listen(3000, () => {
  console.log('test');

  console.log('App listening on port 3000!');
});
