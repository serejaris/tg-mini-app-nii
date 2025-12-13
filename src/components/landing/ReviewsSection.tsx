import Image from 'next/image';

export function ReviewsSection() {
  const reviews = [
    { src: '/images/review-1.png', alt: 'Отзыв 1', rotate: 'decorated-rotate' },
    { src: '/images/review-2.png', alt: 'Отзыв 2', rotate: 'decorated-rotate-reverse' },
    { src: '/images/review-3.png', alt: 'Отзыв 3', rotate: 'decorated-rotate' },
  ];

  return (
    <section className="bg-nii-bg px-4 py-12 overflow-hidden">
      <div className="max-w-md mx-auto">
        <h2 className="text-3xl font-extrabold text-nii-text mb-8">
          Отзывы
        </h2>

        <div className="space-y-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className={`card-decorated p-2 ${review.rotate}`}
            >
              <Image
                src={review.src}
                alt={review.alt}
                width={400}
                height={200}
                className="w-full rounded-xl"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
