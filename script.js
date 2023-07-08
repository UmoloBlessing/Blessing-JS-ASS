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

// BONUS 1

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

// BONUS 2

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


// TEST 3

// Test data

const bill = prompt('Check your tip and total value. (275, 40, 430)');

let tip;

const billNumber = parseFloat(bill);



if (bill >= 50 && bill <= 300) {
    tip = 0.15 * billNumber;
    
  } else {
    tip = 0.2 * billNumber;
  }

  const totalValue = (billNumber + tip);



  
console.log(`The bill was ${bill}, the tip was ${tip}, and the total Value is ${totalValue}`)



// TEST 4

const describeCountry = (country, population, capitalCity) => `${country} has ${population} million people and its capital city is ${capitalCity}.`;

const country1 = describeCountry('Finland', 6, 'Helsinki');
console.log(country1);

const country2 = describeCountry('Nigeria', 10, 'FCT');
console.log(country2);

const country3 = describeCountry('Australia', 25, 'Canberra');
console.log(country3);


// TEST 5

function percentageOfWorld1(population) {
    const worldPopulation = 7900;
    const percentage = (population / worldPopulation) * 100;
    return  percentage;
}

const chinaPopulation = 1441;
const chinaPercentage = percentageOfWorld1(chinaPopulation);
console.log(`China has ${chinaPopulation} millions of people, so it's about ${chinaPercentage}% of the world opulation.`);


const japanPopulation = 4441;
const japanPercentage = percentageOfWorld1(japanPopulation);
console.log(`Japan has ${japanPopulation} millions of people, so it's about ${japanPercentage}% of the world opulation.`);


const canadaPopulation = 2441;
const canadaPercentage = percentageOfWorld1(canadaPopulation);
console.log(`Canada has ${canadaPopulation} millions of people, so it's about ${canadaPercentage}% of the world opulation.`);



// TEST 6

const populations = [1280, 6243, 2435, 1220];

console.log(populations.length === 4);

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










