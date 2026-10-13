// sandbox/day01-environment.ts

// 1. Создаем "шаблон" (интерфейс) для настроек нашего сайта
export interface AppConfig {
  baseUrl: string;   // Адрес UI
  apiUrl: string;    // Адрес API
  timeout: number;   // Таймаут ожидания в мс
}

// 2. Заполняем настройки реальными данными Conduit
export const conduitConfig: AppConfig = {
  baseUrl: 'https://demo.realworld.io/',
  apiUrl: 'https://api.realworld.io/api/',
  timeout: 5000,
};

// 3. Простая функция, которая выводит инфо в консоль
export function logAppInfo(config: AppConfig): void {
  console.log(`[START] Тестируем сайт: ${config.baseUrl}`);
  console.log(`[START] API бэкенда: ${config.apiUrl}`);
}

// Запускаем функцию
logAppInfo(conduitConfig);