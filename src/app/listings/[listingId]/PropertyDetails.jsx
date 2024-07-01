const PropertyDetails = () => {
  return (
    <div className="flex flex-row items-start p-4 space-y-2 text-gray-800">
      <div className="flex flex-col mr-16">
        <div className="text-4xl font-bold">$940,000</div>
        <div className="text-left">
          <div>24 Melrose Dr, Mission Viejo, CA</div>
          <div>92692</div>
        </div>
      </div>
      <div className="flex items-start space-x-8">
        <div>
          <div className="text-4xl font-bold">3</div>
          <div className="text-sm text-gray-500">beds</div>
        </div>
        <div>
          <div className="text-4xl font-bold">3</div>
          <div className="text-sm text-gray-500">baths</div>
        </div>
        <div>
          <div className="text-4xl font-bold">1,500</div>
          <div className="text-sm text-gray-500">sqft</div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
