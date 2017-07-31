


let grade = "A";

switch (grade) {
    case "A":
        console.log('เยี่ยมมาก คุณได้', grade);
        break;

    case "B":
        console.log('ดีมาก คุณได้', grade);
        break;

    case "C":
        console.log('เยี่ยมมาก คุณได้', grade);
        break;
    
    case "D":
        console.log('ได้', grade, 'พยายามอีกหน่อยนะ');
        break;
    
    case "F":
        console.log('ได้', grade, ' รีบซ่อมโดยพลัน');
        break;

    default:
        console.log('เกรด', grade, ' ไม่มีในระบบนี่นา');
        break;
}