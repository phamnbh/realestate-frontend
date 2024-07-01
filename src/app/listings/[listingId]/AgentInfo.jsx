import Image from "next/image";

const AgentInfo = ({ agent }) => {
  return (
    <div className="flex items-center p-4 bg-white rounded-lg shadow-md">
      <div className="w-16 h-16 mr-4">
        <Image
          src={agent.image}
          alt={`${agent.name}'s picture`}
          width={64}
          height={64}
          className="rounded-full"
        />
      </div>
      <div className="flex-1">
        <h2 className="text-lg font-semibold text-gray-800">{agent.name}</h2>
        <p className="text-gray-600">Phone: {agent.phone}</p>
        <p className="text-gray-600">Email: {agent.email}</p>
      </div>
      <button className="px-4 py-2 text-white bg-teal-600 rounded-lg focus:outline-none">
        Contact
      </button>
    </div>
  );
};

export default AgentInfo;
