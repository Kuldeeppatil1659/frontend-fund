// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./components/landing/landing";
import BrowseFundraisers from "./components/landing/BrowseFundraisers";
import Contribute from "./components/landing/Contribute";
import CampaignDetails from "./components/landing/CampaignDetails";
import StartCampaign from "./components/landing/StartCampaign";
import AppLayout from "./components/landing/layout/AppLayout";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Landing />} />
          <Route path="/browse" element={<BrowseFundraisers />} />
          <Route path="/contribute/:id" element={<Contribute />} />
          <Route path="/campaign" element={<CampaignDetails />} />
          <Route path="/startFundraiser" element={<StartCampaign />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
