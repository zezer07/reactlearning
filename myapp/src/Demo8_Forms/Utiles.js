import axios from 'axios';

const getDataById =async(numId)=>

{

    let user = await axios.get("https://jsonplaceholder.typicode.com/users/" + numId)

    let fullName = user.data.name
    let mail = user.data.email

    let pers = { name : fullName, email : mail}

    return pers;
    

}

const updateUser =(numId,user)=>
{
   return axios.put("https://jsonplaceholder.typicode.com/users/" + numId, user)

}

export default {getDataById,updateUser}




