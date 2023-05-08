$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault()
        const novaTarefa = $('#adicionar-tarefa').val()
        const listaDeTarefas = $('<li></li>')
        
        $(`
        <button>
            ${novaTarefa}
        </button>`).appendTo(listaDeTarefas)
        $(listaDeTarefas).appendTo('ul')
        $('#adicionar-tarefa').val('')
    })

    $('ul').on('click', 'li', function(){
        $(this).addClass('feito')
    })
})