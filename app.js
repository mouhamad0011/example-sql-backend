const express = require('express');//npm i express
const app = express();
const sequelize = require('./config/database');
const taskRouter = require('./Routes/taskRoute');
const PORT =3000;

sequelize.authenticate()
  .then(() => {
    console.log('Connected to the database');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

app.use(express.json());
app.use('/tasks', taskRouter);
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
