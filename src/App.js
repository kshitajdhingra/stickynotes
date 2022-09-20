
import './App.css';

import Header from './Header';
import Footer from './Footer';
import Createnotes from "./Createnotes";
import Note from "./Note";
import { useState } from 'react';



const App = () => {
  const [addItem, setAddItem] = useState([]);

  const addNote = (note) => {
    setAddItem((prevData) => {
      return [...prevData, note];
    });

    
  };

  const delnote = (id) => {
    setAddItem((olddata) =>
      olddata.filter((currdata, indx) => {
        return indx !== id;
      })
    );
  };

  return (
    <>
      <Header />
      <Createnotes passNote={addNote} />

      {addItem.map((val, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            delitem={delnote}
          />
        );
      })}

      <Footer />
    </>
  );
};

export default App;