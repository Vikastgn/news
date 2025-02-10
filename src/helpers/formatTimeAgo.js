export const formatTimeAgo = (dateString) => {
    const now = new Date(); // Получаем текущую дату и время
    const date = new Date(dateString); // Преобразуем входную строку даты в объект Date
    const secondPast = (now.getTime() - date.getTime()) / 1000; // Вычисляем разницу в секундах

    if (secondPast < 60) {
        return `${Math.floor(secondPast)}s ago`; // Менее 60 секунд
    }
    if (secondPast < 3600) {
        return `${Math.floor(secondPast / 60)}m ago`; // Менее 60 минут
    }
    if (secondPast < 86400) {
        return `${Math.floor(secondPast / 3600)}h ago`; // Менее 24 часов
    }
    if (secondPast >= 86400) {
        const day = Math.floor(secondPast / 86400); // Вычисляем количество дней
        return day === 1 ? `${day} day ago` : `${day} days ago`; // Форматируем строку для дней
    }
} // Эта функция позволяет пользователям видеть, сколько времени прошло с момента указанной даты, в удобном формате