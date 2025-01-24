function changeButton() {
  document.getElementById("change").innerHTML = "Thank you";
};


function staticContent(){

  $('#nav-placeholder').load("dist/html/navbar.html");
  
  let pathname = window.location.pathname;
  if (pathname == '/'){
    pathname = "/index.html";
  };

  const content = pathname.replace('/','content-');

  $('main').load("dist/html/"+content);
  
  $('#footer-placeholder').load("dist/html/footer.html");

};


// Main execution
$(document).ready( () => {

  staticContent();

}
);