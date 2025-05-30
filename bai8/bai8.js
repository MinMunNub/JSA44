let elementClassNameLine1 = document.getElementsByClassName("line1")
console.log(elementClassNameLine1[0].innerText)
console.log(elementClassNameLine1[1].innerText)
console.log(elementClassNameLine1[2].innerText)

elementClassNameLine1[0].style.backgroundColor = "green"
elementClassNameLine1[1].style.backgroundColor = "red"
elementClassNameLine1[2].style.backgroundColor = "blue"

// querySelector(value): lay the giong cach lay trong css
// value: class, id, thể, thẻ
// lay ra the dau tien duoc phat hien

// querySelectorAll(value)

// let li = document.querySelector("li")
// console.log(li)

// let classElement = document.querySelectorAll(".line1")
// console.log(classElement)

const h1 = document.getElementById("h1")
h1.style.textDecoration = "underline"

const h1p2 = document.getAnimations("h1p2")
h1p2.style.textDecoration = "underline"



















