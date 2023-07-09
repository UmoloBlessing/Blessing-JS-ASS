'use strict';

// TEST ONE

const language = prompt('What language would you like to know about?? (chinese or mandarin, spanish, english, hindi, arabic)');
switch(language) {
    case 'chinese or mandarin':
        console.log('MOST number of native speakers!');
        break;

    case 'spanish': 
        console.log('2nd place in number of native speakers');
        break;

    case 'english': 
        console.log('3rd place');
        break;
        
    case 'hindi':
        console.log('Number 4');
        break;

    case 'arabic':
        console.log('5th most spoken language');
        break;

    default:
        console.log('Great language too');
};



// // TEST 2

const dolphins = (96 + 108 + 89) / 3;
const koalas = (88 + 91 + 110) / 3;


if(dolphins > koalas) {
    console.log("Dolphins is the winner");
} else if(koalas > dolphins) {
    console.log("Koalas is the winner");
} else if(dolphins === koalas){
    console.log('DRAW')
} else{
    console.log('No winner');
};

// // // BONUS 1

const dolphinsBonus1 = (97 + 112 + 101) / 3 ;
const koalasBonus1 = (88 + 91 + 110) / 3;

if(dolphinsBonus1 > koalasBonus1 && dolphinsBonus1 >= 100) {
    console.log('Dolphins is the winner');
} else if(koalasBonus1 > dolphinsBonus1 && koalasBonus1 >=100) {
    console.log('Koalas is the winner');
} else if(dolphinsBonus1 === koalasBonus1 && dolphinsBonus1 >= 100 && koalasBonus1 >= 100) {
    console.log('Draw');
} else {
    console.log('No winner');
};

// // // BONUS 2

const dolphinsBonus2 = (97 + 112 + 101) / 3;
const koalasBonus2 = (109 + 95 + 106) / 3;

if (dolphinsBonus2 > koalasBonus2 && dolphinsBonus2 >= 100) {
    console.log('Dolphins is the winner');
} else if (koalasBonus2 > dolphinsBonus2 && koalasBonus2 >= 100) {
    console.log('Koalas is the winner');
} else if (dolphinsBonus2 === koalasBonus2 && dolphinsBonus2 >= 100 && koalasBonus2 >= 100) {
    console.log('Draw');
} else {
    console.log('No team wins the trophy');
};


// // TEST 3

// // Test data

const billValue = prompt('Check your tip and total value. (Bill Data: 275, 40, 430)');

// let tip;

const bill = parseFloat(billValue);

// // // if (bill >= 50 && bill <= 300){
// // //     tip = 0.15 * bill;    
// // //   } else {
// // //     tip = 0.2 * bill;
// // //   }

const tip = (bill >= 50 && bill <= 300) ? 0.15 * bill : 0.2 * bill;

const totalValue = (bill + tip);
  
if(isNaN(billValue)) {
    alert('Invalid Input! Please input a number, this is a simple tip calculator');
} else {
    console.log(`The bill was ${billValue}, the tip was ${tip}, and the total Value is ${totalValue}`);
};


// DATA BILL 275

const billValue1 = 275;

// let tip1;

const tip1 = (billValue1 >= 50 && billValue1 <= 300) ? 0.15 * billValue1 : 0.2 * billValue1;

const totalValue1 = (billValue1 + tip1);

console.log(`The bill was ${billValue1}, the tip was ${tip1}, and the total Value is ${totalValue1}`);

// DATA BILL 40

const billValue2 = 40;

// let tip2;

const tip2 = (billValue2 >= 50 && billValue2 <= 300) ? 0.15 * billValue2 : 0.2 * billValue2;

const totalValue2 = (billValue2 + tip2);

console.log(`The bill was ${billValue2}, the tip was ${tip2}, and the total Value is ${totalValue2}`);


// DATA BILL 430

const billValue3 = 430;

// let tip3;

const tip3 = (billValue3 >= 50 && billValue3 <= 300) ? 0.15 * billValue3 : 0.2 * bill;

const totalValue3 = (billValue3 + tip3);

console.log(`The bill was ${billValue3}, the tip was ${tip3}, and the total Value is ${totalValue3}`);





