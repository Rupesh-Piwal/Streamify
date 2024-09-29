interface MetricsCardProps {
  title: string;
  value: number | string;
  icon: JSX.Element;
}
const MetricsCard: React.FC<MetricsCardProps> = ({ title, value, icon }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 flex items-center justify-between">
      <div>
        <h3 className="text-sm text-gray-500">{title}</h3>
        <p className="text-xl font-semibold">{value}</p>
      </div>
      <div className="text-3xl text-blue-500">{icon}</div>
    </div>
  );
};

export default MetricsCard;
