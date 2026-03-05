# Cadastro de Empresas e Clientes - POO & Módulos ES6 🏢

Este projeto é uma aplicação de linha de comando desenvolvida em **JavaScript** com o objetivo de fixar e demonstrar na prática os pilares da **Programação Orientada a Objetos (POO)** e a separação de código utilizando **Módulos do ES6**.

## 🚀 Tecnologias e Conceitos Aplicados

Neste repositório, foram aplicados os seguintes conceitos do JavaScript moderno:

* **Classes e Construtores:** Criação de moldes para objetos como `Telefone`, `Endereco`, `Cliente` e `Empresa`.
* **Encapsulamento:** Proteção de dados sensíveis utilizando atributos privados (ex: `#cpf` e `#cnpj`).
* **Métodos de Acesso (Getters):** Implementação de métodos `get` para acessar e formatar atributos privados e manipular strings (caixa alta e baixa).
* **Módulos ES6:** Uso de `export` e `import` para separar as lógicas de negócio (`entidades.js`) do arquivo de testes e execução (`index.js`).
* **Estrutura de Dados `Set`:** Utilização de coleções do tipo `Set` para armazenar listas de telefones e clientes, evitando duplicidades.

## 📂 Estrutura do Projeto

O projeto está dividido em dois arquivos principais:

1.  `entidades.js`: Contém a definição de todas as classes, seus métodos construtores, métodos de acesso e formatação.
2.  `index.js`: Atua como o script principal (descritor), responsável por importar as entidades, instanciar os objetos (empresa, clientes, endereços e telefones) e imprimir o detalhamento no terminal.

## ⚙️ Como Executar

**Pré-requisitos:** Você precisará ter o [Node.js](https://nodejs.org/) instalado em sua máquina.

1. Faça o clone deste repositório:
   ```bash
   git clone [https://github.com/tirolasca/RI-4.git](https://github.com/tirolasca/RI-4.git)
