import { AutoIncrement, Column, NotNull, PrimaryKey, Table, Model } from "sequelize-typescript";
//import { Model } from "sequelize/types";


export interface AnnotationI{
    id?: number | null  
    projectId: string
    userId: string
    startTime: number
    stopTime: number
}
@Table(
    {
        tableName:"annotation",
        timestamps : true
      
    }
)
export default class Annotation extends Model implements AnnotationI{
    @AutoIncrement
    @PrimaryKey
    @Column
    id?: number; 

 
    @Column
    projectId!: string

   
    @Column
    userId!: string ;
  
    @Column
    startTime!: number ;

    @Column
    stopTime!: number;
    
}