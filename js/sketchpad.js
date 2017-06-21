//prevents ESLint warnings in cloud 9 IDE
/* global $ */

var stylesheet = document.styleSheets[0];
var input = document.getElementById('dimension');
var count = parseInt(input.value,10);
var $canvas = $('.canvas');
var sideNav = document.getElementById('sideNav');
var menuButton = document.getElementById('menuButton');
var $dimension = $('#dimension');
$(document).ready(main());

function main(){
    setDim();
    generate();
}

function listen(){
  var $square = $('.square');
  $canvas.mousedown(function() {
    $square.bind('mouseenter', function(){
        $(this).addClass('highlight');
    });
  });
  $canvas.mouseup(function() {
      $square.unbind('mouseenter');
  });
  $square.on('click', function(){
        $(this).addClass('highlight');
    });
    $dimension.on('keyup', function(){
        setCount();
        setDim();
    });
    /*
    $('.generate').on('click', function(){
        generate();
    });*/
}
function toggleNav(){
    if (sideNav.style.width == "100px"){
        sideNav.style.width = "0px";
        menuButton.style.marginLeft ="0px";
    }
    else {
        sideNav.style.width = "100px";
        menuButton.style.marginLeft ="100px";
        setTimeout(function() { 
            //clear and reset val to force cursor to the end of the input following focus
            $dimension.focus().val('').val(count); 
        }, 300);
        
    }
}

// Currently will not set the count to the limit on the initial page load if the value is one digit greater than the limit 
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
    setDimensions();
    $canvas.empty();
    for (var i = 0; i < count; i++){
        $canvas.append('<tr class="row"></tr>'); //row ' + i + ' 
        var child = $canvas.find('tr:last');
        for (var j = 0; j < count; j++)
        {
            child.append('<td class="square squareDim"></td>');
        }
    }
    listen();
}

function setDimensions(){
    var edge = 800/count + 'px';
    var selector = '.squareDim';
    var propStr = 'padding-left : ' + edge +'; padding-bottom : ' + edge;
    
    if (stylesheet.cssRules[stylesheet.cssRules.length-1].selectorText===".squareDim"){
        stylesheet.deleteRule(stylesheet.cssRules.length-1);
    }
    stylesheet.insertRule(selector + '{' + propStr + '}', stylesheet.cssRules.length);
}
