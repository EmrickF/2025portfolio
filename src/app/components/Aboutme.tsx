import Image from 'next/image';

export default function Aboutme() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute left-10 top-2/4 w-64 h-64">
          <Image
            src="/riku.png"
            alt="Game character"
            width={256}
            height={256}
            className="object-contain"
          />
        </div>
        <div className="absolute left-20 top-1/5 w-64 h-64 rotate-180">
          <Image
            src="/sora.png"
            alt="Game character"
            width={256}
            height={256}
            className="object-contain"
          />
        </div>
        <div className="absolute right-10 top-1/4 w-64 h-64">
          <Image
            src="/leon.png"
            alt="Game character"
            width={256}
            height={256}
            className="object-contain"
          />
        </div>
        <div className="absolute right-10 top-3/5 w-64 h-64">
          <Image
            src="/nimbus.png"
            alt="cloud"
            width={256}
            height={256}
            className="object-contain"
          />
        </div>
        <div className="absolute bottom-10 left-1/4 w-64 h-64">
          <Image
            src="/joker.png"
            alt="Game character"
            width={256}
            height={256}
            className="object-contain"
          />
        </div>
        <div className="absolute bottom-19 left-2/4 w-64 h-64">
          <Image
            src="/arthur.png"
            alt="Game character"
            width={256}
            height={256}
            className="object-contain"
          />
        </div>
        <div className="absolute bottom-150 left-1/4 w-64 h-64">
          <Image
            src="/accelerator.png"
            alt="Game character"
            width={256}
            height={256}
            className="object-contain"
          />
        </div>
        <div className="absolute top-35 right-1/4 w-64 h-64">
          <Image
            src="/exeter.png"
            alt="album"
            width={256}
            height={256}
            className="object-contain opacity-75"
          />
        </div>
        <div className="absolute bottom-40
         right-10/50 w-64 h-64">
          <Image
            src="/hic.png"
            alt="rapper"
            width={256}
            height={256}
            className="object-contain opacity-75"
          />
        </div>
        <div className="absolute top-30 right-3/7 w-64 h-64">
          <Image
            src="/wodg.png"
            alt="album"
            width={256}
            height={256}
            className="object-contain opacity-75"
          />
        </div>
      </div>

      <div className="relative z-10 max-w-3xl w-full transform -skew-x-12">
        <div className="absolute inset-0 bg-[#d92323]/100 blur-3xl transform translate-x-2 translate-y-2"></div>
        
        <div className="relative bg-[#d92323] py-8 px-16">
          <div className="transform skew-x-12">
            <p className="text-3xl text-black">
              My name is <b>Erik</b> and I love playing
              video games in my spare time and listening to music mainly artists like
              <b> bladee</b> & <b>Hi-C</b> and genres like cloudrap & hyperpop
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}