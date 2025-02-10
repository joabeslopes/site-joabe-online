import './Projects.css';
import Article from '../Article/Article';

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