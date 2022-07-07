function Home() {
  return (
    <>
      <main>
        <section className='section-about'>
          <div className='u-center-text u-margin-bottom-big'>
            <h2 className='heading-secondary'>
              Exciting tours for adventours people
            </h2>
          </div>
          <div className='row'>
            <div className='col-1-of-2'>
              <h3 className='heading-tertiary u-margin-bottom-small'>
                You're going to fall in love with nature
              </h3>
              <p className='paragraph'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur impedit possimus velit vero? Dolorum itaque ex qui
                velit cum rerum dolores repudiandae ducimus? Soluta doloribus
                reprehenderit at eaque sed vitae.
              </p>
              <h3 className='heading-tertiary u-margin-bottom-small'>
                Live adventures like you never have before
              </h3>
              <p className='paragraph'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
                nemo earum aliquid tempore aliquam ipsa velit voluptas ea
                impedit est ipsam illum, dolore molestiae ratione quis
                perferendis consequuntur, explicabo corporis!
              </p>

              <a href='#' className='btn-text'>
                Learn more &rarr;
              </a>
            </div>
            <div className='col-1-of-2'>
              <div className='composition'>
                <img
                  src={require('../images/nat-1-large.jpg')}
                  alt='Photo 1'
                  className='composition__photo composition__photo--p1'
                />
                <img
                  src={require('../images/nat-2-large.jpg')}
                  alt='Photo 2'
                  className='composition__photo composition__photo--p2'
                />
                <img
                  src={require('../images/nat-3-large.jpg')}
                  alt='Photo 3'
                  className='composition__photo composition__photo--p3'
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Home
