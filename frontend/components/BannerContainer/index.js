import BannerContainerStyles from './styles';
import TextBlock from '../TextBlock';

const style = {
  height: '500px',
};

const BannerContainer = () => (
  <BannerContainerStyles>
    <img src="../static/assets/banner-smile-1.png" alt="Smile House" style={style}/>
    <TextBlock />
  </BannerContainerStyles>
);

export default BannerContainer;
