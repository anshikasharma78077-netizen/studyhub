import React from 'react';
import {
  Calculator,
  FlaskConical,
  Globe,
  BookOpen,
  Atom,
  TestTube2,
  FileSpreadsheet,
  Briefcase,
  TrendingUp,
  Landmark,
  Scale,
  GraduationCap,
  Sparkles
} from 'lucide-react';

const iconMap = {
  Calculator,
  FlaskConical,
  Globe,
  BookOpen,
  Atom,
  TestTube2,
  FileSpreadsheet,
  Briefcase,
  TrendingUp,
  Landmark,
  Scale,
  GraduationCap
};

export default function SubjectIcon({ name, size = 22, className = '', color }) {
  const IconComponent = iconMap[name] || Sparkles;
  return <IconComponent size={size} className={className} style={color ? { color } : {}} />;
}
