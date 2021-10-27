const Computer = ({img_comp}) => {

    return (
        <div className="comp">
            <div className="monitor">
                <div className="browser__bar">
                    <div className="ball"></div>
                </div>
                <div className="monitor__inner_content">
                    {img_comp}
                </div>
                <div className="base"></div>
            </div>
        </div>
    );
}
 
export default Computer;