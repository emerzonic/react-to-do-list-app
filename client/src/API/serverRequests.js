import axios from "axios";
// import formatter from './formatter';


export default {
  // Send a new user data to the database
  sendNewUserData: function (newUser) {
    return axios.post('/signup', newUser);
  },

  // Send a user login data to the database
  sendLoginData: function (user) {
    return axios.post('/signin', user);
  },

  // Gets all todos
  getAllTodos: function (userId) {
    return axios.get("/todos/" + userId);
  },

  // Gets one todo
  //  getOneTodo: function (todoId, userId) {
  //   return axios.get("/todos/"+ todoId,  userId);
  // },

  // Saves an todos to the database
  addNewTodos: function (userId, todo) {
    return axios.post('/todos/new/' + userId, todo);
  },

  // Deletes the todo with the given id
  deleteTodos: function (todoId) {
    return axios.delete("/" + todoId);
  }
};