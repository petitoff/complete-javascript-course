const dolphinsScore1 = 96;
const dolphinsScore2 = 108;
const dolphinsScore3 = 89;

const dolphinsAverage = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3;

const koalasScore1 = 88;
const koalasScore2 = 91;
const koalasScore3 = 110;

const koalasAverage = (koalasScore1 + koalasScore2 + koalasScore3) / 3;

if(dolphinsAverage > koalasAverage && dolphinsAverage >= 100){
    console.log(`Dolphins won!`);
} else if(koalasAverage > dolphinsAverage && koalasAverage >= 100){
    console.log(`Koalas won!`);
} else{
    console.log(`Nobody won.`)
}
