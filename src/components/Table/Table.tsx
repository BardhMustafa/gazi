
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ }) => ({
  [`&.${tableCellClasses.head}`]: {

    color: '#e91b37',
    fontWeight: 700,
    fontSize: 18,
    fontFamily: 'Poppins',

  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
    fontFamily: 'Poppins',
  },
}));

const StyledTableRow = styled(TableRow)(() => ({
  '&:nth-of-type(odd)': {
    backgroundColor: '#F5F5F5',
  },

  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(
  key: string,
  value: string,

) {
  return { key, value };
}


type Props = {
  data: rowValues[],

  
}
type rowValues = {
  key: string,
  value: string
}

export default function CustomizedTables({ data, title }: { data: Props,title:string }) {
  const rows = data?.data?.map((row) => 
    createData(row.key, row.value)
  );
  
  return (
    <TableContainer component={Paper}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>{title}</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows?.map((row, i) => (
            <StyledTableRow key={`row-${i}`}>
              <StyledTableCell align="left">{row.key}</StyledTableCell>
              <StyledTableCell align="left">{row.value}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
