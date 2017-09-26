import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux';
// actions
import { addCategory } from '../actions/index';

class CategoriesForm extends Component {

    onSubmit(values) {
        this.props.addCategory(values);
    }

    render() {
        const { handleSubmit, categories } = this.props;
        return (
            <div className="categories-form-holder">
                <form
                    className="form-inline"
                    onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <label>New Category</label>
                    <Field
                        name="value"
                        component="input"
                        type="text"
                        placeholder="New category"
                    />
                    <button type="submit" className="btn">Add Category</button>
                </form>
            </div>
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
})(connect(mapStateToProps, { addCategory })(CategoriesForm))