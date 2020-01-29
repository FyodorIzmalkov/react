import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Time from './time';

const testFiles = [
    {
    id: 1,
    name: 'src',
    type: 'folder',
    updated_at: "2016-07-11 21:24:00",
    latestCommit: {
    message: 'Initial commit'
    }
    },
{
id: 2,
name: 'tests',
type: 'folder',
updated_at: "2016-07-11 21:24:00",
latestCommit: {
message: 'Initial commit'
}
},
{
id: 3,
name: 'README',
type: 'file',
updated_at: "2016-07-18 21:24:00",
latestCommit: {
message: 'Added a readme'
}
},
];

const FileListItem = ({ file }) => (
    <tr className="file-list-item">
        <td><FileIcon file={file} /></td>
        <td><FileName file={file} /></td>
        <td><CommitMessage commit={file.latestCommit}/></td>
        <td><Time time={file.updated_at} /></td>
    </tr>
)

const FileIcon = ({ file }) => {
    let icon = 'fa-file-text-o';

    if (file.type === 'folder'){
        icon = 'fa-folder';
    }

    return (
    <div className="file-icon">
        <i className={`fa ${icon}`}/>
    </div>
    );
}

const FileName = ({ file }) => (
    <div className="file-name">
        {file.name}
    </div>
)

// function getFileName(file){
//     return [
//         <FileIcon file={file} key={0}/>,
//         <td className="file-name" key={1}>{file.name}</td>
//     ];
// }

const CommitMessage = ({ commit }) => (
    <div className="commit-message">
        {commit.message}
    </div>
);

const FileList = ({ files }) => (
    <table className="file-list">
        <tbody>
            {files.map(file => (
                <FileListItem key={file.id} file={file}/>
            ))}
        </tbody>
    </table>
)

const data = [
    {
        id: 0,
        feature: 'Subwoofer',
    },
    {
        id: 1,
        feature: 'Non-porous , washable',
    },
    {
        id: 2,
        feature: 'Wings',
    },
    {
        id: 3,
        feature: 'Beveled Bezel',
    },
    {
        id: 4,
        feature: 'Bezeled Bevel',
    },
    {
        id: 5,
        feature: 'Seedless',
    }
];

const FeatureItem = ({item}) => (
    <tr>
        <td className="featureItem">{item.feature}</td>
    </tr>
)

const PhoneFeatures = ({ data }) => (
        <table className="phoneFeatures">
            <tr className="headerName">Phone Features</tr>
            <tbody>
                {data.map(item => (
                    <FeatureItem item={item} key={item.id} />
                ))}
            </tbody>
        </table>
)

function handleAction(event){
    console.log('Child event:', event);
}

function Parent(){
    return (
        <Child onAction={handleAction}/>
    );
}

const Child = ({onAction, reset}) => (
    <div>
    <button onClick={onAction}>
        Click ME!
    </button>
    <button onClick={reset}>
        RESET
    </button>
    </div>
);

class CountingParent extends React.Component {
    state = {
        actionCount: 0,
    }

    handleAction = (action) => {
        console.log('Child says:', action);
        this.setState({actionCount: this.state.actionCount+1});
    }

    resetButton = () => {
        this.setState({actionCount: 0})
    }

    render(){
        return (
            <div>
                <Child onAction={this.handleAction} reset={this.resetButton}/>
                <p>Clicked {this.state.actionCount} times</p>
            </div>
        );
    }
}

class ControlledInput extends React.Component {
    state = { text: ''};

    handleChange = (event) => {
        let text = event.target.value;
        text = text.replace(/[0-9]/g, '');
        this.setState({
            text
        });
    };

    render(){
        return (
            <input type="text"
            value={this.state.text}
            onChange={this.handleChange}/>
        )
    }
}

const EasyInput = () => (
    <input type="text"/>
)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
ReactDOM.render(<FileList files={testFiles} />, document.getElementById('root'));
