import axios from 'axios';
axios.defaults.baseURL = process.env.REACT_APP_API;
// Add a response interceptor
axios.interceptors.response.use(function (response) {
  return response;
},function (error) {
  console.log("error!!!!!")
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
  } else if (error.request) {
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
    console.log(error.request);
  } else {
    // Something happened in setting up the request that triggered an Error
    console.log('Error', error.message);
  }
  console.log(error.config);
});

export default {
  getTasks: async () => {
    console.log("get")
    const result = await axios.get(`/todos`)    
    return result.data;
  },

  addTask: async(name)=>{
    console.log('addTask', name)
    //TODO
    const result=await axios.post(`/todos`,{name:name,isComplete:false})
    return result;
  },

  setCompleted: async(id, isComplete)=>{
    console.log("set")
   const result=await axios.put(`/todos/${id}`,{id:id,isComplete:isComplete})
    //TODO
    return result.data;
  },

  deleteTask:async(id)=>{
   await axios.delete(`/todos/${id}`)
  }
};
