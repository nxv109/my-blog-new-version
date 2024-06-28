import { ForwardRefEditor } from '@/components/molecules/ForwardRefEditor';
import Heading from '@/components/organisms/Heading/page';

import './styles.scss';

function Writer() {
  return (
    <main className='writer'>
      <Heading>Writer</Heading>
      <div className='writer__editor'>
        <ForwardRefEditor markdown={'Hello world!'} />
      </div>
    </main>
  );
}

export default Writer;
