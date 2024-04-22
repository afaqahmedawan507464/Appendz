
window.addEventListener('scroll', function() {
    
    // ------------- body navigation bar scrolling effect --------
    // .abc is li class nav>ul>li(.abc)>a   li class name = abc;
    let sections = document.querySelectorAll('section');
    let Links = document.querySelectorAll('.listindicator a');
    sections.forEach(sec => {
      let top = window.scrollY;
      let offset = sec.offsetTop;
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');
      if(top >= offset && top < offset + height){
          Links.forEach((linksdata) =>{
              linksdata.classList.remove('active');
              document.querySelector('.listindicator a[href*=' + id + ']').classList.add('active');
          });
      };  
    });
});
