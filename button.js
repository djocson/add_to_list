window.onload = init;
function init(){
	var button = document.getElementById("addButton");
	button.onclick = handleButtonClick; 
}
function handleButtonClick(){
	var textInput = document.getElementById("nText");
	var nText = textInput.value;
    if(nText == ""){
        alert("Введите текст");
    }else{
		var ul = document.getElementById("textList");
        var li = document.createElement("li");
        li.innerHTML = nText;
        ul.appendChild(li);
    }
	textInput.value = "";
}