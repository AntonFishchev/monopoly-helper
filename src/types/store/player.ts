import { IPlayer } from "../Player";


export interface IPlayerState {
	players: IPlayer[];
}

export enum PlayerActionTypes {
	ADD_PLAYER = "ADD_PLAYER",
	REMOVE_PLAYER = "REMOVE_PLAYER",
	CHANGE_BALANCE_PLAYER = "CHANGE_BALANCE_PLAYER",
}

export type IPlayerAction =
	| IAddPlayer
	| IRemovePlayer
	| IChangeBalancePlayer;

interface IAddPlayer {
	type: PlayerActionTypes.ADD_PLAYER;
	payload: IPlayer
}

interface IRemovePlayer {
	type: PlayerActionTypes.REMOVE_PLAYER;
	payload: number;
}

interface IChangeBalancePlayer {
	type: PlayerActionTypes.CHANGE_BALANCE_PLAYER;
	payload: IChangeBalance;
}

export interface IChangeBalance {
	id: number;
	delta: number;
}