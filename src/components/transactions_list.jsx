import _ from 'lodash';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// components
import TransactionForm from './transaction_form';
import TransactionItem from './transaction_item';
// actions
import { deleteTransaction, updateTransaction } from '../actions/index';

class TransactionsList extends Component {

    renderTransactions() {
        return _.map(this.props.transactions, transaction => {
            return (
                <TransactionItem key={transaction.id} transaction={transaction} />
            )
        })
    }

    render() {
        return (
            <div>
                <TransactionForm />
                <ul>
                    {this.renderTransactions()}
                </ul>
                <Link className="btn btn-primary" to="/categories">Go to Categories</Link>
                <Link className="btn btn-primary" to="/graphs">Go to Graphs</Link>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        transactions: state.transactions
    };
}

export default connect(mapStateToProps, { deleteTransaction, updateTransaction })(TransactionsList);