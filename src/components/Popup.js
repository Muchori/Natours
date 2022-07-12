function Popup() {
  return (
    <div className='popup' id='popup'>
      <div className='popup__content'>
        <div className='popup__left'>
          <img
            src={require('../images/nat-8.jpg')}
            alt='Logo'
            className='popup__img'
          />
          <img
            src={require('../images/nat-9.jpg')}
            alt='Logo'
            className='popup__img'
          />
        </div>
        <div className='popup__right'>
          <a href='#section-tours' className='popup__close'>
            &times;
          </a>
          <h2 className='heading-secondary u-margin-bottom-small'>
            Start booking now
          </h2>
          <h3 className='heading-tertiary u-margin-bottom-small'>
            Importnat &ndash; Please read these terms before booking
          </h3>
          <p className='popup__text'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam
            ex ducimus a pariatur repellendus expedita ut eligendi aliquam
            temporibus? Quaerat odit dicta in facilis quos itaque ea qui eaque
            blanditiis. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quis soluta vel corrupti unde. Accusantium adipisci quaerat dicta
            amet, error, odit pariatur illum ut saepe id facere! Earum molestiae
            assumenda perspiciatis. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Id placeat incidunt vel repellat. Quod assumenda,
            mollitia possimus voluptatem enim magni facere debitis ut eligendi
            aspernatur omnis nam, a consequuntur odit. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Mollitia necessitatibus vitae
            beatae unde doloribus, exercitationem repellendus in enim alias vero
            explicabo quia consequuntur libero sint sunt commodi magnam
            accusantium! Molestias.
          </p>
          <a href='#' className='btn btn--green'>
            Book now
          </a>
        </div>
      </div>
    </div>
  )
}

export default Popup
