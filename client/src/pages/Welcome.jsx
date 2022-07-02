import classes from './Welcome.module.css';

const Welcome = () => {
  return (
    <div className={classes.main}>
      <div className={classes.title}>
        <div className={classes.title_text}>
          <h1>
            Put &nbsp;
            <span className={classes.highlight}>money</span>
            <br />
            where your &nbsp;
            <span className={classes.highlight}>heart</span>
            &nbsp; is
          </h1>
          <h4 className={classes.desc}>
            A simple banking experience for a simpler life.
          </h4>
        </div>
        <img className={classes.hero_img} src='/images/hero.png' alt='hero' />
      </div>
    </div>
  );
};

export default Welcome;
