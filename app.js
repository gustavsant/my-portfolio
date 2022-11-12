const seeMoreButton = document.querySelector('.see-more-button')
seeMoreButton.addEventListener('click', expandProjects)
function expandProjects() {
  const projectsSection = document.querySelector('.projects-section')
  projectsSection.style.height = 'auto'
  seeMoreButton.style.display = 'none'
}
