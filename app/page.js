import Meetups from "@/components/meetupsviews";
// import { metadata } from './layout'
// import { dummy } from "@/app/components/dummy";

let meetupdata = [
  {
    id: "m1",
    name: "paris",
    images:
      "https://cdn.sortiraparis.com/images/80/69688/837774-que-faire-aujourd-hui-ce-a-paris-ou-en-ile-de-france.jpg",
    date: "10th of Dec 2023",
    location: "Nil",
    discrition: "one of the most buityfull place on earth",
  },
  {
    id: "m2",
    name: "India",
    images:
      "https://www.state.gov/wp-content/uploads/2023/07/shutterstock_621278474v2.jpg",
    date: "20th of Dec 2023",
    location: "Nil",
    discrition: "one of the most iconic place on earth",
  },
];

const homepage = () => {
  return (
    <>
      <h1>Hello this is home page</h1>
      <Meetups Meetupsdetails={meetupdata} />
    </>
  );
};

export default homepage;
