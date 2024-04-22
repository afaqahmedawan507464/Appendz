document.addEventListener("DOMContentLoaded", function() {
    var iconContainer = document.querySelector('.icon-container');
    var arrowIcon = document.querySelector('.arrow-icon');
    let element = document.getElementById("fqs");
  
    iconContainer.addEventListener('click', function() {
      arrowIcon.classList.toggle('down');
      element.classList.toggle("faqanswerhide");
    });
  });