import { Telefone, Endereco, Cliente, Empresa } from './entidades.js';

const empresa = new Empresa('ABC LTDA', 'Mercado Online', '12.345.678/0001-99', new Endereco('SP', 'São José dos Campos', 'Av Dutra', '1000'));
empresa.telefones.add(new Telefone('12', '39000000'));
empresa.telefones.add(new Telefone('12', '39000001'));

const dadosClientes = [
  ['João', '111.111.111-11', 'Av Andrômeda', '987', '99', '99999999'],
  ['Gabriel', '222.222.222-22', 'Av Andrômeda', '412', '88', '88888888'],
  ['Barbara', '333.333.333-33', 'Av São João', '789', '77', '77777777'],
  ['Márcia', '444.444.444-44', 'Av Andrômeda', '452', '66', '66666666'],
  ['Lucas', '555.555.555-55', 'Rua Cassiano Ricardo', '321', '55', '55555555']
];

dadosClientes.forEach(([nome, cpf, rua, numero, ddd, num]) => {
  const cliente = new Cliente(nome, cpf, new Endereco('SP', 'São José dos Campos', rua, numero));
  cliente.telefones.add(new Telefone(ddd, num));
  cliente.telefones.add(new Telefone(ddd, num)); 
  empresa.clientes.add(cliente);
});

console.log(empresa.detalhe());
