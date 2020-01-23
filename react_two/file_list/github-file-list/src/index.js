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

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
ReactDOM.render(<PhoneFeatures data={data} />, document.getElementById('root'));
