import React from 'react';

function PatternView(props) {
    return (
        <div>
            Pattern View
            {props.match.params.id}
        </div>
    )
}

export default PatternView;