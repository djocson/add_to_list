window.onload = init;

function init(){
  let addButton = document.getElementById("addBtn");  
  addButton.onclick = addButtonClick; 
}

function addButtonClick(){
  let textInput = document.getElementById("nText");
  let nText = textInput.value;
  if(nText == ""){
    alert("Введите текст");
  }else{
    let ul = document.getElementById("textList");
    let li = document.createElement("li");  
  let nTxt = document.createElement("div");
  nTxt.innerHTML = nText;
  nTxt.setAttribute("class", "elem");
  
  let delBtn = document.createElement("button");
  let textDelBtn = document.createTextNode("X");
  delBtn.onclick = delButtonClick;
  delBtn.setAttribute("class", "delBtn");
  
  let editBtn = document.createElement("button");
  let textEditBtn = document.createTextNode("Редактировать");
  editBtn.onclick = editButtonClick;
  
    ul.appendChild(li);
    li.appendChild(nTxt);
  li.appendChild(delBtn);
  delBtn.appendChild(textDelBtn);
  li.appendChild(editBtn);
  editBtn.appendChild(textEditBtn);
  }
  textInput.value = "";
}

function delButtonClick(){
  this.parentNode.parentNode.removeChild(this.parentNode);
}

function editButtonClick(){
  let li = this.parentNode;
  //this.innerHTML = li.firstChild.textContent;
  //li.firstChild.innerHTML = "";
  for (let i = 0; i < li.childNodes.length; i++)
    li.childNodes[i].style.display = "none";
  let editInput = document.createElement("input");
  editInput.setAttribute("type", "text");
  
  let okBtn = document.createElement("button");
  let textOkBtn = document.createTextNode("OK");
  okBtn.setAttribute("class", "ok");
  
  let cancelBtn = document.createElement("button");
  let textCancelBtn = document.createTextNode("Отмена");
  
  li.appendChild(editInput);
  li.appendChild(okBtn);
  okBtn.appendChild(textOkBtn);
  li.appendChild(cancelBtn);
  cancelBtn.appendChild(textCancelBtn);
  okBtn.onclick = endEdit;
  cancelBtn.onclick = endEdit;
}
  
function endEdit(){
    let li = this.parentNode;
    let newText = li.childNodes[3].value;
    if (!(this.classList.contains("ok")) || newText != "") {
      if (this.classList.contains("ok")) {
		this.parentElement.firstChild.innerHTML = newText;
	  } 
	  for (let i = 0; i < 3; i++)
        li.childNodes[i].style.display = "inline";
      while (li.childNodes.length > 3)
        li.removeChild(li.lastChild);
    } else {
      alert("Введите текст");
    }
}

