// function trong js: tao ra mot chuc nang trong js de thuc thi mot khoi cau lenh
// cong thuc: function ten () {
//      code duoc chay o day neu ten function duoc goi
// }

// buoc goi ten function: ten()
// function chi chay khi duoc goi ten
// function printMyName() {
//     console.log("hello toi ten la tung anh")
// }

// goi ten
// printMyName

function changeName() {
    const nameElement = document.getElementById("name");
    if (nameElement.textContent === "Danh Phuong") {
        nameElement.textContent = "evil larry";
    } else {
        nameElement.textContent = "Danh Phuong";
    }
}

function randomText() {
    document.getElementById("blank").textContent = "hello toi la danh phuong sigma"
}

function toggleModal() {
  const modal = document.getElementById("myModal");
  modal.classList.toggle("hidden");
}

function changeBgColor() {
  const modal = document.getElementById("myModal");

  if (modal.classList.contains("bgred")) {
    modal.classList.remove("bgred");
    modal.classList.add("bggreen");
  } else {
    modal.classList.remove("bggreen");
    modal.classList.add("bgred");
  }
}















