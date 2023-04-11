import Link from 'next/link'

export default function Home() {
  return (
    <>      
        <div >
         <h1>Hello Next Spark</h1>
         <ul>
          <li>
            <Link href='/portfolio'> Portfolio</Link>
          </li>
          <li>
            <Link href='/clients'> Client Page</Link>
          </li>
         </ul>
        </div>
    </>
  )
}
