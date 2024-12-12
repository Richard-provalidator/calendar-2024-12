import "./App.css";
import DateCard from "./components/DateCard";
import data from "./data.json";
function App() {
  return (
    <div className="app-container">
      <h1>December, 2024</h1>
      <ul className="day-list">
        <li>MON</li>
        <li>TUE</li>
        <li>WED</li>
        <li>THU</li>
        <li>FRI</li>
        <li>SAT</li>
        <li>SUN</li>
      </ul>
      <ul className="date-list">
        {data?.map((v, i) => (
          <DateCard
            key={i}
            date={v.date}
            todos={v.todos}
            isHoliday={v.isHoliday}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
