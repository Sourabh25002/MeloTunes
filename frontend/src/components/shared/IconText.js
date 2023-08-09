import { Link } from "react-router-dom";

const IconText = ({ iconName, displayText, active, targetLink, onClick }) => {
  return (
    <Link to={targetLink} className="block">
      <div className="flex items-center justify-start cursor-pointer" onClick={onClick}>
        <div className="px-4 py-3">
          {/* Use the 'iconName' prop to access the SVG image path */}
          <img src={iconName} alt="Icon" width="20" height="20" color={active ? "white" : "gray"} />
        </div>
        <div className="text-white text-sm font-semibold">{displayText}</div>
      </div>
    </Link>
  );
};

export default IconText;


