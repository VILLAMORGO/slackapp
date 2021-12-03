import ReactDOM from "react-dom"
import {IoPersonCircleOutline} from "react-icons/io5"
const retrievedMessage = JSON.parse(localStorage.getItem("retrievedMessages"))
function RenderRetrievedMessages(){

  const retrievedMessage = JSON.parse(localStorage.getItem("retrievedMessages"))
   
  let uid = Window.uid

  if(!retrievedMessage){}else{


    function Blog(props) {

      const sidebar = (
        <ul>
          {props.posts.map((post) =>

          post.data.map((post) =>

          <li key={post.body} className="m-5" >
                <div id="messageFormat">
                  <IoPersonCircleOutline id="personIcon"/>
                  <div id="messageSender">{post.sender.email}</div>
                  <div id="messageTimeSent">{(post.created_at)}</div>
                  <div id="messageBody">{post.body}</div>
                </div>   
            </li>
          )
          )}
        </ul>
      );
      
      return (
        <div>
          {sidebar}
        </div>
      );
    }

    ReactDOM.render(
      <Blog posts={retrievedMessage} />,
      document.querySelector('.conversationArea')
    );

    ReactDOM.render(<div>{uid}</div>, document.querySelector(".channelName"))
  }

}

if(!retrievedMessage){}else{

var newInterval = setInterval(() => {
    RenderRetrievedMessages()
}, 5000);

Window.timeValue = newInterval

}

window.onload = clearInterval( newInterval)

export default RenderRetrievedMessages;
