import React, { createContext, useReducer, useContext } from 'react';

const ThemeContext = createContext();

const initialState = {
  primaryColor: '#6c5ce7',
  fontSize: 16,
  textTransform: 'none',
};

function themeReducer(state, action) {
  switch (action.type) {
    case 'SET_PRIMARY_COLOR':
      return { ...state, primaryColor: action.payload };
    case 'SET_FONT_SIZE':
      return { ...state, fontSize: action.payload };
    case 'SET_TEXT_TRANSFORM':
      return { ...state, textTransform: action.payload };
    default:
      return state;
  }
}

export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  return (
    <ThemeContext.Provider value={{ theme: state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
