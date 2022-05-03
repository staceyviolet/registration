import React                                      from 'react';
import { Registration }                           from "./components/Registration/Registration";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={`/:currentStep`} element={<Registration/>}/>
                <Route path="/" element={<Navigate to={`/:currentStep`} replace/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
