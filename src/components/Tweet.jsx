import ProfileImage from "./ProfileImage";
import User from "./User";
import Message from "./Message";
import Timestamp from "./Timestamp";
import Actions from "./Actions";

function Tweet(props) {
  const { tweet } = props;
  return (
    <div className="tweet">
      <ProfileImage image={tweet.user.image} />
      <div className="body">
        <div className="top">
          <User user={tweet.user} />
          <Timestamp timestamp={tweet.timestamp} />
        </div>
        <Message message={props.tweet.message} />
        <Actions />
      </div>
      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
