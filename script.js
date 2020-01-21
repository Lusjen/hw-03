//мій прямокутник
let y;
let x;
let n = 15; 
let s = 5;
for (y = 0; y < s; y++ ) {
    for (x = 0; x < n; x++) {
        if ( (y == 0) || (y == s - 1) )  {
                document.write(`*`);
        }
        else if ( (x == 0) || ( x == n -1)) {
            document.write(`*`);
        } 
        else {
            document.write(`&nbsp;\n`);
        }
    }
    document.write("<br>");
}
//моя програмка
const minAge = 18;
const maxAge = 22;
let nameTultip = "Люда";
let ageTultip = "25";
let name = prompt("Введіть Ваше ім'я", nameTultip);
let age = +prompt("Введіть Ваш вік", ageTultip);
console.log(name);
console.log(age);
while ( (name == '') || (name == null) ) {
   name = prompt("Введіть Ваше ім'я", nameTultip);
    age = +prompt("Введіть Ваш вік", ageTultip);
} 
if ( age < minAge ){
    alert("You are not allowed to visit this website");
    }
else if ((age > minAge && (age <= maxAge)) ) {
    const value1 = confirm("Are you sure you want to continue");
    if (value1) {
        alert("Welcome, " + name);
    }
    else {
        alert("You are not allowed to visit this website");
    }
}
else {
    alert("Welcome, " + name);
}    