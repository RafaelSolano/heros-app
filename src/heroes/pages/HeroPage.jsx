import { Navigate, useNavigate, useParams } from 'react-router-dom';
import getHeroById from '../helpers/getHeroById';

const HeroPage = () => {
  const navigate = useNavigate();

  const { heroId } =useParams();
  console.log(heroId);

  const  hero= getHeroById(heroId);
  console.log(hero);

  if (!hero) {
    return<Navigate to={'/marvel'}/>
    
  }

  const handleNavigateReturn = () => {
    navigate(-1)
  }
  

  return (
    <div className='row mt-5'>
      <div className='col-4'>
        <img
          className='img-thumbnail'
          src={`/assets/${heroId}.jpg`}
          alt={hero.superhero} />
      </div>
      <div className='col-8'>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'><b>Alter ego:</b> {hero.alter_ego}</li>
          <li className='list-group-item'><b>Publisher:</b> {hero.publisher}</li>
          <li className='list-group-item'><b>First apperarance:</b> {hero.first_appearance}</li>
        </ul>
        <h5 className='mt3'> Characters</h5>
        <p>{hero.characters}</p>
        <button className=' btn  btn-dark ' onClick={handleNavigateReturn}>
          Back
        </button>

      </div>

    </div>
  )
}

export default HeroPage