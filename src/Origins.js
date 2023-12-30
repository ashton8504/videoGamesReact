import styled from "styled-components";
import CustomNavbar from "./Components/Navbar";
import GamingOrigins from "./Components/Origins/GamingOrigins";
import Footer from "./Components/Footer";

const PageContent = styled.div`
  background-color: #060f0a;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export default function Origins() {
  return (
    <div className="Origins">
      <PageContent>
        <CustomNavbar />
        <GamingOrigins />
        <Footer />
      </PageContent>
    </div>
  );
}
