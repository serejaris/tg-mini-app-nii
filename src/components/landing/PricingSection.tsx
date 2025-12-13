export function PricingSection() {
  const features = [
    'воркшопы',
    'интенсивы',
    'мастер-классы',
    'индивидуальные консультации',
  ];

  return (
    <section className="bg-nii-white px-4 py-12">
      <div className="max-w-md mx-auto">
        {/* Price highlight */}
        <div className="bg-nii-yellow border-3 border-nii-border rounded-2xl p-6 mb-8 shadow-[6px_6px_0_#29340C] decorated-rotate">
          <h2 className="text-2xl font-extrabold text-nii-text">
            За подписку в{' '}
            <span className="text-4xl block mt-2">700 рублей</span>
            <span className="text-xl font-bold">в месяц</span>
          </h2>
        </div>

        <p className="text-base text-nii-text mb-5 leading-relaxed">
          В отличие от бесплатного пространства,{' '}
          <span className="font-bold bg-nii-yellow px-1">#СПРОСИУГУДВИНА</span>
          {' '}в НИИ мы не просто играем в игры и отвечаем на вопросы —
          мы разрабатываем эти игры вместе.
        </p>

        <p className="text-base text-nii-text mb-6 leading-relaxed">
          Мы учимся писать статьи и осваиваем новый метод
          управления временем и пространством.
        </p>

        <div className="card-decorated p-5 mb-6">
          <p className="text-lg text-nii-text font-bold mb-3">
            Вы можете проходить:
          </p>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-3 text-nii-text">
                <span className="w-2 h-2 bg-nii-yellow border border-nii-border rounded-full flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <p className="text-lg text-nii-text font-medium">
          Вы можете стать не участником, а <span className="font-bold">создателем игры</span>.
        </p>
      </div>
    </section>
  );
}
