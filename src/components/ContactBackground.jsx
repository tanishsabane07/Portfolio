import React from "react";

const ContactBackground = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-gradient-to-br from-black via-gray-900 to-slate-800">
      {/* Simple static background without animated boxes */}
      <div className="absolute inset-0 w-full h-full bg-black z-20 [mask-image:radial-gradient(white,transparent)] pointer-events-none opacity-40" />
      
      {/* Static hexagon pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="w-full h-full" 
          style={{
            backgroundImage: `
              linear-gradient(30deg, transparent 24%, rgba(100,100,100,0.3) 25%, rgba(100,100,100,0.3) 26%, transparent 27%, transparent 74%, rgba(100,100,100,0.3) 75%, rgba(100,100,100,0.3) 76%, transparent 77%, transparent),
              linear-gradient(-30deg, transparent 24%, rgba(100,100,100,0.3) 25%, rgba(100,100,100,0.3) 26%, transparent 27%, transparent 74%, rgba(100,100,100,0.3) 75%, rgba(100,100,100,0.3) 76%, transparent 77%, transparent)
            `,
            backgroundSize: '50px 87px'
          }}
        />
      </div>
      
      {/* Subtle glow effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 z-10" />
    </div>
  );
};

export default ContactBackground;
