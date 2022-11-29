const Home= ()=>{

    const clickme= ()=>{
        return(
            console.log('clicked')
        );

    }

    const clickwithparam= (name)=>{
        return(
            console.log('clicked to '+name)
        );
    }



    return(
        <div classeName="container">
            <h1> This is the home page</h1>
            <button type="button" onClick={clickme} className="btn btn-primary">Primary</button><br/>
            <button type="button" onClick={ ()=>clickwithparam('lina') } class="btn btn-success">Success</button>


        </div>

    );
}

export default Home;