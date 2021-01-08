import React from  'react';
import DownloadLink from 'react-download-link';
import TestFile from './test.txt';
import Hapi2_2_0 from './HAPI2.2.0_windows.exe';

// const getDataFromUrl = (url) => new Promise((resolve,reject) => {
//     setTimeout(() => {
//         fetch(url)
//             .then(response => response.text())
//             .then(data => {
//                 resolve(data)
//             });
//     })
// }, 2000);

// const DownloadLinkComponent = () => {
//     return (
//         <div>
//             <DownloadLink
//                 label="Download"
//                 filename="test.txt"
//                 exportFile={() => Promise.resolve(getDataFromUrl(url))}
//             />
//         </div>
//     )
// }


const HAPIDownloadLinkComponent = () => {
    return (
        <div>
            <a href={Hapi2_2_0} download>HAPI2.2.0 Application</a>
        </div>
    )
}

export default HAPIDownloadLinkComponent;