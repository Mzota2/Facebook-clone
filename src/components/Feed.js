import React from 'react';
import Story from './Story';
import Post from './Post';
import './Feed.css'
import db from './firebase';
import FeedComponent from './FeedComponent';

function Feed({inputClicked , activatePostField}) {
  const [posts , setPosts] = React.useState([]);
  const [facebookPost , setFacebookPost] = React.useState('');
  function createFacebookPost(e){
    setFacebookPost(e.target.value);
  }
  React.useEffect(()=>{
    db.collection('posts').onSnapshot(snapshot=> 
      setPosts(snapshot.docs.map(doc => 
        doc.data()
      ))
    )

  } , []);
  function postTweets(e){
    console.log('added')
    e.preventDefault();
    db.collection('posts').add({
      displayName:'Emmanuel Mzota',
      text:facebookPost,
    })
    setFacebookPost('');
  };

  return (
    <div className='feed--container'>
        <Story/>
        <Post inputClicked={inputClicked} activatePostField={activatePostField} createPost={createFacebookPost} postTweet = {postTweets} facebookPost={facebookPost}/>
        {posts.map((data) =>{
          return(
            <FeedComponent key={data.text} displayName={data.displayName} text ={data.text}/>
          )
        })}
       
       
       
    </div>
  )
}

export default Feed