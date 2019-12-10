import React from 'react';

function SettingsForm(props) {
    let _bombCount = null;
    let _dimension = null;
    return(
        <div>
            <form onSubmit= {(event) => props.onSubmit(event, _bombCount, _dimension)}>
                <label for='bomb'>How many bombs?</label>
                <input id='bomb' type='number' name='bombs' ref={input => _bombCount = input}/>
                <label for='dimension'>What size grid would you like? </label>
                <input id='dimension' type='number' ref={input => _dimension = input}/>
                <button type='submit'>Start</button>
            </form>
        </div>
    )
}

export default SettingsForm;