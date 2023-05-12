const LiveToastBtn = document.querySelector("#liveToastBtn");
const DELETE_Click2 = ` <button type="button" onclick="DeleteFonk()" class="delete  btn float-right" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="float-right bi bi-x " >
<path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
</svg></button>`;
var hazirList = [
  "3 Litre Su İç",
  "Ödevleri Yap",
  "En Az 3 Saat Kodlama Yap",
  "Yemek Yap",
  "50 Sayfa Kitap Oku",
];

const idsiLi = document.querySelector("#list");
const idTask = document.querySelector("#task");
var liElementsSearch = document.querySelectorAll("li");
console.log(liElementsSearch.length,"Dışardaki ve Bu kadar li varmoş");
if (document.querySelectorAll("li").length == 0) {
  console.log(liElementsSearch.length,"Girdi ve Bu kadar li varmoş");
  if (Boolean(localStorage.getItem("Notes"))) {
    // Burada eski kayıt varsa diyoruz Yani Eskiden Not almış mı kayıt ediyıruz
    var locallist = [];
    locallist = JSON.parse(localStorage.getItem("Notes"));
    let sayi = locallist.length;
    for (let i = 0; i < sayi; i++) {
      // Eski Kayıt var ise SADECE TEKRAR KAYIT ETMEDEN ekrana yazdırma işlemi yapıyoruz
      const newDOM = document.createElement("li");
      newDOM.innerHTML = locallist[i];
      idsiLi.append(newDOM);
      locallist.push(newDOM.innerHTML);
    }
  } else {
    // Eski kayıt yoksa siteye yeni giriş yapıyorsa boş bir liste oluşturuyoruz
    var locallist = [];
  }
}
newElement = () => {
  // ekle butonu ile yeni element ekliyoruz
  const newDOM = document.createElement("li");
  if (idTask.value != "") {
    newDOM.innerHTML = idTask.value + DELETE_Click2;
    idsiLi.append(newDOM);

    idTask.value = "";
    idTask.placeholder = "Bugün ne yapacaksın?";
    locallist.push(newDOM.innerHTML);
    localStorage.setItem("Notes", JSON.stringify(locallist));
  }
};

FonkDelete = (e) => {
  e.innerHTML = "aaaa";
};

var liElements = document.querySelectorAll("#list li");
liElements.forEach(function (e) {
  e.addEventListener("click", function () {
    var isChecked = e.classList.contains("checked");
    if (isChecked) {
      e.classList.remove("checked");
    } else {
      e.classList.add("checked");
    }
  });
});

// const xItem =document.querySelector(".delete")
// xItem.addEventListener("OnClick",DeleteFonk)

DeleteFonk = (e) => {
  console.log("Tıkladı Delete Butona");
  // işaretli ise siliyoruz
  var checkedLiElements = document.querySelectorAll("#list li.checked");
  checkedLiElements.forEach(function (li) {
    li.remove();

    //     // Şimdi Kalan li elementlerini bulup locallist yapalım
    //     let AllLiDom = document.querySelectorAll("li");
    //     console.log(AllLiDom.length);
    //     for (let index = 0; index < AllLiDom.length; index++) {
    //       locallist = [];
    //       locallist.push(AllLiDom[index].innerHTML);
    //       console.log(index, " kadar girdi");
    //       localStorage.setItem("Notes", JSON.stringify(locallist));
    //     }
  });
};
