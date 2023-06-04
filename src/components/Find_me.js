import { Link } from "react-router-dom";
const Find_me = () => {
  return (
    <>
      <h1 className="fs-1 text-info text-center mt-5">
        Where can you find me:{" "}
      </h1>
      <div className="container mt-5">
        <ol className="text-info fs-2">
          <li>
            <Link
              className="nav-link text-info"
              target='_blank'
              to="https://www.instagram.com/_teo.__.5/"
            >

              Instagram
            </Link>
          </li>
          <li>
            <Link
              className="nav-link text-info"
              target='_blank'
              to="https://github.com/CalotaTeodora"
            >

              Github
            </Link>
          </li>
          <li>
            <Link
              className="nav-link text-info"
              target='_blank'
              to="https://www.linkedin.com/in/teo-calota-a714b6217/"
            >

              LinkDin
            </Link>
          </li>
        </ol>
      </div>
    </>
  );
};

export default Find_me;
