const tg = window.Telegram.WebApp;
tg.ready();

// Показываем ID пользователя
document.getElementById('user-id').textContent = tg.initDataUnsafe.user?.id || 'Unknown';

// Настройка кнопки
tg.MainButton.text = "Close";
tg.MainButton.show();
tg.MainButton.onClick(() => tg.close());
// Добавьте в script.js
const setTheme = () => {
  document.body.style.backgroundColor = tg.themeParams.bg_color || '#ffffff';
  document.body.style.color = tg.themeParams.text_color || '#000000';
};

tg.onEvent('themeChanged', setTheme);
setTheme();
