import { StrictMode } from "module";
import { createRoot } from "react-dom/client";
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
    <StrictMode>
      <App /> {/* Render the App component inside StrictMode for better debugging. */}
    </StrictMode>,
  )