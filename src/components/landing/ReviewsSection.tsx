import Image from 'next/image';

export function ReviewsSection() {
  const reviews = [
    { src: '/images/review-1.png', alt: 'Отзыв 1' },
    { src: '/images/review-2.png', alt: 'Отзыв 2' },
    { src: '/images/review-3.png', alt: 'Отзыв 3' },
  ];

  return (
    <section className="bg-nii-white px-4 py-8">
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl font-bold text-nii-text mb-6">
          Отзывы
        </h2>

        <div className="space-y-4">
          {reviews.map((review, index) => (
            <div key={index} className="rounded-lg overflow-hidden border border-gray-200">
              <Image
                src={review.src}
                alt={review.alt}
                width={400}
                height={200}
                className="w-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
