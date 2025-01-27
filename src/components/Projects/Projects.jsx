import './Projects.css';
import { useState } from 'react';

function Article({articleName}){

    const [content, setContent] = useState('');

        const protocol = window.location.protocol;
        const host = window.location.host;

        const articleLink = protocol + '//' + host + '/articles/'+ articleName +'.html';

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


export default function Projects() {

    const articleList = [
        'app-escala-lixo',
        'git-joabe',
        'reaper-scripts-vs',
        'email-search-app-java',
        'task-list-app-java',
        'this-website'
    ];

    return (
    <>
        <h2>Portfolio</h2>
        <div className="side-border">
            <p>
                Here will have some of my most interesting projects. I guess...
            </p>
        </div>

        {articleList.map( (articleName, index) =>

            <Article key={index}
                    articleName={articleName}
            />

        )}
    </>
    );

}