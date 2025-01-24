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


function setPage(page){

  // set navbar active
  $('#navbarNavAltMarkup span').removeClass('active');
  const navbarId = '#'+page+'-navbar';
  $('#navbarNavAltMarkup').find(navbarId).addClass('active');


  // set content
  const content = 'content-'+page+'.html';
  $('main').load("dist/html/"+content);

};

function setStaticContent(){

  $('#nav-placeholder').load("dist/html/navbar.html", () => setPage('index') );
  
  $('#footer-placeholder').load("dist/html/footer.html");

};


// Main execution
$(document).ready( () => {

  setStaticContent();

}
);