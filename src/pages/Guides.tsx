import { User, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import ProjectPortal from "@/components/ProjectPortal";
import WhatIResolve from "@/components/WhatIResolve";
import MyWork from "./MyWork";
import MediumSection from "@/components/MediumSection";

const Guides = () => (
  <div
    className="min-h-screen bg-black/80 bg-transparente bg-blend-overlay"
    style={{
      backgroundImage: "url('/images/fondo-proyectos.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <Navbar />
    <MediumSection username="nahueltisera03" />
  </div>
);

export default Guides;
