# Nuxt 3 Boilerplate

**Framework:** [Nuxt 3](https://nuxt.com/)

**Среда выполнения:** [NodeJS версия 20+](https://nodejs.org)

**Менеджер пакетов:**  [npm](https://www.npmjs.com/)

**Для деплоя установлен:** [pm 2 + ecosystem.config.cjs](https://pm2.keymetrics.io/) 


## Development

Установка зависимостей:

```bash
npm install
```

Запуск devServer on `http://localhost:3000`:

```bash
npm run dev
```

## Production

Сборка приложения для production:

```bash
npm run build
```

Локальный просмотр production build:

```bash
npm run preview
```
Деплой с применением `pm 2` (настроен `ecosystem.config.cjs`)

```bash
pm2 deploy production setup
npm run deploy
```

Ознакомьтесь с [Deployment documentation Nuxt 3](https://nuxt.com/docs/getting-started/deployment) для получения дополнительной информации.

Ознакомьтесь с [Deployment System PM 2](https://pm2.keymetrics.io/docs/usage/deployment/) для получения дополнительной информации.
