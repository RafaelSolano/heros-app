import { HeroList } from '../components/HeroList'

const MarvelPage = () => {
  return (
    <div>
      <h1>Marvel</h1>
      <hr />
      <HeroList publisher={'Marvel Comics'}/>
    </div>
  )
}

export default MarvelPage