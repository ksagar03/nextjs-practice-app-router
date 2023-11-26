const Meetupcard = ({ id, name, images, location, date, discription }) => {
    //   console.log(Name);
      return (
        <div>
          <h1>{name}</h1>
          <img src={images} />
          <h2>{location}</h2>
          <h2>Date and time ={date}</h2>
          <button>show details</button>
        </div>
      );
    };
    
    export default Meetupcard;
    