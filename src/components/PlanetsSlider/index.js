// Write your code here
import Slider from 'react-slick'

import PlanetsItem from '../PlanetItem'

import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props

  return (
    <div className="app-container" testid="planets">
      <h1 className="head">PLANETS</h1>

      <Slider>
        {planetsList.map(each => (
          <PlanetsItem item={each} key={each.id} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetsSlider
