1- minification on deployment code (Gulp)
2- Jest for testing
3- Image Optimization  the best (JPEG, PNG, Webp)
4- Minimize HTTP Requests
5- Lazy Loading Images ("<img src="placeholder.jpg" data-src="image.jpg" alt="Lazy-loaded image" loading="lazy">")
6- Lazy Loading Components ("
import React, { lazy, Suspense } from 'react';
const LazyComponent = lazy(() => import('./LazyComponent'));
function App() {
  return (
    <div>
      {/* Other components */}
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
}
export default App;")