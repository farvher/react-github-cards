import Card from "./Card";

const CardList = (props) => {
    const profiles = props.profiles;
    if (profiles) {
        return (
            <div className="card-group">
                {profiles.map(p => <Card {...p} />)}
            </div>);
    }
    return <div></div>
}


export default CardList;