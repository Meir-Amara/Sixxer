import { Link as RouterLink } from "react-router-dom";

function Link(props) {
  return <RouterLink {...props} className="link"  />;
}

export default Link;