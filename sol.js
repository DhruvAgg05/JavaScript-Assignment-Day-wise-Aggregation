function solution(input) {
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const dates = Object.keys(input)
    .sort()
    .map(d => ({ date: new Date(d), value: input[d] }));

  const filled = [];
  for (let i = 0; i < dates.length; i++) {
    filled.push(dates[i]);

    if (i < dates.length - 1) {
      const cur = dates[i];
      const next = dates[i + 1];

      const daysDiff =
        (next.date - cur.date) / (1000 * 60 * 60 * 24);

      if (daysDiff > 1) {
        for (let d = 1; d < daysDiff; d++) {
          const newDate = new Date(cur.date);
          newDate.setDate(cur.date.getDate() + d);

          const value =
            cur.value + ((next.value - cur.value) * d) / daysDiff;

          filled.push({
            date: newDate,
            value: value,
          });
        }
      }
    }
  }

  const result = {
    Mon: 0,
    Tue: 0,
    Wed: 0,
    Thu: 0,
    Fri: 0,
    Sat: 0,
    Sun: 0,
  };

  filled.forEach(({ date, value }) => {
    const weekday = dayNames[date.getDay()];
    result[weekday] += Math.round(value);
  });

  return result;
}

module.exports = solution;