/* eslint-disable react/prop-types */
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";

const Avatar = styled.img`
  width: 3rem;
  border-radius: 0.3rem;
`;

function UserPanel(props) {
  const { activeProfile } = props;

  return (
    <div>
      <Link to="/welcome">
        <Avatar src={activeProfile.avatar} />
      </Link>
    </div>
  );
}

export default UserPanel;
