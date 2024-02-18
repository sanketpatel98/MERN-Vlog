export const getOneMonthAgoDate = () => {
    const today = new Date();
    const currentMonth = today.getMonth();
  
    let monthAgoMonth = currentMonth - 1;
    let monthAgoYear = today.getFullYear();
  
    if (monthAgoMonth < 0) {
      monthAgoMonth = 11;
      monthAgoYear--;
    }
  
    const monthAgoDate = new Date(monthAgoYear, monthAgoMonth, 1);
  
    if (
      today.getDate() ===
      new Date(today.getFullYear(), today.getMonth(), 0).getDate()
    ) {
      monthAgoDate.setDate(
        Math.min(
          today.getDate(),
          new Date(monthAgoYear, monthAgoMonth, 0).getDate()
        )
      );
    }
  
    return monthAgoDate;
  }