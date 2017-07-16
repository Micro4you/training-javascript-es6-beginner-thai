
// 1. สร้างไฟล์ JavaScript ใหม่ และตั้งชื่อให้เรียบร้อย
// 2. ย้าย Player class ไปไว้ในไฟล์ใหม่ (ไม่นับส่วนของการ new Object ด้านล่าง)
// 3. ใช้คำสั่ง require เพื่อเรียก class Player มาใช้งาน
// 4. ต้องได้ผลลัพธ์เหมือนเดิม โดยที่ต้องไม่เปลี่ยนแปลง ส่วนของการใช้งาน class ด้านล่าง
let Player = require('./player');

let man = new Player("Pon",500, 200);
man.attack();
console.log(man.ability)
