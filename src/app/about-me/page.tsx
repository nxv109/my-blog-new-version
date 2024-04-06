import Heading from '@/components/organisms/Heading/page';

import './styles.scss';

function AboutMe() {
  return (
    <main className="about-me">
      <Heading>About me</Heading>
      <article className="about-me__article">
        <p>
          Hello! My name is Vinh.
          <br />
          I'm a Front-end Developer. I have more than 3 years of experience
          working on Website design field.
          <br />
          <br />
          Projects that I have been involved in developing: E-commerce, CMS
          management, landing page, blogs,... My strengths languages and
          frameworks are Reactjs, Nextjs, Vuejs, Nuxtjs, Javascript, HTML, and
          CSS,... If you need to develop the above products, you can contact Me.
        </p>
      </article>
    </main>
  );
}

export default AboutMe;
