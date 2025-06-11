//1. Criando um objeto  que é um tipo de dado ( ele contém propriedades, atributos ou chave)
let pessoa = {
    nome:'Ana',
    cpf: '00000000000',
    genero:'f',
    idade: 25,
    altura: 1.65,
    cpf: '00000000000',
    dataNascimento:'25/12/1998',
    endereco: 'Rua dos Aflitos, 123, Messejana, Fortaleza, Ceará',
    adicionar: function() {
        console.log('Adicionando...')
    },
    remover: function() {
        console.log('Removendo...')
    },
    // telefone: '9999134567',
    // email: 'chico@ig.com.br'
    contato: {
        telefone: '9999134567',
        email: 'chico@ig.com.br',
    }
}
//imprimindo no console
console.log(pessoa)

//2. Acessando os dados do objeto
console.log(pessoa.dataNascimento);
console.log(pessoa.endereco);
console.log(pessoa.contato.email);
// ao chamar uma prpriedade que contém uma função, é necessário usar os parênteses
console.log(pessoa.adicionar());