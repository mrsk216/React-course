export default function Feature({farid, name}) {
    return (
        <>
            <h5>{ name }</h5>
            {farid?.map((card, index) => (
                <div key={index}>
                <img src={card.icon} alt="" />
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                {card?.social?.map((link, i) => (
                    <span key={i}>Here will be show the social site icons</span>
                ))}
                </div>
            ))}
        </>
    );
}