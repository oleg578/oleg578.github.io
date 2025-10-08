document.addEventListener('DOMContentLoaded', () => {
  const target = document.getElementById('app-remote');
  if (target) {
    target.innerHTML = 'Message from remote script';
  }
});
