import React from 'react';
import { useIntersectionObserver, animationVariants } from '../../hooks/useIntersectionObserver';

interface AnimatedSectionProps {
  children: React.ReactNode;
  animation?: keyof typeof animationVariants;
  delay?: number;
  className?: string;
  as?: React.ElementType;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  animation = 'fadeIn',
  delay = 0,
  className = '',
  as: Component = 'div',
}) => {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  });

  const variant = animationVariants[animation];
  const delayStyle = delay > 0 ? { transitionDelay: `${delay}ms` } : {};

  return (
    <Component
      ref={ref}
      className={`${
        isIntersecting ? variant.animate : variant.initial
      } ${className}`}
      style={delayStyle}
    >
      {children}
    </Component>
  );
};

export default AnimatedSection;
