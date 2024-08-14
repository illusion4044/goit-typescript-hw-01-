enum DayOfWeek {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }
  
  const isWeekend = (day: DayOfWeek): boolean => {
    return day === DayOfWeek.Saturday || day === DayOfWeek.Sunday;
  }
  console.log(`Is Monday a weekend? ${isWeekend(DayOfWeek.Monday)}`);
console.log(`Is Saturday a weekend? ${isWeekend(DayOfWeek.Saturday)}`);