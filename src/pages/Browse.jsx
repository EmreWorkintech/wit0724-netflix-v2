/* eslint-disable react/prop-types */
function Browse(props) {
  const { activeProfile } = props;
  return <div>Browse for {activeProfile.name} </div>;
}

export default Browse;
