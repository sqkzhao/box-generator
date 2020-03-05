import React, {useState} from 'react'
import StyledBox from './StyledBox'

const BoxGenerator = props => {
    const [boxState, setBoxState] = useState({
        color: "",
        height: "",
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
            boxes: boxState.boxes.concat({color: boxState.color, height: boxState.height}),
            color: "",
            height: ""
        })
    }
    return (
        <div className="container mt-5">
            <form onSubmit={submitHandler} className="col-6 mx-auto">
                <label className="col-4">Color</label>
                <input type="text" name="color" value={boxState.color} onChange={onChangeHandler}/>
                <br></br>
                <label className="col-4">Height/Width</label>
                <input type="number" name="height" value={boxState.height} onChange={onChangeHandler}/>
                <input type="submit" value="Add"/>
            </form>
            <div className="col-6 mx-auto mt-3">
                {boxState.boxes.map((box, i) => 
                    <StyledBox key={i} bgColor={box.color} height={box.height}/>
                )}
            </div>
        </div>
    )
}
export default BoxGenerator