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
        MenuProps={{ disableScrollLock: true }}
        variant="standard"
        disableUnderline
        sx={{
          minWidth: 84,
          color: '#113355',
          fontSize: '1.4rem',
          fontWeight: 650,
          '& .MuiSelect-select': { padding: '0.8rem 2.8rem 0.8rem 1rem' },
        }}
      >
        <MenuItem value="shq">🇦🇱 Shq</MenuItem>
        <MenuItem value="en">🇺🇸 En</MenuItem>
        <MenuItem value="de">🇩🇪 De</MenuItem>
        <MenuItem value="fr">🇫🇷 Fr</MenuItem>
      </Select>
    </>
  );
};
