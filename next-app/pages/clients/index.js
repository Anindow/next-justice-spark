import Link from "next/link"

const ClientsPage = () => {
  const clients = [
    { id: "max", name: "maximilian" },
    { id: "priya", name: "priya" },
  ]
  return (
    <div>
      <h1>The client page</h1>

      <div>
        <ul>
          {clients.map((client) => (
            <li key={client.id}>
              <Link href={`/clients/${client.id}`}>{client.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
export default ClientsPage
