const tg = window.Telegram.WebApp;
tg.ready();

// Показываем ID пользователя
document.getElementById('user-id').textContent = tg.initDataUnsafe.user?.id || 'Unknown';

// Настройка кнопки
tg.MainButton.text = "Close";
tg.MainButton.show();
tg.MainButton.onClick(() => tg.close());