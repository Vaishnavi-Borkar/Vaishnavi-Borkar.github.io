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
        <div className="calendar">
          <GitHubCalendar
            username="Vaishnavi-Borkar"
            transformData={selectLastHalfYear}
            // year={new Date().getFullYear()}
            color="rgb(240, 158, 6)"
            width="100vw"
          />
        </div>
        <div className="contribution">
          <img
            src="https://streak-stats.demolab.com/?user=Vaishnavi-Borkar&theme=lightbox&date_format=M%20j%5B%2C%20Y%5D&color=rgb(240, 158, 6)"
            alt="contribution"
          />
        </div>
        <div className="language">
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=Vaishnavi-Borkar&layout=compact&theme=lightbox&color=rgb(240, 158, 6)"
            alt="language"
          />
        </div>
        <div className="stats">
          <img
            src="https://github-readme-stats.vercel.app/api?username=Vaishnavi-Borkar&count_private=true&theme=lightbox&color=rgb(240, 158, 6)"
            alt="stats"
          />
        </div>
      </div>
    </section>
  );
};

export default Github;
