// function calcAverage(score1, score2, score3) {
//   return (score1 + score2 + score3) / 3;
// }

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

function checkWinner(avgDolhins, avgKoalas) {
  if (avgDolhins >= avgKoalas * 2) {
    console.log(`Dolphins win (${avgDolhins} vs ${avgKoalas})`);
  } else if (avgKoalas >= avgDolhins * 2) {
    console.log(`Koalas win ( ${avgKoalas} vs ${avgDolhins})`);
  } else {
    console.log("No team wins!");
  }
}

const avgDolhins = calcAverage(85, 54, 41);
const avgKoalas = calcAverage(23, 34, 27);

checkWinner(avgDolhins, avgKoalas);
