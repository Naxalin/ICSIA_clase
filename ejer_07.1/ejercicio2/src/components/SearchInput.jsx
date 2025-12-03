import { memo } from "react";

const SearchInput = ({ value, onChange }) => {
  console.log("Render SearchInput");

  return (
    <input
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder="Buscar usuario..."
    />
  );
};

export default memo(SearchInput);
