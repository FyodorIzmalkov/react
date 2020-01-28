import React from 'react';

const Nav = ({activeTab, onTabChange, totalSum, totalCount}) => (
    <nav className="App-nav">
        <ul>
            <li className={`App-nav-item ${activeTab === 0 && 'selected'}`}>
            <a onClick={() => onTabChange(0)}>Items</a>
            </li>
            <li className={`App-nav-item ${activeTab === 1 && 'selected'}`}>
                <a onClick={() => onTabChange(1)}>Cart</a></li>
            <li className="App-nav-sum" onClick={() => onTabChange(1)}>
                <i className="fa fa-shopping-cart" aria-hidden="true"></i> {totalCount} items (${totalSum})
            </li>
        </ul>
    </nav>
);

class NavLink extends React.Component {
    handleClick = () => {
        this.props.onClick(this.props.index);
    }

    render (){
        return (
            <a onClick={this.handleClick}>
                {this.props.children}
            </a>
        )
    }
}

export default Nav;