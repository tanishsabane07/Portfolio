import React from "react";

const ProjectsBackground = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-gradient-to-br from-gray-900 via-slate-800 to-black">
      {/* Simple static background without animated boxes */}
      <div className="absolute inset-0 w-full h-full bg-gray-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none opacity-30" />
      
      {/* Static dot pattern */}
      <div className="absolute inset-0 opacity-15">
        <div 
          className="w-full h-full" 
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(100,100,100,0.4) 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }}
        />
      </div>
      
      {/* Additional gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/20 via-transparent to-black/40 z-10" />
    </div>
  );
};

export default ProjectsBackground;
