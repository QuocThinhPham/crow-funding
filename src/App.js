import { Loading } from 'components/Loading';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from 'routes';

export default function App() {
   return (
      <Suspense fallback={<Loading />}>
         <Routes>
            {routes &&
               routes.map((r) => (
                  <Route key={r.path} path={r.path} element={<r.element />} />
               ))}
         </Routes>
      </Suspense>
   );
}
