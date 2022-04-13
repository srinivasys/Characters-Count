import './index.css'

const CountDetails = props => {
  const {itemDetails} = props
  const {name, count} = itemDetails

  return (
    <li className="items-list">
      <p className="name">{name} : </p>
      <p className="count">{count}</p>
    </li>
  )
}

export default CountDetails
