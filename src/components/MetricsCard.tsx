interface MetricsCardProps {
  title: string;
  value: number | string;
  icon: JSX.Element;
}
const MetricsCard: React.FC<MetricsCardProps> = ({ title, value, icon }) => {
  return (
    <div className="bg-[#171819] shadow-lg rounded-lg p-4 flex items-center justify-between border border-[#161D26]">
      <div>
        <h3 className="text-sm text-[#F2F2F2]">{title}</h3>
        <p className="text-xl font-semibold text-[#F2F2F2]">{value}</p>
      </div>
      <div className="text-3xl text-[#04AE8C]">{icon}</div>
    </div>
  );
};

export default MetricsCard;
