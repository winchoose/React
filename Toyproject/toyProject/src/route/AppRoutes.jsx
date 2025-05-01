import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from '../page/home'
import StepOne from '../page/stepOne'
import StepTwo from '../page/stepTwo'

const mockData = {
    base: "",
    icecream: "",
    syrup: "",
    topping: "",
};

const AppRoutes = () => {

    const [components, setcomponents] = useState(mockData);

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/stepOne" element={<StepOne components={components} setComponents={setcomponents}/>} />
            <Route path="/stepTwo" element={<StepTwo />} />
        </Routes>
    );
}; export default AppRoutes;