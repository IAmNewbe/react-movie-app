
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie</h1>
        <article class="card">
          <div class="temporary_text">
              Place image here
          </div>
          <div class="card_content">
              <span class="card_title">This is a Title</span>
                  <span class="card_subtitle">
                    <div className='Movie-date'>date : 12-03-2020</div>
                    <div className='Movie-rate'>rate : 9.8</div>
                   </span>
                  <p class="card_description">Lorem ipsum dolor, sit amet  expedita exercitationem recusandae aut dolor tempora aperiam itaque possimus at, cupiditate earum, quae repudiandae aspernatur? Labore minus soluta consequatur placeat.</p>
          </div>
        </article>
      </header>
    </div>
  );
}

export default App;
