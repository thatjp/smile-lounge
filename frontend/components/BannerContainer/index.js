import BannerContainerStyles from './styles';
import TextBlock from '../TextBlock';

const style = {
  height: '500px',

};

const BannerContainer = () => (
  <BannerContainerStyles>
    <img src="../static/assets/banner-img-1.png" alt="" style={style}/>
    <TextBlock />
  </BannerContainerStyles>
);

export default BannerContainer;
