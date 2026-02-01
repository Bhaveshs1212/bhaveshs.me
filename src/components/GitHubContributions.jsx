import { GitHubCalendar } from "react-github-calendar";

const GitHubContributions = () => {
  const transformData = (data) => {
    const today = new Date('2026-02-02'); // February 2, 2026
    const oneYearAgo = new Date(today);
    oneYearAgo.setFullYear(today.getFullYear() - 1);
    oneYearAgo.setDate(today.getDate() + 1); // Start from Feb 3, 2025
    
    return data.filter(day => {
      const dayDate = new Date(day.date);
      return dayDate >= oneYearAgo && dayDate <= today;
    });
  };

  return (
    <div className="w-full overflow-hidden">
      <GitHubCalendar
        username="bhaveshs1212"
        colorScheme="dark"
        fontSize={12}
        blockSize={12}
        transformData={transformData}
        theme={{
          dark: ["#161b22", "#006064", "#00838f", "#0097a7", "#00adb5"],
        }}
        hideColorLegend={false}
        hideMonthLabels={false}
        hideTotalCount={false}
        showWeekdayLabels={true}
        labels={{
          totalCount: "{{count}} contributions in the last year"
        }}
      />
    </div>
  );
};

export default GitHubContributions;
