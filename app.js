// createELement
var liElement = document.createElement('li');
document.getElementById('ingredients').append(liElement);
liElement.innerHTML = 'Eggs';

// querySelector
var firsth2 = document.querySelector('h2');
firsth2.innerHTML +='Ingredients';

// getElementById
var ulElement = document.getElementById('ingredients');
ulElement.style.fontWeight = 'normal';

// querySelectorAll
var pTags = document.querySelectorAll('p');
    for (var i = 0; i < pTags.length; i++) {
    pTags[i].innerHTML += ' <<< Step '+[i+1];
    }

// getElementsByClassName
var prgrph = document.getElementsByClassName('para');
    for (var i = 0; i < pTags.length; i++) {
        prgrph[i].style.color = 'red';
    }

// getElementsByTagName
    var list = document.getElementsByTagName('li');
    for (var i = 0; i < list.length; i++) {
        list[i].style.color = 'blue';
    }

// classList.add
var clssLst = document.getElementById('ingredients');
clssLst.classList.add('myStyle');
clssLst.classList.add('anotherStyle');

// classList.remove
var clssLst = document.getElementById('ingredients');
clssLst.classList.remove('anotherStyle');

// classList.toggle
function toggleList(){
    var tggl = document.getElementById('ingredients');
    tggl.classList.toggle('hide');
}
