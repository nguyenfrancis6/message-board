const db = require('../db/queries');

async function getMessageBoard(req, res) {
  const messages = await db.getMessages();
  console.log(messages);
  res.send(messages.map((message) => message.username + ": " + message.message))
}

async function createMessage(req, res) {
  const { text, user } = req.body;
  await db.insertMessage(user, text);
  res.redirect('/')
}

module.exports = {
  getMessageBoard,
  createMessage
}