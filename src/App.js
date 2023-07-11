import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes'
import DefaultLayout from './component/Layout/DefaultLayout/DefaultLayout';
import { Fragment, useCallback } from 'react';
import SnackbarProvider, { useSnackbar } from 'react-simple-snackbar'
import SnackBarOption from './component/Notifications/Snackbar';
import { createContext } from 'react';

export const SnackBarContext = createContext(() => { });

function SnackbarWrapper({ children }) {

  const [openSnackbar_Success, closeSnackbarSucess] = useSnackbar(SnackBarOption('green'));
  const [openSnackbar_Failure, closeSnackbarFailure] = useSnackbar(SnackBarOption('red'));
  const [openSnackbar_Info, closeSnackbarInfo] = useSnackbar(SnackBarOption('blue'));

  function handleOpenSnackbar(color, message, duration = 3000) {
    switch (color) {
      case 'green':
        openSnackbar_Success(message, duration);
        break;
      case 'red':
        openSnackbar_Failure(message, duration);
        break;
      case 'blue':
        openSnackbar_Info(message, duration);
        break;
      default:
        openSnackbar_Failure('Lỗi')
        break;
    }
  }

  return <SnackBarContext.Provider value={handleOpenSnackbar}>
    {children}
  </SnackBarContext.Provider>
}

function App() {
  return (
    <SnackbarProvider>
      <SnackbarWrapper>
        <Router>
          <div>
            <Routes>
              {publicRoutes.map((route, index) => {
                const Layout = route.layout === null ? Fragment : DefaultLayout;
                const Page = route.component
                return <Route key={index} path={route.path} element={<Layout><Page /></Layout>} />
              })}
            </Routes>
          </div>
        </Router>
      </SnackbarWrapper>
    </SnackbarProvider >
  );
}

export default App;
