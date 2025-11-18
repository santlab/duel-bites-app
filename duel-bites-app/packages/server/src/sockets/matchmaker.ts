import { Server } from "socket.io";
import { BattleService } from "../services/battleService";

class Matchmaker {
    private io: Server;
    private battleService: BattleService;
    private waitingPlayers: { socketId: string; className: string }[] = [];

    constructor(io: Server) {
        this.io = io;
        this.battleService = new BattleService();
        this.initializeSocketEvents();
    }

    private initializeSocketEvents() {
        this.io.on("connection", (socket) => {
            console.log(`Player connected: ${socket.id}`);

            socket.on("joinQueue", (className: string) => {
                this.handleJoinQueue(socket.id, className);
            });

            socket.on("disconnect", () => {
                this.handleDisconnect(socket.id);
            });
        });
    }

    private handleJoinQueue(socketId: string, className: string) {
        this.waitingPlayers.push({ socketId, className });
        console.log(`Player ${socketId} joined queue as ${className}`);

        if (this.waitingPlayers.length >= 2) {
            const player1 = this.waitingPlayers.shift();
            const player2 = this.waitingPlayers.shift();
            this.startDuel(player1, player2);
        }
    }

    private startDuel(player1: { socketId: string; className: string } | undefined, player2: { socketId: string; className: string } | undefined) {
        if (player1 && player2) {
            const duelId = this.battleService.createDuel(player1.className, player2.className);
            this.io.to(player1.socketId).emit("startDuel", { opponentClass: player2.className, duelId });
            this.io.to(player2.socketId).emit("startDuel", { opponentClass: player1.className, duelId });
        }
    }

    private handleDisconnect(socketId: string) {
        this.waitingPlayers = this.waitingPlayers.filter(player => player.socketId !== socketId);
        console.log(`Player disconnected: ${socketId}`);
    }
}

export default Matchmaker;