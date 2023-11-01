import { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "@supabase/supabase-js";



const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_KEY;
const dbClient = createClient(SUPABASE_URL || "", SUPABASE_KEY || "");

const httpStatus = {
    BadRequest: 400,
    Connected: 200,
    ServerError: 500,
}

const controllerByMethod = {
    async GET(req: NextApiRequest, res: NextApiResponse) {
        const { data, error } = await dbClient.from('components').select("*");
        if(data) {
             res.status(httpStatus.Connected).json({ message: "Get request", data })
             return
         }  
        res.status(httpStatus.BadRequest).json({ message: "Bad request", data, error })
        return
    },

}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const controller = controllerByMethod[req.method || ''];
    if (!controller) {
        res.status(httpStatus.BadRequest)
        return;
    }
    controller(req, res);
}