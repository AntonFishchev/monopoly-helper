import { FC } from "react";
import { IPlayer } from "../../types/Player";
import { Player } from "../Player/Player";
import styles from "./PlayerList.module.scss";


export interface PlayerListProps {
	players: IPlayer[];
}

export const PlayerList: FC<PlayerListProps> = ( props ) => {
	const {
		players,
	} = props;

	if (players.length === 0) {
		return (
			<p>Добавьте игроков</p>
		);
	} else {
		return (
			<div className={styles.playerList}>
				{
					players.map(item => {
						return <Player key={item.id} player={item}/>
					})
				}
			</div>	
		);
	}
};
