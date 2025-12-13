import Image from 'next/image';

export function AboutSection() {
  return (
    <section className="bg-nii-bg px-4 py-12">
      <div className="max-w-md mx-auto">
        <div className="card-decorated p-6 mb-8 decorated-rotate-reverse">
          <p className="text-xl text-nii-text font-bold mb-4">
            И вот что я понял.
          </p>
          <p className="text-base text-nii-text mb-4 leading-relaxed">
            Ты не можешь сделать человека тем, кем он хочет —
            <span className="font-bold"> это ему придётся делать самому!</span>
          </p>
          <p className="text-base text-nii-text mb-4 leading-relaxed">
            Но ты можешь быть рядом с ним на его пути,
            делиться с ним знаниями, теплом и любовью,
            поддерживать его.
          </p>
          <p className="text-lg text-nii-text font-medium">
            Ты можешь поделиться с ним своей мечтой.
          </p>
        </div>

        <div className="text-center">
          <div className="mx-auto mb-4 max-w-[280px]">
            <Image
              src="/images/pavel-photo.png"
              alt="Павел Лисовцов"
              width={280}
              height={280}
              className="w-full h-auto mix-blend-multiply"
            />
          </div>
          <p className="font-bold text-nii-text text-lg mb-2">Павел Лисовцов</p>
          <p className="text-sm text-nii-text leading-relaxed">
            Мне 40 лет. Люблю жену и семью. Воспитываю четырёх детей.
            12 лет строю бизнес. 4 года консультирую ребят по проектам.
          </p>
        </div>
      </div>
    </section>
  );
}
