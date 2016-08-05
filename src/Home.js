import React  from 'react';


const Item = React.createClass({
    getInitialState: function() {
        return {
            style: {}
        }
    },

    clickHandler: function(e) {
        let _style = {};
        if (e.target.checked) {
            _style = { textDecoration: 'line-through' }
        }

        this.setState({ style: _style});
    },

    render: function() {
        return (
            <div className="row" style={this.state.style}>
                <input onClick={this.clickHandler} type="checkbox" />
                {this.props.item}
            </div>
        )
    }
});

const Home = React.createClass({
    getInitialState: function() {
        return {
            newItem: '',
            items: []
        }
    },

    changeHandler: function(e) {
        this.setState({ newItem: e.target.value });
    },

    clickHandler: function() {
        this.setState({ items: [this.state.newItem, ...this.state.items] });
        this.setState({ newItem: '' });
    },

    render: function() {
        return (
            <div className="Home">
                <div className="row">
                    <div className="col-md-2">
                        <button onClick={this.clickHandler} className="btn btn-primary">Add</button>
                    </div>
                    <div className="col-md-10">
                        <input value={this.state.newItem} onChange={this.changeHandler} className="form-control" />
                    </div>
                </div>

                {this.state.items.map((item, i) => {
                    return <Item key={i} item={item} />
                })}
            </div>
        )
    }
});

export default Home;
