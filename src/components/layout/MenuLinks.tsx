import { MenuItem, Select, SelectChangeEvent } from '@mui/material';
import styled from 'styled-components';
import { useTranslations } from '../../hooks/useTranslations';

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
  const { t, translations } = useTranslations();
  return (
    <>
      {links}
      <LanguageItem>
        <Select
          inputProps={{ 'aria-label': t(translations.redesign.nav_language) }}
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
            backgroundColor: '#f5f7f9',
            borderRadius: '1.2rem',
            '& .MuiSelect-select': { padding: '1.1rem 2.8rem 1.1rem 1rem', borderRadius: '1.2rem' },
          }}
        >
          <MenuItem value="shq">🇦🇱 Shq</MenuItem>
          <MenuItem value="en">🇺🇸 En</MenuItem>
          <MenuItem value="de">🇩🇪 De</MenuItem>
          <MenuItem value="fr">🇫🇷 Fr</MenuItem>
        </Select>
      </LanguageItem>
    </>
  );
};

const LanguageItem = styled.li`
  margin-left: 1rem;
  padding-left: 1.6rem;
  border-left: 1px solid #e5e9ed;
  @media (max-width: 1023px) {
    margin: 1.6rem 0 0;
    padding: 2rem 0 0;
    border-left: 0;
    border-top: 1px solid #e5e9ed;
  }
`;
