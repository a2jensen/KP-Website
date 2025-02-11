import { supabaseAdmin } from '../supabase.js'; // Use the service role key

async function loadData() {
  const { data, error } = await supabaseAdmin.from('test').select('*'); // load data from the table named "test"

  if (error) {
    console.error("error:", error.message);
  } else {
    console.log("data:", data); // should print the data from the table
  }
}

loadData();
