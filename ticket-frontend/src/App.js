import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";

import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
import SeatSelection from "./SeatSelection";
import Payment from "./Payment";

function App(){

return(
<BrowserRouter>

<Routes>

<Route path="/" element={<Login/>}/>
<Route path="/login" element={<Login/>}/>
<Route path="/register" element={<Register/>}/>
<Route path="/home" element={<Home/>}/>
<Route path="/seats" element={<SeatSelection />} />

<Route path="/payment" element={<Payment/>}/>

</Routes>

</BrowserRouter>
)

}

export default App;