import { Routes, Route, ScrollRestoration } from 'react-router-dom';
import Home from './Home';
import Praram from './Praram';
import Context from './Context';
import TestRouter from './TestRouter';
const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<TestRouter />}>
                <Route index element={<Home />} />
                <Route path='/Praram' element={<Praram />} />
                <Route path='/Context' element={<Context />} />
            </Route>
        </Routes>
    );
};
export default Router;


