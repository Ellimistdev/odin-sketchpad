//prevents ESLint warnings in cloud 9 IDE
/* global $ */

var stylesheet = document.styleSheets[0];
var input = document.getElementById('dimension');
var count = parseInt(input.value,10);

$(document).ready(main());

function main(){
    setDim();
    generate();
}

function listen(){
    
  $(document).mousedown(function() {
    $('.square').bind('mouseenter', function(){
        $(this).addClass('highlight');
    });
  });
  $(document).mouseup(function() {
      $('.square').unbind('mouseenter');
  });
  $('.square').on('click', function(){
        $(this).addClass('highlight');
    });
    $('#dimension').on('keyup', function(){
        setCount();
        setDim();
    });
    /*
    $('.generate').on('click', function(){
        generate();
    });*/
}

/* Currently will not set the count to the limit on the initial page load if the value is one digit greater than the limit */
function setCount(){
    if (parseInt(count,10) > 150){
        count = 150;
        input.value = count.toString();
    }
    else {
        count = parseInt(input.value,10);    
    }
}

function setDim(){
    $('.dimUpdate').text(" x " + count);
}

function generate(){
    var $container = $('.container');
    setDimensions();
    $container.empty();
    for (var i = 0; i < count; i++){
        $container.append('<tr class="row"></tr>'); //row ' + i + ' 
        var child = $container.find('tr:last');
        for (var j = 0; j < count; j++)
        {
            child.append('<td class="square squareDim"></td>');
        }
    }
    listen();
}

function setDimensions(){
    var edge = 900/count + 'px';
    var selector = '.squareDim';
    var propStr = 'width : ' + edge +'; height : ' + edge;
    
    if (stylesheet.cssRules[stylesheet.cssRules.length-1].selectorText===".squareDim"){
        stylesheet.deleteRule(stylesheet.cssRules.length-1);
    }
    stylesheet.insertRule(selector + '{' + propStr + '}', stylesheet.cssRules.length);
}
