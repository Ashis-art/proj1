import './Card.css';

function Card(props) {
  const classes = 'card ' + props.className;
  
  return <div className={classes}>{props.children}</div>; //prop.children will represent/hold all the components,tags and other objects inside <Card></>
}

export default Card;