import Footer from "../components/Footer";
import HeaderUser from "../components/HeaderUser";
import Navbar from "../components/Navbar";
import Accounts from "../components/Accounts";

function Profile() {
  document.title = "Argent Bank - Account";
  return (
    <div className="app">
      <Navbar page="profile" />
      <main className="main bg-dark">
        <HeaderUser />
        <Accounts />
      </main>
      <Footer />
    </div>
  );
}

export default Profile;
