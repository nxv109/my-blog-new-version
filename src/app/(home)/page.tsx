import Image from 'next/image';

import AvatarImage from '@/assets/images/IMG_0086_removed_background.png';

import './styles.scss';

function Home() {
  return (
    <main className='home'>
      <section className='home__about-me'>
        <div className='home__about-me__inner-container'>
          <div className='home__avatar'>
            <Image
              alt='Avatar'
              src={AvatarImage}
              fill
              sizes='(max-width: 576px) 50vw, 100vw'
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className='home__information'>
            <h2 className='home__information__title'>Some words about me!</h2>
            <p className='home__information__name'>
              My name is Vinh, I'm 27 years old
            </p>
            <p className='home__information__description'>
              I have more 4 years of experience working on Website design field.
              Projects that I have been involved in developing: E-commerce,
              Admin page management, landing page, blogs,...
              <br />
              My strengths languages and frameworks are Reactjs, Nextjs, Vuejs,
              Javascript, HTML, and CSS,... If you need to develop the above
              products, you can contact Me.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
