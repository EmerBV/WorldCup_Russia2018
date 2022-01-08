import { teams, group } from "./teams.js";
import { setupArrays } from "./utils/index.js";
import { FootballLeague } from "./classes/FootballLeague.js";

setupArrays();
teams.shuffle();

function devideTeams(arr, len) {
    var chunks = [],
        i = 0,
        n = arr.length;
    while (i < n) {
        chunks.push(arr.slice(i, (i += len)));
    }
    return chunks;
}

export let groups = devideTeams(teams, 4);

export let teamsQualified = [];

for (let i = 0; i < groups.length; i++) {
    let footballLeague = new FootballLeague("Foot", groups[i], { rounds: 1 });

    footballLeague.scheduleMatchDays();
    const teamNames = footballLeague.getTeamNames();
    console.log("\nGrupos y Equipos");
    console.log("====================================\n");
    console.log(`GRUPO ${group[i]}`);
    console.log("------------------------------------");
    teamNames.forEach(function (team) {
        console.log(team);
    });
    console.log("\n");
    footballLeague.matchDaySchedule.forEach((matchDay, matchDayIndex) => {
        console.log(`Jornada ${matchDayIndex + 1}:`);
        matchDay.forEach((match) => {
            if (match.home === null || match.away === null) {
                const teamName = match.home || match.away;
                console.log(`${teamName} DESCANSA`);
            } else {
                console.log(`- ${match.home} vs ${match.away} \n`);
            }
        });
    });
    console.log("====================================");
    footballLeague.start();
    footballLeague.summaries.forEach((summary, matchDayIndex) => {
        console.log("\n");
        console.log(`Grupo ${group[i]} - Jornada ${matchDayIndex + 1}:`);
        console.log("------------------------------------");
        summary.results.forEach((result) => {
            console.log(`-${result.homeTeamName} ${result.homeGoals} - ${result.awayGoals} ${result.awayTeamName}`)
        })
        console.table(summary.standings)
        console.log('\n');
    })
    teamsQualified.push(footballLeague.summaries[2].standings[0].name);
    teamsQualified.push(footballLeague.summaries[2].standings[1].name);
}
