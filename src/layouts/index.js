import styles from './index.css';

/*function BasicLayout(props) {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Yay! Welcome to umi!</h1>
      {props.children}
    </div>
  );
}

export default BasicLayout;*/


import { Component } from 'react';
import withRouter from 'umi/withRouter';

class Layout extends Component {
  componentDidUpdate(prevProps) {
    debugger;
    console.log('componentDidUpdate');
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }
  render() {
    return (
      <div className={styles.normal}>
          <h1 className={styles.title}>Yay! Welcome to umi!</h1>
        {this.props.children}
      </div>
    );
  }
}

export default withRouter(Layout);
