window.onload = init;
let count = 0;

//class Li {
//  number;
//  text;
//  delButton;
//  editButton;
//}

function init() {
  const addButton = document.getElementById("addBtn");
  addButton.onclick = addElementToList;

  const sortButtons = document.querySelectorAll('input[name="sortBtn"]');
  for (i = 0; i < sortButtons.length; i++) {
    sortButtons[i].onclick = sortList;
  }
}

function addElementToList() {
  let textInput = document.getElementById("nText");
  let nText = textInput.value;
  if (nText == "") {
    alert("Введите текст");
  } else {
    count++;
    const ul = document.getElementById("textList");
    let li = document.createElement("li");
    let nTxt = document.createElement("div");
    nTxt.innerHTML = nText;
    nTxt.setAttribute("class", "elem");

    let delBtn = document.createElement("button");
    delBtn.onclick = delElementFromList;
    delBtn.setAttribute("class", "delBtn");

    let editBtn = document.createElement("button");
    editBtn.onclick = editElementInList;

    ul.appendChild(li);
    li.innerHTML = count + " ";
    li.appendChild(nTxt);
    li.appendChild(delBtn);
    delBtn.innerText = "X";
    li.appendChild(editBtn);
    editBtn.innerText = "Редактировать";
  }
  textInput.value = "";
}

function delElementFromList() {
  this.parentNode.parentNode.removeChild(this.parentNode);
}

function editElementInList() {
  let li = this.parentNode;
  for (let i = 1; i < li.childNodes.length; i++) {
    li.childNodes[i].style.display = "none";
  }
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
  
function endEdit() {
  const li = this.parentNode;
  let newText = li.childNodes[4].value;
  if (!(this.classList.contains("ok")) || newText != "") {
    if (this.classList.contains("ok")) {
      this.parentElement.childNodes[1].innerHTML = newText;
    }
    for (let i = 1; i < 4; i++) {
      li.childNodes[i].style.display = "inline";
    }
    while (li.childNodes.length > 4) {
      li.removeChild(li.lastChild);
    }
  } else {
    alert("Введите текст");
  }
}

function sortList() {
  let nodeList = document.querySelectorAll('li');
  let elemList = [];
  if (nodeList.length) {
    let parent = nodeList[0].parentNode;
    for (var i = 0; i < nodeList.length; i++) {
      elemList.push(parent.removeChild(nodeList[i]));
    }
    switch (this.id) {
      case 'ZAsort':
        elemList.sort(rvrsAlphabetSort(nodeA, nodeB))
          .forEach(function (node) {
            parent.appendChild(node)
          });
      case 'AZsort':
        elemList.sort(alphabetSort(nodeA, nodeB))
          .forEach(function (node) {
            parent.appendChild(node)
          });
        break;
      case 'ascSort':
        elemList.sort(function (nodeA, nodeB) {
          var textA = nodeA.querySelector('li:nth-child(1)').textContent;
          var textB = nodeB.querySelector('li:nth-child(1)').textContent;
          var a = parseInt(textA);
          var b = parseInt(textB);
          return a - b;
        })
          .forEach(function (node) {
            parent.appendChild(node)
          });
        break;
      case 'desSort':
        elemList.sort(function (nodeA, nodeB) {
          var textA = nodeA.querySelector('li:nth-child(1)').textContent;
          var textB = nodeB.querySelector('li:nth-child(1)').textContent;
          var a = parseInt(textA);
          var b = parseInt(textB);
          return b - a;
        })
          .forEach(function (node) {
            parent.appendChild(node)
          });
        break;
      default:
        alert("А-а-а-а! Все сломалось!");
    }
  }
}

function alphabetSort(nodeA, nodeB) {
  let textA = nodeA.querySelector('div:nth-child(2)').textContent;
  let textB = nodeB.querySelector('div:nth-child(2)').textContent;

  let numberA = parseInt(textA);
  let numberB = parseInt(textB);
  if (numberA < numberB) return -1;
  if (numberA > numberB) return 1;
  return 0;
}

function rvrsAlphabetSort(nodeA, nodeB) {
  let textA = nodeA.querySelector('div:nth-child(2)').textContent;
  let textB = nodeB.querySelector('div:nth-child(2)').textContent;

  let numberA = parseInt(textA);
  let numberB = parseInt(textB);
  if (numberA < numberB) return 1;
  if (numberA > numberB) return -1;
  return 0;
}