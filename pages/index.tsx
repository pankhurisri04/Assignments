import DisplayIssueList from '../src/components/DisplayIssueList'

import classes from "../styles/Index.module.css";

export default function Home() {
  return (
    <div className={classes.container}>
      <header className={classes.heading}>
        <h1>ReactJS Issues</h1>
      </header>
      <section>
        <DisplayIssueList />
      </section>
    </div>
  );
}
