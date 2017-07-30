
// https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Expressions_and_Operators
// https://www.w3schools.com/js/js_comparisons.asp 


let battery = 5;

if( battery > 100 ){
    return;
}

if( battery == 100 ){ 
    console.log('Full charged.');
} else if ( battery >= 50 ){
    console.log('Battery is ok')
} else if ( battery >= 20 ){
    console.log('Battery remain: 50% - 20%')
} else {
    console.log('Please charge your device.');
}