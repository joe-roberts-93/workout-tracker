export default function dayOfYear(date){
  const today = new Date(date)
  const startOfYear = new Date(today.getFullYear(), 0, 0)
  const diff = today - startOfYear
  const oneDay = 1000 * 60 * 60 * 24
  const day = Math.floor(diff / oneDay)
  return day
}
