export const UserCard = (props) => {
  return (
    <div className="card">
      <div className="card__thumb">
        <img src={props.imgSrc} alt={props.imgAlt} />
      </div>
      <div className="card__content">
        <div className="name">{props.name}</div>
        <div className="title">{props.title}</div>
      </div>
    </div>
  );
};
