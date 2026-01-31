import HeroBackground from './components/HeroBackground';
import DecryptedText from './components/name';
import RotatingText from './components/scoll';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      <Navbar />
      <div id="home" className="h-screen relative">
        {/* New Boxes Background */}
        <div className="w-full h-full absolute top-0 left-0 z-[1]">
          <HeroBackground />
        </div>
        {/* Content Layout - Left text, Right photo */}
        <div className="absolute inset-0 flex items-center justify-between px-8 md:px-16 lg:px-24 z-[3] w-full pointer-events-none">
          {/* Left side - Text content */}
          <div className="flex-1 max-w-2xl pointer-events-auto">
            <div className="text-2xl md:text-4xl lg:text-5xl text-[#adff2f] font-mono font-bold mb-6 text-left">
              <DecryptedText
                text="Hey! I'm Tanish Sabane!"
                animateOn="view"
                revealDirection='start'
              />
            </div>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4 text-lg md:text-2xl text-white font-mono font-bold">
              <span>I'm a</span>
              <RotatingText
                texts={['Competitive Programmer!', 'Software Developer', 'Tech Enthusiast!']}
                mainClassName="px-3 md:px-4 bg-cyan-300 text-black overflow-hidden py-1 md:py-2 justify-center rounded-lg"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={3000}
              />
            </div>
          </div>
          
          {/* Right side - Photo with cool borders */}
          <div className="hidden md:flex flex-1 justify-center items-center pointer-events-auto">
            <div className="relative">
              {/* Animated border effects */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full opacity-75 blur-sm animate-pulse"></div>
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 via-emerald-400 to-yellow-400 rounded-full opacity-50 animate-spin" style={{animationDuration: '8s'}}></div>
              
              {/* Photo container */}
              <div className="relative bg-gray-800 rounded-full p-2">
                <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-white text-lg font-mono border-2 border-cyan-400">
                  {/* Placeholder for photo - replace with actual image */}
                  <img 
                    src="/IMG_5247.png" 
                    alt="Tanish Sabane"
                    className="w-full h-full rounded-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center text-cyan-400 text-xl font-bold" style={{display: 'none'}}>
                    Add Your Photo Here
                  </div>
                </div>
              </div>
              
              {/* Floating elements around photo */}
              <div className="absolute top-8 -right-8 w-4 h-4 bg-cyan-400 rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
              <div className="absolute -top-4 right-16 w-3 h-3 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
              <div className="absolute -bottom-6 -left-4 w-5 h-5 bg-pink-400 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
              <div className="absolute bottom-16 -right-6 w-2 h-2 bg-yellow-400 rounded-full animate-bounce" style={{animationDelay: '1.5s'}}></div>
            </div>
          </div>
        </div>
      </div>
      <About />
      <Projects />
      <Contact />
    </div>
    
  )
}

export default App;