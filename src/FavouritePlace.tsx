interface PlaceInfoProps {
    title: string
    img_link: string
    img_alt:string
    location: string
    map_link: string
    body: string
}

function FavouritePlace(props: PlaceInfoProps): JSX.Element {
    return <div style={{
            background: "#FBEEC1",
            width: "1000px",
            padding: "10px",
            border: "10px",
            margin: "0 auto",
            marginTop: "30px",
            borderRadius: "10px"
            }}>
        <img src={props.img_link} alt={props.img_alt} width="800px"></img>
        <h2>{props.title}</h2>
        <h3>{props.location} (<a href={props.map_link}>map link</a>)</h3>
        <body>{props.body}</body>
    </div>
}

export default FavouritePlace