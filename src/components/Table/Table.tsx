import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

type RowValue = {
  key: string;
  value: string;
};

type TableData = {
  data: RowValue[];
};

type CustomizedTablesProps = {
  data: TableData;
  title: string;
};

const HeaderCell = styled(TableCell)(() => ({
  backgroundColor: '#113355',
  color: '#ffffff',
  fontWeight: 700,
  fontSize: '1.7rem',
  fontFamily: 'inherit',
  letterSpacing: '-0.01em',
  padding: '2rem 2.4rem',
  borderBottom: '3px solid #d42539',
}));

const BodyCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.body}`]: {
    fontFamily: 'inherit',
    fontSize: '1.4rem',
    lineHeight: 1.55,
    padding: '1.65rem 2.4rem',
    borderBottom: '1px solid #e8edf1',
    verticalAlign: 'top',
  },
  '&:first-of-type': {
    width: '56%',
    color: '#647383',
    fontWeight: 500,
  },
  '&:last-of-type': {
    color: '#113355',
    fontWeight: 700,
  },
  '@media (max-width: 600px)': {
    [`&.${tableCellClasses.body}`]: {
      fontSize: '1.3rem',
      padding: '1.4rem 1.6rem',
    },
  },
}));

const StyledTableRow = styled(TableRow)(() => ({
  '&:nth-of-type(even)': {
    backgroundColor: '#f7f9fa',
  },
  '&:last-child td, &:last-child th': {
    borderBottom: 0,
  },
  transition: 'background-color 160ms ease',
  '&:hover': {
    backgroundColor: '#f0f4f7',
  },
}));

export default function CustomizedTables({
  data,
  title,
}: CustomizedTablesProps) {
  return (
    <TableContainer
      component={Paper}
      elevation={0}
      sx={{
        height: '100%',
        borderRadius: '20px',
        border: '1px solid #e5e9ed',
        boxShadow: '0 18px 50px rgba(17, 51, 85, 0.08)',
        overflow: 'hidden',
      }}
    >
      <Table aria-label={title} sx={{ height: '100%' }}>
        <TableHead>
          <TableRow>
            <HeaderCell colSpan={2}>{title}</HeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.data.map((row, index) => (
            <StyledTableRow key={`${row.key}-${index}`}>
              <BodyCell component="th" scope="row">
                {row.key}
              </BodyCell>
              <BodyCell align="left">{row.value}</BodyCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
