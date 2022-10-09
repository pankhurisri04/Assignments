import { gql } from "@apollo/client";

// query to be sent to github graphql api to fetch react issues from reactjs repo
export const GET_ALLISSUES = gql`
  query fetchIssues(
    $first: Int
    $last: Int
    $after: String
    $before: String
    $state: [IssueState!]
  ) {
    repository(owner: "reactjs", name: "reactjs.org") {
      issues(
        first: $first
        last: $last
        after: $after
        before: $before
        states: $state
      ) {
        totalCount
        edges {
          cursor
          node {
            id
            title
            url
            state
          }
        }
      }
    }
  }
`;
