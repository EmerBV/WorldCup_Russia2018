import { FootballLeague } from "../classes/FootballLeague.js";

export function groupStage() {
    console.log ("\n===============================================================================");
    console.log ("========================== COMIENZA EL MUNDIAL ================================");
    console.log ("===============================================================================\n");
}
export function playOffTeams() {
    console.log("\nEquipos que van a participar en el playoff:\n");
}
export function playOffText() {
    console.log("\n============================================");
    console.log("=== COMIENZO DE LA FASE DE ELIMINATORIAS ===");
    console.log("============================================\n");
}
export function roundOf16Text() {
    console.log("\n=========== OCTAVOS DE FINAL ===============\n");
}
export function quarterText() {
    console.log("\n=========== CUARTOS DE FINAL ===============\n");
}
export function semifinalText() {
    console.log("\n============== SEMIFINALES =================\n");
}
export function thirdAndFourthText() {
    console.log("\n============== TERCER Y CUARTO PUESTO =================\n");
}
export function finalText() {
    console.log("\n================= FINAL ====================\n");
}
export function winnerName(winner) {
    console.log("\n============================================");
    console.log(`¡${winner} campeón del mundo!`); 
    console.log("============================================");
}

export function knockOuts(group, round) {
    let footballLeague = new FootballLeague("Foot", group, {
        rounds: 1,
    });
    footballLeague.scheduleMatchDays();
    footballLeague.start();
    footballLeague.summaries.forEach((summary) => {
        summary.results.forEach((result) => {
            let winner = summary.standings[0].name;
            if (result.homeGoals - result.awayGoals === 0) {
                console.log(`${result.homeTeamName} ${result.homeGoals + 1} - ${result.awayGoals} ${result.awayTeamName} => ${result.homeTeamName}`
                );
                round.push(result.homeTeamName);
            } else {
                console.log(
                    `${result.homeTeamName} ${result.homeGoals} - ${result.awayGoals} ${result.awayTeamName} => ${winner}`
                );
                round.push(winner);
            }
        });
    });
}