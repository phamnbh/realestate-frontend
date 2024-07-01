const StatusIndicator = ({ status }) => {
  const getStatusStyles = (status) => {
    switch (status) {
      case "SOLD":
        return "bg-red-600 text-red-600";
      case "PENDING":
        return "bg-orange-600 text-orange-600";
      case "FOR SALE - ACTIVE":
        return "bg-green-600 text-green-600";
      default:
        return "bg-gray-600 text-gray-600";
    }
  };

  const statusStyles = getStatusStyles(status);

  return (
    <div className="flex items-center p-4 space-x-2">
      <div
        className={`w-3 h-3 rounded-full ${statusStyles.split(" ")[0]}`}
      ></div>
      <span className={statusStyles.split(" ")[1]}>{status}</span>
    </div>
  );
};

export default StatusIndicator;
