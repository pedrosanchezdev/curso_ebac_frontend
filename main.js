$(document).ready(function() {
  
    $('form').on('submit', function(e) {
        e.preventDefault(); 

        const novaAtividade = $('#nova-atividade').val(); 
        if (novaAtividade) {
            const novoItem = $('<li></li>').text(novaAtividade); 

            const botaoExcluir = $('<button></button>').text('Excluir').addClass('botao-excluir');
            $(botaoExcluir).on('click', function() {
                $(this).parent().remove(); 
            });

            $(novoItem).on('click', function() {
                $(this).toggleClass('concluida');
            });

            novoItem.append(botaoExcluir);
            $('#adicionar-tarefas').append(novoItem);
            
            $('#nova-atividade').val('');
        }
    });
});
