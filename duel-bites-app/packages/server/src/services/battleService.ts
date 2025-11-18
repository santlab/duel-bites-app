import { ClassStats } from '../models/classStats';

interface Player {
    id: string;
    className: 'torta' | 'bolo' | 'churrasco';
    health: number;
}

interface BattleResult {
    winner: Player;
    loser: Player;
}

class BattleService {
    private players: Player[] = [];
    private classStats: ClassStats = {
        torta: { wins: 0 },
        bolo: { wins: 0 },
        churrasco: { wins: 0 },
    };

    constructor() {}

    addPlayer(id: string, className: 'torta' | 'bolo' | 'churrasco') {
        const player: Player = { id, className, health: 100 };
        this.players.push(player);
    }

    startBattle(): BattleResult | null {
        if (this.players.length !== 2) {
            return null; // Not enough players
        }

        const [player1, player2] = this.players;
        let round = 1;

        while (player1.health > 0 && player2.health > 0) {
            const damageToPlayer2 = this.calculateDamage(player1.className);
            player2.health -= damageToPlayer2;

            if (player2.health <= 0) {
                this.updateStats(player1.className);
                return { winner: player1, loser: player2 };
            }

            const damageToPlayer1 = this.calculateDamage(player2.className);
            player1.health -= damageToPlayer1;

            if (player1.health <= 0) {
                this.updateStats(player2.className);
                return { winner: player2, loser: player1 };
            }

            round++;
        }

        return null; // This should not happen
    }

    private calculateDamage(className: 'torta' | 'bolo' | 'churrasco'): number {
        // Basic damage calculation logic
        return Math.floor(Math.random() * 10) + 1; // Random damage between 1 and 10
    }

    private updateStats(winnerClass: 'torta' | 'bolo' | 'churrasco') {
        this.classStats[winnerClass].wins += 1;
    }

    getClassStats() {
        return this.classStats;
    }
}

export default BattleService;