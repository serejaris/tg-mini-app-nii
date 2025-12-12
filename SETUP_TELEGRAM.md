# Пошаговая инструкция: Запуск миниапа в Telegram

## Вариант 1: Быстрый запуск с Vercel (Рекомендуется)

### Шаг 1: Развертывание на Vercel

1. **Установите Vercel CLI** (если еще не установлен):
   ```bash
   npm i -g vercel
   ```

2. **Войдите в Vercel**:
   ```bash
   vercel login
   ```

3. **Разверните проект**:
   ```bash
   vercel
   ```
   Следуйте инструкциям. Vercel автоматически создаст HTTPS URL для вашего проекта.

4. **Получите URL** вашего проекта (например: `https://your-project.vercel.app`)

### Шаг 2: Настройка бота в BotFather

1. Откройте [@BotFather](https://t.me/botfather) в Telegram

2. Если у вас еще нет бота, создайте его:
   ```
   /newbot
   ```
   Следуйте инструкциям BotFather для создания бота.

3. Настройте миниап для вашего бота:
   ```
   /newapp
   ```
   Выберите вашего бота из списка.

4. Укажите данные миниапа:
   - **Title**: Название вашего миниапа (например: "My Mini App")
   - **Short name**: Короткое имя (будет использоваться в URL)
   - **Description**: Описание миниапа
   - **Photo**: Загрузите иконку (опционально)
   - **Web App URL**: Вставьте URL от Vercel (например: `https://your-project.vercel.app`)

5. BotFather создаст ссылку вида: `https://t.me/your_bot/your_app`

### Шаг 3: Тестирование

1. Откройте [Web Telegram](https://web.telegram.org/k/) или мобильное приложение
2. Найдите вашего бота
3. Нажмите на кнопку миниапа или отправьте команду `/start`
4. Миниап должен открыться!

---

## Вариант 2: Локальная разработка с туннелем

### Шаг 1: Установка туннеля

**Вариант A: ngrok** (требует регистрацию, но простой в использовании)
```bash
# macOS
brew install ngrok

# Или скачайте с https://ngrok.com/download
```

**Вариант B: cloudflared** (бесплатный, не требует регистрации)
```bash
# macOS
brew install cloudflared
```

### Шаг 2: Запуск проекта с HTTPS

1. **Остановите текущий dev сервер** (если запущен)

2. **Запустите проект с HTTPS**:
   ```bash
   pnpm run dev:https
   ```
   Проект будет доступен на `https://localhost:3000`

3. **В новом терминале запустите туннель**:

   **С ngrok:**
   ```bash
   ngrok http 3000
   ```
   
   **С cloudflared:**
   ```bash
   cloudflared tunnel --url https://localhost:3000
   ```

4. **Скопируйте HTTPS URL** из вывода туннеля (например: `https://abc123.ngrok.io`)

### Шаг 3: Настройка в BotFather

1. Откройте [@BotFather](https://t.me/botfather)
2. Выполните `/newapp` или `/myapps` → выберите бота → `Edit App` → `Web App URL`
3. Вставьте URL от туннеля (например: `https://abc123.ngrok.io`)
4. Сохраните изменения

### Шаг 4: Тестирование

1. Откройте Telegram
2. Найдите вашего бота
3. Запустите миниап

**⚠️ Важно:** 
- URL от туннеля меняется при каждом перезапуске (для бесплатных версий)
- Для ngrok можно зарегистрироваться и получить постоянный домен
- Для production используйте вариант с Vercel

---

## Вариант 3: Другие хостинги

Вы можете развернуть проект на любом хостинге с поддержкой HTTPS:
- **Netlify**
- **Railway**
- **Render**
- **Heroku**
- И другие...

Процесс аналогичен Vercel: разверните проект и используйте полученный HTTPS URL в BotFather.

---

## Полезные команды

### Обновление миниапа в BotFather
```
/myapps → выберите бота → Edit App → Web App URL
```

### Проверка работы миниапа локально
```bash
# Запуск с HTTPS
pnpm run dev:https

# Откройте в браузере (будет предупреждение о сертификате - это нормально)
# https://localhost:3000
```

### Сборка для production
```bash
pnpm run build
pnpm run start
```

---

## Решение проблем

### Миниап не открывается в Telegram
- Убедитесь, что URL использует HTTPS (не HTTP)
- Проверьте, что сервер доступен из интернета
- Убедитесь, что URL правильно указан в BotFather

### Ошибки SSL
- Для локальной разработки с `dev:https` предупреждения о сертификате - это нормально
- Для production используйте хостинг с валидным SSL сертификатом

### Миниап не работает в Telegram Desktop
- Некоторые функции могут работать только в мобильном приложении
- Попробуйте Web Telegram: https://web.telegram.org/k/

---

## Дополнительные ресурсы

- [Документация Telegram Mini Apps](https://docs.telegram-mini-apps.com/)
- [Создание бота через BotFather](https://docs.telegram-mini-apps.com/platform/creating-new-app)
- [Vercel Deployment](https://vercel.com/docs)

