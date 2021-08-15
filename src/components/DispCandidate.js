import React,{useState,useEffect} from 'react';
//import css from 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import { GithubContext } from '../context/context';
import { firebase } from '@firebase/app';
import '@firebase/firestore'
import { Link } from 'react-router-dom';

function DispCandidate() {
  const [blogs,setBlogs]=useState([])


  const { requests, error, searchGithubUser, isLoading } = React.useContext(
    GithubContext
  );

  
  useEffect(() => {
    fetchBlogs();
  },[])

  const fetchBlogs=async()=>{
    const response=firebase.firestore().collection('users');
    const data=await response.get();
    data.docs.forEach(item=>
    //   {
    //  setBlogs([...blogs,item.data()])
    // //  console.log(item);
    // setList([...blogs,item]);
    // }
    {
      var data = item.data();
      setBlogs(arr => [...arr , data]);
        
  }
    )
    console.log("data",data,"response",response);
  }
  
  const handleClick = (github_User) =>{
    //searchGithubUser(github_User);
    console.log("clicked",github_User);
  }
  // useEffect(() => {
  //   fetchBlogs();
  // }, [])

   
  //const [info , setInfo] = useState([]);
  
    // Start the fetch operation as soon as
    // the page loads
    // window.addEventListener('load', () => {
    //     Fetchdata();
    //   });
  
    // // Fetch the required data using the get() method
    // const Fetchdata =async()=>{
    //   firebase.firestore().collection('users').get().then((querySnapshot) => {
             
    //         // Loop through the data and store
    //         // it in array to display
    //         querySnapshot.forEach(element => {
    //             var data = element.data();
    //             setBlogs(arr => [...arr , data]);
                  
    //         });
    //     })
    // }

  console.log("blogs?",blogs);//,"lsit",List);

//   return (
//     <div className="App">
//       {
//         blogs && blogs.map(blog=>{
//           return(
//             <div className="blog-container">
//               <h4>{blog.name}</h4>
//               <p>{blog.github_ID}</p>
//             </div>
//           )
//         })
//       }
//     </div>
//   );

    return (
      <Wrapper>
      <div className="MainDiv">
        <div class="jumbotron text-center bg-sky">
            {/* <center><h3>Top Candidates!</h3></center> */}
        </div>
      <br/><br/>
        <div className="container">
            <table>
              {/* <thead class="thead-dark"> */}
                  <tr>
                      <th>Name</th>
                      <th>Gpa</th>
                      <th>Languages</th>
                      <th>Skills</th>
                      <th>Email</th>
                      <th>Profile</th>
                  </tr>
              {/* </thead> */}
              <tbody>
              {blogs.map(data => {
                  
                  return (
                      <tr>     
                      <td >{data.name}</td>
                      <td>none</td>
                      <td>{data.first_lang},{data.second_lang}</td>
                      <td>none</td>
                      <td>{data.email}</td>
                      <td><Link to={`${data.github_ID}`} className="btn" target="_blank" >View</Link></td>
                      </tr>
                      
                  );
                 
                  })}
          
                 
              </tbody>
              
           </table>
            
       </div>
      </div>
      </Wrapper>
    );
  
}

const Wrapper = styled.section`
  .container{
    padding-left:5rem;
    padding-right:5rem;
  }
  table{
    width:100%;
  }
  // table, th, td {
  //  border: 1px solid black;
  // }  
  table {
    border-collapse: collapse;
  }
  th, td {
    padding: 15px;
    text-align: left;
    border-bottom: 1px solid black;
  }
  // .btn{
  //   top:2rem;
  // }
`;

export default DispCandidate
