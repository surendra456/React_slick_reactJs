// Write your code here
import './index.css'

const PlanetsItem = props => {
  const {item} = props
  const {name, imageUrl, description} = item

  return (
    <div className="item-conatiner">
      <img src={imageUrl} className="image" alt={`planet ${name}`} />
      <h1 className="name">{name}</h1>
      <p className="dec">{description}</p>
    </div>
  )
}

export default PlanetsItem
