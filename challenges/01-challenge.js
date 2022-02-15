let wagaMarka = 78;
let wagaJohna = 92;

let wzrostMarka = 1.69;
let wzrostJohna = 1.95;

let markBMI = (wagaMarka / wzrostMarka) ** 2;
let johnBMI = (wagaMarka / wzrostMarka) ** 2;

let markHigherBMI;

if (markBMI > johnBMI)
{
    markHigherBMI = true;
}
else
{
    markHigherBMI = false;
}

console.log(markHigherBMI);