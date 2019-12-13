// import React from 'react';

// export class ToDoForm extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             title: "",
//             description: "",
//             frequency: "",
//             status: true,
//             user: ""
//         };

//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleChange(event) {
//         const name = event.target.name;
//         const value = event.target.value;
//         this.setState({[name]: value});
//     }

//     handleSubmit(event) {
//         event.preventDefault(); //prevent the page reloading

//         //TODO trigger POST route with todo data
//         console.log(this.state);

//         const todo = {
//           body: this.state.body,
//           title: this.state.title,
//           description: this.state.description,
//           frequency: this.state.frequency
//           status: this.state.status,
//           user: this.state.user,
//         };

//         if(this.state.newTodo)
//         {
//             this.uploadNewTodo(todo);
//         }
//         else {
//             this.updateTodo(todo);
//         }
//     }

//     async updateTodo(todo)
//     {
//         const url = `http://localhost:3000/todo/update/${this.props.match.params.id}`;

//         const response = await fetch(url, {
//             method: 'PUT', // *GET, POST, PUT, DELETE, etc.
//             mode: 'cors', // no-cors, *cors, same-origin
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify(post) // body data type must match "Content-Type" header
//         }).then((res) => res.json()).catch((e) => console.log(e));

//         console.log(response);

//         //redirect to show the post or redirect to all
//         if(response)
//             this.props.history.push("/");
//     }

//     async uploadNewTodo(todo)
//     {
//         const url = 'http://localhost:3000/todo/new';

//         const response = await fetch(url, {
//             method: 'POST', // *GET, POST, PUT, DELETE, etc.
//             mode: 'cors', // no-cors, *cors, same-origin
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify(post) // body data type must match "Content-Type" header
//         }).then((res) => res.json()).catch((e) => console.log(e));

//         console.log(response);

//         //redirect to show the post or redirect to all
//         if(response)
//             this.props.history.push("/");

//     }

//     componentDidMount() {
//         if(this.props.match.params.id)
//         {
//             this.setState({
//                 newTodo: false
//             });

//             fetch(`http://localhost:3000/todo/find/${this.props.match.params.id}`)
//                 .then((data) => data.json())
//                 .then((data) => {
//                     this.setState({
//                         title: data.title,
//                         description: data.description,
//                         frequency: data.frequency,
//                         status: data.status,
//                         user: data.user
//                     })
//                 })
//                 .catch((e) => {
//                     this.setState({msg: "Error loading todos, see dev console for more info"});
//                     console.log(e);
//                 })
//         }

//     }

//     render()
//     {

//         return (
//           <div className={"container"}> {/* w16n02 TODO: replace React.Fragment with a div with container class (optional) */}
//               <form onSubmit={this.handleSubmit}>
//                   <div className={"form-group"}>
//                       <label>
//                           Title:
//                           <input type="text" name="title"
//                                  value={this.state.title}
//                                  className={"form-control"}
//                                  onChange={this.handleChange} />
//                       </label>
//                   </div>
//                   <div className={"form-group"}>
//                       <label>
//                           Description:
//                           <input type="text" name="description"
//                                  value={this.state.description}
//                                  className={"form-control"}
//                                  onChange={this.handleChange} />
//                       </label>
//                   </div>
//                   <div className={"form-group"}>
//                       <label>
//                           Body:
//                             <textarea className={"form-control"}
//                                       value={this.state.body}
//                                       name="body"
//                                       onChange={this.handleChange}
//                                       cols="100" rows="10"/>
//                       </label>
//                   </div>
//                   <div className={"form-group"}>
//                       <input type="submit" value="Submit" />
//                   </div>
//               </form>
//           </div>
//         );
//     }
// }
