import React from 'react';
import Grid from './Grid';
import Topper from './Topper';

function App(){
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
            <Grid array={[  [1,1,1,'*',1], 
                            ['*',2,1,1,1],
                            ['*',2,0,0,0],
                            [1,1,0,0,0],
                            [0,0,0,0,0]]}/>
        </div>
    )
}

export default App;