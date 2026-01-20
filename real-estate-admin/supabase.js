import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const supabaseUrl = "https://qazvuwqdfjcvuwtpnmgv.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFhenZ1d3FkZmpjdnV3dHBubWd2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjYxNzIxMDQsImV4cCI6MjA4MTc0ODEwNH0.JHmBm-tmxlMO0H9rkpACbX6kBRyUbE5ea8YscGZczqU";

// Create the client
export const supabase = createClient(supabaseUrl, supabaseKey);

// ADD THIS LINE AT THE BOTTOM:
// This shares the "supabase" variable with login.html and admin-dashboard.html
window.supabase = supabase;