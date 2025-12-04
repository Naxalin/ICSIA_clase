import React, { useMemo } from 'react';
import { useTheme } from './ThemeContext';

export const BotonPreview = React.memo(() => {
  const { theme } = useTheme();
  return (
    <button
      style={{
        backgroundColor: theme.primaryColor,
        fontSize: theme.fontSize,
        textTransform: theme.textTransform,
        color: '#fff',
        padding: '0.5rem 1rem',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
      }}
    >
      Botón
    </button>
  );
});

export const TextoPreview = React.memo(() => {
  const { theme } = useTheme();
  return (
    <p
      style={{
        fontSize: theme.fontSize,
        textTransform: theme.textTransform,
      }}
    >
      Texto de ejemplo
    </p>
  );
});

export const CardPreview = React.memo(() => {
  const { theme } = useTheme();

  // Calculamos un color de sombra más oscuro sin añadirlo al estado
  const shadowColor = useMemo(() => {
    const hex = theme.primaryColor.replace('#', '');
    const r = Math.max(parseInt(hex.substring(0, 2), 16) - 30, 0);
    const g = Math.max(parseInt(hex.substring(2, 4), 16) - 30, 0);
    const b = Math.max(parseInt(hex.substring(4, 6), 16) - 30, 0);
    return `rgb(${r}, ${g}, ${b})`;
  }, [theme.primaryColor]);

  return (
    <div
      style={{
        backgroundColor: theme.primaryColor,
        fontSize: theme.fontSize,
        textTransform: theme.textTransform,
        color: '#fff',
        padding: '1rem',
        borderRadius: '8px',
        boxShadow: `2px 2px 10px ${shadowColor}`,
      }}
    >
      Tarjeta de vista previa
    </div>
  );
});
