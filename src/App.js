
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React,{useState} from 'react';
import MovieList from './MovieList';
import AddMovie from './AddMovie';
import StarRating from './StarRating';


// root component and insert the serie with using hook 
function App() {
      const[movie,setMovie] = useState([{
        title:'Üç Kiz Kardeş',
        description :'Three Sisters,love,betrayal,mercy and brotherhood will be told. Their mother is a teacher, and their father is the PTT director',
        rating :2.5,
        poster:'i2.jpeg'
      },
    {
      title:'AILE',
      description :'Aile is a story of Aslan who is the son of a large family. An extremely shrewd man. He is a dark and mysterious character.',
      rating :4,
      poster:'i1.jpg'
    },
    {
      title:'Teşkilat',
      description :'The story of Turkish secret service agents who allegedly died in a plane crash during operations against Western enemies.',
      rating :5,
      poster:'i6.jpg'
    },
    {
      title:'Sadakatsiz',
      description :'Doctor Asya  lives a peaceful and happy life in Tekirdağ with her husband Volkan (Caner Cindoruk) and their son Ali (Alp Akar)',
      rating :3.5,
      poster:'i8.jpg'
    },
    {
      title:'Baht Oyunu',
      description :'Ada is a young girl who believes that if she is abandoned by her first love, she will be unhappy forever like the women of her family.',
      rating :2.5,
      poster:'i11.jpg'
    },
    {
      title:'Mucize Doktor',
      description :'Ali has Savant syndrome, making it hard for him to communicate with other people, even though he is a phenomenal doctor.',
      rating :4,
      poster:'i10.jpg'
    },
    {
      title:'Sakla Beni',
      description :'The series revolves around the story of Mete and Naz. These two young individuals have led a privileged life',
      rating :4,
      poster:'i4.jpg'
    },
    {
      title:'Ruhun Duymaz ',
      description :'An agent who sees nothing but his job with the eyes of honor; Ece,is a dazzling professional thief with a thousand and one skills.',
      rating :3,
      poster:'i3.png'
    },
    {
      title:'Kizilcik Şerbeti ',
      description :'Tv series story is about a young girl Doga who falls in love with Fatih from a conservative family whose values conflict',
      rating :2,
      poster:'i5.png'
    },
    {
      title:'Kasaba Doktoru',
      description :'The talented Ömer, who decided to become a doctor after losing his father, and the legendary surgeon Hakan',
      rating : 1.5,
      poster:'i.png'
    },
    {
      title:'hudutsuz sevda',
      description :'Halil Ibrahim as he seeks revenge for the death of the love of his life ,His plans are derailed when he meets Zeynep from the Leto family',
      rating : 3,
      poster:'i7.jpg'
    }

    ])
    /* use hooks for filer serie  with title and rating */
    const[filterTitle,setFilterTitle]= useState("")
    const[filterRating,setFilterRating]=useState(1)
  
    /* function for the button add to ad a movie*/
    const handleAdd = (newMovie) => {
      setMovie([...movie,newMovie]);
      }
      /* function for filter with title*/
      const filterData =(filtered)=>{
        setFilterTitle(filtered)
      }
      /* function for filter with  rating*/
      const filterRate =(filtRate) =>{
        setFilterRating(filtRate)
      }
      /* root component*/
  return (
    <div className="App " >
      <div className="title container-title">
          <h2 >TURKISH SERIES</h2>
          <input type="text" placeholder="Write the name of serie" onChange={(e) => filterData(e.target.value)}/> 
          <AddMovie handleAdd={handleAdd}/>
      </div>
      <div className='star'> <StarRating filterData={filterData} filterRate={filterRate}/></div>
      <MovieList movie={movie.filter((movie) => movie.rating >= filterRating && movie.title.toLocaleLowerCase().includes(filterTitle.trim().toLowerCase()))}/>
    </div>
  );
}

export default App;
