//prevents ESLint warnings in cloud 9 IDE
/* global $ */
$(document).ready(function(){
    var $container = $('.container');
    var count = 16;
    for (var i = 0; i < count; i++){
        $container.append('<tr class="row">row ' + i + ' </tr>');
        var child = $container.find('tr:last');
        for (var j = 0; j < count; j++)
        {
            child.append('<div class="square"></div>');
        }
    }
    alert($('.row').length);
    alert($('.square').length);
});