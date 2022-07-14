const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const {Todo} = require('./mongo/index')
const {setAsync} = require('./redis/index')
const indexRouter = require('./routes/index');
const todosRouter = require('./routes/todos');

const app = express();

app.use(cors());

/*const syncTodos = async () => {
	const count = await Todo.countDocuments()
	await setAsync('added_todos', count)
}

syncTodos()*/

app.use(logger('dev'));
app.use(express.json());

app.use('/', indexRouter);
app.use('/todos', todosRouter);

module.exports = app;
