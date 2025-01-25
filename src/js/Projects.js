class Projects {

    articles = [
        'app-escala-lixo',
        'git-joabe',
        'reaper-scripts-vs',
        'email-search-app-java',
        'task-list-app-java',
        'this-website'
    ];

    loadProjects(){

        this.articles.forEach( (article, index) => {
        
            const project = $("<div>", {name: "project"+index});
            project.load("dist/articles/"+article+".html");
            $('#project-placeholder').append(project);
        
            }
        );

        document.getElementById("change-button").onclick = this.changeButton;

    };

    changeButton() {
        document.getElementById("change").innerHTML = "Thank you";
    };

    constructor(){
        this.loadProjects();
    };

};