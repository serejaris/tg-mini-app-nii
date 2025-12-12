import Image from 'next/image';

export function AboutSection() {
  return (
    <section className="bg-nii-white px-4 py-8">
      <div className="max-w-md mx-auto">
        <div className="mb-6">
          <p className="text-lg text-nii-text font-medium mb-4">
            И вот что я понял.
          </p>
          <p className="text-base text-nii-text mb-4">
            Ты не можешь сделать человека тем, кем он хочет —
            это ему придётся делать самому!
          </p>
          <p className="text-base text-nii-text mb-4">
            Но ты можешь быть рядом с ним на его пути,
            делиться с ним знаниями, теплом и любовью,
            поддерживать его.
          </p>
          <p className="text-base text-nii-text">
            Ты можешь поделиться с ним своей мечтой.
          </p>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
            <Image
              src="/images/about-photo.jpg"
              alt="Павел Лисовцов"
              width={80}
              height={80}
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-sm text-nii-text">
            Мне 40 лет. Я люблю свою жену и семью. Воспитываю четырёх детей.
            Последние двенадцать лет строю свой бизнес.
            Четыре последних года консультирую ребят, помогая настроить их проекты.
          </p>
        </div>
      </div>
    </section>
  );
}
