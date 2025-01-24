function setPage(page){

    // set navbar active
    $('#navbarNavAltMarkup span').removeClass('active');
    const navbarId = '#'+page+'-navbar';
    $('#navbarNavAltMarkup').find(navbarId).addClass('active');
  
  
    // set content
    const content = 'content-'+page+'.html';
    $('main').load("dist/html/"+content);
  
};


function loadStaticContent(){

$('#nav-placeholder').load("dist/html/navbar.html", () => setPage('index') );

$('#footer-placeholder').load("dist/html/footer.html");

};