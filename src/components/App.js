import React from 'react';
import TrelloList from './TrelloList';
import { connect } from 'react-redux';

function App({lists}) {
  return (
    <div className="App">
      <h2>Hello</h2>
      <div style={styles.listsContainer}>
        {lists.map(({title, cards}, id) => {
          return <TrelloList key={id} title={title} cards={cards} />
        })}
      </div>
    </div>
  );
}

const styles = {
  listsContainer: {
    display: 'flex',
    flexDirection: 'row'
  }
}

const mapStateToProps = state => ({
  lists: state.lists
});

export default connect(mapStateToProps)(App);
