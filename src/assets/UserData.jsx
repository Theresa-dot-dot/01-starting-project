function UserData(){
  let user = {
    first: "Theresa",
    last: "Osuji",
    age: "35",
  };

  return(
    <div>
      <ul>
        User Data
        <li>First: {user.first}</li>
        <li>Last: {user.last}</li>
        <li>Age: {user.age}</li>
      </ul>
    </div>
  );
}
export default UserData;