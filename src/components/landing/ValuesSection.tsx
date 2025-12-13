export function ValuesSection() {
  const values = ['бережность', 'внимание', 'поддержка'];

  return (
    <section className="bg-nii-bg px-4 py-12">
      <div className="max-w-md mx-auto">
        <p className="text-base text-nii-text mb-8 leading-relaxed">
          Мы здесь не для того, чтобы критиковать и оценивать,
          а чтобы создать пространство, в котором появится решение
          нужное именно вашему проекту, в котором появится ответ
          на интересующий вас вопрос.
        </p>

        <h2 className="text-3xl font-extrabold text-nii-text mb-6">
          Наши ценности
        </h2>

        <div className="flex flex-wrap gap-4">
          {values.map((value, index) => (
            <span
              key={index}
              className="bg-nii-yellow border-2 border-nii-border px-5 py-2 rounded-full text-nii-text font-semibold shadow-[3px_3px_0_#29340C] hover:shadow-[4px_4px_0_#29340C] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all cursor-default"
            >
              {value}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
