import { FC } from 'react';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

interface MathDisplayProps {
  formula: string;
  inline?: boolean;
  className?: string;
}

const MathDisplay: FC<MathDisplayProps> = ({ formula, inline = false, className = '' }) => {
  if (inline) {
    return <InlineMath math={formula} />;
  }

  return (
    <div className={`math-display ${className}`}>
      <BlockMath math={formula} />
    </div>
  );
};

export default MathDisplay;