import React,{useState} from "react";
import {useNavigate} from "react-router-dom";

function SeatSelection(){

const navigate=useNavigate();

const bookedSeats=["A3","B2","C5"];

const rows=["A","B","C","D"];
const cols=[1,2,3,4,5,6];

const [selectedSeats,setSelectedSeats]=useState([]);

const pricePerSeat=200;

function toggleSeat(seat){

if(bookedSeats.includes(seat)){
return;
}

if(selectedSeats.includes(seat)){
setSelectedSeats(
selectedSeats.filter(
item=>item!==seat
)
);
}
else{
setSelectedSeats(
[...selectedSeats,seat]
);
}

}

function goToPayment(){

if(selectedSeats.length===0){
alert("Select seat first");
return;
}

localStorage.setItem(
"selectedSeats",
JSON.stringify(selectedSeats)
);

navigate("/payment");

}

return(
<div
style={{
minHeight:"100vh",
background:"#111",
color:"white",
padding:"40px",
textAlign:"center"
}}
>

<h1>🎬 Select Seats</h1>

<h3>SCREEN</h3>

<div
style={{
height:"8px",
width:"60%",
background:"white",
margin:"30px auto",
borderRadius:"50%"
}}
>
</div>


{
rows.map((row)=>(

<div
key={row}
style={{marginBottom:"15px"}}
>

{
cols.map((col)=>{

const seat=`${row}${col}`;

let color="green";

if(bookedSeats.includes(seat)){
color="red";
}

if(selectedSeats.includes(seat)){
color="gold";
}

return(
<button
key={seat}
onClick={()=>toggleSeat(seat)}
style={{
width:"60px",
height:"50px",
margin:"8px",
border:"none",
borderRadius:"12px",
background:color,
fontWeight:"bold"
}}
>
{seat}
</button>
);

})
}

</div>

))
}


<h3>
Selected:
{
selectedSeats.length===0
?" None"
:" "+selectedSeats.join(", ")
}
</h3>


<h2>
Total ₹ {selectedSeats.length*pricePerSeat}
</h2>


<button
onClick={goToPayment}
style={{
padding:"15px 35px",
background:"#ff4444",
border:"none",
color:"white",
borderRadius:"10px",
fontSize:"18px"
}}
>
Proceed To Payment
</button>


<div style={{marginTop:"40px"}}>
🟩 Available &nbsp;
🟥 Booked &nbsp;
🟨 Selected
</div>


</div>
);

}

export default SeatSelection;