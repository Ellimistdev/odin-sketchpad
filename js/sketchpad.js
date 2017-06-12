//prevents ESLint warnings in cloud 9 IDE
/* global $ */
$(document).ready(main());
function main(){
    generate(16);
    
    $('.square').on('mouseenter', function(){
        $(this).addClass('highlight');
    });
    $('.dimension').on('keydown', function(){
       $('.dimension').next.text(" x " + document.getElementById('dimension').value); 
    });
};
function generate(count){
    var $container = $('.container');
    $container.empty();
    for (var i = 0; i < count; i++){
        $container.append('<tr class="row">row ' + i + ' </tr>');
        var child = $container.find('tr:last');
        for (var j = 0; j < count; j++)
        {
            child.append('<td class="square"></td>');
        }
    }
}