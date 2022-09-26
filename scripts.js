function copy()
{
    let copyText = document.getElementById("note");

    // Select the text field
    copyText.select();
    // copyText.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(copyText.value);

  // Alert the copied text
  alert("Copied the text: " + copyText.value);
}

function boldText(){
    var target = document.getElementById("note");
    if( target.style.fontWeight == "bolder" ) {
        target.style.fontWeight = "normal";
    } else {
        target.style.fontWeight = "bolder";
    }
}

function italicText(){
    var target = document.getElementById("note");
    if( target.style.fontStyle == "italic" ) {
        target.style.fontStyle = "normal";
    } else {
        target.style.fontStyle = "italic";
    }
}

function underlineText(){
    var target = document.getElementById("note");
    if( target.style.textDecoration == "underline" ) {
        target.style.textDecoration = "none";
    } else {
        target.style.textDecoration = "underline";
    }
    
}

function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
   
    if (document.body.style.backgroundColor === "black") {
        document.getElementById('stch').innerText("Enable Light mode");
    }
    else{
        document.getElementById('stch').innerText("Enable Dark mode");
    }
 }


//  new notes  
var listArr = [];
var inputDOM = document.querySelector('.add-list');
var button = document.querySelector('#submit');
var lists = document.querySelector('#list');
var lis;
var text;
var arrPos;
var update;
button.addEventListener('click', function(e){
	e.preventDefault();
	listArr.push(inputDOM.value);
	inputDOM.value = "";
	populateList();
})

// listen to li clicks
lists.addEventListener('click', checkClick);

function populateList() {
	lists.innerHTML = listArr.map(item => {
		return `<li>
				<div class="item">${item}</div><div class="delete">x</div>
			</li>`
	}).join('');
	lis = Array.from(document.querySelectorAll('ul#list li'));
}

function checkClick (e) {
	if (e.target.className == 'item') {
		updateItem(e);
		populateList();
	} else if(e.target.className == 'delete') {
		deleteItem(e);
		populateList();
	}
}

function deleteItem (e) {
	text = e.target.parentNode.childNodes[1].innerHTML;
	arrPos = listArr.indexOf(text);
	listArr.splice(arrPos,1);
}

function updateItem (e) {
	update = prompt("Update Item", "enter new value");
	text = e.target.parentNode.childNodes[1].innerHTML;
	arrPos = listArr.indexOf(text);
	listArr[arrPos] = update;
}

