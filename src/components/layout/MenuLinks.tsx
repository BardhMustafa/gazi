import { MenuItem, Select, SelectChangeEvent } from '@mui/material';

interface MenuLinksProps {
  links: React.ReactNode;
  language: string;
  handleLanguageChange: (
    event: SelectChangeEvent<string>,
    child: React.ReactNode
  ) => void;
}

export const MenuLinks = ({
  links,
  language,
  handleLanguageChange,
}: MenuLinksProps) => {
  return (
    <>
      {links}
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={language}
        onChange={handleLanguageChange}
      >
        <MenuItem value="en">🇺🇸 En</MenuItem>
        <MenuItem value="shq">🇦🇱 Shq</MenuItem>
        <MenuItem value="de">🇩🇪 De</MenuItem>
        <MenuItem value="fr">🇫🇷 Fr</MenuItem>
      </Select>
    </>
  );
};
