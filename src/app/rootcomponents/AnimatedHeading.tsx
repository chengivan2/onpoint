'use client';

import { TypeAnimation } from 'react-type-animation';

interface AnimatedHeadingProps {
  words: string[];
  restOfHeading: string;
  subtitle?: string;
}

export default function AnimatedHeading({ 
  words, 
  restOfHeading, 
  subtitle 
}: AnimatedHeadingProps) {
  return (
    <div className="text-center py-12">
      <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold mb-4">
        <span className="inline-block">
          <TypeAnimation
            sequence={[
              ...words.flatMap(word => [word, 2000]),
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            cursor={true}
            className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 
              text-transparent bg-clip-text 
              animate-gradient"
          />
        </span>
        {restOfHeading}
      </h1>
      {subtitle && (
        <p className="text-lg md:text-xl text-[#F5F5F5] dark:text-[#F8F8F8] max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
} 