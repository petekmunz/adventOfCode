const listOps = require('./listOpcodes');
const superList = listOps;
let name = superList[1];
let verb = superList[2];

function replaceNameandVerb(indexOne, indexTwo) {
    name = indexOne;
    verb = indexTwo;
    superList[1] = name;
    superList[2] = verb;
}

function runIntCode() {
    let mutableOpcodes = [];
    mutableOpcodes = mutableOpcodes.concat(superList);
    while (mutableOpcodes[0] !== 99) {
        let tempArray = [];
        tempArray = tempArray.concat(mutableOpcodes.splice(0, 4));
        switch (tempArray[0]) {
            case 1:
                superList[tempArray[3]] = superList[tempArray[1]] + superList[tempArray[2]];
                break;
            case 2:
                superList[tempArray[3]] = superList[tempArray[1]] * superList[tempArray[2]];
                break;
        }
    }
    console.log("Final list 1st Index: ", superList[0]);
}

replaceNameandVerb(12, 2);
runIntCode();