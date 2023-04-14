import './travellocation.css';

export default function TravelLocation({name, map, image, phone}) {
  return (
    <div className="travel-location">
      <div className="travel-location-txt">
        <div dangerouslySetInnerHTML={{__html: name}} />
        {phone != null ? <a href={"tel:" + phone}>{phone}</a> : null}
      </div>
      <a href={map} target="_blank" rel="noreferrer">
        <img src={image} alt="google maps location" />
      </a>
    </div>
  )
}