import { Router } from 'express';
import { BattleController } from '../controllers/battleController';

const router = Router();
const battleController = new BattleController();

// Route for starting a duel
router.post('/duel/start', battleController.startDuel.bind(battleController));

// Route for player actions during the duel
router.post('/duel/action', battleController.playerAction.bind(battleController));

// Route for retrieving class statistics
router.get('/class/stats', battleController.getClassStats.bind(battleController));

export default router;