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


import Like from './components/Like'

function App() {
  return (
    <div>
      <Like onClick={()=> console.log('Clicked!')
      }/> 
    </div>
  )
}

export default App