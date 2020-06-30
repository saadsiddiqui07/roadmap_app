import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Favorite from '@material-ui/icons/Favorite';
import { Button, Segment } from "semantic-ui-react";
import {
  Checkbox,
  Card,
  FormGroup,
  FormControlLabel,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  Avatar,
  IconButton,
  Typography,
  Grid,
} from "@material-ui/core";
import { lightBlue, blueGrey, green } from "@material-ui/core/colors";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import {DiDjango} from 'react-icons/di'
import {GiChiliPepper} from 'react-icons/gi'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 305,
    justifyContent: "center",
    alignItems: "center",
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
  dj: {
    backgroundColor: green[500],
  },
  fl:{
    backgroundColor : blueGrey[500]
  },
  exp:{
    backgroundColor : lightBlue[400]
  }
  
}));

const dj_key = 'djangoLike'
const flask_key = 'flaskLike'

export default function BackFrameCard() {
  const classes = useStyles();

  const [djangoExpanded, setDjangoExpanded] = useState(false);
  const [flaskExpanded, setFlaskExpanded] = useState(false);

  const [djangoLike, setDjangoLike] = useState(false)
  const [flaskLike, setFlaskLike] = useState(false)

 
  // FLASK LIKE
  const handleFlaskLike = (event) => {
    setFlaskLike(event.target.checked)
  }

  useEffect(() => {
    const store_flaskLike = JSON.parse(localStorage.getItem(flask_key))
    if(store_flaskLike){
      setFlaskLike(store_flaskLike)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(flask_key, JSON.stringify(flaskLike))
  })

    // DJANGO LIKE
  const handleDjangoLike = (event) => {
      setDjangoLike(event.target.checked);
  }

  useEffect(() => {
      const store_djLike = JSON.parse(localStorage.getItem(dj_key))
      if(store_djLike){
        setDjangoLike(store_djLike)
      }
    }, [])

    useEffect(() => {
      localStorage.setItem(dj_key, JSON.stringify(djangoLike))
    })


  const handleFlaskExpandClick = () => {
    setFlaskExpanded(!flaskExpanded);
  };

  const handleDjangoExpandClick = () => {
    setDjangoExpanded(!djangoExpanded);
  };

  return (
    <div className='backcard'>
      <h1 className='back-text'>Python Back-End Frameworks</h1>
      <h4 style={{ textAlign: "center", color: "green" }}>(Pick one)</h4>
      <Grid container style={{maxWidth : '100%'}} spacing={3}>
        <Grid item xs={12} sm={6}>
          <Card style={{ margin: "0 auto" }} className={classes.root}>
            <CardHeader
              avatar={<Avatar className={classes.dj}><DiDjango/></Avatar>}
              action={
                <IconButton>
                  <StarIcon style={{color:'orange'}} />
                </IconButton>
              }
              title="Django (Python Framework)"
              subheader="Released in 2005"
            />
            <CardMedia
              className={classes.media}
              image="https://nextsoftware.io/files/images/logos/main/django-logo.png"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                Django is a Python-based free and open-source web framework that
                follows the model-template-view (MVC) architectural pattern. It
                is maintained by the Django Software Foundation (DSF)
                <br />
                <strong>Created by: Adrian Holovaty, Simon Willison</strong>
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
            <FormGroup row>
                <FormControlLabel
                  control={
                    <Checkbox
                      icon={<FavoriteBorder />}
                      checkedIcon={<Favorite />}
                      onChange={handleDjangoLike}
                      checked={djangoLike}
                    />
                  }
                   label='Like!'
                   />
              </FormGroup>

              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: djangoExpanded,
                })}
                onClick={handleDjangoExpandClick}
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>

            <Collapse in={djangoExpanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>
                  <strong>About:</strong>
                </Typography>
                <Typography paragraph>
                  Django's primary goal is to ease the creation of complex,
                  database-driven websites. The framework emphasizes reusability
                  and "pluggability" of components, less code, low coupling,
                  rapid development, and the principle of don't repeat yourself.
                </Typography>
                <Typography paragraph>
                  Python is used throughout, even for settings files and data
                  models. Django also provides an optional administrative
                  create, read, update and delete interface that is generated
                  dynamically through introspection and configured via admin
                  models.
                  <a
                    href="https://www.djangoproject.com/start/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn more.
                  </a>
                </Typography>
                <Typography>
                  <strong>Companies using Django:</strong>
                  <ul>
                    <li>Instagram</li>
                    <li>YouTube</li>
                    <li>Spotify</li>
                    <li>Dropbox</li>
                    <li>Bitbucket</li>
                    <li>Pinterest</li>
                  </ul>
                  <br/><hr/>
                  Watch a video tutorial !!
                  <br />

                  <Segment inverted>
                    <Button
                      href="https://www.youtube.com/watch?v=F5mRW0jo-U4"
                      target="_blank"
                      inverted
                      color="green"
                    >
                      Learn Django
                    </Button>
                  </Segment>
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Card style={{ margin: "0 auto" }} className={classes.root}>
            <CardHeader
              avatar={<Avatar className={classes.fl}><GiChiliPepper/></Avatar>}
              action={
                <IconButton>
                  <StarBorderIcon />
                </IconButton>
              }
              title="Flask (Python Framework)"
              subheader="Released in 2010"
            />
            <CardMedia
              className={classes.media}
              image="https://miro.medium.com/max/438/1*0G5zu7CnXdMT9pGbYUTQLQ.png"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                Flask is a micro web framework written in Python. Flask does not
                require particular tools or libraries. It has no database
                abstraction layer, form validation, or any other components
                where pre-existing third-party libraries provide common
                functions
                <br />
                <strong>Created by: Armin Ronacher</strong>
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
            <FormGroup row>
                <FormControlLabel
                  control={
                    <Checkbox
                      icon={<FavoriteBorder />}
                      checkedIcon={<Favorite />}
                      onChange={handleFlaskLike}
                      checked={flaskLike}
                    />
                  }
                  label="Like"
                />
              </FormGroup>

              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: flaskExpanded,
                })}
                onClick={handleFlaskExpandClick}
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>

            <Collapse in={flaskExpanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>
                  <strong>About:</strong>
                </Typography>
                <Typography paragraph>
                  However, Flask supports extensions that can add application
                  features as if they were implemented in Flask itself.
                </Typography>
                <Typography paragraph>
                  Extensions exist for object-relational mappers, form
                  validation, upload handling, various open authentication
                  technologies and several common framework related tools.
                  Extensions are updated far more frequently than the core Flask
                  program.
                  <a
                    href="https://flask.palletsprojects.com/en/1.1.x/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn more.
                  </a>
                </Typography>
                <Typography>
                  <strong>Companies using Flask:</strong>
                  <ul>
                    <li>Netflix</li>
                    <li>Airnb</li>
                    <li>Lyft</li>
                    <li>Reddit</li>
                    <li>trivago</li>
                  </ul>
                  <br/><hr/>
                  Watch a video tutorial !!
                  <br/>
                  <Segment inverted>
                    <Button
                      href="https://www.youtube.com/watch?v=Z1RJmh_OqeA"
                      target="_blank"
                      inverted
                      color="Grey"
                    >
                      Learn Flask
                    </Button>
                  </Segment>
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>
      </Grid>
      <br/>
    </div>
    
  );
}
