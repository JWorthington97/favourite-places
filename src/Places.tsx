import { totalmem } from "os";
import { title } from "process";
import FavouritePlace from "./FavouritePlace";

function Places (): JSX.Element {
    let placesArray = [
        {
            title:"World's biggest waves",
            img_link:"https://images.unsplash.com/photo-1608208771441-9661953383a2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=966&q=80",
            img_alt:"Lighthouse overlooking Nazare beach",
            location:"Nazare, Portugal",
            map_link:"https://www.google.com/maps/place/Nazar%C3%A9,+Portugal/@39.5841447,-9.1029718,13z/data=!4m5!3m4!1s0xd18a8232f6ad417:0x3d2d871af42106f!8m2!3d39.6012147!4d-9.0700991",
            body:"Home to the biggest surf in the world (<a href='https://www.youtube.com/watch?v=GJc4Ir78KdE'>100ft waves!)"
        },
        {
            title:"Sheltered surf by the headland",
            img_link:"https://images.unsplash.com/photo-1544645237-383bc18027ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1130&q=80",
            img_alt:"Putsborough sands beach",
            location:"Putsborough, North Devon",
            map_link:"https://www.google.com/maps/@51.1462521,-4.2227251,16z",
            body:"test"
        },
        {
            title:"Cliffs of Uluwatu",
            img_link:"https://images.unsplash.com/photo-1569271532860-dd35503aaf1f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80",
            img_alt:"Waves at Uluwatu beach, Bali",
            location:"Uluwatu, Bali",
            map_link:"https://www.google.com/maps/d/viewer?mid=142JXLUpNXc-2xENA6amtnnuCbxQ&ie=UTF8&oe=UTF8&showlabs=1&msa=0&ll=-8.826116289028018%2C115.08632392211304&z=18",
            body:"test"
        },
        {
            title:"No nonsense Cornwall",
            img_link:"https://images.unsplash.com/photo-1569611566310-44d14cc8ed86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
            img_alt:"Surfing at Watergate bay",
            location:"Watergate Bay, Cornwall",
            map_link:"https://www.google.com/maps/place/Watergate+Bay,+Newquay,+UK/@50.4407003,-5.0448034,16z/data=!4m5!3m4!1s0x486b0dd56ed46f49:0x1f1055b0828d44e5!8m2!3d50.4406593!4d-5.0413541?hl=en-US",
            body:"Some beautiful memories of incredibly blue water and a perfect swell. Plus getting some chips after coming out of the water!"
        }

    ]
    return (
    <main>
        {placesArray.map((props) => (
            <FavouritePlace
                title = {props.title}
                img_link = {props.img_link}
                img_alt = {props.img_alt}
                location = {props.location}
                map_link = {props.map_link}
                body = {props.body}
            />
        ))}
                
    </main>
    )
}

export default Places