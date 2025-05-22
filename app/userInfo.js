async function getUserInfo() {
  const userAgent = navigator.userAgent;
  const language = navigator.language;
  const screenWidth = window.screen.width;
  const screenHeight = window.screen.height;
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  // Получаем IP через внешний сервис (public API)
  let ip = 'Unavailable';
  try {
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    ip = data.ip;
  } catch (e) {
    console.warn('Could not fetch IP address', e);
  }

  const info = {
    ip,
    userAgent,
    language,
    screenWidth,
    screenHeight,
    timezone
  };

  console.log('User info:', info);

  // Выводим на страницу
  const infoContainer = document.createElement('pre');
  infoContainer.textContent = JSON.stringify(info, null, 2);
  document.body.appendChild(infoContainer);
}

window.onload = getUserInfo;
