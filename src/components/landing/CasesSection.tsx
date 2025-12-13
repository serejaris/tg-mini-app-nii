import Image from 'next/image';

const cases = [
  {
    name: 'Маша',
    photo: '/images/values-icon.png',
    story: `пришла в НИИ с ощущением, что хочет сменить роль в жизни, но не понимала, кем стать и куда двигаться.`,
    result: `Через интервью, совместное написание статей, ответы и прояснение смыслов мы нашли её первое направление — и она провела тестовые мероприятия для детей. У неё родился первый продукт.`,
  },
  {
    name: 'Алексей',
    photo: '/images/case-1.png',
    story: `работал с командой в столярной мастерской. Пришёл в хаосе: проекты идут, но структуры нет.`,
    result: `Мы разработали для него таблицы, графики, систему управления. Через которые его мастерская стала предсказуемой и управляемой.`,
  },
  {
    name: 'Лариса',
    photo: '/images/pricing-bg.png',
    story: `парикмахер с Бали, мечтала путешествовать, но была привязана к клиентской базе.`,
    result: `Мы создали вместе пилотный онлайн-курс. Через три месяца она сделала первую продажу — девочке из Белграда. У неё появился путь к свободе.`,
  },
];

export function CasesSection() {
  return (
    <section className="bg-nii-bg px-4 py-12">
      <div className="max-w-md mx-auto">
        <p className="text-base text-nii-text mb-8 leading-relaxed">
          В НИИ приходят предприниматели с опытом и начинающие, а также те,
          кто только мечтает о своём деле. Всех нас объединяет, независимо
          от уровня развития наших проектов, то, что мы сталкиваемся с вопросами,
          на которые ищем ответы. У нас индивидуальный подход:
          мы рассматриваем наши кейсы.
        </p>

        <div className="grid grid-cols-1 gap-6">
          {cases.map((caseItem, index) => (
            <div
              key={index}
              className="card-decorated p-4 overflow-hidden"
            >
              {/* Photo */}
              <div className="rounded-xl overflow-hidden mb-4 aspect-[4/3]">
                <Image
                  src={caseItem.photo}
                  alt={caseItem.name}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="space-y-3">
                <p className="text-sm text-nii-text leading-relaxed">
                  <span className="font-bold">{caseItem.name}</span> — {caseItem.story}
                </p>
                <p className="text-sm text-nii-text leading-relaxed">
                  {caseItem.result}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
