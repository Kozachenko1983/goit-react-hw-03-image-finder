import React, { Component } from 'react'
import PropTypes from 'prop-types';
import style from './SearchForm.module.css'


export default class SearchForm extends Component {
    static propTypes = {
        onSubmit: PropTypes.func.isRequired,
    };
    state = {
        inputValue: '',

    };

    handleChange = event => {
        console.log("1", event.target.value)
        this.setState({ inputValue: event.target.value });
    };

    handleSubmit = event => {
        event.preventDefault();
        console.log("object", this.state.inputValue)
        this.props.onSubmit(this.state.inputValue)
        this.setState({
            inputValue: '',
        })
    };

    render() {
        const { inputValue } = this.state
        return (
            <form className={style.serchForm} onSubmit={this.handleSubmit}>
                <input className={style.input}
                    type="text"
                    value={inputValue}
                    placeholder="Search images..."
                    onChange={this.handleChange}
                />
            </form>
        );
    }
}

