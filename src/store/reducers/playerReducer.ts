import { IPlayerAction, IPlayerState, PlayerActionTypes } from "../../types/store/player";


const initialState: IPlayerState = {
	players: [],
};

export const playerReducer = (state = initialState, action: IPlayerAction): IPlayerState => {
	switch (action.type) {
		case PlayerActionTypes.ADD_PLAYER:
			return {
				players: [...state.players, action.payload],
			};

		case PlayerActionTypes.REMOVE_PLAYER:
			return { 
				players: state.players.filter(player => player.id !== action.payload),
			};

		case PlayerActionTypes.CHANGE_BALANCE_PLAYER:
			return { 
				players: state.players.flatMap((item) => {
					if (item.id === action.payload.id) {
						item.balance += action.payload.delta;
					}

					return item
				})
			};

		default:
			return state;
	}
};
