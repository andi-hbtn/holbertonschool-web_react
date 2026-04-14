import { useState } from "react";
import CourseList from "../CourseList/CourseList";
import "../CourseList/CourseList.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Login } from "../Login/Login";
import Notifications from "../Notifications/Notifications";
import BodySection from "../BodySection/BodySection";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import "./App.css";

const App = () => {
  const [displayDrawer, setDisplayDrawer] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const notificationsList = [
    { id: 1, type: "default", value: "New course available" },
    { id: 2, type: "urgent", value: "New resume available" },
    {
      id: 3,
      type: "urgent",
      html: { __html: "<strong>Urgent requirement</strong> - complete by EOD" },
    },
  ];

  const coursesList = [
    { id: 1, name: "ES6", credit: "60" },
    { id: 2, name: "Webpack", credit: "20" },
    { id: 3, name: "React", credit: "40" },
  ];


  const handleDisplayDrawer = () => {
    setDisplayDrawer(true);
  }

  const handleHideDrawer = () => {
    setDisplayDrawer(false);
  }

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  }

  return (
    <>
      <div className="notifications-header">
        <Header />
        <div className="root-notifications">
          <Notifications
            notifications={notificationsList}
            displayDrawer={displayDrawer}
            handleDisplayDrawer={handleDisplayDrawer}
            handleHideDrawer={handleHideDrawer}
          />
        </div>
      </div>

      {isLoggedIn ? (
        <BodySectionWithMarginBottom title="Course list">
          <CourseList courses={coursesList} onLogout={handleLogout} />
        </BodySectionWithMarginBottom>
      ) : (
        <BodySectionWithMarginBottom title="Log in to continue">
          <Login onLogin={handleLogin} />
        </BodySectionWithMarginBottom>
      )}

      <BodySection title="News from the School">
        <p>Holberton School News goes here</p>
      </BodySection>

      <Footer />
    </>
  )
}

export default App;