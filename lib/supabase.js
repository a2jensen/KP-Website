import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config(); // this is a good way to load the .env vars

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY; // service role key allows for you to have admin permissions to the database

if (!supabaseUrl || !supabaseServiceRoleKey) {
  throw new Error("missing supabase url or supabase service role key");
}
else{
    console.log("you are a supabase admin and have access to the database");
}

export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceRoleKey);
