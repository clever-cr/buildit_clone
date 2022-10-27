function Profile({ img, name, status }) {
  return (
    <div>
      <picture>
        <img src={img} alt="description"></img>
      </picture>
      <h3>{name}</h3>
      <p>{status}</p>
    </div>
  );
}
export default Profile;
