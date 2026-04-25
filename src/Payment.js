import React, { useEffect, useState } from "react";

function Payment() {

const [seats,setSeats]=useState([]);
const [method,setMethod]=useState("upi");
const [processing,setProcessing]=useState(false);
const [paid,setPaid]=useState(false);

const [upi,setUpi]=useState("");

const [card,setCard]=useState({
number:"",
name:"",
expiry:"",
cvv:""
});

useEffect(()=>{
const saved=
JSON.parse(
localStorage.getItem("selectedSeats")
)||["A1","A2"];

setSeats(saved);

},[]);



const ticketPrice=200;
const convenienceFee=35;
const gst=18;

const subtotal=seats.length*ticketPrice;
const total=subtotal+convenienceFee+gst;


const bookingId=
"BK"+
Math.floor(
100000+
Math.random()*900000
);



function payNow(){

if(method==="upi" && !upi){
alert("Enter UPI ID");
return;
}

if(method==="card"){
if(
!card.number ||
!card.name ||
!card.expiry ||
!card.cvv
){
alert("Fill card details");
return;
}
}

setProcessing(true);

setTimeout(()=>{
setProcessing(false);
setPaid(true);
},2500);

}




if(processing){
return(

<div style={{
minHeight:"100vh",
display:"flex",
justifyContent:"center",
alignItems:"center",
background:"#f5f6fa"
}}>

<div style={{
background:"white",
padding:"70px",
borderRadius:"30px",
textAlign:"center",
boxShadow:"0 10px 40px rgba(0,0,0,.08)"
}}>

<h1>Processing Payment...</h1>

<div style={{
width:"90px",
height:"90px",
border:"9px solid #ddd",
borderTop:"9px solid red",
borderRadius:"50%",
margin:"30px auto",
animation:"spin 1s linear infinite"
}}>
</div>

<p>Confirming your booking</p>

<style>
{`
@keyframes spin{
0%{transform:rotate(0deg)}
100%{transform:rotate(360deg)}
}
`}
</style>

</div>

</div>

)
}




if(paid){
return(

<div style={{
minHeight:"100vh",
background:"linear-gradient(135deg,#0f172a,#1e293b)",
padding:"50px"
}}>

<h1 style={{
textAlign:"center",
color:"white"
}}>
🎟 Booking Confirmed
</h1>



<div style={{
maxWidth:"700px",
margin:"30px auto",
background:"white",
borderRadius:"30px",
overflow:"hidden",
boxShadow:"0 20px 60px rgba(0,0,0,.3)"
}}>

<div style={{
background:"#d81f26",
padding:"30px",
color:"white"
}}>
<h2>Movie E-Ticket</h2>
<p>Show this ticket at theatre</p>
</div>


<div style={{padding:"35px"}}>

<div style={{
display:"flex",
justifyContent:"space-between"
}}>
<div>
<h3>Movie</h3>
<p>Avengers Endgame</p>
</div>

<div>
<h3>Format</h3>
<p>2D</p>
</div>
</div>

<hr/>


<div style={{
display:"flex",
justifyContent:"space-between",
margin:"25px 0"
}}>
<div>
<h4>Date</h4>
<p>Today</p>
</div>

<div>
<h4>Time</h4>
<p>7:30 PM</p>
</div>

<div>
<h4>Seats</h4>
<p>{seats.join(", ")}</p>
</div>
</div>


<hr/>

<p><b>Booking ID:</b> {bookingId}</p>
<p><b>Total Paid:</b> ₹{total}</p>
<p><b>Theatre:</b> PVR Cinemas Screen 3</p>


<div style={{
textAlign:"center",
marginTop:"30px"
}}>

<img
src={`https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=
Movie:Avengers Endgame
Booking:${bookingId}
Seats:${seats.join("-")}
Time:7:30PM
Theatre:PVR Screen 3`}
alt="qr"
/>

<p>Scan for Entry Verification</p>

</div>



<div style={{
display:"flex",
gap:"15px",
marginTop:"30px"
}}>

<button
onClick={()=>window.print()}
style={{
flex:1,
padding:"15px",
background:"#111",
color:"white",
border:"none",
borderRadius:"12px"
}}
>
Print Ticket
</button>


<button
onClick={()=>window.location="/home"}
style={{
flex:1,
padding:"15px",
background:"#d81f26",
color:"white",
border:"none",
borderRadius:"12px"
}}
>
Back Home
</button>

</div>

</div>

</div>

</div>

)
}






return(

<div style={{
background:"#f5f6fa",
minHeight:"100vh",
padding:"40px"
}}>

<div style={{
maxWidth:"1200px",
margin:"auto",
display:"grid",
gridTemplateColumns:"2fr 1fr",
gap:"28px"
}}>



<div style={{
background:"white",
borderRadius:"22px",
boxShadow:"0 10px 35px rgba(0,0,0,.06)",
overflow:"hidden"
}}>

<div style={{
padding:"30px",
borderBottom:"1px solid #eee"
}}>
<h2>Complete Payment</h2>
<p style={{color:"gray"}}>
Choose a payment method
</p>
</div>



<div style={{padding:"35px"}}>

<div style={{
display:"flex",
gap:"12px",
flexWrap:"wrap"
}}>

<button
onClick={()=>setMethod("upi")}
style={{
padding:"12px 20px",
borderRadius:"30px",
border:
method==="upi"
?"2px solid #d81f26"
:"1px solid #ddd",
background:
method==="upi"
?"#fff3f3"
:"white"
}}
>
UPI ID
</button>



<button
onClick={()=>setMethod("qr")}
style={{
padding:"12px 20px",
borderRadius:"30px",
border:
method==="qr"
?"2px solid #d81f26"
:"1px solid #ddd",
background:
method==="qr"
?"#fff3f3"
:"white"
}}
>
QR Code
</button>



<button
onClick={()=>setMethod("card")}
style={{
padding:"12px 20px",
borderRadius:"30px",
border:
method==="card"
?"2px solid #d81f26"
:"1px solid #ddd",
background:
method==="card"
?"#fff3f3"
:"white"
}}
>
Debit/Credit Card
</button>

</div>



{method==="upi" &&

<div style={{
marginTop:"30px",
border:"1px solid #eee",
padding:"25px",
borderRadius:"16px"
}}>

<h3>Pay via UPI</h3>

<div style={{
display:"grid",
gridTemplateColumns:"1fr 1fr",
gap:"15px",
margin:"20px 0"
}}>

<button className="btn btn-light p-3">
Google Pay
</button>

<button className="btn btn-light p-3">
PhonePe
</button>

<button className="btn btn-light p-3">
Paytm
</button>

<button className="btn btn-light p-3">
BHIM
</button>

</div>

<input
value={upi}
onChange={(e)=>setUpi(e.target.value)}
className="form-control"
placeholder="yourname@upi"
/>

</div>
}



{method==="qr" &&

<div style={{
marginTop:"30px",
border:"1px solid #eee",
padding:"30px",
borderRadius:"16px",
textAlign:"center"
}}>

<h3>Scan QR To Pay</h3>

<img
src="https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=moviepayment"
alt="qr"
/>

</div>
}




{method==="card" &&

<div style={{
marginTop:"30px",
border:"1px solid #eee",
padding:"25px",
borderRadius:"16px"
}}>

<input
className="form-control mb-3"
placeholder="Card Number"
onChange={(e)=>
setCard({...card,number:e.target.value})
}
/>

<input
className="form-control mb-3"
placeholder="Name on Card"
onChange={(e)=>
setCard({...card,name:e.target.value})
}
/>


<div style={{
display:"flex",
gap:"10px"
}}>

<input
className="form-control"
placeholder="MM/YY"
onChange={(e)=>
setCard({...card,expiry:e.target.value})
}
/>

<input
className="form-control"
placeholder="CVV"
onChange={(e)=>
setCard({...card,cvv:e.target.value})
}
/>

</div>

</div>
}



<div style={{
marginTop:"25px",
padding:"18px",
background:"#fff7e6",
borderRadius:"12px"
}}>
🎁 Apply Offer: MOVIE100
</div>



<button
onClick={payNow}
style={{
width:"100%",
marginTop:"30px",
background:"#d81f26",
color:"white",
padding:"18px",
fontSize:"20px",
border:"none",
borderRadius:"12px"
}}
>
Pay ₹{total}
</button>


</div>

</div>





<div style={{
background:"white",
borderRadius:"22px",
padding:"30px",
boxShadow:"0 10px 35px rgba(0,0,0,.06)"
}}>

<h3>Order Summary</h3>

<hr/>

<p><b>Avengers Endgame</b></p>

<p>
Seats: {seats.join(", ")}
</p>

<p>Show: 7:30 PM</p>

<hr/>

<p>
Tickets
<span style={{float:"right"}}>
₹{subtotal}
</span>
</p>

<p>
Convenience
<span style={{float:"right"}}>
₹{convenienceFee}
</span>
</p>

<p>
Taxes
<span style={{float:"right"}}>
₹{gst}
</span>
</p>

<hr/>

<h3>
Total
<span style={{float:"right"}}>
₹{total}
</span>
</h3>

<hr/>

<p>✔ Instant Confirmation</p>
<p>✔ E-ticket Included</p>
<p>✔ Secure Payment</p>

</div>


</div>

</div>

)

}

export default Payment;

