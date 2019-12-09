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
    function showContent(){
        let content = '';
        if(props.content.show){
            content = props.content.value;
        }
        return content;
    }
    return (
        <div style={cellStyle} onClick={()=>props.onCellClick(props.content.id)}>
            {showContent()}
        </div>
    )
}

export default Cell;