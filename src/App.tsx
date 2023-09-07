import { FC } from "react";
import { PlayerList } from "./components/PlayerList/PlayerList";
import { useAction } from "./hooks/useAction";
import { useTypedSelector } from "./hooks/useTypedSelector";


export const App = () => {
	const state = useTypedSelector(state => state.player);
	const { addPlayer } = useAction();

	return (
		<div>
			<button onClick={() => {
				addPlayer({
					id: state.players.length + 1,
					name: "Anton",
					balance: 1500
				})
			}}>Добавить игрока</button>
			<PlayerList players={state.players} />
		</div>
	);
};
