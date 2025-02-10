import { useState } from 'react';

export default function Article({articleName}){

    const [content, setContent] = useState('');

        const protocol = window.location.protocol;
        const host = window.location.host;

        const articleLink = protocol + '//' + host + '/articles/'+ articleName + '.html';

        fetch(articleLink)
        .then( response => response.text()
        ).then( (response) => 
           setContent(response)
        );
    
    return(
        <div dangerouslySetInnerHTML={ {__html: content} }>
        </div>
    );

};