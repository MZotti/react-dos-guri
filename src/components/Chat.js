import React from 'react';
import { Chat, Channel, Attachment } from 'stream-chat-react';
import { ChannelHeader, MessageList, Window } from 'stream-chat-react';
import { MessageInput, Thread } from 'stream-chat-react';
import { StreamChat } from 'stream-chat';

import 'stream-chat-react/dist/css/index.css';

const chatClient = new StreamChat('qk4nn7rpcn75');
const userToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiZGFtcC1jcmVkaXQtNCJ9.IH5926YORT4hZffT6StZdbtPJSGkq14QRRsNXu9_0xI';

class MyAttachmentComponent extends React.Component {
  render() {
    const {attachment} = this.props;
    if (attachment.type === 'product') {
      return (
        <div className="product">
          Product:
          <a href={attachment.url} target="_blank">
            <img src={attachment.image} height={'100px'} /><br />
            {attachment.name}
          </a>
        </div>
      );
    } else {
      return <div>testing<Attachment {...this.props} /></div>
    }
  }
}

chatClient.setUser(
  {
       id: 'damp-credit-4',
       name: 'Damp credit',
       image: 'https://getstream.io/random_svg/?id=damp-credit-4&name=Damp+credit'
  },
  userToken,
);

const channel = chatClient.channel('messaging', 'godevs', {
  // add as many custom fields as you like
  image: 'https://cdn.chrisshort.net/testing-certificate-chains-in-go/GOPHER_MIC_DROP.png',
  name: 'Talk about Go',
});

const attachments = [{
  type: 'product',
  name: 'iPhone',
  url: 'https://goo.gl/ppFmcR',
  image: 'https://goo.gl/J2gQpi',
}]

channel.sendMessage({
  text: 'Your selected product is out of stock, would you like to select one of these alternatives?',
  attachments: attachments,
});

const App = () => (
  <Chat client={chatClient} theme={'messaging'}>
    <Channel channel={channel} Attachment={MyAttachmentComponent}>
      <Window>
        <ChannelHeader />
        <MessageList />
        <MessageInput />
      </Window>
      <Thread />
    </Channel>
  </Chat>
)

export default App;