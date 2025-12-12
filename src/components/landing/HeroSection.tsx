import Image from 'next/image';

export function HeroSection() {
  return (
    <section className="bg-nii-bg px-4 py-8">
      <div className="max-w-md mx-auto">
        {/* Main image with logo overlay */}
        <div className="relative mb-6">
          <div className="rounded-lg overflow-hidden">
            <Image
              src="/images/hero-main.jpg"
              alt="НИИ Времени и Пространства"
              width={400}
              height={300}
              className="w-full object-cover"
              priority
            />
          </div>
          {/* Logo overlay */}
          <div className="absolute top-2 left-2 bg-black/50 rounded px-2 py-1">
            <span className="text-white text-xs">Павел Лисовцов</span>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-nii-text mb-4">
          Научно-Исследовательский Институт
          <br />
          Времени и Пространства
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-nii-text mb-4">
          для предпринимателей, ремесленников,
          <br />
          экспертов и фрилансеров.
        </p>

        {/* Description */}
        <p className="text-base text-nii-text">
          Для тех, кто развивает свой проект
          <br />
          с командой, трудится в одиночку
          <br />
          или только вынашивает идею своего дела.
        </p>
      </div>
    </section>
  );
}
