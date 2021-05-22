const eu = {
    name: 'Marx',
    idade: 23,
    profissão: 'Dev',
}
eu.gosto_de = "jogar"
delete eu.gosto_de
console.log(eu)

const cadastro = [
    {
        nome: 'Mendonça',
        idade: 67,
        telefone: 32435567,
        amigos: ['Lineu', 'Nenê', 'Marilda', 'Beiçola', 'Paulão']
    }, 
    {
        nome: 'Marilda',
        idade: 69,
        telefone: 37424248,
        amigos: ['Dona Nenê', 'Mendonça', 'Tuco', 'Beiçola', 'Paulão']
    }, 
    {
        nome: 'Paulão',
        idade: 53,
        telefone: 33458908,
        amigos: ['Agostinho','Marilda', 'Mendonça', 'Beiçola', 'Bebel' ]
    }, 
    {
        nome: 'Maria Isabel',
        idade: 45,
        telefone: 988765647,
        amigos: ['Tuco', 'Agostinho', 'Marilda', 'Gina', 'Paulão']
    }, 
    {
        nome: 'Tuco',
        idade: 43,
        telefone: 976655489,
        amigos: ['Bebel','Gina', 'Marilda', 'Paulão', 'Beiçola']
    }
]
console.log(cadastro[0].amigos[0])
console.log(cadastro[1].amigos[0])
console.log(cadastro[2].amigos[0])
console.log(cadastro[3].amigos[0])
console.log(cadastro[4].amigos[0])

const A_Grande_Família = [
cadastro[0].amigos[0],
cadastro[1].amigos[0],
cadastro[2].amigos[0],
cadastro[3].amigos[0],
cadastro[4].amigos[0],
]
