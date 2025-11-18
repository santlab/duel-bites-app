import { Request, Response } from 'express';
import { BattleService } from '../services/battleService';
import { ClassStats } from '../models/classStats';

export class BattleController {
    private battleService: BattleService;

    constructor() {
        this.battleService = new BattleService();
    }

    public async startBattle(req: Request, res: Response): Promise<void> {
        const { player1Class, player2Class } = req.body;
        const battleResult = await this.battleService.executeBattle(player1Class, player2Class);
        
        if (battleResult.winner) {
            await ClassStats.incrementWins(battleResult.winner);
            res.status(200).json({
                message: `${battleResult.winner} wins!`,
                stats: await ClassStats.getAllStats()
            });
        } else {
            res.status(400).json({ message: 'Battle could not be completed.' });
        }
    }

    public async getClassStats(req: Request, res: Response): Promise<void> {
        const stats = await ClassStats.getAllStats();
        res.status(200).json(stats);
    }
}