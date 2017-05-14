import * as React from 'react'
import { render } from 'react-dom';

const styles = require('./app.pcss');

interface Props { }

interface State { }

class App extends React.Component<Props, State> {
  constructor() {
    super();
  }

  render () {
    return (
      <h1 className={styles.header}>Hello World!</h1>
    );
  }
}

render(<App/>, document.getElementById('app'));
