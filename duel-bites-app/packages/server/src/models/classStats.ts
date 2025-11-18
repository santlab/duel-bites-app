export interface ClassStats {
    className: string;
    wins: number;
}

export class ClassStatsModel {
    private stats: ClassStats[];

    constructor() {
        this.stats = [
            { className: 'torta', wins: 0 },
            { className: 'bolo', wins: 0 },
            { className: 'churrasco', wins: 0 },
        ];
    }

    public getStats(): ClassStats[] {
        return this.stats;
    }

    public incrementWins(className: string): void {
        const classStat = this.stats.find(stat => stat.className === className);
        if (classStat) {
            classStat.wins += 1;
        }
    }
}