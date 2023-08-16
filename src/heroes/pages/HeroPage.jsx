import { Navigate, useParams } from 'react-router-dom';
import getHeroById from '../helpers/getHeroById';

const HeroPage = () => {
  const { heroId } =useParams();
  console.log(heroId);

  const hero = getHeroById(heroId);
  console.log(hero);

  if (!hero) {
    return<Navigate to={'/marvel'}/>
    
  }

  return (
    <div>HeroPage</div>
  )
}

export default HeroPage