import React, { useCallback } from 'react';
import { useTheme } from './ThemeContext';

const SidebarControls = React.memo(() => {
  const { theme, dispatch } = useTheme();

  const handleColorChange = useCallback((e) => {
    dispatch({ type: 'SET_PRIMARY_COLOR', payload: e.target.value });
  }, [dispatch]);

  const handleFontSizeChange = useCallback((e) => {
    dispatch({ type: 'SET_FONT_SIZE', payload: Number(e.target.value) });
  }, [dispatch]);

  const handleTextTransform = useCallback((transform) => {
    dispatch({ type: 'SET_TEXT_TRANSFORM', payload: transform });
  }, [dispatch]);

  return (
    <div style={{ padding: '1rem', width: '250px', borderRight: '1px solid #ccc' }}>
      <h3>Editor de Tema</h3>
      <label>
        Color Primario:
        <input type="color" value={theme.primaryColor} onChange={handleColorChange} />
      </label>
      <br /><br />
      <label>
        Tamaño de Texto: {theme.fontSize}px
        <input
          type="range"
          min="12"
          max="36"
          value={theme.fontSize}
          onChange={handleFontSizeChange}
        />
      </label>
      <br /><br />
      <div>
        Transformación de texto:
        <button onClick={() => handleTextTransform('none')}>Normal</button>
        <button onClick={() => handleTextTransform('uppercase')}>MAYÚSCULAS</button>
        <button onClick={() => handleTextTransform('capitalize')}>Capitalizadas</button>
        <button onClick={() => handleTextTransform('lowercase')}>minúsculas</button>
      </div>
    </div>
  );
});

export default SidebarControls;
