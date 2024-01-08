export default function taskDueDate(dueDate) {
  let preparedDueDate
  const today = new Date()
  let tomorrow = new Date()
  tomorrow.setUTCDate(today.getUTCDate() + 1)

  const dateOptions = {
    weekday: "short",
    month: "short",
    day: "numeric"
  }
  const converted = (date) => date.toLocaleString("en-GB", dateOptions)

  if (dueDate === null) preparedDueDate = null
  else if (converted(dueDate) === converted(today)) preparedDueDate = "Today"
  else if (converted(dueDate) === converted(tomorrow)) preparedDueDate = "Tomorrow"
  else preparedDueDate = converted(dueDate)

  return preparedDueDate
}