let sessionStart = Date.now()

export async function GET() {
  const now = Date.now()
  const diff = (now - sessionStart) / 1000
  const fifteen = 15 * 60
  const twenty = 20 * 60

  let status = 'play'
  let timeLeft = 0

  if (diff <= fifteen) {
    status = 'play'
    timeLeft = fifteen - diff
  } else if (diff <= twenty) {
    status = 'break'
    timeLeft = twenty - diff
  } else {
    sessionStart = now
    status = 'play'
    timeLeft = fifteen
  }

  timeLeft = Math.floor(timeLeft)

  return new Response(
    JSON.stringify({ sessionStatus: status, timeLeft }),
    {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    }
  )
}
