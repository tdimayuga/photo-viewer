async function getUserInfo (username){
    const response =  (
    fetch(`https://jsonplaceholder.typicode.com/users?username=${username}`, {
   method: 'GET',
   headers: {
     'Content-Type': 'application/json'
   }
 }))
 return (await response).json()
}

export default getUserInfo