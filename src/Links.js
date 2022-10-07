import { Link } from "react-router-dom";
function Links() {
  return (
    <div className="flex flex-col justify-center m-5">
      <Link to="/form" className="border p-5 m-5">
        Form
      </Link>
      <Link to="/counter" className="border p-5 m-5">
        Counter
      </Link>
      <Link to="/Fetch" className="border p-5 m-5">
        Fetch
      </Link>
      <Link to="/time" className="border p-5 m-5">
        Time
      </Link>
    <Link to="/queue" className="border p-5 m-5">
        Queue
      </Link>
    <Link to="/colourchange" className="border p-5 m-5">
        ColourChange
      </Link>    
    <Link to="/effect" className="border p-5 m-5">
        Effect
      </Link>
    </div>
  );
}
export default Links;
