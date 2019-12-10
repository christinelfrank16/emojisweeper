import React from 'react';

function Topper(props){
  var inlineStyle ={
    display: 'inline-block'
  };
  var float = {
    float: 'right'
  };
  var width = {
    width: '75%'
  };
  function gameOverValue(){
    if(props.gameOver && props.gameWon){
      return 'Winner';
    } else if (props.gameOver && !props.gameWon){
      return 'Loser';
    } else {
      return null;
    }
  }
  return(
    <div style={width}>
      <div style={inlineStyle}>
        {props.remainingMines}
      </div>
      {gameOverValue()}
      <div style={float}>
        {props.timer}
      </div>
    </div>
  );
}

export default Topper;