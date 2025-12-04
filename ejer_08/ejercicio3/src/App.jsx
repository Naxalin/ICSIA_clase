import React from 'react';
import { ThemeProvider } from './components/ThemeContext';
import SidebarControls from './components/SidebarControls';
import { BotonPreview, TextoPreview, CardPreview } from './components/PreviewComponents';

const App = () => {
  return (
    <ThemeProvider>
      <div style={{ display: 'flex', minHeight: '100vh' }}>
        <SidebarControls />
        <div style={{ padding: '1rem', flex: 1 }}>
          <h2>Vista Previa</h2>
          <BotonPreview />
          <br />
          <TextoPreview />
          <br />
          <CardPreview />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
