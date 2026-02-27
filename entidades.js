export class Telefone {
  constructor(ddd, numero) { this.ddd = ddd; this.numero = numero; }
  get dddMaiusculo() { return String(this.ddd).toUpperCase(); }
  get dddMinusculo() { return String(this.ddd).toLowerCase(); }
  get numeroMaiusculo() { return String(this.numero).toUpperCase(); }
  get numeroMinusculo() { return String(this.numero).toLowerCase(); }
}

export class Endereco {
  constructor(estado, cidade, rua, numero) { this.estado = estado; this.cidade = cidade; this.rua = rua; this.numero = numero; }
  get estadoMaiusculo() { return String(this.estado).toUpperCase(); }
  get estadoMinusculo() { return String(this.estado).toLowerCase(); }
  get cidadeMaiusculo() { return String(this.cidade).toUpperCase(); }
  get cidadeMinusculo() { return String(this.cidade).toLowerCase(); }
  get ruaMaiusculo() { return String(this.rua).toUpperCase(); }
  get ruaMinusculo() { return String(this.rua).toLowerCase(); }
  get numeroMaiusculo() { return String(this.numero).toUpperCase(); }
  get numeroMinusculo() { return String(this.numero).toLowerCase(); }
}

export class Cliente {
  #cpf;
  constructor(nome, cpf, endereco) { this.nome = nome; this.#cpf = cpf; this.endereco = endereco; this.telefones = new Set(); }
  get cpf() { return this.#cpf; }
  get nomeMaiusculo() { return String(this.nome).toUpperCase(); }
  get nomeMinusculo() { return String(this.nome).toLowerCase(); }
  get cpfMaiusculo() { return String(this.#cpf).toUpperCase(); }
  get cpfMinusculo() { return String(this.#cpf).toLowerCase(); }
}

export class Empresa {
  #cnpj;
  constructor(razaoSocial, nomeFantasia, cnpj, endereco) {
    this.razaoSocial = razaoSocial; this.nomeFantasia = nomeFantasia; this.#cnpj = cnpj; this.endereco = endereco;
    this.clientes = new Set(); this.telefones = new Set();
  }
  get cnpj() { return this.#cnpj; }
  get razaoSocialMaiusculo() { return String(this.razaoSocial).toUpperCase(); }
  get razaoSocialMinusculo() { return String(this.razaoSocial).toLowerCase(); }
  get nomeFantasiaMaiusculo() { return String(this.nomeFantasia).toUpperCase(); }
  get nomeFantasiaMinusculo() { return String(this.nomeFantasia).toLowerCase(); }
  get cnpjMaiusculo() { return String(this.#cnpj).toUpperCase(); }
  get cnpjMinusculo() { return String(this.#cnpj).toLowerCase(); }

  detalhe() {
    let desc = `Razão Social: ${this.razaoSocial}\nNome fantasia: ${this.nomeFantasia}\n--------------------------------------------------\n`;
    this.clientes.forEach(c => {
      desc += `Nome: ${c.nome}\nEstado: ${c.endereco.estado} cidade: ${c.endereco.cidade} rua: ${c.endereco.rua} numero: ${c.endereco.numero}\n`;
      c.telefones.forEach(t => desc += `ddd: ${t.ddd} numero: ${t.numero}\n`);
      desc += `\n`;
    });
    return desc;
  }
}
