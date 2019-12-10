import React from 'react';
import Grid from './Grid';
import Topper from './Topper';
import SettingsForm from './SettingsForm';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      array: [[]],
      dimension: 5,
    // [[{value: 1, show: false },{value: 1, show: false },{value: 1, show: false },{value: '💣', show: false },{value: 1, show: false }],[{value: '💣', show: false },{value: 2, show: false },{value: 1, show: false },{value: 1, show: false },{value: 1, show: false }],[{value: '💣', show: false },{value: 2, show: false },{value: 0, show: false },{value: 0, show: false },{value: 0, show: false }],[{value: 1, show: false },{value: 1, show: false },{value: 0, show: false },{value: 0, show: false },{value: 0, show: false }],[{value: 0, show: false },{value: 0, show: false },{value: 0, show: false },{value: 0, show: false },{value: 0, show: false }]],
      gameOver: false,
      remainingMines: 5,
      winner: false
    };
    this.handleCellClick = this.handleCellClick.bind(this);
    this.handleContextMenu = this.handleContextMenu.bind(this);
    this.handleStartClick = this.handleStartClick.bind(this);
    this.createGrid = this.createGrid.bind(this);
    this.randomizeMines = this.randomizeMines.bind(this);
    this.setCellValues = this.setCellValues.bind(this);
    this.getNeighbors = this.getNeighbors.bind(this);
    this.getCellAt = this.getCellAt.bind(this);
    this.checkGameWon = this.checkGameWon.bind(this);
  }

  createGrid(dimSize){
      let newGrid = [];
      for(let i = 0; i < dimSize; i ++){
          let row = [];
        for(let j = 0; j < dimSize; j ++){
          row.push({value: '', show: false});
        }
        newGrid.push(row);
      }
      return newGrid;
  }

  randomizeMines(arraySlice, bombCount){
    for(let i = 0; i<bombCount; i++){
        let valueEmpty = true;
        while(valueEmpty){
            let randomizeX = Math.floor(Math.random() * arraySlice.length);
          let randomizeY = Math.floor(Math.random() * arraySlice.length);
            if(arraySlice[randomizeX][randomizeY].value === ''){
                arraySlice[randomizeX][randomizeY].value = '💣';
                valueEmpty = false;
            }
        }
    }
    return arraySlice;
  }

  setCellValues(arraySlice){
    for(let i = 0; i < arraySlice.length; i ++){
      for(let j = 0; j < arraySlice[0].length; j ++){
        const neighbors = this.getNeighbors(i,j, arraySlice);
        if(arraySlice[i][j].value === ''){
            arraySlice[i][j].value = neighbors.filter((cell) => cell.value === '💣').length;
        }
      }
    }
    return arraySlice;
  }

  getCellAt(x,y, array){
      if(x >= 0 && y >= 0 && x < array.length && y < array.length){
          return array[x][y];
      } else {
          return null;
      }
  }

  getNeighbors(x,y, array){
      return(
          [this.getCellAt(x+1, y+1, array),
            this.getCellAt(x+1, y, array),
            this.getCellAt(x+1, y-1, array),
            this.getCellAt(x, y+1, array),
            this.getCellAt(x, y-1, array),
            this.getCellAt(x-1, y+1, array),
            this.getCellAt(x-1, y, array),
            this.getCellAt(x-1, y-1, array)].filter((cellValue) => cellValue)
      )
  }

  handleContextMenu(event, id){
    event.preventDefault();
    if (!this.state.gameOver){
        console.log(this.state);
        const row = Number(id.substring(0,id.indexOf('-')));
        const col = Number(id.substring(id.indexOf('-')+1));
        let arraySlice = this.state.array.slice();
        arraySlice[row][col].flag = true;
        const updateRemainingMines = this.state.remainingMines - 1;
        this.setState({array: arraySlice, remainingMines: updateRemainingMines});
    }
  }
  handleCellClick(event, id){
      event.preventDefault();

        if (!this.state.gameOver){
            console.log(this.state);
            const row = Number(id.substring(0,id.indexOf('-')));
            const col = Number(id.substring(id.indexOf('-')+1));
            let arraySlice = this.state.array.slice();
            arraySlice[row][col].show = true;
            if (arraySlice[row][col].value === '💣') {
                this.setState({gameOver: true, array: arraySlice})
            } else {
                this.setState({array: arraySlice}, this.checkGameWon());
            }
        }
    }

    checkGameWon(){
        let gameWon = true;
        this.state.array.forEach((row) => {
            row.forEach((cell) => {
                if(cell.show === false && cell.value !== '💣'){
                    gameWon = false;
                }
            })
        });
        this.setState({gameWon: gameWon, gameOver: gameWon});
    }

    handleStartClick(event, bombCount, dimension){
      event.preventDefault();
      let bombs = 5;
      let dimSize = 5;
      if(bombCount.value !== 0 && bombCount.value !== null){
        bombs = bombCount.value;
      }
      if(dimension.value !== 0 && dimension.value !== null){
        dimSize = dimension.value;
      }
        let newGrid = this.createGrid(dimSize);
        newGrid = this.randomizeMines(newGrid, bombs);
        newGrid = this.setCellValues(newGrid);
        this.setState({array: newGrid, gameOver: false, dimension: dimSize, remainingMines: bombs, winner: false});
    }

  render(){
    var center = {
      textAlign: 'center',
      marginLeft: 'auto',
      marginRight: 'auto',
      width: '100%',
      display: 'block'
    };
    return (
      <div style={center}>
        <Topper remainingMines={this.state.remainingMines} timer='111' gameOver={this.state.gameOver} gameWon={this.state.gameWon}/>
        <Grid onCellClick={this.handleCellClick} array={this.state.array} onContextMenu={this.handleContextMenu}/>
        <SettingsForm onSubmit={this.handleStartClick}/>
      </div>
    );
  }
}

export default App;