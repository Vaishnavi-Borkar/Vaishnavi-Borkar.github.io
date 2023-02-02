import React from "react";
import "./Github.css";

import GitHubCalendar from "react-github-calendar";

const Github = () => {
  const selectLastHalfYear = (contributions) => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 5;

    return contributions.filter((day) => {
      const date = new Date(day.date);
      const monthOfDay = date.getMonth();

      return (
        date.getFullYear() === currentYear ||
        monthOfDay > currentMonth - shownMonths ||
        monthOfDay <= currentMonth
      );
    });
  };

  return (
    <section id="github">
      <h2 className="git-title">GitHub</h2>
      <div className="container container_github">
        {/* <div className="calendar">
          <GitHubCalendar
            username="Vaishnavi-Borkar"
            transformData={selectLastHalfYear}
            // year={new Date().getFullYear()}
            color="rgb(240, 158, 6)"
            width="100vw"
          />
        </div> */}
        <div className="contribution">
          <img
            src="https://github-readme-activity-graph.cyclic.app/graph?username=Vaishnavi-Borkar&color=f09e06&theme=react-dark&custom_title=Vaishnavi-Borkar%20's%20contribution%20Graph&hide_border=true"
            alt="contribution"
          />
        </div>
        <div className="language">
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=Vaishnavi-Borkar&layout=compact&theme=react-dark&color=rgb(240, 158, 6)"
            alt="language"
          />
        </div>
        <div className="stats">
          <img
            src="https://github-readme-streak-stats.herokuapp.com/?user=Vaishnavi-Borkar&show_icons=true&locale=en&theme=gruvbox&count_private=true"
            alt="starts"
          />
          <img
            src="https://github-readme-stats.vercel.app/api?username=Vaishnavi-Borkar&theme=algolia&hide_border=false&include_all_commits=true&count_private=true"
            alt="stats"
          />
        </div>
      </div>
    </section>
  );
};

export default Github;

{
  /* <img src="http://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=Mohit-Raj-Singh&theme=2077" width="100%" />
<img src="https://github-readme-activity-graph.cyclic.app/graph?username=Mohit-Raj-Singh&theme=react-dark&custom_title=Mohit-Raj-Singh%20's%20contribution%20Graph&hide_border=true" /> */
}
