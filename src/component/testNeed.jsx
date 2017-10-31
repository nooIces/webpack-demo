import aContainer from 'bundle-loader?lazy!./item.jsx';

const A = (props) => (
  <Bundle load={aContainer}>
      //这里只是给this.props.child传一个方法，最后在Bundle的render里面调用
    {(Container) => <Container {...props}/>}
  </Bundle>
);

export default A;
