class sum{
    constructor(){
        console.log("sum class");
    }

    add(x,y){
        let result;
        result = x + y;
        return result;
    }
    addanotherfn(x,y){
        let result;
        result = this.add(x,y);
        return result;
    }
}

module.exports = sum;