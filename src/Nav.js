
import './nav.css';

function Nav() {
    const widthValue = '50%';
    return (
        <nav className="fill">
        <img alt='logo' className="logo" style={{width: widthValue}} src={require('./red.png')}/>
        <ul>
            <li class="list active"><a href="#home">Home</a></li>
            <li class="list "><a href="#about">Latest</a></li>
            <li class="list "><a href="#product">High Rated</a></li>
            <li class="list "><a href="#testimonial">Genre</a></li>
        </ul>
    </nav>
    );
}

export default Nav;