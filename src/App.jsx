import "./App.css";
import DateCard from "./components/DateCard";
import data from "./data.json";
function App() {
  return (
    <div className="app-container">
      <h1>December, 2024</h1>
      <ul className="day-list">
        <li>SUN</li>
        <li>MON</li>
        <li>TUE</li>
        <li>WED</li>
        <li>THU</li>
        <li>FRI</li>
        <li>SAT</li>
      </ul>
      <ul className="date-list">
        {[...Array(dayNumber(data))].map((_, i) => (
          <li key={i}></li>
        ))}
        {data?.map((v, i) => (
          <DateCard
            key={i}
            date={v.date.slice(6, 8)}
            todos={v.todos}
            isHoliday={v.isHoliday}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;

function dayNumber(data) {
  const year = data[0].date.slice(0, 4);
  const month = data[0].date.slice(4, 6) - 1;
  const day = data[0].date.slice(6, 8);
  const date = new Date(year, month, day);
  return date.getDay();
}
