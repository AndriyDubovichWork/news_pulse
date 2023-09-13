export default function useGenerateRandomChartData(size: number) {
  let labels = [];
  let data = [];

  for (let i = 0; i <= size; i++) {
    labels.push("");
    data.push(Math.round(Math.random() * 10));
  }

  return {
    labels: labels,
    datasets: [
      {
        label: "",
        data: data,
        borderColor: "#FCC54C",
        backgroundColor: "#FCC54C",
      },
    ],
  };
}
