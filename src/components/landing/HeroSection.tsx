import Image from 'next/image';

export function HeroSection() {
  return (
    <section className="bg-nii-bg px-4 py-10">
      <div className="max-w-md mx-auto">
        {/* Main image with decorative frame */}
        <div className="mb-8">
          <div className="card-decorated decorated-rotate p-2">
            <div className="rounded-xl overflow-hidden">
              <Image
                src="/images/hero-main.jpg"
                alt="НИИ Времени и Пространства"
                width={400}
                height={300}
                className="w-full object-cover"
                priority
              />
            </div>
          </div>
          {/* Author badge */}
          <div className="flex justify-end mt-3 mr-2">
            <div className="bg-nii-yellow border-2 border-nii-border rounded-full px-4 py-1 shadow-[2px_2px_0_#29340C]">
              <span className="text-nii-text text-sm font-semibold">Павел Лисовцов</span>
            </div>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-extrabold text-nii-text mb-2 leading-tight">
          Научно-Исследовательский Институт
        </h1>
        <div className="inline-block bg-nii-yellow border-2 border-nii-border rounded-xl px-4 py-2 mb-6 shadow-[3px_3px_0_#29340C]">
          <span className="text-2xl font-extrabold text-nii-text">
            Времени и Пространства
          </span>
        </div>

        {/* Subtitle */}
        <p className="text-lg text-nii-text mb-4 font-semibold">
          для предпринимателей, ремесленников, экспертов и фрилансеров.
        </p>

        {/* Description */}
        <p className="text-base text-nii-text leading-relaxed opacity-80">
          Для тех, кто развивает свой проект с командой, трудится в одиночку или только вынашивает идею своего дела.
        </p>
      </div>
    </section>
  );
}
