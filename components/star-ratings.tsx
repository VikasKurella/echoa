import { Star } from 'lucide-react';

export default function StarRatings({
  starRating,
}: {
  starRating: number;
  count: number;
}) {
  return (
    <div className='flex items-center gap-2'>
      {[...Array(5)].map((_, idx) => (
        <Star
          key={idx}
          className={`h-5 w-5 cursor-pointer ${
            starRating > idx
              ? 'fill-primary'
              : 'fill-muted stroke-muted-foreground'
          }`}
        />
      ))}
    </div>
  );
}
