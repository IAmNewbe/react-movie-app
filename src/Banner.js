import './Banner.css';

function Banner() {
    return (
        <div className='Landinganner'>
        <header className='Header'>
            <img className='logo' alt='' src={require('./red.png')}/>
            <ul className='navigation'>
             <li><a href='#Home'>Home</a></li>
             <li><a href='#Latest'>Latest</a></li>
             <li><a href='#High-rated'>High Rated</a></li>
             <li><a href='#Genre'>Genre</a></li>
            </ul>
            <div className='search'>
                <input placeholder='search' type='text'></input>
                <i className='fa fa-search' aria-hidden='true'></i>
            </div>
        </header>
        <div className='banner'>
            <img className='bg' alt=''src={require('./bg.jpg')}/>
            <div className='content'>
                <img src={require('./name.png')} alt='name' className='movieTitle' /> 
                <h4>
                    <span>2020</span>
                    <span><i>12+</i></span>
                    <span>1h 55min</span>
                    <span>action</span>
                </h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled 
                    it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
                    sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <div className='buttons'>
                    <a href='#Play'>Play</a>
                    <a href='#List'>My List</a>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Banner;