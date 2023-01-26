import axios from 'axios';
const url = "https://jsonplaceholder.typicode.com";

 const getUserFullData =async (numId)=>

{
    
    
        let resp1 = await axios.get(url + "/users/" +numId)

        let Name = resp1.data.name;
        let mail = resp1.data.email;

        let resp2 = await axios.get(url + "/todos")

        let todols = resp2.data.filter(x=> x.userId==numId)
        let fiveTodols=[]

        for (let index = 0; index < 5; index++) 
        {
            fiveTodols[index]= todols[index].title
            
        }

        let resp3 = await axios.get(url + "/posts")

        let posts = resp3.data.filter(x=>x.userId==numId)
        let firstFromTitle = posts[0].title

        let Pers = { id : numId, name : Name, email : mail, missions : fiveTodols, firstPostTitle: firstFromTitle}

        return Pers;

}

export default {getUserFullData}