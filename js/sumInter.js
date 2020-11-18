// 0 - 4            = 10
// -50 - 50         = 0
// 0 - 100          = 5050
// 0 - 0            = 0
// 574 - 815        = didelis teigiamas sveikas
// -70 - 30         = santykinai mazas neigiamas sveikas

const nuo = 8;
const iki = 5;

let sum = 0;

if (nuo < iki) {
    for (let i = nuo; i <= iki; i++) {
        sum = sum + i;
    }
} else {
    for (let i = iki; i <= nuo; i++) {
        sum = sum + i;
    }
}

console.log(`Skaičių intervale tarp ${nuo} ir ${iki} suma yra ${sum}`);


// 0 - 4            = 10
// -50 - 50         = 0
// 0 - 100          = 5050

const nuo1 = 8;
const iki1 = 5;
let sum1 = 0;
if (nuo1 < iki1) {
    for (let i = nuo1; i <= iki1; i++) {
    console.log(i);
    sum1 = sum1 + i;
    console.log(sum1);
    }
} else {
    for (let i = iki1; i <= nuo1; i++) {
        console.log(i);
        sum1 = sum1 + i;
        console.log(sum1);
    }
}

// skaiciu eile 
// skaiciu eile sudeti
// arba jei maziau

console.log(`Skaiciai intervale tarp ${nuo1} ir ${iki1}  suma lygi ${sum1} `);
