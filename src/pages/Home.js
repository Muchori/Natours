/* eslint-disable jsx-a11y/img-redundant-alt */
import '../../src/icon-font.css'

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
                You're going to fall in love with nature, relax your mind
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

        {/* section features */}
        <section className='section-features'>
          <div className='row'>
            <div className='col-1-of-4'>
              <div className='feature-box'>
                <i className='feature-box__icon icon-basic-world'></i>
                <h3 className='heading-tertiary u-margin-bottom-small'>
                  Explore the world
                </h3>
                <p className='feature-box__text'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Aspernatur voluptatibus natus ipsam odio veniam earum
                  adipisci.
                </p>
              </div>
            </div>
            <div className='col-1-of-4'>
              <div className='feature-box'>
                <i className='feature-box__icon icon-basic-compass'></i>
                <h3 className='heading-tertiary u-margin-bottom-small'>
                  Meet nature
                </h3>
                <p className='feature-box__text'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Aspernatur voluptatibus natus ipsam odio veniam earum
                  adipisci.
                </p>
              </div>
            </div>
            <div className='col-1-of-4'>
              <div className='feature-box'>
                <i className='feature-box__icon icon-basic-map'></i>
                <h3 className='heading-tertiary u-margin-bottom-small'>
                  Find your way
                </h3>
                <p className='feature-box__text'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Aspernatur voluptatibus natus ipsam odio veniam earum
                  adipisci.
                </p>
              </div>
            </div>
            <div className='col-1-of-4'>
              <div className='feature-box'>
                <i className='feature-box__icon icon-basic-heart'></i>
                <h3 className='heading-tertiary u-margin-bottom-small'>
                  Live a healthier life
                </h3>
                <p className='feature-box__text'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Aspernatur voluptatibus natus ipsam odio veniam earum
                  adipisci.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className='section-tours' id='section-tours'>
          <div className='u-center-text u-margin-bottom-big'>
            <h2 className='heading-secondary'>Most popular tours</h2>
          </div>
          <div className='row'>
            {/* Card 1 */}
            <div className='col-1-of-3'>
              <div className='card'>
                <div className='card__side card__side--front'>
                  <div className='card__picture card__picture--1'>&nbsp;</div>
                  <h4 className='card__heading'>
                    <span className='card__heading-span card__heading-span--1'>
                      The Sea Explorer
                    </span>
                  </h4>
                  <div className='card__details'>
                    <ul>
                      <li className=''>3 day tours</li>
                      <li className=''>Up to 30 people</li>
                      <li className=''>2 day guides</li>
                      <li className=''>Sleep in cozy hotels</li>
                      <li className=''>Difficulty: Easy</li>
                    </ul>
                  </div>
                </div>
                <div className='card__side card__side--back card__side--back-1'>
                  <div className='card__cta'>
                    <div className='card__price-box'>
                      <p className='card__price-only'>Only</p>
                      <p className='card__price-value'>$287</p>
                    </div>
                    <a href='#popup' className='btn btn--white'>
                      Book now!
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* card 2 */}
            <div className='col-1-of-3'>
              <div className='card'>
                <div className='card__side card__side--front'>
                  <div className='card__picture card__picture--2'>&nbsp;</div>
                  <h4 className='card__heading'>
                    <span className='card__heading-span card__heading-span--2'>
                      The Forest Hiker
                    </span>
                  </h4>
                  <div className='card__details'>
                    <ul>
                      <li className=''>7 day tours</li>
                      <li className=''>Up to 40 people</li>
                      <li className=''>6 day guides</li>
                      <li className=''>Sleep in provided tents</li>
                      <li className=''>Difficulty: Medium</li>
                    </ul>
                  </div>
                </div>
                <div className='card__side card__side--back card__side--back-2'>
                  <div className='card__cta'>
                    <div className='card__price-box'>
                      <p className='card__price-only'>Only</p>
                      <p className='card__price-value'>$487</p>
                    </div>
                    <a href='#popup' className='btn btn--white'>
                      Book now!
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Crad 3 */}
            <div className='col-1-of-3'>
              <div className='card'>
                <div className='card__side card__side--front'>
                  <div className='card__picture card__picture--3'>&nbsp;</div>
                  <h4 className='card__heading'>
                    <span className='card__heading-span card__heading-span--3'>
                      The Forest Hiker
                    </span>
                  </h4>
                  <div className='card__details'>
                    <ul>
                      <li className=''>5 day tours</li>
                      <li className=''>Up to 15 people</li>
                      <li className=''>3 day guides</li>
                      <li className=''>Sleep in provided tents</li>
                      <li className=''>Difficulty: Hard</li>
                    </ul>
                  </div>
                </div>
                <div className='card__side card__side--back card__side--back-3'>
                  <div className='card__cta'>
                    <div className='card__price-box'>
                      <p className='card__price-only'>Only</p>
                      <p className='card__price-value'>$887</p>
                    </div>
                    <a href='#popup' className='btn btn--white'>
                      Book now!
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Button */}
          <div className='u-center-text u-margin-top-huge'>
            <a href='#' className='btn btn--green'>
              Discover all tours
            </a>
          </div>
        </section>

        {/* Section stories */}

        <section className='section-stories'>
          <div className='bg-video'>
            <video className='bg-video__content' autoPlay muted loop>
              <source src={require('../images/video.mp4')} type='video/mp4' />
              <source src={require('../images/video.webm')} type='video/webm' />
              Your is not supported!
            </video>
          </div>
          <div className='u-center-text u-margin-bottom-big'>
            <h2 className='heading-secondary'>
              We make people genuinely happy
            </h2>
          </div>
          <div className='row'>
            <div className='story'>
              <figure className='story__shape'>
                <img
                  src={require('../images/nat-8.jpg')}
                  alt='Person on a tour'
                  className='story__img'
                />
                <figcaption className='story__caption'>John Doe</figcaption>
              </figure>
              <div className='story__text'>
                <h3 className='heading-tertiary u-margin-bottom-small'>
                  I had the best week ever with my friends and family.
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                  dolor dolore, eos molestias similique laudantium quis
                  consequuntur voluptate optio, et non minus a sed repellendus,
                  quod architecto. Eaque, illo consequuntur?
                </p>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='story'>
              <figure className='story__shape'>
                <img
                  src={require('../images/nat-9.jpg')}
                  alt='Person on a tour'
                  className='story__img'
                />
                <figcaption className='story__caption'>Willy Smith</figcaption>
              </figure>
              <div className='story__text'>
                <h3 className='heading-tertiary u-margin-bottom-small'>
                  Wow! My life is completely different now.
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                  dolor dolore, eos molestias similique laudantium quis
                  consequuntur voluptate optio, et non minus a sed repellendus,
                  quod architecto. Eaque, illo consequuntur?
                </p>
              </div>
            </div>
          </div>
          <div className='u-center-text u-margin-top-huge'>
            <a href='#' className='btn btn-text'>
              Read all stories &rarr;
            </a>
          </div>
        </section>

        <section className='section-book'>
          <div className='row'>
            <div className='book'>
              <div className='book__form'>
                <form action='#' className='form'>
                  <div className='u-margin-bottom-medium'>
                    <h2 className='heading-secondary'>Start booking now</h2>
                  </div>
                  <div className='form__group'>
                    <input
                      id='name'
                      type='text'
                      className='form__input'
                      placeholder='Full name'
                      required
                      autoComplete='off'
                    />
                    <label htmlFor='name' className='form__label'>
                      Full name
                    </label>
                  </div>
                  <div className='form__group'>
                    <input
                      id='email'
                      type='email'
                      className='form__input'
                      placeholder='Email address'
                      required
                      autoComplete='off'
                    />
                    <label htmlFor='email' className='form__label'>
                      Email address
                    </label>
                  </div>
                  <div className='form__group u-margin-bottom-medium'>
                    <div className='form__radio-group'>
                      <input
                        type='radio'
                        className='form__radio-input'
                        id='small'
                        name='size'
                      />
                      <label htmlFor='small' className='form__radio-label'>
                        <span className='form__radio-button'></span>
                        Small tour groups
                      </label>
                    </div>
                    <div className='form__radio-group'>
                      <input
                        type='radio'
                        className='form__radio-input'
                        id='large'
                        name='size'
                      />
                      <label htmlFor='large' className='form__radio-label'>
                        <span className='form__radio-button'></span>
                        Large tour groups
                      </label>
                    </div>
                  </div>
                  <div className='form__group'>
                    <button className='btn btn--green'>Next step &rarr;</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Home
