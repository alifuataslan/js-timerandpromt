let UserFormDom = document.querySelector("#UserForm");
UserFormDom.addEventListener("submit", formFonk);

function formFonk(e) {
  e.preventDefault();
  var User_Name = document.querySelector("#UserName").value;
  var User_Note = document.querySelector("#UserNote").value;
Alert_zone =(type_alert="warning",section,icerik)=>

 `<div class="alert alert-${type_alert} alert-dismissible fade show" role="alert">
    <strong>${section}</strong> ${icerik}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>`

  if (User_Name != "" && User_Note != "") {
    addItem(User_Name, User_Note);
  } else {
    const salakca= document.querySelector(".alert_verme");

    salakca.innerHTML =Alert_zone("danger","Başlık Kısmı","içerik kısmı");
  }
}

let liDom = document.querySelector("#user_list");
addItem = (User_Name, User_Note) => {
  let li = document.createElement("li");
  li.innerHTML = `<div class="ms-2 me-auto ">
                        <div class="fw-bold">${User_Name}</div>
                       
                    </div>
                    <span class="badge bg-primary rounded-pill">${User_Note}</span>`;
  li.classList.add(
    "list-group-item",
    "d-flex",
    "justify-content-between",
    "align-items-start"
  );
  liDom.append(li);
};

/*

<li class="list-group-item d-flex justify-content-between align-items-start">
                    <div class="ms-2 me-auto ">
                        <div class="fw-bold">Subheading</div>
                        Content for list item
                    </div>
                    <span class="badge bg-primary rounded-pill">14</span>
                </li>*/
