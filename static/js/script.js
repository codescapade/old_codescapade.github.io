feather.replace();

const darkModeButton = document.getElementById('darkMode');
const summaries = document.getElementsByClassName('blog-list-summary');
const nav = document.getElementsByClassName('navigation')[0];

const sunIcon = document.getElementById('sunIcon')
const moonIcon = document.getElementById('moonIcon');

let mode = localStorage.getItem('darkmode');
if (mode && mode === 'dark') {
  setDark();
} else {
  setLight();
}

darkModeButton.addEventListener('click', () => {
  if (mode === 'dark') {
    setLight();
  } else {
    setDark();
  }
});

function setDark() {
  moonIcon.style.display = 'none';
  sunIcon.style.display = 'block';
  mode = 'dark';

  document.body.classList.add('dark');
  nav.classList.add('dark');

  for (let sum of summaries) {
    sum.classList.add('dark');
  }

  localStorage.setItem('darkmode', mode);
}

function setLight() {
  sunIcon.style.display = 'none';
  moonIcon.style.display = 'block';
  mode = 'light';

  document.body.classList.remove('dark');
  nav.classList.remove('dark');

  for (let sum of summaries) {
    sum.classList.remove('dark');
  }

  localStorage.setItem('darkmode', mode);
}