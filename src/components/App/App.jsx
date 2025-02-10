import './App.css';
import { HashRouter, Routes, Route } from 'react-router';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';
import Projects from '../Projects/Projects';
import AboutMe from '../AboutMe/AboutMe';

export default function App() {

    return (
    <>
        <HashRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/aboutMe' element={<AboutMe />} />
            </Routes>
            <Footer />
        </HashRouter>
    </>
    );

};