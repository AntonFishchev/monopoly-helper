import { Dispatch } from "redux";
import { IPlayer } from "../../types/Player";
import { IChangeBalance, IPlayerAction, PlayerActionTypes } from "../../types/store/player";


export const addPlayer = (player: IPlayer) => {
	return (dispatch: Dispatch<IPlayerAction>) => {
		dispatch({
			type: PlayerActionTypes.ADD_PLAYER,
			payload: player,
		})
	}
};

export const removePlayer = (id: number) => {
	return (dispatch: Dispatch<IPlayerAction>) => {
		dispatch({
			type: PlayerActionTypes.REMOVE_PLAYER,
			payload: id,
		})
	}
};

export const changeBalancePlayer = (changeBalance: IChangeBalance) => {
	return (dispatch: Dispatch<IPlayerAction>) => {
		dispatch({
			type: PlayerActionTypes.CHANGE_BALANCE_PLAYER,
			payload: changeBalance,
		})
	}
};