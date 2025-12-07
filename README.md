![Tests](https://github.com/ValeriiGrishin/mocking/actions/workflows/tests.yml/badge.svg)

# Get Level Function with Mocking

Функция с моками для тестирования взаимодействия с внешним API.

## Описание
Имитирует получение уровня пользователя с сервера. Включает обработку ошибок и моки для функции `fetchData`.

## Пример использования
```javascript
import getLevel from './src/index.js';

console.log(getLevel('user123'));
// "Ваш текущий уровень: 42" или "Информация об уровне временно недоступна"
