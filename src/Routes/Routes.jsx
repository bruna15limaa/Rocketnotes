import { Routes, Route } from 'react-router-dom';
import { New } from '../pages/New';
import { Home } from '../pages/Home';
import { Profile } from '../pages/Profile';
import { Details } from '../pages/Details';
import { Routes } from './app.routes';


export function Routes() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/new' element={<New />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/details' element={<Details />} />
        </Routes>
    );
}
