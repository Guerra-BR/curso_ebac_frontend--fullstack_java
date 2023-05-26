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
        nome: {
            nome: 'Insira seu nome competo'
        }
    }
})
