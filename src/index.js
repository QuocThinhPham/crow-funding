import App from 'App';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from 'sagas/configureStore';
import 'swiper/css';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
   <BrowserRouter>
      <Provider store={store}>
         <App />
      </Provider>
   </BrowserRouter>,
);
