let changeDateFormat=(timestamp)=>{
    const date = new Date(timestamp);

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = date.getFullYear();

    return `${day}-${month}-${year}`;
}

let formatDateToDayMonth=(timestamp)=>{
    const date = new Date(timestamp);
  
    const day = String(date.getDate());
    const month = new Intl.DateTimeFormat('en-US', { month: 'short' }).format(date);
  
    return `${day} ${month}`;
  }