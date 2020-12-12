function displayDate() {
    document.getElementById("demo").innerHTML = Date();
}

// create a div
var myDivEl = document.createElement('div');
// add content to div
myDivEl.textContent = "The Lord of the Ring";
// what will I hook my dom created elements to
var myMainEl = document.querySelector('#main');
// Add created dom element to "hook"
myMainEl.append(myDivEl)
var myCharactersEl = document.querySelector('.characters');
var myUlEl = document.createElement('ul');
myCharactersEl.append(myUlEl);

// array of characters
var characters = ['FRODO', 'BILBO', 'SAMWISE'];
// last item in array note
// console.log('last', characters.length - 1);

// loop through characters
for (var i = 0; i < characters.length; i++) {
    var character = document.createElement('li');
    character.textContent = (characters[i]).toLowerCase();
    myUlEl.append(character);
    // console.log(characters[i]);
}

document.getElementById("myBtn").addEventListener("click", displayDate);




