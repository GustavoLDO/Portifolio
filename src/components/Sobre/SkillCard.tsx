interface SkillCardProps {
  skill: string;
  icon: React.ElementType; 
  color: 'purple' | 'cyan';
  proficiency: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill, icon: Icon, color, proficiency }) => {
  
  const highlightColor = color === 'purple' ? 'text-purple-500' : 'text-cyan-400';
  
  return (
    <div className={`bg-gray-800/50 p-6 rounded-lg shadow-xl border border-gray-700 hover:border-cyan-400`}>
      
      <div className={`text-4xl mb-4 ${highlightColor}`}>
        <Icon className="drop-shadow-lg" />
      </div>

      <h3 className="text-xl font-bold text-gray-50 mb-2">{skill}</h3>
      <span className="text-xs text-gray-400">{proficiency}</span>
      
    </div>
  );
};

export default SkillCard;