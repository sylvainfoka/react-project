import UserInterface from "../pages/Interface/user.interface"

function FreelanceBox({ user }: { user: UserInterface }) {

    return (
        < div className="freelance-box">
            <h2 className="title no-margin"><span className="clr-black">#{user.id} -</span> {user.company.bs}</h2>
            <h3 className="no-margin flex-between"> {user.name}<span className="clr-grey">@{user.username}</span></h3>
            <hr />
            <div className="info">
                <div>Email: {user.email}</div>
                <div>Phone:{user.phone}</div>
                <div>Website: {user.website}</div>

            </div>
            <hr />
            <div className="company">
                <h4 className="no-margin">{user.company.name}</h4>
                <div>{user.company.catchPhrase}</div>

            </div>

        </div>




    )

}

export default FreelanceBox


//premiere fonction appelle dans react, useeffect Alert Bonjour.
// mettre a jours les informations du dom. useeffect/usecase
// useeffect gere les eeft de bords et les mises a jours