import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import moment from 'moment';
import PropTypes from 'prop-types';

function Tweet({ tweet }){
    return (
        <div className="tweet">
            <Avatar hash={tweet.gravatar}/>
            <div className="content">
                <NameWithHadle author={tweet.author}/>
                <Time time={tweet.timestamp}/>
                <Message text={tweet.message}/>
            <div className="buttons">
                <ReplyButton/>
                <RetweetButton count={tweet.retweets}/>
                <LikeButton count={tweet.likes}/>
                <MoreOptionsButton/>
            </div>
            </div>
        </div>
    );
}

Tweet.propTypes = {
    tweet: PropTypes.shape({
        message: PropTypes.string.isRequired,
        gravatar: PropTypes.string.isRequired,
        author: PropTypes.shape({
            handle: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired
        }).isRequired,
        likes: PropTypes.number.isRequired,
        retweets: PropTypes.number.isRequired,
        timestamp: PropTypes.string.isRequired
    }).isRequired
}

var testTweet = {
    message: "Something about cats.",
    gravatar: "xyz",
    author: {
    handle: "catperson",
    name: "IAMA Cat Person"
    },
    likes: 7,
    retweets: 3,
    timestamp: "2016-07-30 21:24:37"
    };

// const Avatar = () => {
//     return (
//         <img
//         src="https://www.gravatar.com/avatar/nothing"
//         className="avatar"
//         alt="avatar"
//         />
//     );
// }

const Avatar = ({ hash }) => {
    var url = `https://www.gravatar.com/avatar/${hash}`
    return (
        <img 
        src={url}
        className="avatar"
        alt="avatar"/>
    );
}

Avatar.propTypes = {
    hash: PropTypes.string
}

// const Message = () => {
//     return (
//         <div className="message">
//             This is less than 140 characters.
//         </div>
//     );
// }

const Message = ({text}) => {
    return (
        <div className="message">
            {text}
        </div>
    )
}

Message.propTypes = {
    text: PropTypes.string
}

// const NameWithHadle = () => {
//     return (
//         <span className='name-with-handle'>
//             <span className="name">Your Name</span>
//             <span className="handle">@yourhandle</span>
//         </span>
//     );
// }

const NameWithHadle = ({author}) => {
    const {name , handle} = author;
    return (
    <span className="name-with-handle">
        <span className="name">{name}</span>
        <span className="handle">@{handle}</span>
    </span>
    )
}

NameWithHadle.propTypes = {
    author: PropTypes.shape({
        name: PropTypes.string.isRequired,
        handle: PropTypes.string.isRequired
    }).isRequired
}

// const Time = () => (
//     <span className="time">3h ago</span>
// )

const Time = ({time}) => (
        <span className="time">
            {moment(time).fromNow()}
        </span>
    )

    Time.propTypes = {
        time: PropTypes.string
    }

const ReplyButton = () => (
    <i className="fa fa-reply reply-button"/>
)

// const RetweetButton = () => (
//     <i className="fa fa-retweet retweet-button"/>
// )

const getRetweetCount = (count) => {
    if (count > 0) {
        return (
            <span className="retweet-count">
                {count}
            </span>
        );
    } else {
        return null;
    }
}

const RetweetButton = ({ count }) => (
    <span className="retweet-button">
        <i className="fa fa-retweet"/>
        {getRetweetCount(count)}
    </span>
)

RetweetButton.propTypes = {
    count: PropTypes.number
}

// const LikeButton = () => (
//     <i className="fa fa-heart like-button"/>
// )

const LikeButton = ({count}) => (
    <span className="like-button">
        <i className="fa fa-heart"/>
        {count > 0 && 
        <span className="like-count">
            {count}
            </span>}
    </span>
)

LikeButton.propTypes = {
    count : PropTypes.number
}

const MoreOptionsButton = () => (
    <i className="fa fa-ellipsis-h more-options-button"/>
)

const senders = {
    fromPerson :{
        fullName: "HARRY POTTER",
        street: "123 Fake St.",
        city: "Boston, MA 02118"
    },
    toPerson :{
        fullName: "ALEXANDER BASHER",
        street: "222 BAKER ST.",
        city: "LONDON, SMTH 228",
    }
}

const AddressLabel = ({person}) => (
    <div className="sender">
        <p>{person.fullName}</p>
        <p>{person.street}</p>
        <p>{person.city}</p>
    </div>
)

const Envelope = ({toPerson, fromPerson}) => (
<div className="envelope">
    <div className="fromPerson">
        <AddressLabel person={fromPerson}/>
    </div>
    <div className="toPerson">
        <AddressLabel person={toPerson}/>
    </div>
    <div>
        <img src="https://www.linns.com/images/default-source/news/canada-post-2020-rate-change-flag-stamp.jpg?sfvrsn=a7c736d1_4" className="postStamp"></img>
    </div>
</div>
)

const cardInfo = {
    personsName: "CARDHOLDER NAME",
    expirationDate: "12/20",
    cardNumber: "1234  5678  8765  4321",
    bankName: "Big Bank, Inc.",
}

const ExpirationDate = ({expirationDate}) => (
    <div className="expirationDate">
        <div className="valid">
            <div>VALID</div>
            <div>THRU</div>
        </div>
        <div className="date">{expirationDate}</div>
    </div>
)

const CreditCard = ({cardInfo}) => (
        <div className="creditCard">
            <div className="bankName">{cardInfo.bankName}</div>
            <div className="cardNumber">{cardInfo.cardNumber}</div>
            <div className="fourNumbers">1234</div>
            <ExpirationDate expirationDate={cardInfo.expirationDate}/>
            <div className="cardHolderName">{cardInfo.personsName}</div>
        </div>
    )

    const image = "https://reactjs.org/logo-og.png";
    const title = "REACT";
    const text = "the best thing since jQuery, probably.";

const Poster = ({image,title,text}) => (
    <div>
        <img className="posterImage" src={image}/>
        <div className="posterTitle">{title}</div>
        <div className="posterText">{text}</div>
    </div>
)

function ErrorBox({ children }) {
    return (
        <div>
            {children}
        </div>
    )
}

function Nav({children}) {
    let items = React.Children.toArray(children);
    for (let i = items.length - 1; i >= 1; i--){
        items.splice(i , 0, 
            <span key={i} className='separator'>|</span>);
    }
    return (
        <div>{items}</div>
    )
}

const NavItem = ({url, children}) => (
    <a href={url + children}>{url + children}</a>
)


// ReactDOM.render(<Tweet tweet={testTweet}/>, document.getElementById('root'));
ReactDOM.render(<Nav>
    <NavItem url='/'>Home</NavItem>
    <NavItem url='/about'>About</NavItem>
    <NavItem url='/contact'>Contact</NavItem>
    </Nav>, document.getElementById('root'));