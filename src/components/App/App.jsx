import { useSelector } from 'react-redux';
import {
  Container,
  Grid,
  GridItem,
  Header,
  SearchForm,
  Section,
  Text,
  Todo,
} from 'components';
import { getTodos } from 'redux/slice';

export function App() {
  const todos = useSelector(getTodos);

  return (
    <>
      <Header />
      <Section>
        <Container>
          <SearchForm />

          {todos.length === 0 && (
            <Text textAlign="center">There are no any todos ... </Text>
          )}

          <Grid>
            {todos.length > 0 &&
              todos.map((todo, index) => (
                <GridItem key={todo.id}>
                  <Todo id={todo.id} text={todo.text} counter={index + 1} />
                </GridItem>
              ))}
          </Grid>
        </Container>
      </Section>
    </>
  );
}

// export class App extends Component {
//   state = {
//     todos: [],
//   };

//   componentDidMount() {
//     const todos = JSON.parse(localStorage.getItem('todos'));

//     if (todos) {
//       this.setState(() => ({ todos }));
//     }
//   }
//   componentDidUpdate(prevProps, prevState) {
//     const { todos } = this.state;

//     if (prevState.todos !== todos) {
//       localStorage.setItem('todos', JSON.stringify(todos));
//     }
//   }

//   addTodo = text => {
//     const todo = {
//       id: nanoid(),
//       text,
//     };

//     this.setState(({ todos }) => ({
//       todos: [...todos, todo],
//     }));
//   };

//   handleSubmit = data => {
//     this.addTodo(data);
//   };

//   deleteTodo = id => {
//     this.setState(prevState => ({
//       todos: prevState.todos.filter(todo => todo.id !== id),
//     }));
//   };

//   render() {
//     const { todos } = this.state;

//     return (
//       <>
//         <Header />
//         <Section>
//           <Container>
//             <SearchForm onSubmit={this.handleSubmit} />

//             {todos.length === 0 && (
//               <Text textAlign="center">There are no any todos ... </Text>
//             )}

//             <Grid>
//               {todos.length > 0 &&
//                 todos.map((todo, index) => (
//                   <GridItem key={todo.id}>
//                     <Todo
//                       id={todo.id}
//                       text={todo.text}
//                       counter={index + 1}
//                       onClick={this.deleteTodo}
//                     />
//                   </GridItem>
//                 ))}
//             </Grid>
//           </Container>
//         </Section>
//       </>
//     );
//   }
// }
