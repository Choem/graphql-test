import React from "react";
import { Typography, makeStyles, createStyles, Theme } from "@material-ui/core";
import ArticleOverviewTable from "./ArticleOverviewTable";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'relative',
      width: '100%',
      height: `calc(100vh - ${theme.mixins.toolbar.height})`
    },
  })
);

const ArticleOverviewPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ArticleOverviewTable />
    </div>
  );
};

export default ArticleOverviewPage;