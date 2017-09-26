import _ from 'lodash';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// actions
import { getCategories } from '../actions/index';
// components
import CategoryItem from './category_item';
import CategoriesForm from './categories_form';

class CategoriesList extends Component {

    componentWillMount(){
        this.props.getCategories();
    }

    renderCategories() {
        const categories = this.props.categories;
        return _.map(categories, category => {
            return (
                <CategoryItem key={category.id} category={category} />
            )
        })
    }

    render() {
        return (
            <div>
                <div>
                    <CategoriesForm />
                    <h3>Categories</h3> 
                    <div className="categories-holder">
                        {this.renderCategories()}
                    </div>
                    <Link className="btn btn-primary" to="/">Go home</Link> 
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        categories: state.categories
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getCategories: getCategories
    }, dispatch)
}

export default connect(mapStateToProps, {getCategories})(CategoriesList);