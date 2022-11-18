
import './App.css';

function App() {
  const movieDetails = [{ title: "Ponniyin Selvan: Part I", rating: "8.0", image_url: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRjm1cCoyIUH9h4_LDDMTbnIKLaOYK8zRWgJraKXN5A9Bxguipw", summary: "Vandiyathevan sets out to cross the Chola land to deliver a message from the Crown Prince Aditha Karikalan. Kundavai attempts to establish political peace as vassals and petty chieftains plot against the throne. Unrest grips the land as a long-tailed comet arrives, signalling a time of turmoil." },
  { title: "Love Today", rating: "9.1", image_url: "https://upload.wikimedia.org/wikipedia/en/3/33/Love_Today_2022_poster.jpg", summary: "Love Today is an Indian Tamil-language romantic comedy-drama film written and directed by Pradeep Ranganathan of Comali fame, and produced by Kalapathi S. Aghoram under the banner of AGS Entertainment.[3] The film stars Pradeep Ranganathan himself (in his acting debut), Ivana and Raveena Ravi in lead roles.[4] The film's music and score is composed by Yuvan Shankar Raja, with cinematography handled by Dinesh Purushothaman and editing done by Pradeep E. Ragav. It is an adaptation of Pradeep Ranganathan's own short film App(a) Lock." },
  { title: "Sardar", rating: "7.8", image_url: "https://upload.wikimedia.org/wikipedia/en/thumb/8/80/Sardar_2022_poster.jpg/220px-Sardar_2022_poster.jpg", summary: "Sardar is an 2022 Indian Tamil-language spy action film written and directed by P. S. Mithran and produced by S. Lakshman Kumar under the banner of Prince Pictures.[5] The film stars Karthi in a dual role with Raashii Khanna, Rajisha Vijayan, Laila, Chunky Panday, Rithvik, Munishkanth, Yugi Sethu, Avinash and Balaji Sakthivel in prominent roles.[6][7] The film music composed by G. V. Prakash Kumar, with cinematography doned by George C. Williams and film edited by Ruben. It marks Hindi film actor Chunky Panday's debut in Tamil cinema, and Laila's comeback to films after 16 years." },
  { title: "Vikram", rating: "8.4", image_url: "https://upload.wikimedia.org/wikipedia/en/thumb/9/93/Vikram_2022_poster.jpg/220px-Vikram_2022_poster.jpg", summary: "Vikram is a 2022 Indian Tamil-language action thriller film written and directed by Lokesh Kanagaraj and produced by Raaj Kamal Films International.[15] The film stars Kamal Haasan,Fahadh Faasil and Vijay Sethupathi. [16][17] Kalidas Jayaram,[18] Narain and Chemban Vinod Jose play supporting roles while Suriya makes a cameo appearance. The film's soundtrack and score are composed by Anirudh Ravichander, with cinematography handled by Girish Gangadharan and editing done by Philomin Raj. The film serves as the second installment in the Lokesh Cinematic Universe (LCU).[19] The plot follows a black-ops squad led by Agent Vikram, in which he aims to bring down a drug syndicate group called Vetti Vagaiyara, led by Sandhanam, who wants the missing drugs to be delivered to his boss Rolex." }
  ];
  return (
    <div className="result-wrapper">
      {movieDetails.map(movie_obj => (
        <MovieComponent title={movie_obj.title} rating={movie_obj.rating} image_url={movie_obj.image_url} summary={movie_obj.summary} />
      ))}
    </div>

    // <MovieComponent title={movieDetails[0].title} rating={movieDetails[0].rating} image_url={movieDetails[0].image_url} summary={movieDetails[0].summary} />
  );
}

function MovieComponent({ image_url: image_u, title, rating, summary }) {
  return (
    <div className="movie-card">
      <img src={image_u} alt="movie" />
      <div className='content-wrapper'>
        <div className="line-w">
          <h3 className='title'>{title}</h3>
          <div className="rating-w">
            <img className='star' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Star%2A.svg/2234px-Star%2A.svg.png" alt="star" />
            <h3 className='rating'>{rating}</h3>
          </div>
        </div>
        <p className='summary'>{summary}</p>
      </div>
    </div>
  );
}

export default App;
