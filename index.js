import {groupStage, roundOf16Text, quarterText, semifinalText, thirdAndFourthText, finalText, winnerName, playOffTeams, playOffText, knockOuts} from './utils/headers.js'
import {teamsQualified} from './groups.js'

let quarterFinals = [], semiFinals = [], thirdPlace = [], thirdFourthPlace = [], final=[], champion = []

groupStage()
playOffTeams()
console.log(teamsQualified)
playOffText()

roundOf16Text()
for (let i = 0; i < teamsQualified.length; i+=4 ) {
    let leftSide = [teamsQualified[i],teamsQualified[i+3]]
    let rightSide = [teamsQualified[i+1],teamsQualified[i+2]]
    knockOuts(leftSide, quarterFinals)
    knockOuts(rightSide, quarterFinals)
}

quarterText()
for (let i= 0; i <quarterFinals.length; i+=2) {
    knockOuts(quarterFinals.slice(i,i+2), semiFinals)
}

semifinalText()
for (let i= 0; i <semiFinals.length; i+=2) {
    knockOuts(semiFinals.slice(i,i+2), final)
}

thirdAndFourthText()
semiFinals.forEach(item => { 
    let findOut = final.includes(item);
    if (findOut == false) {
        thirdPlace.push(item);
    }  
})
knockOuts(thirdPlace, thirdFourthPlace)

finalText()
knockOuts(final, champion)
winnerName(champion[0])
