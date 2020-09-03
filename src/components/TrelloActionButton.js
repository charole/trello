import React from 'react';
import Icon from '@material-ui/core/Icon';

const TrelloActionButton = ({ list }) => {
    const buttonText = list ? 'Add another list' : 'Add another Card';

    return (
        <div>
            <Icon>{buttonText}</Icon>
            <p>hello</p>
        </div>
    );
}

export default TrelloActionButton;