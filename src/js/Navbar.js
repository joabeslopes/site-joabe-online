class Navbar {

    pageList = ['Home', 'Projects', 'About Me'];
    activePage = 'home'; // camelCase
    thisClass = this;

    setPage(page){
        this.activePage = page;
        this.loadActivePage();
    };

    loadActivePage(){
        this.activeNavbar();
        this.loadContent();
    };

    activeNavbar(){
        // set navbar active
        $('#navbarPages span').removeClass('active');
        const navbarId = '#'+this.activePage+'-navbar';
        $('#navbarPages').find(navbarId).addClass('active');
    };

    loadContent(){
        // load content
        const content = 'content-'+this.activePage+'.html';
        $('main').load("dist/html/"+content);
    };

    createPageList() {

        const sortedPageList = this.pageList.reverse();

        sortedPageList.forEach( (page) => {

            const pageTrim = page.replace(/[^a-zA-Z]+/g, '');
            const pageFirstLetter = pageTrim[0].toLowerCase();

            const pageId = pageFirstLetter + pageTrim.slice(1);

            const newPage = $('<span>', {id: pageId+'-navbar', class: 'nav-link'});
            newPage.text(page);
            newPage.click( () => this.setPage(pageId) );

            $('#navbarPages').prepend(newPage);

        });

    };

    constructor(){

        $('#nav-placeholder').load("dist/html/navbar.html", ()=>{
            this.createPageList();
            this.loadActivePage();
        });
    };

};