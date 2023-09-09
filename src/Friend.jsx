export default function({friend}){
    console.log(friend);
    const {id,name,email,phone}= friend;
    return(
        <div className="box">
            <h3>Id:{id}</h3>
            <h4>Name:{name}</h4>
            <p>Email:{email}</p>
            <h5>Phone:{phone}</h5>
        </div>
    )
}