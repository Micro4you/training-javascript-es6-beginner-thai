'use strict'

let productInCart = ['ของเล่น','ข้าวสาร','กระทะเกาหลี','น้ำตาล','น้ำปลา'];

console.log('จำนวนของที่อยู่ในตะกร้า', productInCart.length, 'ชิ้น')

for (let index = 0; index < productInCart.length; index++) {
    let product = productInCart[index];
    console.log(product);
}