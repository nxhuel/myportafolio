import { User, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import ProjectPortal from "@/components/ProjectPortal";
import WhatIResolve from "@/components/WhatIResolve";

const MyWork = () => (
  <div
    className="min-h-screen bg-black/80 bg-transparente bg-blend-overlay"
    style={{
      backgroundImage: "url('/images/fondo-proyectos.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <Navbar />
    <WhatIResolve />
    <ProjectPortal />
  </div>
);

export default MyWork;
