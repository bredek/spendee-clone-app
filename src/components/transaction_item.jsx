import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// actions
import { deleteTransaction, updateTransaction } from '../actions/index';

class TransactionItem extends Component {

    constructor(props) {
        super(props);

        this.state = {
            active: false,
            editMode: true,
            category: '',
            date: '',
            description: '',
            sum: ''
        };

        this.handleCategoryChange = this.handleCategoryChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleSumChange = this.handleSumChange.bind(this);
        this.handleNoteChange = this.handleNoteChange.bind(this);
        this.toggleClass = this.toggleClass.bind(this);
        this.onEditClick = this.onEditClick.bind(this);
    }

    handleCategoryChange(event) {
        this.setState({ category: event.target.value });
    }
    handleDateChange(event) {
        this.setState({ date: event.target.value });
    }
    handleNoteChange(event) {
        this.setState({ description: event.target.value });
    }
    handleSumChange(event) {
        this.setState({ sum: event.target.value });
    }

    toggleClass() {
        const currentState = this.state.active;
        this.setState({
            active: !currentState,
        });
    };

    onEditClick(transaction) {
        this.toggleClass();

        const id = transaction.id;
        const {category, date, description, sum} = this.state

        if (this.state.active) {
            const updatedTransaction = {
                id,
                category,
                date,
                description,
                sum
            }
            this.props.updateTransaction(
                id,
                updatedTransaction
            );
        } else {
            this.setState({
                category: transaction.category,
                date: transaction.date,
                description: transaction.description,
                sum: transaction.sum
            })
        }

    }

    renderPost() {
        const {transaction} = this.props;
        return (
            <li
                key={transaction.id}
                className="list-group-item"
            >
                <hr />
                <p>Category:
                        <input
                        type="select"
                        disabled={this.state.active ? '' : 'disabled'}
                        defaultValue={transaction.category}
                        onChange={this.handleCategoryChange}
                    />
                </p>
                <p>Date:
                        <input
                        type="date"
                        disabled={this.state.active ? '' : 'disabled'}
                        defaultValue={transaction.date}
                        onChange={this.handleDateChange}
                    />
                </p>
                <p>
                    Notes:
                        <input
                        type="text"
                        disabled={this.state.active ? '' : 'disabled'}
                        defaultValue={transaction.description}
                        onChange={this.handleNoteChange}
                    />
                </p>
                <p>
                    Sum:
                        <input
                        type="text"
                        disabled={this.state.active ? '' : 'disabled'}
                        defaultValue={transaction.sum}
                        onChange={this.handleSumChange}
                    />
                </p>
                <button
                    onClick={() => {
                        this.onEditClick(transaction);
                    }}>
                    {this.state.active ? 'Save' : 'Edit'}
                </button>
                <button onClick={() => {this.props.deleteTransaction(transaction.id)}}>
                    Remove
                    </button>
                <hr />
            </li>
        )
    }

    render() {
        return (
            <div>
                {this.renderPost()}
            </div>
        )
    }
}

export default connect(null, {deleteTransaction, updateTransaction})(TransactionItem);