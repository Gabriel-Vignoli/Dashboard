import useStock from "../../hooks/useStock"
import { Link } from "react-router-dom"

export default function Home() {

const { itens } = useStock()

const diversity = itens.length
const inventoryTotal = itens.reduce((sum, item) => +sum + +item.quantity, 0)

const today = new Date()
const limitDate = new Date()
limitDate.setDate(limitDate.getDate() - 10)
const recentItens = itens.filter((item) => item.createdAt >= limitDate && item.createdAt <= today)
const recentTotal = recentItens.length

const lowQuantityItems = itens.filter((item) => item.quantity < 10)
  const lowQuantityTotal = lowQuantityItems.length

    return (
      <main>
        <h1>Dashboard</h1>
        <div className="row">
          <div className="dashboard-card">
          Diversity of itens: <span>{diversity}</span>
          </div>
          <div className="dashboard-card">
           Inventory total of itens: <span>{inventoryTotal}</span>
          </div>
          <div className="dashboard-card">
           Recent itens: <span>{recentTotal}</span>
          </div>
          <div className="dashboard-card">
           Ending itens: <span>{lowQuantityTotal}</span>
          </div>
          </div>
      <div className="row">
        <div className="recent">
          <table>
            <thead>
              <tr><th>Recents Itens</th>
              <th>Actions</th>
            </tr>
            </thead>
            <tbody>
              {recentItens.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td><Link to={`/items/${item.id}`} className="button is-small">Show</Link></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="low">
          <table>
            <thead>
              <tr>
                <th>Ending Itens</th>
                <th>Qtd.</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {lowQuantityItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td><Link to={`/items/${item.id}`} className="button is-small">Show</Link></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </div>
      </main>
    )
  }