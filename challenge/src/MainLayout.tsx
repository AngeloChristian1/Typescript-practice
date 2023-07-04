import Heading from "./components/Heading.js";

function MainLayout({ children }) {
  return (
    <>
      <div className="container">
        <Heading />
        {children}
      </div>
    </>
  );
}

export default MainLayout;
