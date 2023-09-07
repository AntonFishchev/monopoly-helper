import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as PlayerActionCreation from "../store/actionCreators/player";


export const useAction = () => {
	const dispatch = useDispatch();
	return bindActionCreators(PlayerActionCreation, dispatch);
}