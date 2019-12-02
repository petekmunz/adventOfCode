const listOps = require('./listOpcodes');
let superList = [];
let noun;
let verb;
let output;
const desiredOutput = 19690720;

function resetList() {
    superList.length = 0;
    superList = superList.concat(listOps);
}

function replaceNameandVerb(indexOne, indexTwo) {
    noun = indexOne;
    verb = indexTwo;
    superList[1] = noun;
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
                output = superList[0];
                break;
            case 2:
                superList[tempArray[3]] = superList[tempArray[1]] * superList[tempArray[2]];
                output = superList[0];
                break;
        }
    }
}

for (var i = 0; i < 100; i++) {
    let correctOutcome = false;
    noun = i;
    for (var s = 0; s < 100; s++) {
        if (output !== desiredOutput) {
            verb = s;
            resetList();
            replaceNameandVerb(noun, verb);
            runIntCode();
        } else {
            correctOutcome = true
            break;
        }
    }
    if (correctOutcome) {
        console.log("Output", output);
        console.log("Noun", noun);
        console.log("Verb", verb);
        console.log("Computed value", 100 * noun + verb)
        break;
    }
}