export function PricingSection() {
  const features = [
    'воркшопы',
    'интенсивы',
    'мастер классы',
    'индивидуальные консультации',
  ];

  return (
    <section className="bg-nii-bg px-4 py-8">
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl font-bold text-nii-text mb-2">
          За подписку в{' '}
          <span className="text-3xl">700 рублей</span>
          {' '}в месяц
        </h2>

        <p className="text-base text-nii-text mb-4">
          В отличие от бесплатного пространства,{' '}
          <span className="font-bold">#СПРОСИУГУДВИНА</span>
          {' '}в НИИ мы не просто играем в игры и отвечаем на вопросы —
          мы разрабатываем эти игры вместе.
        </p>

        <p className="text-base text-nii-text mb-4">
          Мы учимся писать статьи и осваиваем новый метод
          управления временем и пространством.
        </p>

        <div className="mb-4">
          <p className="text-base text-nii-text font-bold mb-2">
            Вы можете проходить:
          </p>
          <ul className="list-disc list-inside text-base text-nii-text">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        <p className="text-base text-nii-text">
          Вы можете стать не участником, а создателем игры.
        </p>
      </div>
    </section>
  );
}
