import React, { Component } from 'react';
import { connect } from 'react-redux';
// actions
import { editCategory, deleteCategory } from '../actions/index';

class CategoryItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            active: false,
            category: '',
        };
        this.handleCategoryChange = this.handleCategoryChange.bind(this);
        this.toggleClass = this.toggleClass.bind(this);
        this.onEditClick = this.onEditClick.bind(this);
    }

    handleCategoryChange(event) {
        this.setState({ 
            category: event.target.value 
        });
    }

    toggleClass() {
        const currentState = this.state.active;
        this.setState({
            active: !currentState,
        });
    };

    onEditClick(category) {
        this.toggleClass();

        const id = category.id;
        const value = this.state.category;

        if (this.state.active) {
            const updatedCategory = {
                id,
                value
            }
            this.props.editCategory(
                id,
                updatedCategory
            );
        } else {
            this.setState({
                category: category.value
            })
        }
    }

    renderCategory() {
        const { category } = this.props;
        return (
            <li
                key={category.id}
                className="list-group-item"
            >
                <p>Category:
                        <input
                        type="select"
                        disabled={this.state.active ? '' : 'disabled'}
                        defaultValue={category.value}
                        onChange={this.handleCategoryChange}
                    />
                </p>
                <button
                    onClick={() => {
                        this.onEditClick(category);
                    }}>
                    {this.state.active ? 'Save' : 'Edit'}
                </button>
                <button 
                    onClick={() => { 
                        this.props.deleteCategory(category.id); 
                    }}>
                    Remove
                    </button>
            </li>
        )
    }

    render() {
        return (
            <div>
                {this.renderCategory()}
            </div>
        )
    }
}

export default connect(null, {editCategory, deleteCategory})(CategoryItem);