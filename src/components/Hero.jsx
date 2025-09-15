import { Link } from 'react-router-dom';
import Button from './ui/Button';

export default function Hero() {
  return (
    <div className="relative h-screen min-h-[600px] flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/HeroImg2.png)' }}
      >

      </div>
      <div className="container relative z-10 px-4 mx-auto text-center text-white">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6">
          Handcrafted Leather Goods,<br />Made to Last
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Premium leather products crafted with traditional techniques and modern design.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button to="/shop" size="lg">
            Shop Collection
          </Button>
          <Button to="/custom" variant="outline" size="lg" className="bg-transparent text-white border-white hover:bg-white hover:text-charcoal">
            Custom Work
          </Button>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
}