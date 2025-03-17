'use client';

import { TypeAnimation } from 'react-type-animation';

interface AnimatedHeadingProps {
  firstWord: string;
  restOfHeading: string;
  subtitle?: string;
}

export default function AnimatedHeading({ 
  firstWord, 
  restOfHeading, 
  subtitle 
}: AnimatedHeadingProps) {
  return (
    <div className="text-center py-12">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
        <span className="inline-block">
          <TypeAnimation
            sequence={[firstWord]}
            wrapper="span"
            speed={50}
            repeat={0}
            cursor={false}
            className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 
              text-transparent bg-clip-text 
              animate-gradient"
          />
        </span>
        {' '}{restOfHeading}
      </h1>
      {subtitle && (
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
} 