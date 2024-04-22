document.addEventListener("DOMContentLoaded", function() {
    var iconContainer = document.querySelectorAll('.icon-container').forEach(icon-container);
    var arrowIcon = document.querySelectorAll('.arrow-icon').forEach(arrow-icon);
  
    iconContainer.addEventListener('click', function() {
      arrowIcon.classList.toggle('down');
    });
  });