// the menus page

import React from 'react';
import { FoodList } from '../components';

import Grid from '@material-ui/core/Grid';

const Menus = () => {

  return (
    <div>
      <Grid containe alignItems="center"
        justify="center">
        <Grid item>
          <FoodList />
        </Grid>
      </Grid>
    </div>
  )
}

export default Menus;