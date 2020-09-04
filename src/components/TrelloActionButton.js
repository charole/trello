import React, { useState } from 'react';
import Icon from '@material-ui/core/Icon';
import { Card, Button } from '@material-ui/core';
import Textarea from 'react-textarea-autosize';

/*
const TrelloActionButtonCopy = ({ list }) => {
    const buttonText = list ? 'Add another list' : 'Add another Card';

    return (
        <div>
            <Icon>{buttonText}</Icon>
            <p>hello</p>
        </div>
    );
}
*/

const TrelloActionButton = ({ list }) => {
    const [state, setState] = useState(false);
    const [text, setText] = useState('');

    const renderForm = () => {
        const Plaaceholder = list ? 'Enter list title...' : 'Enter a title for this card';
        const buttonTitle = list ? 'Add List' : 'Add Card';

        const handleInputChange = ({target}) => {
            setText(target.vaue);
        };

        return (
            <div>
                <Card 
                    style={{
                        overflow: 'visible',
                        minHeight: 80,
                        minWidth: 272,
                        padding: '6px 8px 2px'
                    }}
                >
                    <Textarea 
                        onChange = {handleInputChange}
                        value = {text}
                        placeholder = {Plaaceholder}
                        autoFocus
                        onBlur = {() => {setState(false)}}
                        style = {{
                            resize: 'none',
                            overflow: 'hidden',
                            outline: 'none',
                            border: 'none',
                            width: '100%'
                        }}
                    />
                </Card>
                <div style={styles.formButtonGroup}>
                    <Button variant='contained' style={{color: 'whtie', backgroundColor: '#5aac44'}}>{buttonTitle}</Button>
                    <Icon style={{marginLeft: 8, cursor: 'pointer'}}>close</Icon>
                </div>
            </div>
        );
    }

    const renderAddButton = () => {
        const buttonText = list ? 'Add another list' : 'Add another Card';
        const buttonTextOpacity = list ? 1 : 0.5;
        const buttonTextColor = list ? 'white' : 'inherit';
        const buttonTextBackground = list ? 'rgba(0, 0, 0, 0.15)' : 'inherit';

        return (
            <div 
                onClick = {() => {setState(true)}}
                style={{
                    ...styles.openFormButtonGroup,
                    opacity: buttonTextOpacity,
                    color:buttonTextColor,
                    backgroundColor:buttonTextBackground
                }}
            >
                <Icon>add</Icon>
                <p>{buttonText}</p>
            </div>
        );
    }

    return (
        state ? renderForm() : renderAddButton()
    );
}

const styles = {
    openFormButtonGroup: {
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        borderRadius: 3,
        height: 36,
        width: 272,
        paddingLeft: 10
    },
    formButtonGroup: {
        marginTop: 8,
        display: 'flex',
        alignItems: 'center'
    }
};

export default TrelloActionButton;