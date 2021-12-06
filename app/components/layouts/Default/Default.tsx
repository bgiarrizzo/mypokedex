import Header from '@module/Header/Header';

type Props = {
  children: React.ReactNode;
};

const Default = ({ children }: Props) => (
  <>
    <Header />
    <div>{children}</div>
  </>
);

export default Default;
