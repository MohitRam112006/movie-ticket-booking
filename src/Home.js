import React,{useEffect,useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function Home(){

const navigate=useNavigate();

const [movies,setMovies]=useState([]);
const [events,setEvents]=useState([]);
const [search,setSearch]=useState("");

const posters=[
"https://wallpapers.com/images/hd/4k-avengers-serious-looks-2e33pgi0ryjahf53.jpg",
"https://i.ytimg.com/vi/1zb_U7KNV9s/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLC1OwX54f4fxX2U7yzk391r1-f40g",
"https://variety.com/wp-content/uploads/2015/02/spidey.jpg"
];


useEffect(()=>{
loadData();
},[]);


async function loadData(){

try{

const movieRes=await axios.get(
"http://localhost:5000/movies"
);
setMovies(movieRes.data);


const eventRes=await axios.get(
"http://localhost:5000/events"
);
setEvents(eventRes.data);

}
catch(error){
console.log(error);
}

}



function bookTicket(id){

if(!localStorage.getItem("token")){
alert("Please login first");
window.location="/login";
return;
}

navigate(`/payment/${id}`);

}



const filteredMovies=movies.filter(movie=>
movie.name.toLowerCase().includes(
search.toLowerCase()
)
);



return(
<div>

{/* HERO SECTION */}

<div
style={{
backgroundImage:"url(https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1600)",
backgroundSize:"cover",
backgroundPosition:"center",
height:"80vh",
display:"flex",
alignItems:"center"
}}
>

<div
style={{
background:"rgba(0,0,0,.6)",
width:"100%",
padding:"60px",
color:"white"
}}
>

<h1 style={{fontSize:"55px"}}>
Unlimited Movies & Events
</h1>

<p style={{fontSize:"22px"}}>
Book Tickets Instantly
</p>

<button className="btn btn-danger btn-lg">
Explore Now
</button>

</div>

</div>



{/* SEARCH WITH SUGGESTIONS */}

<div className="container mt-4 position-relative">

<input
type="text"
className="form-control p-3"
placeholder="🔍 Search Movies..."
value={search}
onChange={(e)=>setSearch(e.target.value)}
style={{
borderRadius:"30px",
fontSize:"18px"
}}
/>


{search && filteredMovies.length>0 && (

<div
style={{
background:"white",
position:"absolute",
width:"100%",
zIndex:"1000",
borderRadius:"15px",
marginTop:"5px",
boxShadow:"0 4px 12px rgba(0,0,0,.2)"
}}
>

{filteredMovies.map((movie)=>(

<div
key={movie._id}
style={{
padding:"15px",
cursor:"pointer",
borderBottom:"1px solid #ddd"
}}
onClick={()=>{
setSearch(movie.name);

window.scrollTo({
top:700,
behavior:"smooth"
});

}}
>

🎬 {movie.name}

</div>

))}

</div>

)}

</div>




<div className="container mt-5">

<h2 className="mb-4 text-white">
🔥 Trending Movies
</h2>


<div className="row">

{filteredMovies.map((movie,index)=>(

<div
className="col-md-4 mb-4"
key={movie._id}
>

<div
className="card shadow"
style={{
background:"#222",
borderRadius:"20px",
overflow:"hidden"
}}
>

<img
src={posters[index%3]}
alt="movie"
style={{
height:"420px",
width:"100%",
objectFit:"cover"
}}
/>

<div className="card-body text-white">

<h4>
{movie.name}
</h4>

<p>
⭐ 4.8 | Action
</p>

<button
onClick={()=>navigate("/seats")}
className="btn btn-danger"
>
Book Ticket
</button>
</div>

</div>

</div>

))}

</div>


{filteredMovies.length===0 &&
<h4 className="text-white">
No movies found
</h4>
}



<div
className="mt-5 mb-5 p-5 text-white"
style={{
background:"linear-gradient(45deg,#dc2626,#7c2d12)",
borderRadius:"25px"
}}
>

<h2>
🍿 Weekend Premiere Sale
</h2>

<p>
Get 30% off premium shows
</p>

<button className="btn btn-warning">
Grab Offer
</button>

</div>




<h2 className="mb-4 text-white">
🎉 Live Events
</h2>


<div className="row">

{events.map((event,index)=>(

<div
className="col-md-4 mb-4"
key={event._id}
>

<div
className="card shadow"
style={{
background:"#222",
borderRadius:"20px",
overflow:"hidden"
}}
>

<img
src="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=1200"
alt="event"
style={{
height:"420px",
width:"100%",
objectFit:"cover"
}}
/>

<div className="card-body text-white">

<h4>
{event.name}
</h4>

<p>
Concert • Festival
</p>

<button
className="btn btn-success w-100"
onClick={()=>bookTicket(event._id)}
>
Book Event
</button>

</div>

</div>

</div>

))}

</div>




<div className="row mt-5 mb-5">

<div className="col-md-3">
<div className="card p-4 bg-dark text-white text-center">
🎬 Movies
</div>
</div>

<div className="col-md-3">
<div className="card p-4 bg-dark text-white text-center">
🎵 Concerts
</div>
</div>

<div className="col-md-3">
<div className="card p-4 bg-dark text-white text-center">
🏏 Sports
</div>
</div>

<div className="col-md-3">
<div className="card p-4 bg-dark text-white text-center">
😂 Comedy
</div>
</div>

</div>


</div>

</div>
)

}

export default Home;