import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex items-center justify-center py-20">
        <div className="container text-center px-4">
          <h1 className="text-5xl mb-6 text-deep-brown">404</h1>
          <div className="w-24 h-1 bg-saddle-tan mx-auto mb-8"></div>
          <h2 className="text-3xl mb-4">Page Not Found</h2>
          <p className="text-lg mb-8 max-w-md mx-auto">
            We couldn't find the page you're looking for. The item may have been moved or removed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/" className="btn btn-primary">
              Return Home
            </Link>
            <Link to="/shop" className="btn btn-outline">
              Browse Shop
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}