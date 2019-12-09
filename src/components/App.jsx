import React from 'react';
import Grid from './Grid';
import Topper from './Topper';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      array: [[{value: 1, show: false },{value: 1, show: false },{value: 1, show: false },{value: '*', show: false },{value: 1, show: false }],[{value: '*', show: false },{value: 2, show: false },{value: 1, show: false },{value: 1, show: false },{value: 1, show: false }],[{value: '*', show: false },{value: 2, show: false },{value: 0, show: false },{value: 0, show: false },{value: 0, show: false }],[{value: 1, show: false },{value: 1, show: false },{value: 0, show: false },{value: 0, show: false },{value: 0, show: false }],[{value: 0, show: false },{value: 0, show: false },{value: 0, show: false },{value: 0, show: false },{value: 0, show: false }]],
      gameOver: false
    };
    this.handleCellClick = this.handleCellClick.bind(this);
    this.handleContextMenu = this.handleContextMenu.bind(this);
  }

  handleContextMenu(event, id){
    event.preventDefault();
    if (!this.state.gameOver){
        console.log(this.state);
        const row = Number(id.substring(0,id.indexOf('-')));
        const col = Number(id.substring(id.indexOf('-')+1));
        let arraySlice = this.state.array.slice();
        arraySlice[row][col].flag = true;
        this.setState({array: arraySlice});
    }
  }
  handleCellClick(event, id){
      event.preventDefault();
      console.log(event.type);

    if (!this.state.gameOver){
        console.log(this.state);
        const row = Number(id.substring(0,id.indexOf('-')));
        const col = Number(id.substring(id.indexOf('-')+1));
        let arraySlice = this.state.array.slice();
        arraySlice[row][col].show = true;
        if (arraySlice[row][col].value === '*') {
            this.setState({gameOver: true, array: arraySlice})
        } else {
            this.setState({array: arraySlice});
        }
    }
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
        <Topper remainingMines='3' timer='111' gameOver={this.state.gameOver}/>
        <Grid onCellClick={this.handleCellClick} array={this.state.array} onContextMenu={this.handleContextMenu}/>
      </div>
    );
  }
}

export default App;