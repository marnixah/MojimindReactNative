import GameDTO from "../interfaces/game.dto";
import updateGame from "../api/game/update";
import Row from "./row";

export default class Game {
  id: number;
  code_length: number;
  score?: number;
  turn: number;
  _selected_emoji: number;
  won: boolean;
  lost: boolean;
  created_at: Date;
  updated_at: Date;
  user_id: number;
  rows: Row[];

  constructor(gameDTO: GameDTO) {
    this.id = gameDTO.id;
    this.code_length = parseInt(gameDTO.code_length);
    this.score = gameDTO.score;
    this.turn = parseInt(gameDTO.turn);
    this._selected_emoji = parseInt(gameDTO.selected_emoji);
    this.won = !!gameDTO.won;
    this.lost = !!gameDTO.lost;
    this.created_at = new Date(gameDTO.created_at);
    this.updated_at = new Date(gameDTO.updated_at);
    this.user_id = gameDTO.user_id;
    this.rows = gameDTO.rows.map((row) => new Row(this, row));
  }

  get selected_emoji() {
    return this._selected_emoji;
  }
  set selected_emoji(emoji: number) {
    this._selected_emoji = emoji;
    updateGame(this);
  }
}
