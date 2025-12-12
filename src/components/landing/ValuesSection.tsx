export function ValuesSection() {
  const values = ['бережность', 'внимание', 'поддержка'];

  return (
    <section className="bg-nii-white px-4 py-8">
      <div className="max-w-md mx-auto">
        <p className="text-base text-nii-text mb-6">
          Мы здесь не для того, чтобы критиковать и оценивать,
          а чтобы создать пространство, в котором появится решение
          нужное именно вашему проекту, в котором появится ответ
          на интересующий вас вопрос.
        </p>

        <h2 className="text-2xl font-bold text-nii-text mb-4">
          Наши ценности
        </h2>

        <div className="flex flex-wrap gap-3">
          {values.map((value, index) => (
            <span
              key={index}
              className="bg-nii-bg px-4 py-2 rounded-full text-nii-text"
            >
              {value}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
