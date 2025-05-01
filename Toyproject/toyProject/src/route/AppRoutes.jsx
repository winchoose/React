import { Routes, Route } from 'react-router-dom';
import Home from '../page/home'
const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    );
}; export default AppRoutes;