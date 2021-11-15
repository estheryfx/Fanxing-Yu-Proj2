import "./Unit.css";
import { useDispatch } from "react-redux";


export default function Unit(props) {
    const dispatch = useDispatch();
    const {board, x, y} = props;
    return (<div className = "white" onClick = {() => {
        dispatch({
            type:"boardClick",
            x: props.x,
            y:props.y
        })
    }}> {(board === "X" || board === "Y") ? board : undefined}</div>);
}