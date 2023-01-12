const Card = ({ name, date, description, imgUrl }) => {

    return (
    <div>
      <h4>{name}</h4>
      <h4>{date}</h4>
      <h4>{description}</h4>
      <img src={imgUrl} alt="" />
      <div>
  
      </div>
    </div>
  );
};

export default Card;
