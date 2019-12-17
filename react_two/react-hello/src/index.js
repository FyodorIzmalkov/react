import React from 'react';
import ReactDom from 'react-dom';

function HelloWorld(){
    return (
        <div> <Hello/> <World/></div>
    );
}

const Hello = () => {
    return (
        <span>Hello</span>
    );
}

const World = () => {
    return (
    <span>World</span>
    );
}

ReactDom.render(
    <HelloWorld/>,
    document.querySelector('#root')
);