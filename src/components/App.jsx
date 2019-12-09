import React from 'react';
import Grid from './Grid';
import Topper from './Topper';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            array: [[{value: 1, show: false },{value: 1, show: false },{value: 1, show: false },{value: '*', show: false },{value: 1, show: false }],[{value: '*', show: false },{value: 2, show: false },{value: 1, show: false },{value: 1, show: false },{value: 1, show: false }],[{value: '*', show: false },{value: 2, show: false },{value: 0, show: false },{value: 0, show: false },{value: 0, show: false }],[{value: 1, show: false },{value: 1, show: false },{value: 0, show: false },{value: 0, show: false },{value: 0, show: false }],[{value: 0, show: false },{value: 0, show: false },{value: 0, show: false },{value: 0, show: false },{value: 0, show: false }]]
        }
        this.handleCellClick = this.handleCellClick.bind(this);
        this.getCell = this.getCell.bind(this);
    }
    handleCellClick(id){
        const row = Number(id.substring(0,id.indexOf('-')));
        const col = Number(id.substring(id.indexOf('-')+1));
        let arraySlice = this.state.array.slice();
        arraySlice[row][col].show = true;
        this.setState({array: arraySlice});
    }
    // getCell(id){
        
    //     return this.state.array[row][col];
    // }
    render(){
        var center = {
            textAlign: 'center',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '100%',
            display: 'block'
        }
        return (
            <div style={center}>
                <Topper remainingMines='3' timer='111'/>
                <Grid onCellClick={this.handleCellClick} array={this.state.array}/>
            </div>
        )
    }
}

export default App;