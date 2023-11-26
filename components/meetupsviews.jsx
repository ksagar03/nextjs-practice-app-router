import Meetupcard from "./meetupcard";
const Meetups = ({ Meetupsdetails }) => {
  console.log(Meetupsdetails);
  return (
    <div>
      {Meetupsdetails.map((item) => (
        <Meetupcard
          key={item.id}
          id={item.id}
          name={item.name}
          images={item.images}
          date={item.date}
          location={item.location}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default Meetups;
