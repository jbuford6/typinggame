var sentence = ['ten ate neite ate nee enet ite ate inet ent eate',

'Too ato too nOt enot one totA not anot tOO aNot',

'oat itain oat tain nate eate tea anne inant nean',

'itant eate anot eat nato inate eat anot tain eat', 

'nee ene ate ite tent tiet ent ine ene ete ene ate'];
var sentenceCounter = 0;
    letterCounter = 0;
    currentSentence = '';

$(document).ready(function () {
    $("#keyboard-upper-container").hide();
    
$(document).on('keyup keydown', function (e) {
        if (e.shiftKey) {
            $("#keyboard-lower-container").hide();
            $("#keyboard-upper-container").show();
        } else {
            $("#keyboard-lower-container").show();
            $("#keyboard-upper-container").hide();
        }
        
        if (e.type === 'keydown') {
            handleHighlight(e, 'lightblue');
        } else {
            handleHighlight(e, '#f5f5f5');
        }
        });
    });
     
function handleHighlight(e, color) {
    var code = e.keyCode;

    if (!e.shiftKey && utils.isAlpha(code)) {
        code = e.keyCode + 32;
    }

    if (utils.isAlphanumeric(code)) {
        $('#' + code).css('background-color', color);
    } else {
        $('span:contains('+ e.key +')').css('background-color', color);
    }
}
var utils = {
    isAlphanumeric: function(code) {
        if ((code >= 65 && code <= 90) || (code >= 48 && code <= 57)) {
            return true;
        } else {
            return false;
    }
},
isNumber: function(code) {
    if (code >= 48 && code <= 57){
        return true;
    } else {
        return false;
    }
},
isAlpha: function(code) {
    if (code >= 65 && code <= 90) {
        return true;
    } else {
        return false;
         }
    }
};
function mySentences() {
    var sentenceDiv = $('#sentence');
    sentenceDiv.empty();
    sentenceDiv.append(sentence[sentenceCounter]);
    sentenceCounter++;
}
mySentences();

function handleResponse(e) {

}

    





















