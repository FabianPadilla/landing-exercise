import React from "react";

const Title = (props) => {
  const { title, subtitle, topDivider, bottomDivider } = props;
  return(
    <div className="title">
      {topDivider && <hr className="divider"/>}
      {title && <h2 className="text-center text-uppercase">{title}</h2>}
      {subtitle && <h5 className="text-center">{subtitle}</h5>}
      {bottomDivider && <hr className="divider"/>}
    </div>
  )
}

export default Title;