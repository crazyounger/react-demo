import React , {Component} from 'react';

//方式1
// class Header extends Component {
//
//   render(){
//     return (
//       <div className="container">
//         <div className="row">
//           <div className="col-xs-1 col-xs-offset-11">
//             <h1>Header</h1>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

//方式2
const Header = (props) => {
  return (
    <div className="container">
       <div className="row">
         <div className="col-xs-1 col-xs-offset-11">
           <h1>Header</h1>
           <p>{props.homeLink}</p>
         </div>
       </div>
     </div>
  );
}
export default Header;
