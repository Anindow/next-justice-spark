import { useEffect, useState } from "react"
import useSwr from 'swr'
function LastSalesPage() {
  const [sales, setSales] = useState()
  const [isLoading, setIsLoading] = useState(false)
  useSwr("https://nextjs-course-38710-default-rtdb.firebaseio.com/sales.json")
  useEffect(() => {
    setIsLoading(true)
    fetch("https://nextjs-course-38710-default-rtdb.firebaseio.com/sales.json")
      .then((response) => response.json())
      .then((data) => {
        const transformedSale = []
        for (const key in data) {
          transformedSale.push({
            id: key,
            username: data[key].username,
            volume: data[key].volume,
          })
        }
        setSales(transformedSale)
        setIsLoading(false)
      })
  }, [])
  if (isLoading) {
    return <p>Loading ... </p>
  }
  if (!sales) {
    return <p>No sale yet</p>
  }
  return (
    <ul>
      {sales.map((sale) => (
        <li key={sale.id}>
          {sale.username} - ${sale.volume}
        </li>
      ))}
    </ul>
  )
}

export default LastSalesPage
