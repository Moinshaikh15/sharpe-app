import { React, useEffect, useState } from "react";
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts";

export default function Data() {
  let [posts, setPosts] = useState([]);
  const [chartData, setChartData] = useState([]);

  let fetchData = async () => {
    try {
      let response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
      let totalPosts = await response.json(); // Assuming the response is in JSON format
      let user1Posts = totalPosts.filter((post) => post.userId === 1);

      setPosts(user1Posts);

      const chartData = [
        { name: "User ID 1's Posts", value: user1Posts.length },
        { name: "Total Posts", value: totalPosts.length },
      ];
      setChartData(chartData);
    } catch (err) {
      console.error("Error in fetching data:", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className=" py-20 p-4 flex flex-col items-center justify-start gap-20">
      <div className="w-full flex flex-col items-center gap-4">
        <span className="text-xl font-medium">Table: Posts by User ID 1</span>

        <table className="w-11/12 text-sm text-left rtl:text-right text-white">

          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-[#2e2d4a] dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Body
              </th>
            </tr>
          </thead>

          <tbody>
            {posts.map((post) => (
              <tr
                key={post.id}
                className="bg-white border-b dark:bg-[#6764a4] dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-[#373557]"
              >
                <td className="px-6 py-4">{post.id}</td>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900  dark:text-white"
                >
                  {post.title}
                </th>
                <td className="px-6 py-4">{post.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="w-full flex flex-col items-center gap-4">
        <span className="text-xl font-medium">
          Pie Chart: Number of posts by user ID 1 out of total posts.
        </span>
        <ResponsiveContainer height={400} width="100%">
          <PieChart>
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={160}
              fill="#8884d8"
              label={({
                cx,
                cy,
                midAngle,
                innerRadius,
                outerRadius,
                value,
                index,
              }) => {
                const RADIAN = Math.PI / 180;
                // eslint-disable-next-line
                const radius = 25 + innerRadius + (outerRadius - innerRadius);
                // eslint-disable-next-line
                const x = cx + radius * Math.cos(-midAngle * RADIAN);
                // eslint-disable-next-line
                const y = cy + radius * Math.sin(-midAngle * RADIAN);

                return (
                  <text
                    x={x}
                    y={y}
                    fill="#8884d8"
                    textAnchor={x > cx ? "start" : "end"}
                    dominantBaseline="central"
                  >
                    {chartData[index].name} ({value})
                  </text>
                );
              }}
            >
              {chartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={index === 0 ? "#82ca9d" : "#8884d8"}
                />
              ))}
              <Tooltip label />
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
