const db = require('./db')
require('./model/User')

async function sincronizar() {
  await db.sync()
}

sincronizar()