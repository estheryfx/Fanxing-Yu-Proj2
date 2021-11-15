import "./Unit.css";
import { useDispatch } from "react-redux";

export default function UserUnit(props) {
    const dispatch = useDispatch();
    const {board, x, y} = props;
    function change(board){
        if (board === "yes") {
            return "00";
        }else if (board === "X" || board === "Y"){
            return board;
        }else{
            return undefined;
        }
    }
    return (<div className = "white" >{change(board)}</div>);
}