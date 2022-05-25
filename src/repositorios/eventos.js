const query = require("../infraestrutura/database/queries");

class Eventos {
  listar() {
    const sql = "SELECT * FROM Eventos";
    return query(sql);
  }
  adicionar(evento) {
    const sql = "INSERT INTO Eventos SET ?";
    return query(sql, evento);
  }

  alterar(id, evento) {
    const sql = "UPDATE Eventos SET ? WHERE id = ?";
    return query(sql, [evento, id]);
  }
  excluir(id) {
    const sql = "DELETE FROM Eventos WHERE id = ?";
    console.log(sql);
    return query(sql, id);
  }
  buscaPorId(id) {
    const sql = "SELECT * FROM Eventos WHERE id = ?";
    return query(sql, id);
  }
  buscaPorStatus(status) {
    const sql = "SELECT * FROM Eventos WHERE status like ?";
    return query(sql, status);
  }
}

module.exports = new Eventos();
