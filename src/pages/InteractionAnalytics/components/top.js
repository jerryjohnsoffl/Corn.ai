import conversation from './img-source/converstion.svg'
import download from './img-source/download.svg'
import share from './img-source/share.svg'

function Top() {

    function handleDownload() {
        
    };

    function handleShare() {

    }

    return(
        <div className="top w-100 flex">
            <div className="heading w-50">
                <h3>Conversational insights and customer interaction analytics</h3>
                <p>Evaluating customer engagement and conversational dynamics.</p>
            </div>
            <div className="share-download w-50 flex">
                <div className="conversations flex">
                    <img src={conversation} alt="" />
                    <div className="description">
                        <h5>All Conversations</h5>
                        <p>{`95 interactions`}</p>
                    </div>
                </div>
                <div className="img-group flex">
                <button onClick={handleDownload}><img src={download} alt="" /></button>
                <button onClick={handleShare}><img src={share} alt="" /></button>
                </div>
            </div>
        </div>
    )
}

export default Top;