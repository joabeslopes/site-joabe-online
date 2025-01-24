function changeButton() {
    document.getElementById("change").innerHTML = "Thank you";
};


function loadProjects(){

const articles = [
    'git-joabe',
    'reaper-scripts-vs',
    'email-search-app-java',
    'task-list-app-java',
    'this-website'
];

articles.forEach( (article, index) => {

    const project = $("<div>", {name: "project"+index});
    project.load("dist/articles/"+article+".html");
    $('#project-placeholder').append(project);

}
);
};