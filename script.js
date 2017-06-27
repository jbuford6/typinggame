var sentences = ['ten ate neite ate nee enet ite ate inet ent eate',
    'Too ato too nOt enot one totA not anot tOO aNot',
    'oat itain oat tain nate eate tea anne inant nean',
    'itant eate anot eat nato inate eat anot tain eat',
    'nee ene ate ite tent tiet ent ine ene ete ene ate'];
var keyPress;
var b = -1;
var start = new Date();
var j = 0;
var sentLength = sentences[j].length;
var numMove = 0;
var numOfWords = 54;
var wrong = $('<span />').attr({'class':'glyphicon glyphicon-remove', 'aria-hidden':'true' });
var numWrong = 0;
var right = $('<span />').attr({'class':'glyphicon glyphicon-ok', 'aria-hidden':'true' });
var lower = $('#keyboard-lower-container');
var upper = $('#keyboard-upper-container')

$(document).ready(function() {
    upper.hide();
    
$(document).keyup(function() {
    if(event.which == 16) {
        lower.show();
        upper.hide();
    }   
});

$(document).keydown(function() {
    if(event.which == 16) {
        lower.hide();
        upper.show();
    }   
});
$('body').keypress(function(which) {
    keyPress = String.fromCharCode(event.which);
});

$(document).keypress(function(event) {
    $('#' + event.which).css('background-color', 'lightblue');
        $(document).keyup(function() {
            $('#' + event.which).css('background-color', '#f5f5f5');
        });
});
    $('#sentence').html((sentences[0].split('')));
    $('body').on('keypress', function() {
        b++;
        move();
    });
});

// function gameOver() {
//     var lapse = milliseconds / 60000;
//     var minutes = Math.round(lapse);
//     var duration = (numOfWords / minutes - 2 * numWrong);
//     var time = new Date() - start;
//     var right = confirm('Speed: ' + duration + ' WPM.' + '\nErrors: ' + numWrong + '\nTry again???');
//     if (yes == true){
//         location.reload();
//     } else {
//         alert('Ok');
//     }  
// };
function move() {
    numMove++;
    var sentChar = sentences[j].charAt(b);
    $('#yellow-block').animate({left: "+=17px"}, 15);
    $('#target-letter').text(sentChar);
    if (sentChar == keyPress) {
    $('#feedback').html(right);
    } else if (numMove == 50){
        gameOver();
    }
    else if (numMove >= sentences[j].length) {
        j++;
        $('#yellow-block').animate({left: "1em"}, 15);
        $('#sentence').html((sentences[j]).split(''));
        $('#feedback').html('');
        numMove = 0;
        b = -1;
        return;
    } else {
        $('#feedback').html(wrong);
        numWrong++;
    }
};






















