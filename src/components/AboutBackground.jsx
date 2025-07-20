import React from "react";

const AboutBackground = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-gradient-to-bl from-slate-900 via-gray-800 to-black">
      {/* Simple gradient background without animated boxes */}
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,white)] pointer-events-none opacity-25" />
      
      {/* Static grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="w-full h-full" 
          style={{
            backgroundImage: `
              linear-gradient(rgba(100,100,100,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(100,100,100,0.3) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
      </div>
      
      {/* Diagonal gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-slate-900/30 to-black/50 z-10" />
    </div>
  );
};

export default AboutBackground;
