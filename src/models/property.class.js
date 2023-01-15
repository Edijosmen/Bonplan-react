

export class Property {
        prece = 0;
        typeContract= 0;
        state= 0;
        dimencion= "string";
        typPropertyId= 0;
        mcip_Id= 0;
        dpart_Id= 0
        description= "string";
    constructor(prece,typeContract,state,dimencion,typPropertyId,mcip_Id,dpart_Id,description){
        this.prece=prece;
        this.typeContract=typeContract;
        this.state=state;
        this.dimencion=dimencion;
        this.typPropertyId=typPropertyId;
        this.mcip_Id=mcip_Id;
        this.dpart_Id=dpart_Id;
        this.description=description;
    }
}