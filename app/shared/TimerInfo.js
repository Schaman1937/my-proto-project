export default function TimerInfo({ sessionStatus, timeLeft }) {
  // timeLeft в секундах
  // Если sessionStatus = 'play', отображаем 15-минутный таймер (обратный отсчёт)
  // Если 'break', то 5 минут перерыва (другим цветом)

  // Переведём секунды в мин:сек
  const minutes = Math.floor(timeLeft / 60)
  const seconds = timeLeft % 60
  const display = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`

  // Цвет таймера разный в зависимости от статуса
  const timerColor = sessionStatus === 'play' ? 'text-green-400' : 'text-red-400'

  return (
    <div className="mb-4 bg-gray-800 p-4 rounded">
      {sessionStatus === 'play' ? (
        <p className={`text-xl font-bold ${timerColor}`}>
          Идёт Агон! Осталось: {display}
        </p>
      ) : (
        <p className={`text-xl font-bold ${timerColor}`}>
          Перерыв! До следующего агона: {display}
        </p>
      )}
    </div>
  )
}
