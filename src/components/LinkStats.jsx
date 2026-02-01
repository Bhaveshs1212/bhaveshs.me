import { useEffect, useState } from "react";
import { GitCommit } from "lucide-react";

const LinkStats = () => {
  const [stats, setStats] = useState({
    totalContributions: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        // Fetch all-time contribution data
        const contributionsResponse = await fetch(
          `https://github-contributions-api.jogruber.de/v4/bhaveshs1212`,
        );
        const contributionsData = await contributionsResponse.json();

        // Calculate total lifetime contributions by summing all years
        const totalContributions = Object.values(
          contributionsData.total || {},
        ).reduce((sum, yearContributions) => sum + (yearContributions || 0), 0);

        setStats({
          totalContributions,
        });
      } catch (error) {
        console.error("Error fetching GitHub stats:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubStats();
  }, []);

  if (loading) {
    return (
      <div className="flex gap-4 animate-pulse">
        <div className="flex items-center gap-1.5">
          <div className="h-4 w-4 bg-[#2A2A2A] rounded" />
          <div className="h-4 w-12 bg-[#2A2A2A] rounded" />
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-1.5 text-sm text-[#9A9A9A] hover:text-[#F2F2F2] transition-colors">
      <GitCommit className="size-4" />
      <span className="font-semibold">
        {stats.totalContributions.toLocaleString()}
      </span>
      <span>Contributions</span>
    </div>
  );
};

export default LinkStats;
