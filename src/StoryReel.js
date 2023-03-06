import React from 'react';
import Story from './Story';
import "./StoryReel.css";

const StoryReel = () => {
  return (
    <div className='storyReel'>
           <Story  image="https://i.pinimg.com/474x/95/0f/47/950f47e3a09015835443614a9d0dcaa9.jpg"
            profile="https://images.unsplash.com/photo-1583748493291-7938f0657681?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
            title="My Story"
            />
            <Story  image="https://funkylife.in/wp-content/uploads/2022/05/attitude-status-english-by-funkylife-2-1536x1536.jpg"
            profile="https://images.unsplash.com/photo-1523264766116-1e09b3145b84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTExfHxib2xkJTIwZ2lybHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            title="Amelia"
            />
            <Story  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiYbpXeDM2kjb64w8p6FGwRIRJS58QUYQj6S1dF-tOSM8_qXqSfNYxtnkyNlntI7bKZgM&usqp=CAU"
            profile="https://images.unsplash.com/photo-1456885284447-7dd4bb8720bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGJvbGQlMjBnaXJsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            title="Sophia"
            />
            <Story  image="https://funkylife.in/wp-content/uploads/2021/08/girl-attitude-quotes-5.jpg"
            profile="https://images.unsplash.com/photo-1503342452485-86b7f54527ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGJvbGQlMjBnaXJsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            title="Charlotte"
            />
             <Story  image="https://funkylife.in/wp-content/uploads/2021/08/girls-attitude-quotes-7.jpg"
            profile="https://images.unsplash.com/photo-1625565719208-dae6321e1f48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzN8fGJvbGQlMjBnaXJsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            title="Mia"
            />
            
    </div>
  )
}

export default StoryReel;