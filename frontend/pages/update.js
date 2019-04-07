import UpdateItem from "../components/UpdateItem";

const update = ({ query }) => {
  return <UpdateItem id={query.id} />;
};

export default update;
