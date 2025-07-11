let is24Hour = true; 
function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  let ampm = '';
  if (!is24Hour) {
    ampm = hours >= 12 ? ' PM' : ' AM';
    hours = hours % 12 || 12; 
  }
  hours = String(hours).padStart(2, '0');
  const timeString = `${hours}:${minutes}:${seconds}${ampm}`;
  document.getElementById('clock').innerText = timeString;
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const dateString = now.toLocaleDateString(undefined, options);
  document.getElementById('date').innerText = dateString;
}
document.getElementById('toggleFormat').addEventListener('click', () => {
  is24Hour = !is24Hour;
  const btn = document.getElementById('toggleFormat');
  btn.innerText = is24Hour ? 'Switch to 12-hour' : 'Switch to 24-hour';
  updateClock(); 
});
setInterval(updateClock, 1000);
updateClock();
