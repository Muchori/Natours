/* eslint-disable jsx-a11y/anchor-is-valid */

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__logo-box'>
        <img
          src={require('../images/logo-green-2x.png')}
          alt='footer logo'
          className='footer__logo'
        />
      </div>
      <div className='row'>
        <div className='col-1-of-2'>
          <div className='footer__navigation'>
            <ul className='footer__list'>
              <li className='footer__item'>
                <a href='#' className='footer__link'>
                  Company
                </a>
              </li>
              <li className='footer__item'>
                <a href='#' className='footer__link'>
                  Contact us
                </a>
              </li>
              <li className='footer__item'>
                <a href='#' className='footer__link'>
                  Careers
                </a>
              </li>
              <li className='footer__item'>
                <a href='#' className='footer__link'>
                  Services
                </a>
              </li>
              <li className='footer__item'>
                <a href='#' className='footer__link'>
                  Privacy
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='col-1-of-2'>
          <p className='footer__copyright'>
            Built by{' '}
            <a href='#' className='footer__link'>
              Muchori Joseph
            </a>{' '}
            for personal project. Copyright &copy; 2022.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
