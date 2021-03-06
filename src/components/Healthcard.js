import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import { useContainedCardHeaderStyles } from '@mui-treasury/styles/cardHeader/contained';
import { useSoftRiseShadowStyles } from '@mui-treasury/styles/shadow/softRise';
import { useFadedShadowStyles } from '@mui-treasury/styles/shadow/faded';

const useStyles = makeStyles(({ spacing }) => ({
    
    card: {
    marginTop: 100,
   
    transition: '0.3s',
    width: '1440px',
    height: '350px',
    display:'block',
    overflow: 'initial',
    background: '#ffffff',
    marginLeft:' 2rem',
  },
  content: {
    paddingTop: 20,
   
    textAlign: 'left',
    overflowX: 'auto',
    '& table': {
      marginBottom: 0,
    }
  },
}));

let id = 0;
function createData(name, fat, price) {
  id += 1;
  return { id, name, fat, price };
}

const rows = [
  // comment
  createData('Instance Name', 159, 4.0),
  createData('Instance ID', 237, 4.3),
  createData('Instance type', 16.0, 6.0),
 
];

export const Healthcard = React.memo(function ElevatedHeaderCard() {
  const classes = useStyles();
  const cardHeaderStyles = useContainedCardHeaderStyles();
  const cardShadowStyles = useSoftRiseShadowStyles({ inactive: true });
  const cardHeaderShadowStyles = useFadedShadowStyles();
  return (
    <Card className={cx(classes.card, cardShadowStyles.root)}>
      <CardHeader style={{width:"100%",background:"grey",borderRadius: '4px',color:"black"}}
        className={cardHeaderShadowStyles.root}
        classes={cardHeaderStyles}
        title={'Instance Info'}
       
      />
      <CardContent className={classes.content}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Instance</TableCell>
              
              <TableCell align="right">Info</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
               
                <TableCell align="right">{row.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
});

export default Healthcard