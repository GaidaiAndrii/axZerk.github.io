/**
 * Created by Zerk on 20-Feb-17.
 */

import React from 'react';
import uuid from 'uuid';

import css from './form.scss';

export class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            newListItem: {},
            inputValue: ''
        }
    }

    handleSubmit(event) {
        event.preventDefault();

        if (this.state.inputValue === '') {
            alert('Cannot submit empty list item!');
        } else {
            this.setState({
                inputValue: '',
                newListItem: {
                    id: uuid.v4(),
                    title: this.state.inputValue
                }
            }, function () {
                this.props.addListItem(this.state.newListItem);
            });
        }
    }

    handleInputChange(event) {
        this.setState({
            inputValue: event.target.value
        });
    }

    render() {
        return (
            <form onSubmit={(event) => this.handleSubmit(event)} action="#" className="list-form">
                <input
                    type="text"
                    className="list-form__input"
                    value={this.state.inputValue}
                    onChange={(event) => this.handleInputChange(event)}
                />
                <input type="submit" value="add to list" className="list-form__btn"/>
            </form>
        )
    }
}

Form.propTypes = {
    addListItem: React.PropTypes.func
}