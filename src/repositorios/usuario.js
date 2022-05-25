const query = require("../infraestrutura/database/queries");

class Usuario {
  listar() {
    const sql = "SELECT * FROM Usuarios";
    return query(sql);
  }
  adicionar(usuario) {
    const sql = "INSERT INTO Usuarios SET ?";
    return query(sql, usuario);
  }

  alterar(id, valores) {
    const sql = "UPDATE Usuarios SET ? WHERE id = ?";
    return query(sql, [valores, id]);
  }
  excluir(id) {
    const sql = "DELETE FROM Usuarios WHERE id = ?";
    return query(sql, id);
  }
  buscaPorId(id) {
    const sql = "SELECT * FROM Usuarios WHERE id = ?";
    return query(sql, id);
  }
  buscaPorNome(id, nome) {
    const sql = "SELECT * FROM Usuarios WHERE nome like ?";
    return query(sql, nome);
  }

  //dados-pessoais
  listaDadosPessoais(id) {
    const sql =
      "SELECT nomeCompleto, dataNascimento, rg, cpf FROM Usuarios WHERE id = ?";
    return query(sql, id);
  }

  alterarDadosPessoais(id, valores) {
    const sql = "UPDATE Usuarios SET ? WHERE id = ?";
    return query(sql, [id, valores]);
  }

  //contatos
  listaContatos(id) {
    const sql = "SELECT telefone, celular, email FROM Usuarios WHERE id = ?";
    return query(sql, id);
  }

  alterarContatos(id, valores) {
    const sql = "UPDATE Usuarios SET ? WHERE id = ?";
    return query(sql, [id, valores]);
  }

  //endereco
  listaEndereco(id) {
    const sql =
      "SELECT cep, endereco, numero, complemento FROM Usuarios WHERE id = ?";
    return query(sql, id);
  }

  alterarEndereco(id, valores) {
    const sql = "UPDATE Usuarios SET ? WHERE id = ?";
    return query(sql, [id, valores]);
  }
  //senha
  alterarSenha(id, senha) {
    const sql = "UPDATE Usuarios SET ? WHERE id = ?";
    return query(sql, [senha, id]);
  }
}

module.exports = new Usuario();
