import { FiSearch } from "react-icons/fi";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
}

export const SearchInput = ({ value, onChange }: SearchInputProps) => {
  return (
    <div className="users-page__search">
      <div className="search-input-wrapper">
        <input
          type="text"
          className="search-input"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        <FiSearch className="search-input-icon" />
      </div>
    </div>
  );
};
