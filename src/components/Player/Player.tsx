import { FC, useState } from "react";
import { useAction } from "../../hooks/useAction";
import { IPlayer } from "../../types/Player";
import styles from "./Player.module.scss";

export interface PlayerProps {
	player: IPlayer;
}

export const Player: FC<PlayerProps> = ( props ) => {
	const {
		player,
	} = props;

	const { removePlayer, changeBalancePlayer } = useAction();

	const [ delta, setDelta ] = useState(0);

	const changeBalance = (a: number) => {
		changeBalancePlayer({
			id: player.id,
			delta: delta * a,
		});
	};

	return (
		<div className={styles.player}>
			<div className={styles.header}>
				<div>
					{player.name}
				</div>
				<button onClick={() => removePlayer(player.id)}>X</button>
			</div>
			<div className={styles.body}>
				{player.balance} 
			</div>
			<div className={styles.footer}>
				<input type={"number"} onChange={(e) => setDelta(Number(e.target.value))}/> 
				<button onClick={() => changeBalance(-1)}>-</button>
				<button onClick={() => changeBalance(1)}>+</button>
			</div>
		</div>
	);
};
