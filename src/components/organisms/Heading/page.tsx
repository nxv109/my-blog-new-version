import './styles.scss';

type TProps = {
  children: React.ReactNode;
};

function Heading({ children }: TProps) {
  return <h1 className="heading-level-1">{children}</h1>;
}

export default Heading;
