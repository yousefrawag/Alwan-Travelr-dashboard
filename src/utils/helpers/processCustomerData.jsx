export const ProcessCustomerData = (userCustomers) => {
    const today = new Date();
  
    // Helper to format dates
    const formatDate = (date) => date.toISOString().split('T')[0];
    
    // Group by time ranges
    const dayData = Array.from({ length: 24 }, (_, i) => {
      const hour = String(i).padStart(2, '0') + ':00';
      const count = userCustomers?.filter((customer) => {
        const customerDate = new Date(customer.createdAt);
        return (
          customerDate.toDateString() === today.toDateString() &&
          customerDate.getHours() === i
        );
      }).length;
      return { hour, count };
    });
  
    const weekData = Array?.from({ length: 7 }, (_, i) => {
      const date = new Date(today);
      date.setDate(today.getDate() - (6 - i));
      const formattedDate = formatDate(date);
      const count = userCustomers?.filter(
        (customer) => formatDate(new Date(customer.createdAt)) === formattedDate
      ).length;
      return { date: formattedDate, count };
    });
  
    const monthData = Array?.from(
      { length: new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate() },
      (_, i) => {
        const date = formatDate(new Date(today.getFullYear(), today.getMonth(), i + 1));
        const count = userCustomers?.filter(
          (customer) => formatDate(new Date(customer.createdAt)) === date
        ).length;
        return { date, count };
      }
    );
  
    // Build the final fakeData structure
    return {
      day: {
        categories: dayData?.map((d) => d.hour),
        values: dayData?.map((d) => d.count),
      },
      week: {
        categories: weekData?.map((d) => d.date),
        values: weekData?.map((d) => d.count),
      },
      month: {
        categories: monthData?.map((d) => d.date),
        values: monthData?.map((d) => d.count),
      },
    };
  };