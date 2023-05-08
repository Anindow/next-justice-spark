import { useEffect, useState } from "react"
import useSWR from "swr"

const fetcher = (url) => fetch(url).then((res) => res.json())

function LastSalesPage(props) {
  const [sales, setSales] = useState(props.sales)
  const { data, error } = useSWR(
    "https://nextjs-course-38710-default-rtdb.firebaseio.com/sales.json",
    fetcher,
  )

  useEffect(() => {
    if (data) {
      const transformedSales = Object.keys(data).map((key) => ({
        id: key,
        username: data[key].username,
        volume: data[key].volume,
      }))
      setSales(transformedSales)
    }
  }, [data])

  if (error) {
    return <p>Failed to load</p>
  }

  if (!sales.length || !sales && !data) {
    return <p>Loading...</p>
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
export async function getStaticProps() {
  const response = await fetch("https://nextjs-course-38710-default-rtdb.firebaseio.com/sales.json")
    const data = await response.json()
   
      const transformedSale = []
      for (const key in data) {
        transformedSale.push({
          id: key,
          username: data[key].username,
          volume: data[key].volume,
        })
      }
      return { props: { sales: transformedSale }}
   
}
export default LastSalesPage

// import { useEffect, useState } from "react"

// function LastSalesPage() {
//   const [sales, setSales] = useState()
//   const [isLoading, setIsLoading] = useState(false)

//   useEffect(() => {
//     setIsLoading(true)
//     fetch("https://nextjs-course-38710-default-rtdb.firebaseio.com/sales.json")
//       .then((response) => response.json())
//       .then((data) => {
//         const transformedSale = []
//         for (const key in data) {
//           transformedSale.push({
//             id: key,
//             username: data[key].username,
//             volume: data[key].volume,
//           })
//         }
//         setSales(transformedSale)
//         setIsLoading(false)
//       })
//   }, [])
//   if (isLoading) {
//     return <p>Loading ... </p>
//   }
//   if (!sales) {
//     return <p>No sale yet</p>
//   }
//   return (
//     <ul>
//       {sales.map((sale) => (
//         <li key={sale.id}>
//           {sale.username} - ${sale.volume}
//         </li>
//       ))}
//     </ul>
//   )
// }

// export default LastSalesPage
