import React, {useState} from 'react'
import StyledBox from './StyledBox'

const BoxGenerator = props => {
    const [boxState, setBoxState] = useState({
        color: "",
        boxes: []
    })
    const onChangeHandler = (e) => {
        setBoxState({
            ...boxState,
            [e.target.name]: e.target.value
        })
    }
    const submitHandler = (e) => {
        e.preventDefault()
        setBoxState({
            boxes: boxState.boxes.concat(boxState.color),
            color: ""
        })
    }
    return (
        <div className="container mt-5">
            <form onSubmit={submitHandler} className="col-5 mx-auto">
                <label>COLOR</label>
                <input type="text" name="color" value={boxState.color} onChange={onChangeHandler}/>
                {/* <input type="text" name="height" value={boxState.height} onChange={onChangeHandler}/> */}
                <input type="submit" value="Add"/>
            </form>
            <div className="col-6 mx-auto mt-3">
                {boxState.boxes.map((box, i) => 
                    <StyledBox key={i} bgColor={box}/>
                )}
            </div>
        </div>
    )
}
export default BoxGenerator