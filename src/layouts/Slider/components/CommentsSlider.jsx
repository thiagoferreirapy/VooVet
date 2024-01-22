
import { NameOwner, NamePet, CommmentsUser } from "./styles/styleComments";

function CommentsSlider ({nameowner, namepet, typepet, msguser}){
  
  return (
    <>
        <NameOwner>{nameowner}</NameOwner>
        <NamePet>{namepet} ({typepet})</NamePet>
        <CommmentsUser>"{msguser}"</CommmentsUser>
    </>
  );
};

export default CommentsSlider