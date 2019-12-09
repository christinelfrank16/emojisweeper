import React from 'react';

function Cell(props){
    var cellStyle = {
        display: 'inline-block',
        width: '18px',
        height: '18px',
        border: 'solid 1px grey',
        textAlign: 'center',
        verticalAlign: 'middle',
        margin: '0',
        padding: '0',
        fontSize: '16px'
    }
    return (
        <div style={cellStyle}>
            {props.content}
        </div>
    )
}

export default Cell;