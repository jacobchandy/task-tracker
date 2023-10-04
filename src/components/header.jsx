import PropTypes from "prop-types";
import Button from "./button";
const Header = ({ title }) => {
  const onClick = () => {
    console.log("Click");
  };
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color="Black" text="Add" onClick={onClick} />
    </header>
  );
};

Header.defaultProps = { title: "Task Tracker" };
Header.proptypes = { title: PropTypes.string.isRequired };
export default Header;