// TEST 4

const describeCountry = (country, population, capitalCity) => `${country} has ${population} million people and its capital city is ${capitalCity}.`;

const country1 = describeCountry('Finland', 6, 'Helsinki');
console.log(country1);

const country2 = describeCountry('Nigeria', 10, 'FCT');
console.log(country2);

const country3 = describeCountry('Australia', 25, 'Canberra');
console.log(country3);


// TEST 5


// FUNCTION DECLARATION

// FIRST INSTANCE

function percentageOfWorld1(population) {
    const worldPopulation = 7900;
    const percentage = (population / worldPopulation) * 100;
    return  percentage;
}

const chinaPopulation = 1441;
const chinaPercentage = percentageOfWorld1(chinaPopulation);
console.log(`China has ${chinaPopulation} millions of people, so it's about ${chinaPercentage}% of the world population.`);


const japanPopulation = 4441;
const japanPercentage = percentageOfWorld1(japanPopulation);
console.log(`Japan has ${japanPopulation} millions of people, so it's about ${japanPercentage}% of the world population.`);


const canadaPopulation = 2441;
const canadaPercentage = percentageOfWorld1(canadaPopulation);
console.log(`Canada has ${canadaPopulation} millions of people, so it's about ${canadaPercentage}% of the world population.`);


// SECOND INSTANCE


function percentageOfWorld5(country, population, percentage){
    const details1 = `${country} has ${population} millions of people, so it's about ${percentage}% of the world population.`;
    return details1;
}
const data0 = percentageOfWorld5('China', 1441, 18.2);
console.log(data0);

const data1 = percentageOfWorld5('Japan', 4441, 56.2);
console.log(data1);

const data2 = percentageOfWorld5('Canada', 2441, 30.9);
console.log(data2);


// // // FUNCTION EXPRESSION

const population2 = function percentageOfWorld2(country, population, percentage) {
    const populationDetails2 = `${country} has ${population} millions of people, so it's about ${percentage}% of the world population.`;
    return populationDetails2;
}

const details2 = population2('China', 1441, 36.6);
console.log(details2);

const details3 = population2('Japan', 2345, 34.7);
console.log(details3);

const details4 = population2('Canada', 5142, 56.9);
console.log(details4);



// // // BONUS


const percentageOfWorld3 = (country, population, percentage) => `${country} has ${population} millions of people, so it's about ${percentage}% of the world population.`;
const details5 = percentageOfWorld3('China', 1441, 36.6);
console.log(details5);

const details6 = percentageOfWorld3('Japan', 2345, 34.7);
console.log(details6);

const details7 = percentageOfWorld3('Canada', 5142, 56.9);
console.log(details7);



// TEST 6

const populations = [1280, 6243, 2435, 1220];

console.log(populations.length === 4);


// FIRST INSTANCE

const percentages = [16.2, 79, 30.8, 15.4];

function percentageOfWorld1(populations) {
    const worldPopulation = 7900;
    const percentage = (populations / worldPopulation) * 100;
    return  percentage;
}

const ghanaPopulation = 1280;
const ghanaPercentage = percentageOfWorld1(ghanaPopulation);
console.log(ghanaPercentage);

const germanyPopulation = 6243;
const germanyPercentage = percentageOfWorld1(germanyPopulation);
console.log(germanyPercentage);

const italyPopulation = 2435;
const italyPercentage = percentageOfWorld1(italyPopulation);
console.log(italyPercentage);

const norwayPopulation = 1220;
const norwayPercentage = percentageOfWorld1(norwayPopulation);
console.log(norwayPercentage);



// SECOND INSTANCE


function percentageOfWorld4(country, population, percentage){
    const details2 = `${country} has ${population} millions of people, so it's about ${percentage}% of the world population.`;
    return details2;
}
const data3 = percentageOfWorld4('China', 1280, 16.2);
console.log(data3);

const data4 = percentageOfWorld4('Japan', 6243, 79);
console.log(data4);

const data5 = percentageOfWorld4('Canada', 2435, 30.8);
console.log(data5);

const data6 = percentageOfWorld4('UK', 1220, 15.4);
console.log(data6);
