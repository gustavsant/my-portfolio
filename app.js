const seeMoreButton = document.querySelector('.see-more-button')
seeMoreButton.addEventListener('click', expandProjects)
function expandProjects() {
  console.log('dsajidjsaidjisa')
  const projectsSection = document.querySelector('.projects-section')
  projectsSection.style.height = '3400px'
  seeMoreButton.style.display = 'none'
}
