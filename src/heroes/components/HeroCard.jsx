/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom'

const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego ,
  first_appearance,
  characters ,

}) => {
  const heroimageUrl=  `/assets/${id}.jpg`

  return (
    <>
      <div className='col'>
        <div className='card'>
          <div className='raw no-gutters'>
            <div className='col-4  '>
            <img src={heroimageUrl} alt={superhero} className='card-img' />
            </div>
            <div className='colo-8'>
              <div className='card-body'>
                <h5 className='card-title'> {superhero}</h5>
                <p className='card-tetx'>{alter_ego}</p>
                {(alter_ego !== characters) && (
                <p className=''>{characters}</p>)
                  
                }
                <p>{publisher}</p>
                <p className='card-tex'><small>{first_appearance}</small></p>
                <Link to={`/hero/${id}`}>Mas...</Link>

              </div>

            </div>

          </div>
        </div>


      </div>
      
      
    </>
  )
}

export default HeroCard