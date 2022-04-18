import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { LinkProps } from "react-router-dom";
function CustomLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link
        style={{
          textDecoration: match ? "none" : "none",
          color: match ? "black" : "gray",
          borderBottom: match ? "10px solid black" : "1px solid gray",
        }}
        to={to}
        {...props}
      >
        {children}
      </Link>
      {/* <Link hover style={{ color: "blue" }}></Link> */}
      {match && ""}
    </div>
  );
}
export default CustomLink;
