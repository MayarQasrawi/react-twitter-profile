import ProfileItem from "../../ProfileItem/ProfileItem";
import Container from "../Container/Container";


const SuggestionsContainer = ({ suggestions, onShowMore , onFollowToggle }) => {
   
  return (
    <Container
      title="You might like"
      onShowMore={onShowMore}
      showMore
      role="list"
      children={
        <div role="list">
          {suggestions.map((suggestion) => (
            <ProfileItem key={suggestion.id} item={suggestion} role="listitem" onFollowToggle={onFollowToggle} />
          ))}
        </div>
      }
    />
  );
};

export default SuggestionsContainer;
