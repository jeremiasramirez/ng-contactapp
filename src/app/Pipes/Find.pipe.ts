import {  Pipe,PipeTransform } from "@angular/core"
import { UserInterfaces } from "../Interfaces/Users.interfaces"

@Pipe({
    name: 'search'
})
export class PipeSearch implements PipeTransform{

    transform(data:UserInterfaces[],param:any){
        
      
        return data.filter((e:UserInterfaces)=>{
  
            if(e.name.substring(0,3).toLowerCase() === param.substring(0,3).toLowerCase()) {
                return e
            }
            else{
                return  
            }
              
      
        })
     

    }
}