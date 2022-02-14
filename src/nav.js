const dateEl = document.querySelector('.date');
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

function setDate() {
  const date = new Date();
  const obj = {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  };
  const formatedDate = Intl.DateTimeFormat([], obj).format(date);
  dateEl.textContent = formatedDate;
}

setInterval(setDate, 1000);
