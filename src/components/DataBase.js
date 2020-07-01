import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import { Button, Segment } from "semantic-ui-react";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  Avatar,
  IconButton,
  Typography,
  Grid,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import { blue, yellow, green } from "@material-ui/core/colors";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import StarIcon from "@material-ui/icons/Star";
import { GrMysql } from "react-icons/gr";
import { DiPostgresql } from "react-icons/di";
import { DiMongodb } from "react-icons/di";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import Favorite from "@material-ui/icons/Favorite";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 305,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  sql: {
    backgroundColor: blue[400],
  },
  post: {
    backgroundColor: yellow[500],
    color: "black",
  },
  mon: {
    backgroundColor: green[500],
  },
  text: {
    textAlign: "center",
    justifyContent: "center",
  },
}));

const mysql_key = "mysqlLike";
const mongo_key = "mongoLike";
const post_key = "postgres_like";

export default function DataBase() {
  const classes = useStyles();

  const [mysqlExpanded, setMysqlExpanded] = useState(false);
  const [mongoExpanded, setMongoExpanded] = useState(false);
  const [postExpanded, setPostExpanded] = useState(false);

  const [mysqlLike, setMysqlLike] = useState(false);
  const [mongoLike, setMongoLike] = useState(false);
  const [postLike, setPostLike] = useState(false);

  // MYSQL Like
  const handleMysqlLike = (event) => {
    setMysqlLike(event.target.checked);
  };

  useEffect(() => {
    const store_sqlLike = JSON.parse(localStorage.getItem(mysql_key));
    if (store_sqlLike) {
      setMysqlLike(store_sqlLike);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(mysql_key, JSON.stringify(mysqlLike));
  });

  // MONGO LIKE
  const handleMongoLike = (event) => {
    setMongoLike(event.target.checked);
  };

  useEffect(() => {
    const store_mongoLike = JSON.parse(localStorage.getItem(mongo_key));
    if (store_mongoLike) {
      setMongoLike(store_mongoLike);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(mongo_key, JSON.stringify(mongoLike));
  });

  // POSTGRESQL LIKE
  const handlePostLike = (event) => {
    setPostLike(event.target.checked);
  };

  useEffect(() => {
    const store_postLike = JSON.parse(localStorage.getItem(post_key));
    if (store_postLike) {
      setPostLike(store_postLike);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(post_key, JSON.stringify(postLike));
  });

  const handleMysqlExpandClick = () => {
    setMysqlExpanded(!mysqlExpanded);
  };
  const handleMongoExpandClick = () => {
    setMongoExpanded(!mongoExpanded);
  };
  const handlePostExpandClick = () => {
    setPostExpanded(!postExpanded);
  };

  return (
    <div className="database">
      <h1 className="database-text">Databases</h1>
      <Grid container style={{ maxWidth: "100%" }} spacing={3}>
        <Grid item xs={12} sm={4}>
          <Card style={{ margin: "0 auto" }} className={classes.root}>
            <CardHeader
              avatar={
                <Avatar className={classes.sql}>
                  <GrMysql />
                </Avatar>
              }
              action={
                <IconButton>
                  <StarIcon style={{ color: "orange" }} />
                </IconButton>
              }
              title="MySQL(use with Python)"
              subheader="Released in 1995"
            />

            <CardMedia
              className={classes.media}
              image="https://cdn.worldvectorlogo.com/logos/mysql-5.svg"
            />
            <CardContent>
              <Typography variant="body2" color="textPrimary" component="p">
                MySQL is is an open-source relational database management system
                . A relational database organizes data into one or more data
                tables in which data types may be related to each other; these
                relations help structure the data.
                <br />
                <strong>Created by: Oracle Corporation</strong>
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <FormGroup row>
                <FormControlLabel
                  control={
                    <Checkbox
                      icon={<FavoriteBorder />}
                      checkedIcon={<Favorite />}
                      onChange={handleMysqlLike}
                      checked={mysqlLike}
                    />
                  }
                  label="Like"
                />
              </FormGroup>

              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: mysqlExpanded,
                })}
                onClick={handleMysqlExpandClick}
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>

            <Collapse in={mysqlExpanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>
                  <strong>About:</strong>
                </Typography>
                <Typography paragraph>
                  SQL is a language programmers use to create, modify and
                  extract data from the relational database, as well as control
                  user access to the database.
                </Typography>
                <Typography paragraph>
                  In addition to relational databases and SQL, an RDBMS like
                  MySQL works with an operating system to implement a relational
                  database in a computer's storage system, manages users, allows
                  for network access and facilitates testing database integrity
                  and creation of backups.
                  <a
                    href="https://dev.mysql.com/doc/connector-python/en/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn more.
                  </a>
                </Typography>
                <Typography>
                  <strong>Companies using MySql:</strong>
                  <ul>
                    <li>Uber.</li>
                    <li> Airbnb.</li>
                    <li>Pinterest.</li>
                    <li>Netflix.</li>
                    <li>Twitter.</li>
                    <li>Amazon.</li>
                  </ul>
                  <br />
                  <hr />
                  Watch a video tutorial !!
                  <br />
                  <Segment inverted>
                    <Button target="_blank" href="https://www.youtube.com/watch?v=HXV3zeQKqGY&t=3537s" inverted color="purple">
                      Learn Mysql
                    </Button>
                  </Segment>
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card style={{ margin: "0 auto" }} className={classes.root}>
            <CardHeader
              avatar={
                <Avatar className={classes.post}>
                  <DiPostgresql />
                </Avatar>
              }
              action={
                <IconButton>
                  <StarIcon style={{ color: "orange" }} />
                </IconButton>
              }
              title="PostGreSQL (use with python)"
              subheader="Released in 1996"
            />

            <CardMedia
              className={classes.media}
              image="https://logos-download.com/wp-content/uploads/2016/10/PostgreSQL_logo_small.png"
            />
            <CardContent>
              <Typography variant="body2" color="textPrimary" component="p">
                Postgres, is a free and open-source relational database
                management system (RDBMS) emphasizing extensibility and SQL
                compliance.
                <br />
                <strong>Created by: PostgreSQL Global Development Group</strong>
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <FormGroup row>
                <FormControlLabel
                  control={
                    <Checkbox
                      icon={<FavoriteBorder />}
                      checkedIcon={<Favorite />}
                      onChange={handlePostLike}
                      checked={postLike}
                    />
                  }
                  label="Like"
                />
              </FormGroup>

              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: postExpanded,
                })}
                onClick={handlePostExpandClick}
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>

            <Collapse in={postExpanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>
                  <strong>About:</strong>
                </Typography>
                <Typography paragraph>
                  PostgreSQL features transactions with Atomicity, Consistency,
                  Isolation, Durability (ACID) properties, automatically
                  updatable views, materialized views, triggers, foreign keys,
                  and stored procedures.
                </Typography>
                <Typography paragraph>
                  It is designed to handle a range of workloads, from single
                  machines to data warehouses or Web services with many
                  concurrent users. It is the default database for macOS Server,
                  and is also available for Linux, FreeBSD, OpenBSD, and
                  Windows.
                  <a
                    href="https://www.postgresql.org/about/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn more.
                  </a>
                </Typography>
                <Typography>
                  <strong>Companies using PostgreSQL:</strong>
                  <ul>
                    <li>Instagram.</li>
                    <li>Uber</li>
                    <li>Spotify.</li>
                    <li>Netflix.</li>
                    <li>reddit.</li>
                  </ul>
                  <br />
                  <hr />
                  Watch a video tutorial !!
                  <br />
                  <Segment inverted>
                    <Button
                      target="_blank"
                      href="https://www.youtube.com/watch?v=qw--VYLpxG4"
                      inverted
                      color="blue"
                    >
                      Learn PostgreSQL
                    </Button>
                  </Segment>
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card style={{ margin: "0 auto" }} className={classes.root}>
            <CardHeader
              avatar={
                <Avatar className={classes.mon}>
                  <DiMongodb />
                </Avatar>
              }
              action={
                <IconButton>
                  <StarIcon style={{ color: "orange" }} />
                </IconButton>
              }
              title="MongoDB(use with JavaScript)"
              subheader="Released in 2009"
            />

            <CardMedia
              className={classes.media}
              image="https://cdn.iconscout.com/icon/free/png-512/mongodb-226029.png"
            />
            <CardContent>
              <Typography variant="body2" color="textPrimary" component="p">
                MongoDB is a cross-platform document-oriented database program.
                Classified as a NoSQL database program, MongoDB uses JSON-like
                documents with optional schemas.
                <br />
                <strong>Created by: MongoDB Inc</strong>
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <FormGroup row>
                <FormControlLabel
                  control={
                    <Checkbox
                      icon={<FavoriteBorder />}
                      checkedIcon={<Favorite />}
                      onChange={handleMongoLike}
                      checked={mongoLike}
                    />
                  }
                  label="Like"
                />
              </FormGroup>

              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: mongoExpanded,
                })}
                onClick={handleMongoExpandClick}
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>

            <Collapse in={mongoExpanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>
                  <strong>About:</strong>
                </Typography>
                <Typography paragraph>
                  MongoDB supports field, range query, and regular-expression
                  searches. Queries can return specific fields of documents and
                  also include user-defined JavaScript functions. Queries can
                  also be configured to return a random sample of results of a
                  given size.
                </Typography>
                <Typography paragraph>
                  MongoDB provides high availability with replica sets.[10] A
                  replica set consists of two or more copies of the data. Each
                  replica-set member may act in the role of primary or secondary
                  replica at any time. All writes and reads are done on the
                  primary replica by default.
                  <a
                    href="https://docs.mongodb.com/manual/introduction/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn more.
                  </a>
                </Typography>
                <Typography>
                  <strong>Companies using MongoDb:</strong>
                  <ul>
                    <li>Adobe</li>
                    <li>ebay</li>
                    <li>Google.</li>
                    <li>SAP.</li>
                    <li>PayPal.</li>
                  </ul>
                  <br />
                  <hr />
                  Watch a video tutorial !!
                  <br />
                  <Segment inverted>
                    <Button
                      target="_blank"
                      href="https://www.youtube.com/watch?v=pWbMrx5rVBE"
                      inverted
                      color="green"
                    >
                      Learn MongoDb
                    </Button>
                  </Segment>
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
