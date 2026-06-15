import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Contact from './pages/Contact'; 
import Donate from './pages/Donate';
import PastEvents from './pages/PastEvents';
import SpiritualPrograms from './pages/SpiritualPrograms';
import BookSales from './pages/BookSales';
import Vedanta from './pages/Vedanta';
import OurTeachers from './pages/OurTeachers';
import OurHistory from './pages/OurHistory';
import OurMission from './pages/OurMission';
import Members from './pages/Members';
import QA from './pages/QA';



function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/activities/events" element={<PastEvents />} />
          
          
          {/* About Us Subpages */}
          <Route path="/about/vedanta" element={<Vedanta />} />
          <Route path="/about/teachers" element={<OurTeachers />} />
          <Route path="/about/history" element={<OurHistory />} />
          <Route path="/about/mission" element={<OurMission />} />
          <Route path="/about/members" element={<Members />} />
          <Route path="/about/qa" element={<QA />} />

          {/* Activities Subpages */}
          <Route path="/activities/spiritual-programs" element={<SpiritualPrograms />} />
          <Route path="/activities/books" element={<BookSales />} />
          <Route path="/activities/events" element={<PastEvents />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;