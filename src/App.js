import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";

import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
import Payment from "./Payment";
import SeatSelection from "./SeatSelection";

function App(){

return(
<BrowserRouter>

<Routes>

<Route path="/" element={<Login/>}/>
<Route path="/register" element={<Register/>}/>
<Route path="/home" element={<Home/>}/>
<Route path="/payment" element={<Payment/>}/>
<Route path="/seats" element={<SeatSelection/>}/>

</Routes>

</BrowserRouter>
);

}

export default App;