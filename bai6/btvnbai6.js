// bai1
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sum = 0;

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//         sum = sum + numbers[i];
//     }
// }

// console.log("tong cac so chan la:" + sum);



// bai2
// const students = [
//     { name: "An", score: 8 },
//     { name: "Bình", score: 9 },
//     { name: "Châu", score: 7 }
// ];

// let dc = students[0].score;
// let hsg = students[0].name;

// for (let i = 1; i < students.length; i++) {
//     if (students[i].score > dc) {
//         dc = students[i].score;
//         hsg = students[i].name;
//     }
// }

// console.log("hoc sinh co diem cao nhat la:" + hsg);



// bai3
// const products = [
//     { name: "Sách", quantity: 3 },
//     { name: "Bút", quantity: 0 },
//     { name: "Thước", quantity: 5 }
// ];

// let trangthai = [];

// for (let i = 0; i < products.length; i++) {
//     if (products[i].quantity > 0) {
//         trangthai.push(products[i].name);
//     }
// }

// console.log("cac san pham con hang" + trangthai);



// bai4
// const items = ["cam", "xoài", "cam", "ổi", "cam"];
// let obj = "cam";
// let count = 0;

// for (let i = 0; i < items.length; i++) {
//     if (items[i] === obj) {
//         count++;
//     }
// }

// console.log(`${obj} xuat hien ${count} lan trong mang`);



// bai5
// const students = [
//     { name: "An", score: 7 },
//     { name: "Bình", score: 8 },
//     { name: "Châu", score: 9 }
// ];

// let td = 0;

// for (let i = 0; i < students.length; i++) {
//     td += students[i].score;
// }

// let dtb = td / students.length;

// console.log("diem tb cua cac hoc sinh la:" + dtb);



// bai6
// const students = [
//     { name: "An", score: 7 },
//     { name: "Bình", score: 9 },
//     { name: "Châu", score: 10 }
// ];

// let t8 = [];

// for (let i = 0; i < students.length; i++) {
//     if (students[i].score > 8) {
//         t8.push(students[i].name);
//     }
// }

// console.log("cac hoc sinh co diem tren 8:" + t8);



// bai8
// const cart = [
//     { name: "Sách", price: 100, quantity: 2 },
//     { name: "Bút", price: 10, quantity: 10 }
// ];

// let tt = 0;

// for (let i = 0; i < cart.length; i++) {
//     tt += cart[i].price * cart[i].quantity;
// }

// console.log("tong tien cac san pham la" + tt);



// bai9
// const students = [
//     { name: "An", score: 7 },
//     { name: "Bình", score: 4 },
//     { name: "Châu", score: 9 }
// ];

// let d5 = false;

// for (let i = 0; i < students.length; i++) {
//     if (students[i].score < 5) {
//         console.log("hoc sinh co diem duoi 5 la" + students[i].name);
//         d5 = true;
//     }
// }

// if (!d5) {
//     console.log("ko co hoc sinh co diem duoi 5.");
// }



// bai10
// const students = [
//     { name: "An", score: 7 },
//     { name: "Bình", score: 4 },
//     { name: "Châu", score: 9 }
// ];

// let kq = [];

// for (let i = 0; i < students.length; i++) {
//     let tt = students[i].score >= 5 ? "dau" : "rot";
//     kq.push({ name: students[i].name, status: tt });
// }

// console.log("danh sach ket qua:", kq);




























