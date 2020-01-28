import React from 'react';
import Item from './Item';
import './CartPage.css';

function CartPage({items, onAddOne, onRemoveOne, totalSum}) {

    if (items.length === 0){
        return (
            <div className="CartPage-Empty">
                <p>Your cart is empty</p>
                <p>Why not add some expensive products to it?</p>
            </div>
        );
    }

    return (
        <ul className="CartPage-items">
            {items.map(item =>
                <li key={item.id} className="CartPage-item">
                    <Item item={item}>
                        <div className="CartItem-controls">
                            <button className="CartItem-removeOne"
                                onClick={() => onRemoveOne(item)}>
                                    &ndash;
                                </button>
                                <span className="CartItem-count">{item.count}</span>
                                <button
                                    className="CartItem-addOne"
                                    onClick={() => onAddOne(item)}>+</button>
                        </div>
                    </Item>
                </li>
                )}
                <div className="CartPage-total">
                    Total: ${totalSum}
                </div>
        </ul>
    );
}

export default CartPage;