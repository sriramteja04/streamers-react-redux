import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import StreamCreate from './components/Streams/StreamCreate/StreamCreate';
import StreamDelete from './components/Streams/StreamDelete/StreamDelete';
import StreamEdit from './components/Streams/StreamEdit/StreamEdit';
import StreamList from './components/Streams/StreamList/StreamList';
import StreamShow from './components/Streams/StreamShow/StreamShow';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="ui container">
      <BrowserRouter>
        <Header />
        <div>
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/new" exact component={StreamCreate} />
          <Route path="/streams/edit" exact component={StreamEdit} />
          <Route path="/streams/delete" exact component={StreamDelete} />
          <Route path="/streams/show" exact component={StreamShow} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
