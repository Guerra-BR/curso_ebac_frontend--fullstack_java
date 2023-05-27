$(document).ready(function(){
    
})

$('#cpf').mask('000.000.000-00', {
    placeholder: '___.___.___-__'
})

$('#telefone').mask('(00) 0000-0000', {
    placeholder: '(__) ____-____'
})

$('#cep').mask('00000-000', {
    placeholder: '_____-___'
})

$('form').validate({
    rules: {
        nome: {
            required: true
        },
        email: {
            required: true,
            email: true
        },
        telefone: {
            required: true
        },
        cpf: {
            required: true
        },
        endereco: {
            required: true
        },
        cep: {
            required: true
        }
    },
    messages: {
        nome: 'Insira seu nome competo',
        email: 'Insira um endereço de email válido',
        telefone: 'Insira um telefone para contato',
        cpf:'Insira seu CPF',
        endereco:'Insira seu endereço completo',
        cep:'Insira seu CEP',
    },
    submitHandler: function(form){
        console.log(form)
    },
    invalidHandler: function(evento, validador){
        let camposInvalidos = validador.numberOfInvalids()
        alert(`Há ${camposInvalidos} campos preenchidos incorretamente`)
    }
})
