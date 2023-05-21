// import Alert from "./components/Alert";
// import Button from "./components/Button";
// import ListGroup from "./components/ListGroup";
// import { useState } from "react";


// function App() {
//   const items = [
//     "New York",
//     "Los Angeles",
//     "Chicago",
//     "Houston",
//     "Philadelphia",
//     "Phoenix",
//   ];
//   const handleSelectItem = (item: string) => {
//     console.log(item);
//   };
//   const [alertVisible, setAlertVisible] = useState(false);

//   return (
//     <div>
//       <ListGroup
//         items={items}
//         heading='Cities'
//         onSelectItem={handleSelectItem}
//       />
//       {alertVisible && (
//         <Alert onClose={() => setAlertVisible(false)}>
//           This is an <span> alert!</span>
//         </Alert>
//       )}
//       <Button
//         color='primary'
//         onClick={() => setAlertVisible(true)}
//       >
//         My Button
//       </Button>
//     </div>
//   );
// }

// export default App;

// import Like from './components/Like'

// function App() {
//   return (
//     <div>
//       <Like onClick={()=> console.log('Clicked!')
//       }/>
//     </div>
//   )
// }

// export default App

// import { useState } from "react";

// function App() {
//   const [game, setGame] = useState({
//     id: 1,
//     player: {
//       name: "John",
//     },
//   });

//   const handleClick = () => {
//     setGame({
//       ...game,
//       player: {
//         ...game.player,
//         name: "Bob",
//       },
//     });
//   };

//   return (
//     <div>
//       <button onClick={handleClick}>Change Player Name</button>
//     </div>
//   );
// }

// export default App;

import { useState } from 'react'


function App() {
  const [tags, setTags] = useState(['tag1', 'tag2']); 
  const handleClick = () => {
    setTags([...tags, 'tag3']);
    setTags(tags.filter((tag) => tag !== 'tag3'));
    setTags(tag => tag.filter((tag) => tag !== 'tag3'));
  }

  return (
    <div>
      <button onClick={handleClick}>Add Tag</button>
    </div>
  );
}

export default App

