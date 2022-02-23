import { Request, Response } from "express";
import { QueryResult } from "pg";
import { async } from "rxjs"/*  */;
import { pool } from "../database";
const bp = require('body-parser')
const express = require('express')
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
export const getAnnotations= async (req: Request, res:Response) : Promise<Response> => {
    try{
        const response : QueryResult = await pool.query('SELECT * FROM annotation');
        return res.status(200).json(response.rows)
    }catch(e){
        console.log(e)
        return res.status(500).json('Server Error')
    }
      }
  
    
  export const addUser=   app.post("/users", (req: Request, res:Response) => {
        console.log(req.body);
        res.send('Hello World!')
      });
export const addAnnotation= app.post("/annotations", async(req: Request, res:Response) : Promise<Response> => {
        console.log(req.body)
        const {projectid, userid, starttime, stoptime}= req.body;
        console.log( req.params.projectid)
       
        console.log(req.body.projectid)
        const response : QueryResult = await pool.query('INSERT INTO annotation (projectid, userid, starttime, stoptime) VALUES ($1, $2, $3, $4)',[projectid, userid,starttime,stoptime]);
        return res.status(200).json("annotation created") ;
      });




 //export const addAnnotation= async (req: Request, res:Response)  => {
    // const {projectid, userid}= req.body;
    //  console.log(req.body)
    //  res.send("coucou")
    // console.log(req.body.projectid)
    //  const response : QueryResult = await pool.query('INSERT INTO annotation (projectid, userid) VALUES ($1, $2)',[projectid, userid]);
  //  return res.status(200).json("annotation created")
        
    // }