import React, { Component } from 'react';
import { Text, View } from 'react-native';

//when only the props needs to be presented, we can use stateless component
const People = ({ name, age, interest, property, func, count }) => {
  return (
    <View>
      <Text>Who:{name}</Text>
      <Text>When:{age}</Text>
      <Text>What:{interest[0]}</Text>
      <Text>How:{property.appearance}</Text>
      <Text onPress={func}>guess what?</Text>
      <Text>{count}</Text>
    </View>
  );
};

People.defaultProps = {
  count: 100,
};
module.exports = People;

// const People = props=>{
//   return (
//     <View>
//       <Text>Who:{props.name}</Text>
//       <Text>When:{props.age}</Text>
//       <Text>What:{props.interest[0]}</Text>
//       <Text>How:{props.property.appearance}</Text>
//       <Text onPress={props.func}>guess what?</Text>
//     </View>
//   );
// };

// statefull component
// class People extends Component {
//   render() {
//     const {name, age, interest, property, func}= this.props;
//     return (
//       <View>
//         <Text>Who:{name}</Text>
//         <Text>When:{age}</Text>
//         <Text>What:{interest[0]}</Text>
//         <Text>How:{property.appearance}</Text>
//         <Text onPress={func}>guess what?</Text>
//       </View>
//     );
//   }
// }

// normal way
// const PeopleName = 'Mingying';
// const PeopleAge = 38;
// const PeopleInterest = ['sleep', 'animation', 'jogging'];
// const PeopleProperty = {
//   appearance: 'handsome',
//   character: 'gentle',
//   ability: 'exceptional'
// };
// const Peoplefunc = function () {
//   alert('I can do a lot of things!');
// };
