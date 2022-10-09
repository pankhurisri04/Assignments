import { useQuery } from "@apollo/client";
import { GET_ALLISSUES } from "../utils/queries";
import type {
  Repository,
  RepositoryData,
  RepositoryVars,
} from "../utils/types";

export const useGetReactIssues = () => {
  // executing query to fetch results/error/etc..
  const { error, loading, data, refetch } = useQuery<
    RepositoryData,
    RepositoryVars
  >(GET_ALLISSUES, {
    variables: {
      first: 10,
      last: null,
      after: null,
      before: null,
      state: null,
    },
  });

  const issues = data?.repository?.issues;
  const totalCounts = issues ? issues.totalCount : 0;
  const response = issues?.edges;
  return { error, loading, response, totalCounts, refetch };
};
