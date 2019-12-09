import React from 'react';

function Topper(props){
    var inlineStyle ={
        display: 'inline-block'
    }
    var float = {
        float: 'right'
    }
    var width = {
        width: '75%'
    }
    return(
        <div style={width}>
            <div style={inlineStyle}>
                {props.remainingMines}
            </div>
            <div style={float}>
                {props.timer}
            </div>
        </div>
    )
}

export default Topper;