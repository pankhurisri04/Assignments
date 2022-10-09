//contants

export const ISSUES_LIST_DEFAULT_PAGE = {
  page: 1,
  per_page: 10,
};

// possible values to filter out response
export const FILTER_ISSUES = ["OPEN", "CLOSED", "ALL"];

// Table Headings
export const HEAD_CELLS = [
  { id: "title", label: "Title" },
  { id: "url", label: "URL" },
  { id: "status", label: "STATUS" },
];
