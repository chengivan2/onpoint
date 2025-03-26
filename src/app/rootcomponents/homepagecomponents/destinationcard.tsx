import Image from 'next/image';
import { supabase } from '@/lib/supabaseClient';

export default async function HomeTopDestinations() {

  const { data, error } = 
    await supabase
      .from('destinations')
      .select('id, name, description, location, main_image_url');

  return (
    <section className="relative flex flex-col min-w-full">

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {data?.map((destination) => (
        <div
          key={destination.id}
          className="group relative overflow-hidden rounded-xl transition-all duration-300 transform hover:scale-[1.02]"
        >
          {/* Glass Card Container */}
          <div className="relative z-10 h-full flex flex-col bg-green-50/20 dark:bg-green-900/20 backdrop-blur-sm border border-white/10 dark:border-green-900/30 rounded-xl p-6 transition-all duration-300 hover:bg-green-50/30 dark:hover:bg-green-900/30">
            {/* Image Container */}
            <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
              {destination.main_image_url && (
                <Image
                  src={destination.main_image_url}
                  alt={destination.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              )}
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/40 to-transparent" />
            </div>

            {/* Content */}
            <h3 className="text-xl font-bold text-green-800 dark:text-green-100 mb-2">
              {destination.name}
            </h3>
            <p className="text-green-600 dark:text-green-200 text-sm mb-4">
              {destination.location}
            </p>
            <p className="text-green-700 dark:text-green-300 text-base line-clamp-3">
              {destination.description}
            </p>
          </div>

          {/* Hover Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-emerald-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
        </div>
      ))}
    </div>

    </section>
  );
}
