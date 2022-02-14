const footer = document.querySelector('footer');
const allSections = document.querySelectorAll('.all');
const navBar = document.querySelector('.nav-ul');

const findHight = () => {
  if (window.innerHeight > document.body.scrollHeight) {
    footer.style.position = 'fixed';
  } else {
    footer.style.position = 'relative';
  }
};
export default findHight;

navBar.addEventListener('click', (e) => {
  if (e.target.parentElement.classList.contains('nav-link')) {
    const target = e.target.parentElement.id;
    const actTarget = document.querySelector(`.${target}`);
    allSections.forEach((sec) => {
      sec.classList.add('hidden');
    });
    actTarget.classList.remove('hidden');
    findHight();
  }
});