const ulDOM = document.getElementById("list");
var hazirList=["3 Litre Su İç", "Ödevleri Yap", "En Az 3 Saat Kodlama Yap", "Yemek Yap", "50 Sayfa Kitap Oku"];
let x= localStorage.getItem("listItem") ? JSON.parse( localStorage.getItem("listItem")) : [];
let q=document.getElementsByTagName("li");
const X_SIGN =`<button type="button" class="delete float-right  btn" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="float-right" >
<path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
</svg></button>`;


if(x.length===0){
    for(var i=0;i<hazirList.length;i++){
        var liDOM = document.createElement("li");
        liDOM.innerHTML=hazirList[i]+X_SIGN;
        ulDOM.append(liDOM);
        x.push(hazirList[i]); 
       
    }
}
else{
    for(var i=0;i<x.length;i++){
        var liDOM = document.createElement("li");
        liDOM.innerHTML=x[i]+X_SIGN;
        ulDOM.append(liDOM);
    }
}

function newElement(){
    var inputDOM = document.getElementById("task").value;
    inputDOM = inputDOM.trim().replace(/\s+/g, ' ');
    
    if(inputDOM && inputDOM != ""){
        var liDOM = document.createElement("li");
        liDOM.innerHTML=inputDOM+X_SIGN;
        x.push(inputDOM);
        ulDOM.append(liDOM);
        console.log(x);
        localStorage.setItem("listItem", JSON.stringify(x));
        $('#liveToast1').toast('show');
        document.getElementById("task").value="";
    }
    else{
        $('#liveToast2').toast('show');
    }
    
}

var liElements = document.querySelectorAll("#list li");
liElements.forEach(function(e){
    e.addEventListener("click", function(){
        var isChecked = e.classList.contains("checked");
        if(isChecked){
            e.classList.remove("checked");
        }
        else{
            e.classList.add("checked");
        }
        
    })
})


var xSignElements = document.querySelectorAll("button.delete");
xSignElements.forEach(function(e){
    e.addEventListener("click", function(){
        var checkedLiElements = document.querySelectorAll("#list li.checked");
        checkedLiElements.forEach(function(li){
            li.remove();
            
        });
        var clickedElement = e.parentNode;
        if(!clickedElement.classList.contains("checked")){
            clickedElement.remove();
        }
        var listElements = document.querySelectorAll("#list li")
        var listUpdate = [];

        listElements.forEach(function(li){
            var liText = li.textContent.trim();
            listUpdate.push(liText);
        })
        console.log(listUpdate)
        localStorage.setItem("listItem", JSON.stringify(listUpdate));
        

    })
})