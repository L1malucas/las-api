const supertest = require("supertest");
const customExpress = require("../src/config/customExpress");

const request = supertest(customExpress());

jest.mock("../src/repositorios/UF's.js");
describe("API de UF's", () => {
  test("Listar Todas UF's", async () => {
    const res = await request.get("/ufs");
    expect(res.body).toEqual([
      {
        id: 1,

        sigla: "AC",
        estado: "Acre",
        cidade: "Rio Branco",
      },
      {
        id: 2,

        sigla: "AL",
        estado: "Alagoas",
        cidade: "Maceió",
      },
      {
        id: 3,

        sigla: "AM",
        estado: "Amazonas",
        cidade: "Manaus",
      },
      {
        id: 4,

        sigla: "AP",
        estado: "Amapá",
        cidade: "Macapá",
      },
      {
        id: 5,

        sigla: "BA",
        estado: "Bahia",
        cidade: "Salvador",
      },
      {
        id: 6,

        sigla: "CE",
        estado: "Ceará",
        cidade: "Fortaleza",
      },
      {
        id: 7,

        sigla: "DF",
        estado: "Distrito Federal",
        cidade: "Brasília",
      },
      {
        id: 8,

        sigla: "ES",
        estado: "Espírito Santo",
        cidade: "Vitória",
      },
      {
        id: 9,

        sigla: "GO",
        estado: "Goiás",
        cidade: "Goiânia",
      },
      {
        id: 10,

        sigla: "MA",
        estado: "Maranhão",
        cidade: "São Luís",
      },
      {
        id: 11,

        sigla: "MG",
        estado: "Minas Gerais",
        cidade: "Belo Horizonte",
      },
      {
        id: 12,

        sigla: "MS",
        estado: "Mato Grosso do Sul",
        cidade: "Campo Grande",
      },
      {
        id: 13,

        sigla: "MT",
        estado: "Mato Grosso",
        cidade: "Cuiába",
      },
      {
        id: 14,

        sigla: "PA",
        estado: "Pará",
        cidade: "Belém",
      },
      {
        id: 15,

        sigla: "PB",
        estado: "Paraíba",
        cidade: "João Pessoa",
      },
      {
        id: 16,

        sigla: "PE",
        estado: "Pernambuco",
        cidade: "Recife",
      },
      {
        id: 17,

        sigla: "PI",
        estado: "Piauí",
        cidade: "Teresina",
      },
      {
        id: 18,

        sigla: "PR",
        estado: "Paraná",
        cidade: "Curitiba",
      },
      {
        id: 19,

        sigla: "RJ",
        estado: "Rio de Janeiro",
        cidade: "Rio de Janeiro",
      },
      {
        id: 20,

        sigla: "RN",
        estado: "Rio Grande do Norte",
        cidade: "Natal",
      },
      {
        id: 21,

        sigla: "RR",
        estado: "Roraima",
        cidade: "Boa Vista",
      },
      {
        id: 22,

        sigla: "RS",
        estado: "Rio Grande do Sul",
        cidade: "Porto Alegre",
      },
      {
        id: 23,

        sigla: "SC",
        estado: "Santa Catarina",
        cidade: "Florianópolis",
      },
      {
        id: 24,

        sigla: "SP",
        estado: "São Paulo",
        cidade: "São Paulo",
      },
      {
        id: 25,

        sigla: "TO",
        estado: "Tocantins",
        cidade: "Palmas",
      },
      {
        id: 26,

        sigla: "RO",
        estado: "Rondônia",
        cidade: "Porto Velho",
      },
      {
        id: 27,

        sigla: "SE",
        estado: "Sergipe",
        cidade: "Aracaju",
      },
    ]);
  });
  test("Listar Cidades", async () => {
    const res = await request.get("/ufs/salvador");
    expect(res.body).toEqual({ cidade: "salvador" });
  });
  test("Listar SIgla", async () => {
    const res = await request.get("/ufs/ba");
    expect(res.body).toEqual({ cidade: "ba" });
  });
});
