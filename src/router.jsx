import { createBrowserRouter } from 'react-router-dom';

// Layouts
import RootLayout from './layouts/RootLayout';
import ShopLayout from './layouts/ShopLayout';

// Routes
import Home from './routes/Home';
import Shop from './routes/Shop';
import Product from './routes/Product';
import Custom from './routes/Custom';
import About from './routes/About';
import Locations from './routes/Locations';
import Contact from './routes/Contact';
import Cart from './routes/Cart';
import Checkout from './routes/Checkout';
import CheckoutSuccess from './routes/CheckoutSuccess';
import Blog from './routes/Blog';
import BlogPost from './routes/BlogPost';
import NotFound from './routes/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { 
        path: 'shop',
        element: <ShopLayout />,
        children: [
          { index: true, element: <Shop /> },
          { path: ':category', element: <Shop /> },
        ]
      },
      { path: 'product/:slug', element: <Product /> },
      { path: 'custom', element: <Custom /> },
      { path: 'about', element: <About /> },
      { path: 'locations', element: <Locations /> },
      { path: 'contact', element: <Contact /> },
      { path: 'cart', element: <Cart /> },
      { path: 'checkout', element: <Checkout /> },
      { path: 'checkout/success', element: <CheckoutSuccess /> },
      { path: 'blog', element: <Blog /> },
      { path: 'blog/:slug', element: <BlogPost /> },
    ]
  }
]);

export default router;