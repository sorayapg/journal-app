

import { Navigate, Route, Routes } from 'react-router';
import { AuthRoutes } from '../auth/routes/AuthRoutes';


import { JournalRoutes } from '../journal/routes/JournalRoutes';
import { CheckingAuth } from '../ui/';
import { useChecAuth } from '../hooks';


export const AppRouter = () => {

  
  const status  = useChecAuth();
  
  if ( status === 'checking') {
    return <CheckingAuth />
  }

  return (
        <Routes>

            {
              (status === 'authenticated')
              ? <Route path="/*" element={ <JournalRoutes />} />
              : <Route path="/auth/*" element={ <AuthRoutes />} />
            }

            <Route path='/*' element={ <Navigate to='auth/login' />} />

            { /* login y Registro */}
            {/* <Route path="/auth/*" element={ <AuthRoutes />} */}

            { /* JournalApp */}
            { /* <Route path="/*" element={ <JournalRoutes />} */}
            
        </Routes>
  )
}
