const repositorio = require("../repositorios/eventos");

class Eventos {
  listar() {
    return repositorio.listar();
  }

  async adicionar(evento) {
    return repositorio.adiciona(evento);
  }

  alterar(id, valores) {
    return repositorio.alterar(id, valores);
  }

  excluir(id) {
    return repositorio.excluir(id);
  }

  buscarPorId(id) {
    return repositorio.buscaPorId(id);
  }

  buscarPorNome(nome) {
    return repositorio.buscaPorNome(nome);
  }
}

module.exports = new Eventos();
