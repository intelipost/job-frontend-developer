import React from 'react';
import { TextField, Box} from '@material-ui/core';
import axios from 'axios';

function api() {
  axios({
    method: 'get',
    url: 'http://theaudiodb.com/api/v1/json/1/search.php?s=coldplay',
  })
  .then(response => {
    const data = response.data.artists[0]
    console.log(data)
  })
}

api()

function App() {

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <form>
        <Box>
          <TextField variant='outlined'/>
        </Box>
      </form>
    </div>
  );
}

export default App;
