import HeroCard from '../components/HeroCard';

const SearchPage = () => {
  return (
    <>
      <div className='row'>
        <h1>SearchPage</h1>
        <hr />
        <div className='col-5 '>
          <h4>Searching...</h4>
          <hr />
          <form className='mb-3'>
            <label className='form-label'>Search hero</label>
            <input
              type='text'
              className='form-control'
              name=''
              id=''
              aria-describedby='helpId'
              placeholder=''
            />
            <div className='d-grid gap-2'>
              <button
                type='button'
                name=''
                id=''
                className='btn btn-success mt-2 w-25   '>
                search
              </button>
            </div>
          </form>
        </div>

        <div className='col-7 '>
          <h4>Result</h4>
          <hr />
          <div className='alert alert-success' role='alert'>
            <strong>Alert Heading</strong> searching Hero
          </div>
          <div className='alert alert-danger ' role='alert'>
            <strong>Alert Heading</strong> No, hero With
          </div>

          <HeroCard />
        </div>
      </div>
    </>
  );
};

export default SearchPage;
