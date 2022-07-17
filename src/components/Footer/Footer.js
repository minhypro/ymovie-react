import './footer.scss'
import logo from '../../assets/movie-logo.png'

function FooterContent() {

    return (
        <div className="section mb-3 container">
            <hr className="solid"></hr>
            <footer>
                <div className='footer_logo'>
                    <a href="#root">
                        <img src={logo} width="50" alt="Movie App" />
                        <span>Ymovie </span>
                    </a>
                    <span>&nbsp;&copy; 2022 Company, Inc</span>
                </div>

                <ul>
                    <li><a href="https://github.com/minhypro"><i className="fa-brands fa-github"></i> Github</a></li>
                    <li><a href="https://www.facebook.com/minhy95"><i className="fa-brands fa-facebook"></i> Facebook</a></li>
                    <li><a href="https://www.linkedin.com/in/y-le-minh-930118157/"><i className="fa-brands fa-linkedin"></i> LinkedIn</a></li>
                </ul>
            </footer>
        </div>
    );
}

export default FooterContent;