import useFetch from "../../../hooks/useFetch";
import "./Feature.css";

const Feature = () => {

    const { data, loading, error } = useFetch("/hotels/countByCity?orase=bucuresti,brasov,targoviste")


    return (
        <><div className="Feature">
            {loading ? ("Se incarca , va rog sa asteptati.") : (
                <><div className="FeatureItem">
                    <img src="/Assets/Images/Bucuresti.jpg" alt="" className="FeatureImage" />
                    <div className="FeatureTitles">
                        <h1>Bucuresti</h1>
                        <h1>{data[0]} Oferte</h1>
                    </div>
                </div>
                    <div className="FeatureItem">
                        <img src="/Assets/Images/Brasov.jpg" alt="" className="FeatureImage" />
                        <div className="FeatureTitles">
                            <h1>Brasov</h1>
                            <h1>{data[1]} Oferte</h1>
                        </div>
                    </div>
                    <div className="FeatureItem">
                        <img src="/Assets/Images/Targoviste.jpg" alt="" className="FeatureImage" />
                        <div className="FeatureTitles">
                            <h1>Targoviste</h1>
                            <h1>{data[2]} Oferte</h1>
                        </div>
                    </div></>)}
        </div></>
    )
}

export default Feature