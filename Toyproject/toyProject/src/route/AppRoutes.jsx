import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from '../page/home'
import StepOne from '../page/stepOne'
import StepTwo from '../page/stepTwo'
import StepThree from '../page/stepThree'
import StepFour from '../page/stepFour'
import Completion from '../page/Completion'

const mockData = {
    base: "",
    icecream: "",
    syrup: "",
    topping: "",
};

const AppRoutes = () => {

    const [components, setComponents] = useState(mockData);

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/stepOne" element={<StepOne components={components} setComponents={setComponents}/>} />
            <Route path="/stepTwo" element={<StepTwo components={components} setComponents={setComponents}/>} />
            <Route path="/stepThree" element={<StepThree components={components} setComponents={setComponents}/>} />
            <Route path="/stepFour" element={<StepFour components={components} setComponents={setComponents}/>} />
            <Route path="/completion" element={<Completion components={components} setComponents={setComponents}/>} />
        </Routes>
    );
}; export default AppRoutes;