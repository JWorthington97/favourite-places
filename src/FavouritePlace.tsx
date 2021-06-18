
interface PlaceInfoProps {
    title:      string
    img_link:   string
    img_alt:    string
    location:   string
    map_link:   string
    body:       string
}

function FavouritePlace(props: PlaceInfoProps): JSX.Element {
    return <div className="place">
        <div>
            <img src={props.img_link} alt={props.img_alt} width="800px"></img>
            <h2>{props.title}</h2>
            <h3>{props.location} (<a href={props.map_link}>map link</a>)</h3>
            <body>{props.body}</body>
        </div>
        <div>
            <body>map goes here</body>
        </div>
    </div>
}

export default FavouritePlace