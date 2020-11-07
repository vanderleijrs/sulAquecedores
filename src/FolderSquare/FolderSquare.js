import react from 'react'
import carrinhoCompras from'../Images/carrinhoCompras.png'
function FolderSquare(){
    return(
        <div className="foldersquare">
            <div className="square">
                <img>{carrinhoCompras}</img>
                <hr/>
                <p>{}</p>
            </div>
            <div className="square">
                <img>{}</img>
                <hr/>
                <p>{}</p>
            </div>
            <div className="square">
                <img>{}</img>
                <hr/>
                <p>{}</p>
            </div>
            <div className="square">
                <img>{}</img>
                <hr/>
                <p>{}</p>
            </div>
        </div>
    )
}
export default FolderSquare