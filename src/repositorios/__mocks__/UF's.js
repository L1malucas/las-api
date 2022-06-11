const ufsMock = require("./UFsTratadas.json");

class UFs {
  listar() {
    return Promise.resolve(ufsMock);
  }

  buscaCidade(cidade) {
    const busca = (ufsMock.cidade = { cidade });
    return Promise.resolve(busca);
  }

  buscaSigla(sigla) {
    const busca = (ufsMock.sigla = { sigla });
    return Promise.resolve(busca);
  }
}

module.exports = new UFs();
