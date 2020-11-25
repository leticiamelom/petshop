const mysql = require('mysql')

const conexao = mysql.createConnection({
  host: '34.123.41.8',
  port: 3306,
  user: 'root',
  password: 'picker',
  database: 'agenda-petshop',
  multipleStatements: true
})

module.exports = conexao
