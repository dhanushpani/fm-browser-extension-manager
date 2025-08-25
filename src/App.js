import { useEffect, useState } from "react";
import Header from "./components/header";
import Filter from "./components/filter";
import CardContainer from "./components/card";
import { Data as initialData } from "./data";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [state, setState] = useState("All");
  const filters = ["All", "Active", "InActive"];

  const [fullData, setFullData] = useState(initialData); // 🔁 real data
  const [cardData, setCardData] = useState([]); // 👁️ filtered view

  // dark mode toggle
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  // filter data when state or fullData changes
  useEffect(() => {
    let filtered;

    if (state === "Active") {
      filtered = fullData.filter((item) => item.isActive);
    } else if (state === "InActive") {
      filtered = fullData.filter((item) => !item.isActive);
    } else {
      filtered = fullData;
    }

    setCardData(filtered);
  }, [state, fullData]); // 👈 re-run when fullData updates

  const onThemeChanges = () => {
    setDarkMode((prev) => !prev);
  };

  const onFilterChange = (item) => {
    setState(item);
  };

  const onChangeActive = (name) => {
    setFullData((prev) =>
      prev.map((item) =>
        item.name === name ? { ...item, isActive: !item.isActive } : item
      )
    );
  };

  const onDelete = (name) => {
    setFullData((prev) => prev.filter((item) => item.name !== name));
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-500 px-12 py-12 font-myfont
      ${
        darkMode
          ? "bg-gradient-dark text-neutral-0"
          : "bg-gradient-light text-neutral-900"
      }`}
    >
      <Header darkMode={darkMode} onThemeChanges={onThemeChanges} />
      <Filter state={state} filters={filters} onFilterChange={onFilterChange} />
      <CardContainer
        data={cardData}
        onChangeActive={(name) => onChangeActive(name)}
        onDelete={(name) => onDelete(name)}
      />
    </div>
  );
}
