import React from 'react';
import Color from 'color';
import styled from 'styled-components'
import GoogleFont from 'react-google-font-loader';
import { makeStyles } from '@material-ui/core/styles';
import NoSsr from '@material-ui/core/NoSsr';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { useFourThreeCardMediaStyles } from '@mui-treasury/styles/cardMedia/fourThree';
import ushurbuilder from '../assets/ushurbuilder.png'
import kibana from '../assets/kibana.jpg'
import grafana from '../assets/grafana.png'
import sisense from '../assets/sisense.jpg'
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import CallMissedOutgoing from '@material-ui/icons/CallMissedOutgoing';
import { useFlexyTagStyles } from '@mui-treasury/styles/tag/flexy';
import { usePushingGutterStyles } from '@mui-treasury/styles/gutter/pushing';

const useGridStyles = makeStyles(({ breakpoints }) => ({
  root: {
    [breakpoints.up('md')]: {
      justifyContent: 'center',
    },
  },
}));



const useStyles = makeStyles(() => ({
  actionArea: {
    borderRadius: 16,
    transition: '0.2s',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
  card: ({ color }) => ({
    minWidth: 256,
    borderRadius: 16,
    boxShadow: 'none',
    '&:hover': {
      boxShadow: `0 6px 12px 0 ${Color(color)
        .rotate(-12)
        .darken(0.2)
        .fade(0.5)}`,
    },
  }),
  content: ({ color }) => {
    return {
      backgroundColor: color,
      padding: '1rem 1.5rem 1.5rem',
    };
  },
  title: {
    fontFamily: 'Open Sans',
    fontSize: '1rem',
    color: '#000000',
    textTransform: 'uppercase',
  },
  subtitle: {
    fontFamily: 'Open Sans',
    color: '#000000',
    opacity: 0.87,
    marginTop: '2rem',
    fontWeight: 500,
    fontSize: 14,
  },
}));

const CustomCard = ({ classes, image, title, subtitle }) => {
  const mediaStyles = useFourThreeCardMediaStyles();
  return (
    <CardActionArea className={classes.actionArea}>
      <Card className={classes.card}>
        <CardMedia classes={mediaStyles} image={image} />
        <CardContent className={classes.content}>
          <Typography className={classes.title} variant={'h3'}>
            {title}
          </Typography>
          <Typography className={classes.subtitle}>{subtitle}</Typography>
        </CardContent>
      </Card>
    </CardActionArea>
  );
};

export const Maincards = React.memo(function SolidGameCard() {
  const gridStyles = useGridStyles();
  const styles = useStyles({ color: '#dde5eb' });
  const styles2 = useStyles({ color: '#dde5eb' });
  const styles3 = useStyles({ color: '#dde5eb' });
  const styles4 = useStyles({ color: '#dde5eb'});
  return (
    <>
     
      <Grid classes={gridStyles} container spacing={4} wrap={''}>
        
        <Grid item>
          <CustomCard
            classes={styles}
            title={'Ushur Builder'}
            subtitle={'Login'}
            image={
             ushurbuilder
            }
          />
        </Grid>
        <Grid item>
          <CustomCard
            classes={styles2}
            title={'Kibana'}
            subtitle={'Login'}
            image={
            kibana
            }
          />
        </Grid>
        <Grid item>
          <CustomCard
            classes={styles3}
            title={'Grafana'}
            subtitle={'Login'}
            image={

                grafana
            }
          />
        </Grid>
        <Grid item>
          <CustomCard
            classes={styles4}
            title={'Sisense'}
            subtitle={'Login'}
            image={
              sisense
              }
          />
        </Grid>
      </Grid>
    </>
  );
});

export default Maincards