() => {
  const [startDate, setStartDate] = useState(new Date());
  const holidays = [
    { year: 2023, month: 1, day: 1, name: "New Year's Day" },
    { year: 2023, month: 1, day: 26, name: "Republic Day" },
    { year: 2023, month: 8, day: 15, name: "Independence Day" },
    { year: 2023, month: 10, day: 2, name: "Gandhi Janyanti" },
    { year: 2023, month: 12, day: 25, name: "Christmas" },
  ];
  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      holidays={holidays}
      placeholderText="This highlights a holiday"
    />
  );
};
