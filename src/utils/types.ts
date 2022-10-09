interface edgeNode {
  cursor: string;
  node: { id: string; title: string; url: string; state?: string };
}

export interface IListItemProps {
  List: edgeNode[];
  headCells: { id: string; label: string }[];
}

export interface Repository {
  issues: {
    totalCount: number;
    edges: [edgeNode];
  };
}

export interface RepositoryData {
  repository: Repository;
}

export interface RepositoryVars {
  first: number | null;
  last: number | null;
  after: string | null;
  before: string | null;
  state: string | null;
}
