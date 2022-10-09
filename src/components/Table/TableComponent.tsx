import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { mergeClasses } from "@material-ui/styles";

import type { IListItemProps } from '../../utils/types'
import classes from "../../../styles/TableComponent.module.css";

// Display content in a simple table

const TableComponent: React.FC<IListItemProps> = ({ List, headCells }) => {
  return (
    <TableContainer>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            {headCells.map((headcell) => (
              <TableCell align="center" key={headcell.id}>
                {headcell.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {List.map((row) => (
            <TableRow key={row.node.id}>
              <TableCell>{row.node.title}</TableCell>
              <TableCell component="th" scope="row">
                <a href={row.node.url}>{row.node.url}</a>
              </TableCell>
              <TableCell align="center">
                <div className={classes.statusButton}>
                  {row.node.state}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer >
  );
};

export default TableComponent;
