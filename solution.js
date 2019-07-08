function groupWeeks(data) {
  let groupedDate = [];

  data.forEach(element => {
    let currentArrDate = new Date(element.date);

    if (currentArrDate.getDay() === 1) {
      console.log("day of the week: Monday!", currentArrDate.getDay());
      groupedDate.push(element.date);
    }

    console.log("date", currentArrDate);

    console.log("element.date", element.date);

    console.log("element.count", element.count);

    console.log("groupedDate:", groupedDate);
  });
}
