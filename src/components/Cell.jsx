import React from 'react';

function Cell(props){
  var cellStyle = {
    display: 'inline-block',
    width: '24px',
    height: '24px',
    border: 'solid 1px grey',
    textAlign: 'center',
    verticalAlign: 'middle',
    margin: '0',
    padding: '0',
    fontSize: '16px'
  };
  function showContent(){
    let content = '';
    if(props.content.show){
      content = props.content.value;
    } else if (props.content.flag) {
      content = '⚠️';
    }
    return content;
  }
  return (
    <div style={cellStyle} onClick={(event)=>props.onCellClick(event, props.content.id)} onContextMenu={(event)=>props.onContextMenu(event, props.content.id)}>
      {showContent()}
    </div>
  );
}

export default Cell;