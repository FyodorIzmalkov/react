import React from 'react';
import ReactDOM from 'react-dom';

const MyThing = () => {
    return (
    <div className='book'>
        <div className='title'>
            The title
        </div>
        <div className='author'>
            The author
        </div>
        <ul className='stats'>
            <li className='rating'>
                5 stars
            </li>
            <li className='isbn'>
                12-345678-910
            </li>
        </ul>
    </div>
    );
}

const Greetings = () => {
    const username = false;

    return (
        <div>{username == null || username == undefined ? "Not logged in" : `Hello ${username}`}</div>
    );
}

ReactDOM.render(<MyThing />, document.getElementById('root'));
