# Test Dashboard

Тестовое задание — дашборд для управления заказами на корпоративные поездки.

🔗 [Live Demo](https://test-dashboard-yer.vercel.app)

---

## Реализовано

- **Дашборд** — три карточки с счётчиками, процентами и диаграммами: «Кем создано», «Услуги», «Статус утверждения»
- **Панель фильтров** — фильтрация по роли, типу услуги, статусу утверждения, периоду, стоимости и поиску
- **Таблица заказов** — с пагинацией и выбором количества строк на странице
- **URL-состояние** — фильтры и пагинация сохраняются в URL, восстанавливаются при перезагрузке и передаются по ссылке
- **Мок-бэкенд** — на основе JSON-данных с искусственной задержкой (MSW)
- **Состояния загрузки** — скелетоны, ошибка с кнопкой повтора запроса, пустой результат
- **Таймер обратного отсчёта** — живой отсчёт до дедлайна `approveTimeLimit` для заказов со статусом `open`, при достижении нуля статус автоматически становится `expired` без перезапроса

---

## Стек

| Категория | Библиотека |
|---|---|
| UI | [Mantine](https://mantine.dev) |
| Стилизация | SCSS (кастомизация Mantine) |
| Запросы | [Axios](https://axios-http.com) + [TanStack Query](https://tanstack.com/query) |
| Роутинг | [TanStack Router](https://tanstack.com/router) |
| Мок-сервер | [MSW](https://mswjs.io) |
| Иконки | [Tabler Icons](https://tabler.io/icons) |
| Таймер | [react-timer-hook](https://github.com/amrlabib/react-timer-hook) |

---

## Структура проекта (FSD)

```
src/
├── app/           # Инициализация приложения, провайдеры, роутер
├── pages/         # Страницы (Dashboard)
├── widgets/       # Композиционные блоки (OrdersTable, Header)
├── features/      # Фичи (OrdersFilter, OrdersSearch, CustomPagination, SizeSelector)
├── entities/      # Бизнес-сущности (order — типы, хуки, api)
└── shared/        # Переиспользуемое (ui, lib, config, api/mocks)
```

---

## Запуск

```bash
npm install
npm run dev
```

Мок-сервер запускается автоматически через MSW Service Worker.

