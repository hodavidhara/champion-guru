import * as React from "react";
const classNames = require('classnames/bind');
const styles = require('./ChampionImage.scss');

const cx = classNames.bind(styles);

const FULL_ICON_URL = 'http://ddragon.leagueoflegends.com/cdn/6.4.2/img/champion/';
const SPRITE_ICON_URL = 'http://ddragon.leagueoflegends.com/cdn/6.4.2/img/sprite/';
const SIZE_FULL = 'full';
const SIZE_SPRITE = 'sprite';

class ChampionImage extends React.Component<any, void> {

  defaultProps = {
    size: SIZE_FULL, // 'full' or 'sprite'
    imageData: {
      full: 'Leona.png',
      group: 'champion',
      h: 48,
      sprite: 'champion1.png',
      w: 48,
      x: 48,
      y: 96
    }
  };

  buildImageSource() {
    if (this.props.size === SIZE_SPRITE) {
      return SPRITE_ICON_URL + this.props.imageData.sprite;
    } else {
      return FULL_ICON_URL + this.props.imageData.full;
    }
  }

  buildSpriteImage() {
    const imageData = this.props.imageData;
    const imageClasses = cx(this.props.size);
    return (
      <div className={imageClasses} style={{
                width: `${imageData.w}px`,
                height: `${imageData.h}px`,
                background: `url(${this.buildImageSource()})`,
                backgroundPosition: `-${imageData.x}px -${imageData.y}px`
            }}></div>
    )
  }

  buildFullImage() {
    const imageClasses = cx(this.props.size);
    return (
      <img className={imageClasses} src={this.buildImageSource()}/>
    )
  }

  render() {
    return this.props.size === SIZE_SPRITE ? this.buildSpriteImage() : this.buildFullImage();
  }
}

export default ChampionImage;