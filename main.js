const firstRow = 'мама мыла раму';
const secondRow = 'собака друг человека';
let counterA = 0;
let counterB = 0;
function getRow(firstRow, secondRow) {
    let firstRowLength = firstRow.length;
    let secondRowLength = secondRow.length;
    for (let i = 0; i < firstRowLength; i++)
    {
        if (firstRow.charAt(i) === 'а') {
            counterA++;
        }
    }
    for (let i = 0; i < secondRowLength; i++)
    {
        if (secondRow.charAt(i) === 'а') {
            counterB++;
        }
    }
    if (counterA >= counterB) {
        return firstRow
    }
    else return secondRow;
}

console.log(getRow(firstRow, secondRow)); // мама мыла раму