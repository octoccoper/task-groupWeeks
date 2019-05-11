function groupWeeks(data) {
  // Это неправильное решение! Просто заглушка чтобы
  // продемонстрировать что будет на экране
  // Не ищите здесь сакрального смысла или "основы" -
  // здесь все надо переписать :)

  return data
    .filter((_, idx) => idx % 2)
    .map(v => ({ weekStart: v.date, count: v.count * Math.random() }));
}
