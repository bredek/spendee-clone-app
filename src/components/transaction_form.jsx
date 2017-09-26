import _ from 'lodash';
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// actions
import { addTransaction, getCategories } from '../actions/index';

class TransactionForm extends Component {

    componentDidMount(){
        this.props.getCategories();
    }

    rendedOptions(opts){
        return _.map(opts, option => {
            return (
                <option key={option.id} value={option.value}>{option.value}</option>
            )
        })
    }

    onSubmit(values) {
        this.props.addTransaction(values);
    }

    render() {
        const { handleSubmit, categories } = this.props;
        return (
            <form className="form-inline" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field name="category" component="select">
                    <option>Select category</option>
                    {this.rendedOptions(categories)}
                </Field>
                <Field
                    name="date"
                    component="input"
                    type="date"
                    placeholder="date"
                />
                <Field
                    name="description"
                    component="input"
                    type="text"
                    placeholder="Note"
                />
                <Field
                    name="sum"
                    component="input"
                    type="text"
                    placeholder="Enter sum"
                />                
                <button type="submit" className="btn">Add Transaction</button>
            </form>
        )
    }
}

function mapStateToProps(state) {
    return {
        categories: state.categories
    };
}

export default reduxForm({
    form: 'newCategoryForm' // a unique identifier for this form
})(connect(mapStateToProps, { addTransaction, getCategories })(TransactionForm))
