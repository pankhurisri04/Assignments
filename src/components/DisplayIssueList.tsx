import { useEffect, useState, MouseEvent, ChangeEvent } from "react";
import { TablePagination } from "@material-ui/core";
import { InputLabel, Select, MenuItem } from "@material-ui/core";
import { useGetReactIssues } from "../hooks/useGetReactIssues";
import TableComponent from './Table/TableComponent'
import {
  ISSUES_LIST_DEFAULT_PAGE,
  FILTER_ISSUES,
  HEAD_CELLS,
} from "../utils/constants";

import classes from "../../styles/DisplayIssueList.module.css";

const DisplayIssueList = () => {
  //setting the page number for pagination
  const [page, setPage] = useState<number>(0);
  // setting the filter selection value
  const [issueState, setIssueState] = useState<string | null>("ALL");

  const { error, loading, response, totalCounts, refetch } =
    useGetReactIssues();

  const handlePageChange = (e: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    console.log("pagination called")
    setPage(newPage);
    if (response) {
      if (newPage > page)
        //re-firing the graphql query again  whenever page is changed (next)
        refetch({
          first: ISSUES_LIST_DEFAULT_PAGE?.per_page,
          last: null,
          after: response[response.length - 1].cursor,
          before: null,
          state: issueState === "ALL" ? null : issueState,
        });
      else
        //re-firing the graphql query again  whenever page is changed (prev)
        refetch({
          first: null,
          last: ISSUES_LIST_DEFAULT_PAGE.per_page,
          after: null,
          before: response[0].cursor,
          state: issueState === "ALL" ? null : issueState,
        });
    }
  }

  const handleStateSelection = (event: React.ChangeEvent<{ value: unknown }>) => {
    const target = event.target as HTMLSelectElement;
    setPage(0);
    const currentState =
      target.value !== "ALL" ? target.value : null;
    //re-firing the graphql query again  whenever a selection is made in filter)
    refetch({ first: 10, last: null, after: null, before: null, state: currentState });
    setIssueState(currentState);
  };

  // Display issues in a table on load , implementation of filter by state of Issue (OPEN/CLOSED or all together) and pagination  
  return (
    < >
      {!error && !loading && response && (
        <>
          <div className={classes.filterdiv}>
            <InputLabel id="state-select-label">Filter By State</InputLabel>
            <Select
              labelId="state-select-label"
              id="state-select"
              value={issueState ? issueState : "ALL"}
              label="Filter By State"
              onChange={handleStateSelection}
            >
              {FILTER_ISSUES.map((option, index) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </div>
          <div className={classes.table} >
            {/* Display Table of issues */}
            <TableComponent headCells={HEAD_CELLS} List={response} />
            <TablePagination
              component="div"
              rowsPerPageOptions={[10]}
              rowsPerPage={ISSUES_LIST_DEFAULT_PAGE.per_page}
              page={+page}
              count={totalCounts}
              onPageChange={handlePageChange}
            />
          </div>
        </>
      )}
      {/* handle Error */}
      {error && <div className={classes.error}>Something Went Wrong!</div>}
    </>
  );
};

export default DisplayIssueList;
