import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// actions
import { addTransaction, getCategories } from '../actions/index';
// components
import Chart from './chart';

class GraphList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 'Select filter please',
            points: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        this.renderCategories(this.state.value);
        event.preventDefault();
    }

    componentWillMount() {
        this.props.getCategories();
    }

    renderCategories(category) {
        function filterByCategory(item) {
            return item.category === category;
        }

        const { transactions } = this.props;
        const filteredTransactions = transactions.filter(filterByCategory);
        const points = [];

        _.map(filteredTransactions, item => {
            points.push(Number(item.sum));
        })

        this.setState({ points });
    }

    rendedOptions(opts) {
        return _.map(opts, option => {
            return (
                <option key={option.id} value={option.value}>{option.value}</option>
            )
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Pick your filter please:
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option>Select category</option>
                            {this.rendedOptions(this.props.categories)}
                        </select>
                    </label>
                    <input type="submit" value="Show report" />
                </form>
                <div className="graphs">
                    <Chart data={this.state.points} color="#41c3f9" />
                </div>
                <Link className="btn btn-primary" to="/">Go to transactions</Link>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        categories: state.categories,
        transactions: state.transactions
    };
}

export default connect(mapStateToProps, { getCategories })(GraphList);