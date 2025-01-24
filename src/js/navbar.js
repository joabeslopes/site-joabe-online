switch (window.location.pathname) {
    case "/":
    case "/index.html":
      $('#navbarNavAltMarkup').find('#home-navbar').addClass('active');
      break;      

    case "/projects.html":
      $('#navbarNavAltMarkup').find('#projects-navbar').addClass('active');
      break;

    case "/whoAmI.html":
      $('#navbarNavAltMarkup').find('#whoami-navbar').addClass('active');
      break;
};