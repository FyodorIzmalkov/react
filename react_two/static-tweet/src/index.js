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

ReactDOM.render(<Tweet tweet={testTweet}/>, document.getElementById('root'));
