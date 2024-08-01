export const fetchEmployees = async () => {
    try {
      const response = await fetch(
        "https://free-ap-south-1.cosmocloud.io/development/api/employees?limit=20&offset=0",
        {
          method: "GET",
          headers: {
            environmentId: import.meta.env.VITE_ENVIRONMENT_ID,
            projectId: import.meta.env.VITE_PROJECT_ID,
          },
        }
      );
      const data = await response.json();
      return data.data;
    } catch (error) {
      console.error("Error fetching employees:", error);
      throw error;
    }
  };
  
  export const addEmployee = async (newEmployee) => {
    try {
      await fetch(
        "https://free-ap-south-1.cosmocloud.io/development/api/employees",
        {
          method: "POST",
          headers: {
            environmentId: import.meta.env.VITE_ENVIRONMENT_ID,
            projectId: import.meta.env.VITE_PROJECT_ID,
          },
          body: JSON.stringify(newEmployee),
        }
      );
    } catch (error) {
      console.error("Error adding employee:", error);
    }
  };

  export const deleteEmployee = async (empId) => {
    try {
      await fetch(
        `https://free-ap-south-1.cosmocloud.io/development/api/employees/${empId}`,
        {
          method: "DELETE",
          headers: {
            environmentId: import.meta.env.VITE_ENVIRONMENT_ID,
            projectId: import.meta.env.VITE_PROJECT_ID,
          },
          body: JSON.stringify({}),
        }
      );
      
    } catch (error) {
      console.error("Error deleting employee", error);
    }
  };