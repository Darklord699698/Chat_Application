import { ChatEngine } from "react-chat-engine";
import './App.css';
import ChatFeed from './components/ChatFeed';

const App=()=>{
    return(
        <ChatEngine
           height='100vh'
           projectID='e53fe8db-0eb7-4dba-88b5-149a42507b50'
           userName='GiggaNigga'
           userSecret='yfV4qnvv6**zDqa'
           renderChatFeed={(chatAppProps)=><ChatFeed {...chatAppProps} />}
        />
    )
}

export default App;