/**
 * >
 * <
 * <=
 * >=
 * == : chi so sanh ve du lieu va ko quan tam ve kieu du lieu
 * === : so sanh ca kieu du lieu va du lieu
 * !=
*/

/**
 * && : ky hieu "va" se tra ve neu ve truoc va sau dau && deu la dung
 * || : ky hieu "hoac" se tra ve dung neu 1 trong 2 hoac ca hai deu la dung
 */

// let a = "20"
// let b = 20
// let c = 100

// let result = a === b && b > c
// console.log(result)

/**
 * if : dieu kien, code se duoc thuc thi neu dieu kien dung
 * else : la truong hop doi cua if va se duoc thuc thi neu dieu kien la sai
 * else if : se duoc thuc hien neu dieu kien 1 la dung
 */

// Dat da tung yeu 3 nguoi la "lan", "chi", "hoa"

// let ny_cua_dat = "lan"
// if (ny_cua_dat === "lan") {
//     console.log(`nguoi yeu cua dat la ${ny_cua_dat}`)
// } else if (ny_cua_dat === "chi") {
//     console.log(`nguoi yeu thu 2 cua dat la ${ny_cua_dat}`)
// } else if (ny_cua_dat === "hoa") {
//     console.log(`nguoi yeu thu 3 cua dat la ${ny_cua_dat}`)
// } 
// else {
//     console.log(`dat chua tung yeu ai ten la ${ny_cua_dat}`)
// }

// let a = Number(prompt("nhap diem kiem tra"))
//   if (a < 5) {
//        console.log(`danh gia cua ban la F`) 
// } else if (a >= 5 && a < 6) {
//        console.log(`danh gia cua ban la D`)
// } else if (a >= 6 && a < 7) {
//        console.log(`danh gia cua ban la C`)
// } else if (a >= 7 && a < 8) {
//        console.log(`danh gia cua ban la B`)
// } else if (a >= 8 && a < 9) {
//        console.log(`danh gia cua ban la A`)
// } else if (a >= 9) {
//        console.log(`danh gia cua ban la A+`)
// } if (a < 0 && a > 10) {
//        console.log(`hay nhap dung diem`)
// }

// let input = prompt("Nhap 3 so")
// let [a, b, c] = input.split(" ").map(Number);
// if ( 0 < a <= 1000 && 0 < b <= 1000 && 0 < c <= 1000) {
//     console.log(`yes`)
// } if ( a > 1000 && b > 1000 && c > 1000 ) {
//     console.log(`no`)
// }

// a = 2
// b = 5
// c = 6

// min = 0
// if (a > b) {
//     min = b
// } else {
//     min = a
// }
// if (min > c) {
//     min = c
// }
// console.log(`so nho nhat la ${min}`)

// bai1
// let a = Number(prompt("nhap mot so"));
// if (a % 2 === 0) {
//   alert("day la so chan");
// } else {
//   alert("day la so le");
// }

// bai2
// let a = Number(prompt("nhap so a"));
// let b = Number(prompt("nhap so b"));

// if (a > b) {
//   alert("so lon hon la: " + a);
// } else if (b > a) {
//   alert("so be hon la: " + b);
// } else {
//   alert("ca hai bang nhau");
// }

// bai3
// let a = Number(prompt("nhap tuoi"));
// if (a >= 18) {
//   alert("du dieu kien");
// } else {
//   alert("ko du dieu kien");
// }

// bai4
// let a = Number(prompt("nhap diem trung binh"));

// if (a >= 8) {
//   alert("xep loai gioi");
// } else if (a >= 6.5) {
//   alert("xep loai kha");
// } else if (a >= 5) {
//   alert("xep loai trung binh");
// } else {
//   alert("xep loai yeu");
// }

// bai5
// let a = Number(prompt("nhap nam"));

// if ((a % 4 === 0 && a % 100 === 0) || a % 400 === 0) {
//   alert("la nam nhuan");
// } else {
//   alert("ko phai nam nhuan");
// }

// bai6
// let a = Number(prompt("nhap mot so"));

// if (a > 0) {
//   alert("so duong");
// } else if (a < 0) {
//   alert("so am");
// } else {
//   alert("so 0");
// }

// bai7
// let a = Number(prompt("nhap so dien tieu thu"));
// let b;

// if (a <= 50) {
//   b = a * 1000;
// } else {
//   b = 50 * 1000 + (a - 50) * 1200;
// }

// alert("tien dien can tra la: " + b + "vnd");

// bai8
// let a = prompt("nhap mat khau");

// if (a === "123456") {
//   alert("dung mat khau");
// } else {
//   alert("sai mat khau");
// }

// bai9
// let a = Number(prompt("nhap mot so"));

// if (a >= 10 && a <= 100) {
//   alert("so nam trong khoang 10 den 100");
// } else {
//   alert("so ko nam trong khoang 10 den 100");
// }








