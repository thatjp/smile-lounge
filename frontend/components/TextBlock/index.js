import Link from 'next/link';
import TextBlockStyle from './styles';

const TextBlock = () => (
  <TextBlockStyle>
    <h2>Conciege Alignment</h2>
    <p>Coming soon</p>
    <Link href="/about">
      <a>
        For more information
      </a>
    </Link>
  </TextBlockStyle>
);

export default TextBlock;
