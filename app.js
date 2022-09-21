const seeMoreButton = document.querySelector('.see-more-button')
seeMoreButton.addEventListener('click', expandProjects)
function expandProjects() {
  const projectsSection = document.querySelector('.projects-section')
  projectsSection.style.height = '3410px'
  seeMoreButton.style.display = 'none'
}
