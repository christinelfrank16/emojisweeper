import React from 'react';
import Cell from './Cell';

function Grid(props){
  function createRow(rowArray, rowIndex){
    var style = {
      fontSize: '0'
    };
    return (
      <div key={rowIndex} style={style}>
        {rowArray.map((cellElement, cellIndex) => {
          const id = `${rowIndex}-${cellIndex}`;
          cellElement.id = id;
          return(
            <Cell key={rowIndex-cellIndex} content={cellElement} onCellClick={props.onCellClick} onContextMenu={props.onContextMenu}/>
          );
        })}
      </div>
    );
  }
  return (
    <div>
      {props.array.map((row, rowIndex) => {
        return(
          createRow(row, rowIndex)
        );
      })}
    </div>
  );
}

export default Grid;